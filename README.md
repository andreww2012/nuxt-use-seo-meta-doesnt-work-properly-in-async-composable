# Steps to reproduce

```shell
pnpm i
PORT=3010 pnpm dev
```

Wait until you see "Nitro built in XXX ms". Then run the test scripts:

- `node test.js ok` - performs parallel requests to `/{a,b}-ok` paths (default concurrency is `4`). Meta tags are always ✅ correctly returned.
- `node test.js not-ok` - performs parallel requests to `/{a,b}-not-ok` paths. Meta tags are ❌ randomly omitted.
- `node test.js not-ok 1` - performs sequential requests to `/{a,b}-not-ok` paths. Meta tags are ✅ correctly returned again.
