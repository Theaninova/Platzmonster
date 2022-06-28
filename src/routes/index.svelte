<script lang="ts">
  import type {IUser} from "../lib/models/user"
  import {enhance} from "../lib/form"
  import {refreshUser} from "../lib/refresh-user"

  export let user: IUser = undefined
</script>

<h1>Platzmonster</h1>

<section class="card">
  <h2 style="grid-column: span 2;">Debug Control</h2>

  <form style="grid-column: span 2" method="post" use:enhance>
    <button type="submit" name="insert">Insert Dummy Data</button>
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
    margin-inline: auto;

    color: black;

    display: grid;
    grid-template-columns: auto auto;
    gap: 8px;
  }
</style>
