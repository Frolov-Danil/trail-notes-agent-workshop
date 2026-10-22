export type Article = {
  id: string;
  title: string;
  category: string;
  minutes: number;
  summary: string;
  body: string[];
};

export function parseArticles(value: unknown): Article[] {
  if (!Array.isArray(value)) throw new Error('Expected article array');
  const ids = new Set<string>();
  return value.map((item: unknown) => {
    if (typeof item !== 'object' || item === null) throw new Error('Invalid article');
    const row = item as Record<string, unknown>;
    for (const key of ['id', 'title', 'category', 'summary'] as const) {
      if (typeof row[key] !== 'string' || row[key].trim().length === 0) {
        throw new Error(`Invalid article field: ${key}`);
      }
    }
    if (typeof row.minutes !== 'number' || !Number.isInteger(row.minutes) || row.minutes < 1 ||
        !Array.isArray(row.body) || row.body.length === 0 ||
        !row.body.every((paragraph: unknown) => typeof paragraph === 'string' && paragraph.trim().length > 0)) {
      throw new Error('Invalid article content');
    }
    const article = row as Article;
    if (ids.has(article.id)) throw new Error('Duplicate article ID');
    ids.add(article.id);
    return article;
  });
}
