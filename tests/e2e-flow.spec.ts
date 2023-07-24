import { test, expect } from '@playwright/test';

test('Elements visibillity flow', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  expect(await page.getByRole('link', { name: 'Podcaster' })).toBeVisible();
  expect(await page.getByTestId('badge')).toHaveText('100');
  expect(await page.getByTestId('search-section')).toBeVisible();

  await page.locator('a').filter({ hasText: 'The Joe Budden PodcastAuthor: The Joe Budden Network' }).click();
  expect(page.getByRole('link', { name: 'podcast image' })).toBeVisible();
  expect(page.getByRole('link', { name: 'The Joe Budden Podcast By The Joe Budden Network' }))
  expect(page.getByText('Episodes')).toBeVisible();
  expect(page.getByTestId('podcastList')).toBeVisible();
  await page.getByRole('link', { name: 'Episode 642 | "That Energy"' }).click();
  expect(page.getByRole('link', { name: 'podcast image' })).toBeVisible();
  await page.getByRole('link', { name: 'podcast image' }).click();
});
