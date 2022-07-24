<script lang="ts">
  import type {IUser} from "../lib/models/user"
  import {enhance} from "../lib/form"

  export let user: IUser = undefined
</script>

<h1>Platzmonster</h1>

<section class="card">
  <h2 style="grid-column: span 2;">Debug Control</h2>

  <form style="grid-column: span 2" method="post" use:enhance>
    <button type="submit" name="insertUsers">Insert Dummy Users</button>
    <button type="submit" name="insertPlaces">Insert Dummy Places</button>
    <button type="submit" name="insertRatings">Insert Dummy Ratings</button>
    <button type="submit" name="insertReservations">Insert Dummy Reservations</button>
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
