export interface Comic {
	safe_title: string;
	img: string;
	alt: string;
	year: string;
	month: string;
	day: string;
}

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
	const email: string = "k.shakirova@innopolis.university";
	const apiUrl: string = `https://fwd.innopolis.university/api/hw2?email=${email}`;
	const comicId: string = await fetch(apiUrl)
		.then((response) => (response.json()))
	const comic: Comic = await fetch(
		`https://fwd.innopolis.university/api/comic?id=${comicId}`
	).then((response) => (response.json()));

	return {
		comic: comic,
		date: new Date(Number(comic.year), Number(comic.month) - 1, Number(comic.day))
	};
}