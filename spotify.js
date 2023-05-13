import { Spotifly } from 'https://cdn.jsdelivr.net/npm/spotifly/+esm'

export async function getSpotifyPlaylist(id) {
  const sp = new Spotifly()
  return sp.getPlaylist(id)
}

