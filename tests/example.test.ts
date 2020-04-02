describe("Example.com", () => {
  it("should have the exact text 'Example Domain' in the h1", async () => {
    await page.goto("https://example.com");
    await expect(page).toEqualText("h1", "Example Domain")
  })
  it("should navigate to iana once you click on 'More information'", async () => {
    await page.click("a");
    expect(page.url()).toMatch(/iana\.org/)
  })
})