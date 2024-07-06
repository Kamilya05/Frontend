<script lang="ts">
    import './app.css'
    import photoMe from './assets/photo.jpg';
    import Links from './lib/Links.svelte';
    import Info from './lib/Info.svelte';
    import Hobby from './lib/Hobby.svelte';
    import Comic from './lib/Comic.svelte';
</script>

<div class="intro">
    <img id="photo" src={photoMe} alt="me">
    <div class="greeting">
        <div id="intro-text">
            <h1>Hello!</h1>
            <h1>My name is Kamilya</h1>
            <h3>This is my portfolio</h3>
        </div>
        <Links/>
    </div>
</div>
<div class="main">
    <div>
        <Info/>
        <Hobby/>
    </div>
    <Comic/>
<!--    <div class="homework">-->
<!--        <h1 id="elective-hw">Elective HW</h1>-->
<!--        <ol>-->
<!--            <li><a href="/src/">Comic :)</a></li>-->
<!--            <li>Soon...</li>-->
<!--        </ol>-->
<!--    </div>-->
</div>
