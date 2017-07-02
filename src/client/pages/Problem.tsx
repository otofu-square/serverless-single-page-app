import * as React from 'react';

import { IProblem } from '../models/problem';

export interface Props extends IProblem {
  id: number;
}

export const Problem = ({ id, description, code }: Props) =>
  <div className="problem-view">
    <h1>
      Problem #{id} Coming soon!
    </h1>
    <p>
      {description}
    </p>
    <p>
      {code}
    </p>
  </div>;
