import { dark, light } from ".";

export const setTheme = () => {
  const storagedTheme = localStorage.getItem('theme')

  const darkModeEnabled = storagedTheme
    ? storagedTheme === 'dark'
    : window.matchMedia('(prefers-color-scheme: dark)').matches

  return { dark: darkModeEnabled, theme: darkModeEnabled ? dark : light };
}

export const getTheme = () => {
  const darkModeEnabled = window.matchMedia('(prefers-color-scheme: dark)').matches;

  return darkModeEnabled ? 'dark' : 'light';
}