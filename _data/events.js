import Fetch from "@11ty/eleventy-fetch";


export default async function () {
	let json = await Fetch(API_URL, {
		duration: "1d", // save for 1 day
		type: "json", // we’ll parse JSON for you
	});
	return json;
};