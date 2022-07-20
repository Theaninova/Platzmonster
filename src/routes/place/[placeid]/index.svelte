<script lang="ts">
  import type {IPlace} from "../../../lib/models/place"
  import SearchPage from "../../../lib/components/search/SearchPage.svelte"
  import PlaceListItem from "../../../lib/components/types/list/PlaceListItem.svelte"
  import {PlaceType} from "../../../lib/models/place.js"

  export let item: IPlace
</script>

<h1>{item.shortName || item.name}</h1>

<div class="card">
  <h2>{item.name}</h2>

  <table>
    <tr>
      <th>Art</th>
      <td>{item.type}</td>
    </tr>
    <tr>
      <th>Adresse:</th>
      {#if item.address}
        <td>{item.address.street} </td>
        <td> {item.address.streetNumber},</td>
        <td> {item.address.zip} </td>
        <td> {item.address.city} </td>
      {/if}
    </tr>
    <tr>
      <th> Beschreibung</th>
      <td> {item.description || "-"}</td>
    </tr>
    <tr>
      <td>
        <form>
          <input type="datetime-local" min={new Date(Date.now()).toISOString()} />
          <button type="submit">Test</button>
        </form>
      </td>
      <a href="/place/{item._id}/reserve"><abbr title={item._id}>Reservierungen einsehen</abbr></a>
    </tr>
  </table>
</div>

{#if item.type === PlaceType.WORK_PLACE}
  <!-- TODO: Reservations -->
{:else}
  <SearchPage listItem={PlaceListItem} action="/api/place/{item._id}/children-search" />
{/if}

<style>
  .card {
    background: white;
    margin-inline: auto;
    max-width: 16.5cm;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  table,
  h2 {
    margin-inline: auto;
  }

  table {
    width: min-content;
  }

  th,
  td {
    text-align: left;
  }
</style>
