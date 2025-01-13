// @ts-check
const { test, expect } = require('@playwright/test');

//Retreives all user posts
test('Retrieve user posts', async ({ request }) => {
  const res = await request.get('/posts');
  expect(res.ok()).toBeTruthy();
  expect(res.status()).toBe(200);

});

//Retreives 1 user post
test('Retrieve 1 user post', async ({request}) => {
  const res = await request.get('/posts/1');
  expect(res.ok()).toBeTruthy();
  expect (res.status()).toBe(200);
  expect (await  res.json()).toEqual(expect.objectContaining({
    "id":1,
    "userId":1,
  }))

});
