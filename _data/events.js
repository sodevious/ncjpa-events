import dotenv from 'dotenv';

dotenv.config();

const API_URL = process.env.API_URL;

export default async function () {
	const response = await fetch(API_URL);
	const json = await response.json();
	console.log("Fetched events data from API:", json);
	return json;
};