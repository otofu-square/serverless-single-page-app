import * as React from 'react';
import { Link } from 'react-router-dom';

import { Problem } from '../models/problem';

export interface Props extends Problem {
  textarea: string;
  message: string;
  onChangeTextarea: Function;
  onClick: Function;
}

const ProblemDetail = ({
  id,
  description,
  code,
  textarea,
  message,
  onChangeTextarea,
  onClick,
}: Props) =>
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
    {message !== ''
      ? <p>
          {message}
        </p>
      : null}
    <form>
      <textarea
        className="u-full-width answer"
        value={textarea}
        onChange={e => onChangeTextarea(e.target.value)}
      />
      <div>
        <button
          className="button-primary check-btn"
          onClick={() => onClick({ id, description, code }, textarea)}
        >
          Check Answer
        </button>
        {message === 'Congratulation!!'
          ? <Link
              to={`/problem/${id + 1}`}
              className="btn button-primary check-btn"
            >
              Next Problem
            </Link>
          : null}
        <p className="result" />
      </div>
    </form>
  </div>;

export default ProblemDetail;
