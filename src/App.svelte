<script lang="ts">
  import { onMount } from 'svelte';

  import type { Aide } from './interfaces';
  import data from './data.json';

  import Global from './Global.svelte';
  import Card from './Card.svelte';

  let aides: Aide[];

  onMount(() => {
    fetch('https://dev.api.mesaidespubliques.fr/')
      .then(r => r.json())
      .then(() => {
        console.log('This should be where we store aides');
      })
      .finally(() => (aides = data.aides));
  });

  $: console.log('aides', aides);
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<Global />
<main>
  <h1>Test MAP</h1>
  {#if aides}
    <ul>
      {#each aides as aide}
        <Card
          title={aide.title}
          description={aide.description}
          picture={aide.picture}
          type={aide.nature.title} />
      {/each}
    </ul>
  {/if}
</main>
