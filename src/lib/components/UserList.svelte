<script lang="ts">
  import type {User} from "../models/user"

  export let users: User[]
</script>

<div class="card">
  <h2>User List</h2>

  <form method="post">
    <button type="submit" aria-hidden="true" style="display: none" />
    <table class="table text-white">
      <thead>
        <tr>
          <th scope="col" class="text-break d-none d-sm-table-cell">ID</th>
          <th scope="col" class="text-break d-none d-sm-table-cell" width="100">Username</th>
          <th scope="col" class="text-break d-table-cell d-sm-none">Vorname</th>
          <th scope="col" class="text-break d-table-cell d-sm-none">Nachname</th>
          <th scope="col" class="text-break d-table-cell d-sm-none">E-Mail</th>
          <th scope="col" class="text-break d-table-cell d-sm-none" width="100">Mtr-Nr.</th>
          <th scope="col" class="text-break d-table-cell d-sm-none">Password</th>
        </tr>
      </thead>
      {#each users as { name, firstname, lastname, email, matrikelNumber, _id, password }, index}
        <tr>
          <th class="break-off">{_id}</th>
          <td>
            {name}
          </td>

          <td>
            {firstname}
          </td>

          <td>
            {lastname}
          </td>

          <td>
            {email}
          </td>

          <td>
            {matrikelNumber}
          </td>

          <td class="break-off">
            {password}
          </td>

          <td><a href="/user/{_id}/edit" class="button"> <i>edit</i> </a></td>

          <td>
            <button type="submit" name="delete" class="button danger-button" value={_id}>
              <i>delete_forever</i>
            </button>
          </td>
        </tr>
      {/each}
    </table>
  </form>

  <a href="/register" class="button" style="width: max-content"> Create New </a>
</div>

<style>
  .card {
    background: white;
    color: black;

    max-width: max-content;
    margin-inline: auto;

    padding: 16px;
  }

  h2 {
    padding-bottom: 16px;
  }

  .break-off {
    max-width: 48px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  td,
  th {
    text-align: center;
  }
</style>
