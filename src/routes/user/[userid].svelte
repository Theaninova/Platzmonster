<script lang="ts">
  import type {IUser} from "../../lib/models/user"

  export let item: IUser
</script>

<h1>{item.name}</h1>

<div class="card">
  <h2>{item.firstname} {item.lastname}</h2>

  <table>
    <tr>
      <th>Matrikelnummer</th>
      <td>{item.matrikelNumber}</td>
    </tr>
    <tr>
      <th>Email</th>
      <td>{item.email}</td>
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
