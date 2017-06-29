import { APIGatewayEvent, Context, Callback } from 'aws-lambda';

export const hello = (
  event: APIGatewayEvent,
  context: Context,
  callback: Callback,
): void => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };
  callback(undefined, response);
};
