// @ts-check
const { test, expect } = require('@playwright/test');

test ('Update full user post', async ({request}) => {
const res = await request.put('/posts/1', {
    data: {
        id:1,
        title:'Existing post',
        body:'This is a post',
        userId:1,
        }
    })
    expect(res.ok()).toBeTruthy();
    expect(res.status()).toBe(200);
    expect(await res.json()).toEqual((expect.objectContaining( {
        "body": "This is a post",
        "id": 1,
        "title": "Existing post",
        "userId": 1,
    })))
});