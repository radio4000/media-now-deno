# Search YouTube videos 

- doesn't require an API key (because it uses the old, but active v1 endpoint)
- just javascript `fetch` without dependencies

Try it out: 

- https://ytsearch.deno.dev/youtube/search?query=robert%20johnny%20and%20mary
- `https://ytsearch.deno.dev/spotify/playlists/:id`

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
