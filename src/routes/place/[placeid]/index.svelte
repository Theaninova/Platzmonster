<script lang="ts">
  import type {IPlace} from "../../../lib/models/place"

  export let item: IPlace
</script>

<h1>{item.shortName}</h1>

<div class="card">
  <h2>{item.name}</h2>

  <table>
    <tr>
      <th>Art</th>
      <td>{item.type}</td>
    </tr>
    <tr>
      <th>Adresse:</th>
      <td>{item.address.street} </td>
      <td> {item.address.streetNumber},</td>
      <td> {item.address.zip} </td>
      <td> {item.address.city} </td>
    </tr>
    <tr>
      <button type="button"> Reservieren </button>
    </tr>
  </table>

</div>

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
