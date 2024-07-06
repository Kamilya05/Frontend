<script lang="ts">
    import './app.css'
    import photoMe from './assets/photo.jpg';
    import Links from './lib/Links.svelte';
    import Info from './lib/Info.svelte';
    import Hobby from './lib/Hobby.svelte';
</script>

<div class="intro">
    <img id="photo" src={photoMe} alt="me">
    <div class="greeting">
        <div id="intro-text">
            <h1>Hello!</h1>
            <h1>My name is Kamilya</h1>
            <h3>This is my portfolio</h3>
        </div>
        <div class="links">
            <Links/>
        </div>
    </div>
</div>
<div class="main">
    <div class="about-me">
        <Info/>
    </div>
    <div class="hobby">
        <Hobby/>
    </div>
    <div class="homework">
        <h1 id="elective-hw">Elective HW</h1>
        <ol>
            <li><a href="/src/">Comic :)</a></li>
            <li>Soon...</li>
        </ol>
    </div>
</div>
