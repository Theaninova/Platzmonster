<script lang="ts">
  import type {IPlace} from "../../../models/place"
  import {enhance} from "../../../form"
  export let item: IPlace
  import {createEventDispatcher} from "svelte"
  const dispatch = createEventDispatcher<{refresh: undefined}>()
  let deleteButton: HTMLButtonElement
</script>

<form
  method="post"
  action="/api/place/{item._id}/delete"
  use:enhance={{result: () => dispatch("refresh"), error: async ({response}) => alert(await response.text())}}
>
  <a href="/place/{item._id}/edit" class="button"> <i>edit</i> </a>

  <button bind:this={deleteButton} type="submit" name="delete" class="danger-button" value={item._id}>
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
