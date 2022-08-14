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
  let imgsrc;
  let randomPick;
  let reveal;

  let showLoading = true;

  Wikidata.queryDispatcher.query(Wikidata.paintersQuery).then(res => {
    showLoading = false;
    paintings = res.results.bindings;
    randomPick = getRandomInt(0,5);
    imgsrc = paintings[randomPick].image.value;
  console.log(JSON.stringify(paintings[randomPick].painterLabel.value))
  });

  function revealAnswer() {
    reveal = true;

    paintings.forEach(p => {
      if (p.correct !== "right") {
        p.correct = "wrong";
      }
    });
  }

  function handleClick(event) {
    const index = event.detail.index;
    if (index === randomPick) {
      paintings[index].correct = "right";
      revealAnswer();
    } else {
      paintings[index].correct = "wrong";
    }
  }

</script>

<h1>Who painted this?</h1>

{#if showLoading}
  <Loading/>
{:else}
  <img src="{imgsrc}" alt="Image of a painting" />
{/if}

{#if reveal}
  <p>
  <button onClick="window.location.reload();"><strong>Play again</strong></button>
  </p>

  <p>
  {paintings[randomPick].painterLabel.value} -
  {paintings[randomPick].paintingLabel.value}
  </p>
{/if}

{#each paintings as painting, index}
<p>
  <ArtistButton
    on:message={handleClick}
    index={index}
    artistName={painting.painterLabel.value}
    correct={painting.correct}
  />
</p>
{/each}

<p class="notes">
  Powered by <a href="https://www.wikidata.org/">Wikidata</a>.
</p>
