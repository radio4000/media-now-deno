# Search YouTube videos 

- doesn't require an API key (because it uses the old, but active v1 endpoint)
- just javascript `fetch` without dependencies

Try it out: 

- `https://medianow.deno.dev/youtube/search?query=johnny and mary`
- `https://medianow.deno.dev/spotify/playlists/:id`

## Run locally in watch mode

```
deno run --watch --allow-net --allow-read --watch main.js
```

## Deploying to Deno cloud

```
deployctl project=medianow main.js --token <YOUR_DENO_DEPLOY_TOKEN>
```

The new deployment needs to be 'promoted to production', after which it'll be on medianow.deno.dev

> Docs: https://deno.com/deploy/docs/deployctl
