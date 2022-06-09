<script lang="ts">
  import type {User} from "../lib/models/user"

  export let users: User[]

  import UserList from "../lib/components/UserList.svelte"
</script>

<UserList {users} />
