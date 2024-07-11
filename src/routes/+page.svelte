<script lang="ts">
    import '../app.css'
    import photoMe from '$lib/images/photo.jpg';
</script>

<head>
	<title>Introduction</title>
	<meta name="title" content="Introduction"/>
	<meta name="description" content="Page with photo and description"/>
</head>

<div class="intro">
    <img id="photo" src={photoMe} alt="me">
    <div class="greeting">
        <div id="intro-text">
            <h1>Hello!</h1>
            <h1>My name is Kamilya</h1>
            <h3>This is my portfolio</h3>
        </div>
    </div>
</div>

