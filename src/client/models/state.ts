import { Problem } from './problem';

export interface appState {
  problems: Problem[];
  solvedStatus: number[];
}

export interface problemPreviewState {
  textarea: string;
  message: string;
}

export interface GlobalState {
  app: appState;
  problemPreview: problemPreviewState;
}
