// @ts-check
const { test, expect } = require('@playwright/test');
//just a test for git
test('Retrieve user posts', async ({ request }) => {
  const res = await request.get('/posts');
  expect(res.ok()).toBeTruthy();
  expect(res.status()).toBe(200);

});
