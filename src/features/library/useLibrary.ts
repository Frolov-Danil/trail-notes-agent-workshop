import { useCallback, useEffect, useRef, useState } from 'react';
import type { Article } from '../../models/Article';
import { API_BASE_URL } from '../../config/api';
import { ArticleServiceError, createArticleService, type ArticleService } from '../../services/articleService';

const remoteService = createArticleService(API_BASE_URL);
export type LibraryState = {
  articles: Article[];
  isLoading: boolean;
  error: string | null;
};

export function useLibrary(service: ArticleService = remoteService) {
  const [state, setState] = useState<LibraryState>({ articles: [], isLoading: true, error: null });
  const active = useRef<AbortController | null>(null);
  const mounted = useRef(false);

  const load = useCallback(async () => {
    active.current?.abort();
    const controller = new AbortController();
    active.current = controller;
    let timedOut = false;
    const timeout = setTimeout(() => { timedOut = true; controller.abort(); }, 8000);
    setState(previous => ({ ...previous, isLoading: true, error: null }));
    try {
      const articles = await service.fetchArticles(controller.signal);
      if (mounted.current && active.current === controller && !controller.signal.aborted) {
        setState({ articles, isLoading: false, error: null });
      }
    } catch (error) {
      if (!mounted.current || active.current !== controller || (controller.signal.aborted && !timedOut)) return;
      let message = 'Не удалось загрузить материалы. Попробуйте ещё раз.';
      if (timedOut || (error instanceof ArticleServiceError && error.kind === 'network')) {
        message = 'Нет соединения с сервером. Проверьте сеть и запустите учебный API.';
      } else if (error instanceof ArticleServiceError && error.kind === 'invalid-response') {
        message = 'Сервер вернул некорректные данные.';
      }
      setState({ articles: [], isLoading: false, error: message });
    } finally {
      clearTimeout(timeout);
      if (active.current === controller) active.current = null;
    }
  }, [service]);

  useEffect(() => {
    mounted.current = true;
    void load();
    return () => { mounted.current = false; active.current?.abort(); };
  }, [load]);

  return { ...state, refresh: load };
}
