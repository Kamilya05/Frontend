'use strict';

// import { formatDistanceToNowStrict } from "date-fns";

interface Comic {
  safe_title: string;
  img: string;
  alt: string;
  year: string;
  month: string;
  day: string;
}

// document.addEventListener("DOMContentLoaded", (): void => {
const email: string = "k.shakirova@innopolis.university";
const apiUrl: string = `https://fwd.innopolis.university/api/hw2?email=${email}`;

fetch(apiUrl)
    .then((response: Response) => (<PromiseLike<number> | number>response.json()))
    .then(comicId => {
        return fetch(`https://fwd.innopolis.university/api/comic?id=${comicId}`);
    })
    .then((response: Response)=> (<PromiseLike<Comic> | Comic>response.json()))
    .then(comic=> {
        const comicTitle: HTMLElement = document.getElementById("title")!;
        const comicImg: HTMLElement = document.getElementById("image")!;
        const comicDate: HTMLElement = document.getElementById("data")!;

        comicTitle.textContent = comic.safe_title;
        comicImg.setAttribute('src', comic.img);
        comicImg.setAttribute('alt', comic.alt);
        const date: Date = new Date(Number(comic.year), Number(comic.month) - 1, Number(comic.day));
        comicDate.textContent = `${date.toLocaleDateString()}`;
        // comicDate.textContent = `${date.toLocaleDateString()} - ${formatDistanceToNowStrict(date)}`;
    })
// });
