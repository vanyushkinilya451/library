import fsd from '@feature-sliced/steiger-plugin';
import { defineConfig } from 'steiger';

//fsd methodology steiger
export default defineConfig([
  ...fsd.configs.recommended,
  {
    files: ['./src/**/*'],
    rules: {
      'fsd/insignificant-slice': 'off',
    },
  },
]);
