# Media Now deno

This is a temporary API that runs on deno. It will probably move to https://github.com/radio4000/api at some point.

# Search YouTube videos 

- doesn't require an API key (because it uses the old, but active v1 endpoint)
- just javascript `fetch` without dependencies

Try it out: 

- `https://medianow.deno.dev/youtube/search?query=johnny and mary`

# Search Spotify playlists

Also doesn't require you to enter an API key. It fetches a maximum of 500 trracks.

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
