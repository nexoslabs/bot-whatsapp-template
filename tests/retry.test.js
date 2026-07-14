const test = require('node:test');
const assert = require('node:assert/strict');

const { withRetry } = require('../utils');

test('withRetry retries transient failures until success', async () => {
  let attempts = 0;

  const result = await withRetry(async () => {
    attempts += 1;
    if (attempts < 3) {
      throw new Error('temporary failure');
    }
    return 'ok';
  }, { retries: 3, delayMs: 1 });

  assert.equal(result, 'ok');
  assert.equal(attempts, 3);
});
