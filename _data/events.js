import Fetch from "@11ty/eleventy-fetch";
import dotenv from 'dotenv';

dotenv.config();

const API_URL = process.env.API_URL;

export default async function () {
	let json = await Fetch(API_URL, {
		duration: "1d", // save for 1 day
		type: "json", // we’ll parse JSON for you
	});
    console.log("Fetched events data from API:", json);
	return json;
};