<script lang="ts">
  import type {User} from "../lib/models/user"

  export let users: User[]

  import SearchPage from "../lib/components/search/SearchPage.svelte";
  import UserListItem from "../lib/components/types/list/UserListItem.svelte";
  import AddFriendAction from "../lib/components/types/actions/AddFriendAction.svelte";
</script>

<h1>Admin Panel</h1>

<SearchPage action="/api/user/search" listItem={UserListItem} actionButtons={AddFriendAction} />

<!--
<UserList {users} />
-->