<script>
  import SearchPage from "../../../lib/components/search/SearchPage.svelte"
  import {page} from "$app/stores"
  import RatingsListItem from "../../../lib/components/types/list/RatingsListItem.svelte"
  import DeleteRatingAction from "../../../lib/components/types/actions/DeleteRatingAction.svelte"
</script>

<h1>Bewertungen</h1>

<SearchPage
  action="/api/ratings/{$page.params.placeid}/search"
  listItem={RatingsListItem}
  actionButtons={DeleteRatingAction}
/>
