<script lang="ts">
  import type {User} from "../models/user"

  export let users: User[]
</script>

<h2>User List</h2>

<td> <button type="button" class="button"> <a href="/login"> Create New </a> </button> </td>

<form method="post">
  <button type="submit" aria-hidden="true" style="display: none" />
  <table class="table text-white">
    <thead>
      <tr>
        <th scope="col" class="text-break d-none d-sm-table-cell">ID</th>
        <th scope="col" class="text-break d-none d-sm-table-cell" width="100">Username</th>
        <th scope="col" class="text-break d-table-cell d-sm-none" width="100">Mtr-Nr.</th>
        <th scope="col" class="text-break d-table-cell d-sm-none">Password </th>
      </tr>
    </thead>
    {#each users as { name, matrikelNumber, _id, password }, index}
      <tr>
        <th scope="row" class="col-auto d-none d-sm-table-cell">{_id}</th>
        <td class="text-break">
          {name}
        </td>

        <td class="col-auto">
          {matrikelNumber}
        </td>

        <td class="col-auto">
          {password}
        </td>

        <td> <button type="button" class="button"> edit </button> </td>

        <td> <button type="submit" name="delete" class="button" value={_id}> delete </button> </td>
      </tr>
    {/each}
  </table>
</form>

<style>
  h2 {
    font-size: xxx-large;
    color: indianred;
  }

  tr {
    color: white;
  }
</style>
