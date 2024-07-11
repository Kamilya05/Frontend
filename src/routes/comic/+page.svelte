<script lang="ts">
    import '../../app.css'
    import {formatDistanceToNowStrict} from "date-fns";
    /** @type {import('./$types').PageData} */
	export let data;

    async function getComic() {
        const comic_btn = document.getElementById("comic-btn");
        if (comic_btn != null) {
            comic_btn.style.setProperty('display', 'none');
        }
        const comic_content = document.getElementById("comic-content");
        if (comic_content != null) {
            comic_content.style.setProperty('display', 'flex');
        }
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

<head>
    <title>Comic</title>
    <meta name="title" content="Comic"/>
    <meta name="author" content="Kamilya Shakirova"/>
    <meta name="description" content="The comic is displayed here"/>
</head>

<div class="comic">
    <button id="comic-btn" on:click={async () => await getComic()}>Get a comic!</button>
    <div id="comic-content">
        <h1 id="comic-head">Comic</h1>
        <h2 id="title">{data.comic?.safe_title || 'Loading...'}</h2>
        <img id="image" src="{data.comic?.img}" alt="{data.comic?.alt}">
        <p id="data">{data.date?.toLocaleDateString()} - {formatDistanceToNowStrict(data.date)} from now</p>
        <button id="comic-return" on:click={async () => await returnComic()}>Return</button>
    </div>
</div>

