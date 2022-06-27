<script lang="ts">
  import type Component from "svelte/types/compiler/compile/Component"
  import {enhance} from "../../form"
  import {searchFormNames} from "../../search"
  import type {SearchResult} from "../../../routes/api/search/user"

  export let searchResult: Promise<SearchResult<any>> = undefined

  export let listItem: Component
  export let action: string
  export let method = "post"

  export let itemsPerPage = 10
  export let page = 0
  export let totalItems = 0

  $: pages = Math.ceil(totalItems / itemsPerPage)
  $: noPrev = page <= 0
  $: noNext = page >= pages - 1

  $: {
    searchResult?.then(result => {
      itemsPerPage = result.entriesPerPage
      totalItems = result.count
      page = result.page
    })
  }
</script>

<section class="card">
  <form
    class="search-bar"
    {action}
    {method}
    use:enhance={{result: ({response}) => (searchResult = response.json())}}
  >
    <input type="search" placeholder="Search..." name={searchFormNames.search} />
    <button type="submit" name={searchFormNames.page} value={0}><i>search</i></button>
    <input type="number" bind:value={itemsPerPage} name={searchFormNames.entriesPerPage} />
    <button style="grid-row: 1" disabled={noPrev} name={searchFormNames.page} value={page - 1} type="submit"
      ><i>navigate_before</i></button
    >
    <button disabled={noNext} type="submit" name={searchFormNames.page} value={page + 1}
      ><i>navigate_next</i></button
    >
  </form>

  {#if searchResult}
    {#await searchResult}
      <p>Loading</p>
    {:then result}
      <p>{result.count} results. Page {page + 1} / {pages}</p>
      {#each result.results as item}
        <div class="search-result">
          <svelte:component this={listItem} {item} {...$$props} />
        </div>
      {/each}
    {/await}
  {:else}
    <p>No results</p>
  {/if}
</section>

<style lang="scss">
  @import "../../styles/theme";

  form {
    display: grid;
    grid-template-columns: auto 1fr auto auto auto;
    gap: 2px;
  }

  .card {
    background: white;
    padding: 10px;
  }

  .search-bar {
    position: sticky;
    top: 20px;
  }

  .results {
    overflow-y: auto;
  }

  .search-result:not(:last-of-type)::after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background: #b2b2b2;
    margin: 10px 0;
  }

  .search-result:only-of-type::after {
    display: none;
  }

  input[type="number"] {
    width: 32px;
  }
</style>
