<script>
    import SearchPage from "../../../lib/components/search/SearchPage.svelte";

    import RatingAction from "../../../lib/components/types/actions/RatingAction.svelte";
    import ReservationListItem from "../../../lib/components/types/list/ReservationListItem.svelte";
</script>

<SearchPage action="/api/reservations/search" listItem={ReservationListItem} />

