<script lang="ts">
  import type {IUser} from "../../../models/user"
  import {enhance} from "../../../form"
  import {createEventDispatcher} from "svelte"

  export let item: IUser

  const dispatch = createEventDispatcher<{refresh: undefined}>()
</script>

<form method="post" action="/api/user/{item._id}/delete" use:enhance={{result: () => dispatch("refresh")}}>
  <a href="/edituser/{item.matrikelNumber}" class="button"> <i>edit</i> </a>

  <button type="submit" name="delete" class="danger-button" value={item._id}>
    <i>delete_forever</i>
  </button>
</form>

<style>
  form {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2px;
  }
</style>
