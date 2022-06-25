<script lang="ts">
  import type {IUser} from "../../models/user"
  import {formNames} from "../../search"
  import UserListItem from "../types/list/UserListItem.svelte"

  export let searchResult: Promise<IUser[]>
</script>

<section class="card">
  <div class="search-bar card">
    <input type="search" placeholder="Search..." name={formNames.search} />
    <input type="number" placeholder="10" name={formNames.entriesPerPage} />
    <input type="number" placeholder="0" name={formNames.page} />
    <button type="submit"><i>search</i></button>
  </div>

  {#if searchResult}
    {#await searchResult}
      <p>Loading</p>
    {:then result}
      {#each result as item}
        <div class="search-result">
          <UserListItem {item} />
        </div>
      {/each}
    {/await}
  {:else}
    <p>No results</p>
  {/if}
</section>

<style lang="scss">
  @import "../../styles/theme";

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
</style>
