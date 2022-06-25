<script lang="ts">
  import SearchPage from "../lib/components/search/SearchPage.svelte"
  import {enhance} from "../lib/form"

  export let searchResult
</script>

<h1>User Search</h1>

<form
  action="/user-search"
  method="post"
  use:enhance={{result: ({response}) => (searchResult = response.json().then(it => it.searchResult))}}
>
  <SearchPage {searchResult} />
</form>
