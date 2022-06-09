<script lang="ts">
  import {IUser} from "../lib/models/user"

  export let user: IUser
</script>

<h1>Platzmonster</h1>

<form method="post">
  <button type="submit" name="insert">Insert Dummy Data</button>

  <div class="row">
    <button type="submit" name="logIn">Login</button>

    <button type="submit" name="logOut">Logout</button>
  </div>
</form>

<p>You are logged {user ? "in" : "out"}</p>
{#if user}
  <p>Your name is {user.name}</p>
{/if}

<style>
  .row {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
</style>
