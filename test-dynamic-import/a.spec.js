import { foo } from './foo';

describe('a', () => {
  it('works', async () => {
    console.log('test a', foo);
    await import('./bar.js');
  });
});