<script lang="ts">
    import '../app.css'
    import {formatDistanceToNowStrict} from "date-fns";

    interface Comic {
        safe_title: string;
        img: string;
        alt: string;
        year: string;
        month: string;
        day: string;
    }
    let comicInfo = {
        comicTitle: 'Loading...',
        comicImg: 'image/',
        comicAlt: 'comic',
        comicDate: '',
    }

    async function getComic() {
        const comic_btn = document.getElementById("comic-btn");
        if (comic_btn != null) {
            comic_btn.style.setProperty('display', 'none');
        }
        const comic_content = document.getElementById("comic-content");
        if (comic_content != null) {
            comic_content.style.setProperty('display', 'flex');
        }

        const email: string = "k.shakirova@innopolis.university";
        const apiUrl: string = `https://fwd.innopolis.university/api/hw2?email=${email}`;

        fetch(apiUrl)
            .then((response: Response) => (<PromiseLike<number> | number>response.json()))
            .then(comicId => {
                return fetch(`https://fwd.innopolis.university/api/comic?id=${comicId}`);
            })
            .then((response: Response) => (<PromiseLike<Comic> | Comic>response.json()))
            .then(comic => {
                comicInfo.comicTitle = comic.safe_title;
                comicInfo.comicImg = comic.img;
                comicInfo.comicAlt = comic.alt;
                const date: Date = new Date(Number(comic.year), Number(comic.month) - 1, Number(comic.day));
                // comicInfo.comicDate = `${date.toLocaleDateString()}`;
                comicInfo.comicDate = `${date.toLocaleDateString()} - ${formatDistanceToNowStrict(date)}`;
            })
    }
    async function returnComic() {
        const comic_btn = document.getElementById("comic-btn");
        if (comic_btn != null) {
            comic_btn.style.setProperty('display', 'block');
        }
        const comic_content = document.getElementById("comic-content");
        if (comic_content != null) {
            comic_content.style.setProperty('display', 'none');
        }
    }

</script>

<div class="comic">
    <button id="comic-btn" on:click={async () => await getComic()}>Get a comic!</button>
    <div id="comic-content">
        <h1 id="comic-head">Comic</h1>
        <h2 id="title">{comicInfo.comicTitle}</h2>
        <img id="image" src="{comicInfo.comicImg}" alt="{comicInfo.comicAlt}">
        <p id="data">{comicInfo.comicDate}</p>
        <button id="comic-return" on:click={async () => await returnComic()}>Return</button>
    </div>
</div>

