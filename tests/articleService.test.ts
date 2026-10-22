import { strict as assert } from 'node:assert';
import { test } from 'node:test';
import { readFileSync } from 'node:fs';
import { parseArticles } from '../src/models/Article';
import { ArticleServiceError, createArticleService } from '../src/services/articleService';

const fixture = JSON.parse(readFileSync(new URL('../server/articles.json', import.meta.url), 'utf8'));
const signal = () => new AbortController().signal;
const respond = (body: unknown, status = 200) => (async () =>
  new Response(JSON.stringify(body), { status })) as typeof fetch;

test('the workshop API fixture includes readable bodies for all articles', () => {
  const articles = parseArticles(fixture);
  assert.equal(articles.length, 4);
  assert.ok(articles.every(article => article.body.length > 0));
});
test('duplicate IDs and corrupt article bodies are rejected', () => {
  assert.throws(() => parseArticles([fixture[0], fixture[0]]));
  assert.throws(() => parseArticles([{ ...fixture[0], body: [null] }]));
});
test('a successful request uses the actual API response', async () => {
  const service = createArticleService('http://localhost:8765', respond(fixture));
  assert.deepEqual(await service.fetchArticles(signal()), fixture);
});
test('HTTP failures and invalid JSON payloads are distinguishable from lost network', async () => {
  for (const [request, kind] of [
    [respond({}, 503), 'http'], [respond({}), 'invalid-response'],
    [(async () => { throw new TypeError('Network request failed'); }) as typeof fetch, 'network'],
  ] as const) {
    await assert.rejects(createArticleService('http://localhost', request).fetchArticles(signal()),
      (error: unknown) => error instanceof ArticleServiceError && error.kind === kind);
  }
});
test('a cancelled request stays cancelled instead of becoming a network error', async () => {
  const controller = new AbortController(); controller.abort();
  const abort = new DOMException('Aborted', 'AbortError');
  const request = (async () => { throw abort; }) as typeof fetch;
  await assert.rejects(createArticleService('http://localhost', request).fetchArticles(controller.signal),
    (error: unknown) => error === abort);
});
