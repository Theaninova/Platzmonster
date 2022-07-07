<script lang="ts">
  import type Component from "svelte/types/compiler/compile/Component"
  import {enhance} from "../../form"
  import {searchFormNames} from "../../models/form-names/search"
  import type {SearchResult} from "../../../routes/api/user/search"
  import {fly, fade} from "svelte/transition"

  export let searchResult: Promise<SearchResult<any>> = undefined

  export let actionButtons: Component = undefined
  export let listItem: Component
  export let action: string
  export let method = "post"

  export let itemsPerPage = 20
  export let page = 0
  export let totalItems = 0

  $: pages = Math.ceil(totalItems / itemsPerPage)
  $: noPrev = page <= 0
  $: noNext = page >= pages - 1

  let flyDistance = 0

  $: {
    searchResult?.then(result => {
      itemsPerPage = result.entriesPerPage
      totalItems = result.count
      page = result.page
    })
  }

  let searchButton: HTMLButtonElement
</script>

<section class="card">
  <form {action} {method} use:enhance={{result: ({response}) => (searchResult = response.json())}}>
    <input type="search" placeholder="Suche..." name={searchFormNames.search} />
    <button
      bind:this={searchButton}
      type="submit"
      class="search-button"
      name={searchFormNames.page}
      value={0}
      on:click={() => (flyDistance = 0)}><i>search</i></button
    >
    <input
      style="display: none"
      type="number"
      bind:value={itemsPerPage}
      name={searchFormNames.entriesPerPage}
    />
    <button
      style="grid-row: 1"
      disabled={noPrev}
      name={searchFormNames.page}
      value={page - 1}
      type="submit"
      on:click={() => (flyDistance = -1)}><i>navigate_before</i></button
    >
    <button
      disabled={noNext}
      type="submit"
      name={searchFormNames.page}
      value={page + 1}
      on:click={() => (flyDistance = 1)}><i>navigate_next</i></button
    >
  </form>
  <div class="search-results-container">
    {#if searchResult}
      {#await searchResult then result}
        <div class="search-results" in:fly={{x: flyDistance * 50}} out:fly={{x: -flyDistance * 50}}>
          {#if result.count === 0}
            <p>Keine Ergebnisse</p>
          {:else}
            <p>{result.count} Ergebnis{result.count === 1 ? "" : "se"}. Seite {page + 1} / {pages}</p>
          {/if}
          {#each result.results as item (item._id)}
            <div class="search-result">
              <svelte:component this={listItem} {item} {...$$restProps} />
              {#if action}
                <div class="actions">
                  <svelte:component this={actionButtons} {item} on:refresh={() => searchButton.click()} />
                </div>
              {/if}
            </div>
          {/each}
        </div>
      {/await}
    {:else}
      <p transition:fade>Nutze die Suchleiste um deine Suche zu starten!</p>
    {/if}
  </div>
</section>

<style lang="scss">
  @import "../../styles/theme";

  $gap: 6px;

  .search-result {
    position: relative;
  }

  .search-results-container {
    display: grid;

    > * {
      grid-column: 1;
      grid-row: 1;
    }
  }

  .actions {
    position: absolute;
    right: 20px;
    top: 2px;
  }

  form {
    position: sticky;
    top: 16px;

    display: grid;
    grid-template-columns: auto 1fr auto auto;
    gap: $gap;

    background: white;
    z-index: 1000;

    border-bottom: $card-border;
  }

  .card {
    background: white;
    padding: 0;
    max-width: 24cm;
    width: calc(100% - 8px);

    contain: content;

    > * {
      padding: 10px;
    }
  }

  .search-results {
    padding-top: 0;
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

  input[type="search"] {
    border: $card-border;
    border-radius: $button-border-radius 0 0 $button-border-radius;
    box-shadow: $button-box-shadow;
    margin-right: calc(#{-$gap} - 2px);
    text-indent: 8px;
    font-size: 0.9rem;
  }

  input[type="search"]:focus {
    outline: none;
    background: $focus-color;
  }

  .search-button {
    border-radius: 0 $button-border-radius $button-border-radius 0;
  }

  input[type="number"] {
    width: 32px;
  }
</style>
