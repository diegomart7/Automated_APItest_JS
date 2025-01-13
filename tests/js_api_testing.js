// @ts-check
const { test, expect } = require('@playwright/test');
//just a test for git
test('Retrieve user posts', async ({ request }) => {
  const res = await request.get('/posts');
  expect(res.ok()).toBeTruthy();
  expect(res.status()).toBe(200);

});

test('Retrieve user post', async ({request}) => {
  const res = await request.get('/posts/1');
  expect(res.ok()).toBeTruthy();
  expect (res.status()).toBe(200);
  expect (await  res.json()).toEqual(expect.objectContaining({
    "id":1,
    "userId":1,
  }))

});
