<script lang="ts">
    import '../app.css'
    // import comic from "../comic";
    import { formatDistanceToNowStrict } from "date-fns";

    interface Comic {
      safe_title: string;
      img: string;
      alt: string;
      year: string;
      month: string;
      day: string;
    }


    let comicInfo = {
        comicTitle:  'Loading...',
        comicImg: 'image/',
        comicAlt: 'comic',
        comicDate: '01.01.2001',
    }

    document.addEventListener("DOMContentLoaded", (): void => {
    const email: string = "k.shakirova@innopolis.university";
    const apiUrl: string = `https://fwd.innopolis.university/api/hw2?email=${email}`;

    fetch(apiUrl)
        .then((response: Response) => (<PromiseLike<number> | number>response.json()))
        .then(comicId => {
            return fetch(`https://fwd.innopolis.university/api/comic?id=${comicId}`);
        })
        .then((response: Response)=> (<PromiseLike<Comic> | Comic>response.json()))
        .then(comic=> {
            comicInfo.comicTitle = comic.safe_title;
            comicInfo.comicImg = comic.img;
            comicInfo.comicAlt =  comic.alt;
            const date: Date = new Date(Number(comic.year), Number(comic.month) - 1, Number(comic.day));
            // comicInfo.comicDate = `${date.toLocaleDateString()}`;
            comicInfo.comicDate = `${date.toLocaleDateString()} - ${formatDistanceToNowStrict(date)}`;
        })
    });
</script>

<div class="comic">
    <h1>Comic</h1>
    {#await comicInfo}
        <h2 id="title">Loading...</h2>
    {:then info}
        <h2 id="title">{info.comicTitle}</h2>
        <img id="image" src="{info.comicImg}" alt="{info.comicAlt}">
        <p id="data">{info.comicDate}</p>
    {:catch error}
        <p style="color: red">{error.message}</p>
    {/await}
    <a href="../.">Go back</a>
<!--&lt;!&ndash;    <img src={comic}>&ndash;&gt;-->
</div>
<!--<script src="../comic.ts"></script>-->

