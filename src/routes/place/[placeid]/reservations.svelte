<script>
  import SearchPage from "../../../lib/components/search/SearchPage.svelte"
  import {page} from "$app/stores"
  import ReservationListItem from "../../../lib/components/types/list/ReservationListItem.svelte"
  import DeleteReservationAction from "../../../lib/components/types/actions/DeleteReservationAction.svelte"
</script>

<h1>Reservierungen</h1>

<SearchPage
  action="/api/place/{$page.params.placeid}/reservation-search"
  actionButtons={DeleteReservationAction}
  listItem={ReservationListItem}
/>
