import { parseArticles, type Article } from '../models/Article';

export interface ArticleService {
  fetchArticles(signal: AbortSignal): Promise<Article[]>;
}

export class ArticleServiceError extends Error {
  constructor(public readonly kind: 'network' | 'http' | 'invalid-response') {
    super(kind);
    this.name = 'ArticleServiceError';
  }
}

// Only a remote source in the starter. Persistent caching is task B.
export function createArticleService(baseUrl: string, request: typeof fetch = fetch): ArticleService {
  return {
    async fetchArticles(signal) {
      let response: Response;
      try {
        response = await request(`${baseUrl}/articles.json`, {
          signal,
          headers: { 'Cache-Control': 'no-cache' },
          cache: 'no-store',
        });
      } catch (error) {
        if (signal.aborted) throw error;
        throw new ArticleServiceError('network');
      }
      if (!response.ok) throw new ArticleServiceError('http');
      try {
        return parseArticles(await response.json());
      } catch (error) {
        if (signal.aborted) throw error;
        throw new ArticleServiceError('invalid-response');
      }
    },
  };
}
