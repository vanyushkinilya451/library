import { type DefaultTheme } from 'styled-components';

export function st<
  T extends keyof DefaultTheme,
  K extends keyof DefaultTheme[T],
>(property: T, key: K) {
  return (context: { theme: DefaultTheme }) => context.theme[property][key];
}
