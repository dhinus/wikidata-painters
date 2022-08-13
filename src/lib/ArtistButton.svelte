<script>
  export let artistName, correct;

  let reveal = false;

  function handleClick(e) {
    reveal = true;
  }
</script>

<button class:correct class:reveal on:click="{handleClick}">
  {artistName}
</button>

<style>
  .reveal {background: #e36868}
  .reveal.correct {background: #68e378}
</style>
