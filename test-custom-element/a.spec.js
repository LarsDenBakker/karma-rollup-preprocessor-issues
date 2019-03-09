import './my-element.js';

describe('a', () => {
  it('works', () => {
    document.body.appendChild(document.createElement('my-element'));
  });
});