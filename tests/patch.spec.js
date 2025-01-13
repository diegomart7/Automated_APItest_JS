const { test, expect } = require('@playwright/test');

test('Update user post partially', async ({request}) => {

    const res = await request.patch('/posts/1', {
        data:{
            title:'Just an edited title'
        }
    })
    expect (res.ok()).toBeTruthy();
    expect (res.status()).toBe(200);
    expect (await res.json()).toEqual(expect.objectContaining(
        {
        "title": 'Just an edited title'
    }))
})