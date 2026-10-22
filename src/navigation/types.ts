import type { Article } from '../models/Article';

export type RootStackParamList = {
  Library: undefined;
  Article: { article: Article };
};
