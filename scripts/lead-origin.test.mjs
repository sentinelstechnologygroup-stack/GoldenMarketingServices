import test from 'node:test';
import assert from 'node:assert/strict';
import handler from '../api/lead.js';

test('production intake accepts GMS defaults and rejects retired or spoofed origins', async () => {
  const previous = { origins: process.env.ALLOWED_ORIGINS, environment: process.env.VERCEL_ENV };
  delete process.env.ALLOWED_ORIGINS; process.env.VERCEL_ENV = 'production';
  try {
    for (const [origin, expected] of [
      ['https://goldenmarketingservices.com', 400],
      ['https://www.goldenmarketingservices.com', 400],
      ['https://linkmarketingservices.com', 403],
      ['https://goldenmarketingservices.com.attacker.example', 403],
      ['https://preview.vercel.app', 403],
    ]) {
      let status;
      const response = { setHeader() {}, status(value) { status = value; return this; }, json() {} };
      await handler({ method: 'POST', headers: { origin, 'content-type': 'application/json', 'x-forwarded-for': origin }, body: {} }, response);
      assert.equal(status, expected, origin);
    }
  } finally {
    if (previous.origins === undefined) delete process.env.ALLOWED_ORIGINS; else process.env.ALLOWED_ORIGINS = previous.origins;
    if (previous.environment === undefined) delete process.env.VERCEL_ENV; else process.env.VERCEL_ENV = previous.environment;
  }
});
