import { foo } from './foo';

describe('b', () => {
  it('works', async () => {
    console.log('test b', foo);
    await import('./bar.js');
  });
});