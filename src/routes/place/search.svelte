<script lang="ts">
  import SearchPage from "../../lib/components/search/SearchPage.svelte"
  import PlaceListItem from "../../lib/components/types/list/PlaceListItem.svelte"
  import RatingAction from "../../lib/components/types/actions/RatingAction.svelte"
  import EditUserAction from "../../lib/components/types/actions/EditUserAction.svelte"
  import EditPlaceAction from "../../lib/components/types/actions/EditPlaceAction.svelte"
</script>

<h1>Arbeitsplätze</h1>

<SearchPage action="/api/place/search" listItem={PlaceListItem} actionButtons={EditPlaceAction} />
