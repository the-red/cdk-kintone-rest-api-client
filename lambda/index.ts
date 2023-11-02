import type { Handler } from 'aws-lambda';
import { KintoneRestAPIClient } from '@kintone/rest-api-client';

export const handler: Handler = async (event) => {
  const client = new KintoneRestAPIClient({
    baseUrl: 'https://example.cybozu.com',
    auth: {
      username: 'username',
      password: 'password',
    },
  });
  await client.app.getApps({ ids: [1, 2, 3] });
};
