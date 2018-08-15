import { NumberToMBPipe } from './number-to-mb.pipe';

describe('NumberToMBPipe', () => {
  it('create an instance', () => {
    const pipe = new NumberToMBPipe();
    expect(pipe).toBeTruthy();
  });
});
