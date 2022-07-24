<script lang="ts">
  import SearchPage from "../../../lib/components/search/SearchPage.svelte"
  import UserListItem from "../../../lib/components/types/list/UserListItem.svelte"
  import EditUserAction from "../../../lib/components/types/actions/EditUserAction.svelte"
</script>

<h1>Admin Panel</h1>

<SearchPage action="/api/user/search" listItem={UserListItem} actionButtons={EditUserAction} />
