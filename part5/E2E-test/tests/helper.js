const loginWith = async (page, username, password) => {
    await page.getByTestId('username').fill(username)
    await page.getByTestId('password').fill(password)
    await page.getByTestId('login').click()
}

const createBlog = async (page, title, author, url) => {
    await page.getByRole('button', { name: 'Create new blog' }).click()
    await page.getByTestId('title').fill(title)
    await page.getByTestId('author').fill(author)
    await page.getByTestId('url').fill(url)
    await page.getByRole('button', { name: 'create' }).click()
    await page.locator('div').filter({ hasText: `${title} by ${author}` }).nth(3).waitFor()
    
}

export { loginWith, createBlog }