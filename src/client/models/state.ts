import { Problem } from './problem';

export interface appState {
  problems: Problem[];
  solvedStatus: number[];
}

export interface problemPreviewState {
  problem: Problem | null;
  message: string | null;
}

export interface GlobalState {
  app: appState;
  problemPreview: problemPreviewState;
}
