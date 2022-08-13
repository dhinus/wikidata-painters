<style>
  .notes {
    font-size: 0.8em;
    margin-top: 5em;
  }
  img {
    max-width: 70%;
  }
</style>

<script>
  import ArtistButton from './lib/ArtistButton.svelte';
  import Loading from './lib/Loading.svelte';
  import * as Wikidata from './lib/wikidata.js';

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

  let paintings = [];
  let imgsrc = "";
  let randomPick;

  let showLoading = true;

  Wikidata.queryDispatcher.query(Wikidata.paintersQuery).then(res => {
    showLoading = false;
    paintings = res.results.bindings;
    randomPick = getRandomInt(0,5);
    imgsrc = paintings[randomPick].image.value;
  });
</script>

<h1>Who painted this?</h1>

{#if showLoading}
  <Loading/>
{:else}
  <img src="{imgsrc}" alt="Image of a painting" />
{/if}

{#each paintings as painting, index}
<p>
<ArtistButton artistName={painting.painterLabel.value}
              correct={index == randomPick ? true: false} />
</p>
{/each}

<p class="notes">
  Powered by <a href="https://www.wikidata.org/">Wikidata</a>.
</p>
