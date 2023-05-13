import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { getQuery } from "https://deno.land/x/oak/helpers.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";

import { getSpotifyPlaylist } from './spotify.js'
import { searchYoutube } from './youtube.js'

const router = new Router()

router
  .get('/youtube/search', async (context) => {
    const x = getQuery(context)
    context.response.body = await searchYoutube(x.query)
  })
  .get('/spotify/playlists/:id', async (context) => {
    context.response.body = await getSpotifyPlaylist(context.params.id)
  })

const app = new Application()
app.use(oakCors())
app.use(router.routes())
console.log('app listening on http://localhost:8000')
await app.listen({ port: 8000 })

