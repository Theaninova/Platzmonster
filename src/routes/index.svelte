<script lang="ts">
  import type {IUser} from "../lib/models/user"

  export let user: IUser
</script>

<h1>Platzmonster</h1>

<form method="post" class="card">
  <h2 style="grid-column: span 2;">Debug Control</h2>

  <button style="grid-column: span 2" type="submit" name="insert">Insert Dummy Data</button>

  <button type="submit" name="logIn">Login</button>

  <button type="submit" name="logOut">Logout</button>
</form>

<p>You are logged {user ? "in" : "out"}</p>
{#if user}
  <p>Your name is {user.name}</p>
{/if}

<style>
  form {
    width: max-content;
    background: white;
    padding: 16px;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }
</style>
