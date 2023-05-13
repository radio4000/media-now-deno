import { serve } from 'https://deno.land/std@0.155.0/http/server.ts'
import { searchYoutube } from './search.js'

// A deno endpoint around the searchYoutube function
async function handler(req) {
	const url = new URL(req.url)
	const query = url.searchParams.get('query')
	if (!query) return new Response('missing ?query param')

	try {
		const results = await searchYoutube(query)
		return Response.json(results)
	} catch (err) {
		return Response.json({ error: err.message }, { status: 500 })
	}
}

serve(handler)
