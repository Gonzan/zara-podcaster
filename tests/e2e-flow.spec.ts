import { test, expect } from '@playwright/test';

test('Elements visibillity flow', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(await page.getByRole('link', { name: 'Podcaster' })).toBeVisible();
  await expect(await page.getByTestId('badge')).toHaveText('100');
  await expect(await page.getByTestId('search-section')).toBeVisible();

  await page.locator('a').filter({ hasText: 'The Joe Budden PodcastAuthor: The Joe Budden Network' }).click();
  await expect(page.getByRole('link', { name: 'The Joe Budden Podcast By The Joe Budden Network' })).toBeVisible({
    timeout: 1000,
  });
  await expect(page.getByText('Episodes: 20')).toBeVisible({
    timeout: 1000,
  });
  await expect(page.getByTestId('podcastList')).toBeVisible();
  await page.getByRole('link', { name: 'Episode 642 | "That Energy"' }).click({
    timeout: 1000,
  });

  await page.getByRole('link', { name: 'The Joe Budden Podcast By The Joe Budden Network' }).click()
  await expect(await page.getByRole('link', { name: 'Podcaster' })).toBeVisible();
});
