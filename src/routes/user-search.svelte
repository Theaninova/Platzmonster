<script lang="ts">
  import SearchPage from "../lib/components/search/SearchPage.svelte"
  import UserListItem from "../lib/components/types/list/UserListItem.svelte"
</script>

<h1>User Search</h1>

<SearchPage action="/api/search/user" listItem={UserListItem} />
