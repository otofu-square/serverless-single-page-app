import * as React from 'react';

import { Problem } from '../models/problem';

export interface Props extends Problem {
  id: number;
}

const ProblemDetail = ({ id, description, code }: Props) =>
  <div className="problem-view">
    <h3 className="title">
      Problem #{id} Coming soon!
    </h3>
    <p>
      {description}
    </p>
    <pre>
      <code>
        {code}
      </code>
    </pre>
    <form>
      <textarea className="u-full-width answer" />
      <div>
        <button className="button-primary check-btn">Check Answer</button>
        <p className="result" />
      </div>
    </form>
  </div>;

export default ProblemDetail;
