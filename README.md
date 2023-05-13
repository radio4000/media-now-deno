# Search YouTube videos 

- doesn't require an API key (because it uses the old, but active v1 endpoint)
- no dependencies (uses `fetch`)

Try it out: https://ytsearch.deno.dev/?query=robert johnny and mary 

## Run locally in watch mode

```
deno run --watch --allow-net --allow-read --watch main.js
```

## Deploying to Deno cloud

```
deployctl project=ytsearch main.js --token <YOUR_DENO_DEPLOY_TOKEN>
```

The new deployment needs to be 'promoted to production', after which it'll be on ytsearch.deno.dev

> Docs: https://deno.com/deploy/docs/deployctl

