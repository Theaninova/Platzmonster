<script lang="ts">
  import SearchPage from "../../../lib/components/search/SearchPage.svelte"
  import PlaceListItem from "../../../lib/components/types/list/PlaceListItem.svelte"
  import EditPlaceAction from "../../../lib/components/types/actions/EditPlaceAction.svelte"
</script>

<h1>Orte Bearbeiten</h1>

<SearchPage action="/api/place/search" listItem={PlaceListItem} actionButtons={EditPlaceAction} />
