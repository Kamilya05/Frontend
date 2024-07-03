import ComicApp from './lib/Comic.svelte'

const comicApp = new ComicApp({
  target: document.getElementById('comicApp')!,
})

export default comicApp
