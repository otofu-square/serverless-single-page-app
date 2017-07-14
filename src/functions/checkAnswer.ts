import { APIGatewayEvent, Context, Callback } from 'aws-lambda';
import { compose, replace } from 'ramda';

interface EventBody {
  source: string;
  answer: string;
}

const toJson = (body: string): EventBody => JSON.parse(body);
const toImmediateFunc = (code: string) => `(${code})()`;
const checkAnswer = (answer: string) =>
  compose(eval, toImmediateFunc, replace('__', answer));

export const process = (
  event: APIGatewayEvent,
  context: Context,
  callback: Callback,
): void => {
  const { source, answer } = toJson(event.body!);
  const result = checkAnswer(answer)(source);
  const response = {
    statusCode: 200,
    headers: { 'Access-Control-Allow-Origin': '*' },
    body: JSON.stringify({ result }),
  };
  callback(undefined, response);
};
