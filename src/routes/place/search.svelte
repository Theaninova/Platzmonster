<script lang="ts">
    import SearchPage from "../../lib/components/search/SearchPage.svelte"
    import PlaceListItem from "../../lib/components/types/list/PlaceListItem.svelte"
  </script>
  
  <h1>Arbeitsplatz Suche</h1>
  
  <SearchPage action="/api/place/search" listItem={PlaceListItem} />
  