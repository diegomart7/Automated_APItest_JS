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

test ('Update user post that doesnt exist', async ({request}) => {
    const res = await request.put('/posts/200', {
        data: {
            id:1,
            title:'Existing post',
            body:'This is a post',
            userId:1,
            }
        })
        expect(res.ok()).toBeFalsy();
        expect(res.status()).toBe(500);
        expect(res.statusText()).toEqual('Internal Server Error')
    });