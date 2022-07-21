<script lang="ts">
  import type {IPlace} from "../../../lib/models/place"
  import SearchPage from "../../../lib/components/search/SearchPage.svelte"
  import PlaceListItem from "../../../lib/components/types/list/PlaceListItem.svelte"
  import {PlaceType} from "../../../lib/models/place.js"
  import ReservationListItem from "../../../lib/components/types/list/ReservationListItem.svelte"
  import {enhance} from "../../../lib/form"
  import {reservationDataForm} from "../../../lib/models/form-names/reservationData"

  export let item: IPlace
  let searchButton: HTMLButtonElement
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
      <th> Beschreibung: </th>
      <td> {item.description || "-"}</td>
    </tr>
    <tr>
      {#if item.type === PlaceType.WORK_PLACE}
        <td>
          <form method="post" use:enhance={{result: () => searchButton?.click()}}>
            <input type="datetime-local" name={reservationDataForm.from} required />
            <input type="datetime-local" name={reservationDataForm.to} required />
            <button type="submit">Reservieren</button>
          </form>
        </td>
      {/if}
    </tr>
  </table>
</div>

{#if item.type === PlaceType.WORK_PLACE}
  <!-- TODO: Reservations -->
  <SearchPage
    bind:searchButton
    listItem={ReservationListItem}
    action="/api/place/{item._id}/reservation-search"
  />
{:else}
  <SearchPage bind:searchButton listItem={PlaceListItem} action="/api/place/{item._id}/children-search" />
{/if}

<style>
  .card {
    background: white;
    margin-inline: auto;
    max-width: 16.5cm;

    display: flex;
    flex-direction: column;
    justify-content: center;

    margin-bottom: 16px;
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
