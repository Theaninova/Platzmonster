<script lang="ts">
  import type {IUser} from "../lib/models/user"
  import {enhance} from "../lib/form"
  import {refreshUser} from "../lib/refresh-user"

  export let user: IUser
</script>

<h1>Platzmonster</h1>

<section class="card">
  <form method="post" use:enhance>
    <h2 style="grid-column: span 2;">Debug Control</h2>
  </form>
  <button style="grid-column: span 2" type="submit" name="insert">Insert Dummy Data</button>

  <form
    use:enhance={{
      result: refreshUser,
    }}
    method="post"
    action="/api/auth/login"
  >
    <button type="submit" name="logIn">Login<span class="icon-18">login</span></button>
  </form>

  <form
    use:enhance={{
      result: refreshUser,
    }}
    method="post"
    action="/api/auth/logout"
  >
    <button type="submit" name="logOut">Logout<span class="icon-18">logout</span></button>
  </form>

  {#if user}
    <p>You are <span style="text-transform: uppercase">{user.userType}</span></p>
  {/if}
</section>

<style>
  .card {
    width: max-content;
    background: white;
    padding: 16px;

    color: black;

    display: grid;
    grid-template-columns: auto auto;
    gap: 8px;
  }
</style>
