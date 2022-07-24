<script>
  import About from "../lib/components/About.svelte"
  import {session} from "$app/stores"
  import {UserType} from "../lib/models/user"
  import AdminDashboard from "../lib/components/dashboard/AdminDashboard.svelte"
  import SearchPage from "../lib/components/search/SearchPage.svelte"
  import ReservationListItem from "../lib/components/types/list/ReservationListItem.svelte"
  import DeleteReservationAction from "../lib/components/types/actions/DeleteReservationAction.svelte"
</script>

{#if $session.user}
  <h1>Dashboard</h1>
  <p>Hallo, {$session.user.firstname}</p>
  {#if $session.user.userType === UserType.ADMIN}
    <AdminDashboard />
  {/if}
  <h2>Deine Reservierungen</h2>
  <SearchPage
    action="/api/user/{$session.user._id}/reservation-search"
    listItem={ReservationListItem}
    actionButtons={DeleteReservationAction}
  />
{:else}
  <h1>Platzmonster</h1>
  <About />
{/if}

<style>
  h2 {
    color: #ffad7a;
    font-size: 2rem;
  }
</style>
