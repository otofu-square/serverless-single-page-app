import { filter, head, pipe } from 'ramda';

export interface Problem {
  id: number;
  description: string;
  code: string;
}

export const getProblemById = (problems: Problem[], id: number) =>
  head(filter((p: Problem) => p.id === id, problems));
