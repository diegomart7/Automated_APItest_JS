const { expect, test} = require("@playwright/test")

test("Delete user post", async ({request}) => {
const res = await request.delete('/posts/1')
expect (res.ok()).toBeTruthy();
expect (res.status()).toBe(200)
expect (await res.text()).toContain('{}')

});