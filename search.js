/**
 * @typedef {Object} Result
 * @property {string} id
 * @property {string} title
 * @property {string} thumbnail
 * @property {string} views
 * @property {string} publishedAt
 * @property {string} description
 * @property {string} channelTitle
 *
 */

/**
 * Searches YouTube for a query
 * @param {string} query
 * @returns {Promise<Array<{Result}>}
 */
export async function searchYoutube(query) {
	// This key is the hardcoded, public one used internally on youtube.com
	const apiKey = 'AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8'
	const endpoint = `https://www.youtube.com/youtubei/v1/search?key=${apiKey}`
	const response = await fetch(endpoint, {
		method: 'POST',
		body: JSON.stringify({
			query,
			// This is the magic sauce that makes it work
			context: {
				client: {
					clientName: 'WEB',
					clientVersion: '2.20201002.02.01',
				},
			},
		}),
	})
	if (response.status !== 200) throw new Error(response.statusText)
	const json = await response.json()
	const parsed = parseYoutubeResponse(json)
	return parsed
}

/**
 * Parses the response from the youtube v1 search endpoint
 * @param {Object} json
 * @returns {Array<Result>}
 */
function parseYoutubeResponse(json) {
	const items =
		json.contents.twoColumnSearchResultsRenderer.primaryContents.sectionListRenderer.contents[0].itemSectionRenderer
			.contents
	return items
		.filter((x) => x.videoRenderer)
		.map((x) => {
			return {
				id: x.videoRenderer.videoId,
				title: x.videoRenderer.title.runs[0].text,
				thumbnail: x.videoRenderer.thumbnail.thumbnails[0].url,
				views: x.videoRenderer.viewCountText.simpleText,
				publishedAt: x.videoRenderer.publishedTimeText?.simpleText,
				description: x.videoRenderer.descriptionSnippet?.runs[0].text,
				channelTitle: x.videoRenderer.ownerText.runs[0].text,
			}
		})
}
