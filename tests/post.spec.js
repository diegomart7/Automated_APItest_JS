// @ts-check
const { test, expect } = require('@playwright/test');

test ('Create a user post', async ({request}) => {
const res = await request.post('/posts', {
    data: {
        title:'New Post',
        body:'This is a new post',
        userId:1,
        }
    })
    expect(res.status()).toBe(201);
    expect(await res.json()).toEqual((expect.objectContaining( {
        "body": "This is a new post",
        "id": 101,
        "title": "New Post",
        "userId": 1,
    })))
});
