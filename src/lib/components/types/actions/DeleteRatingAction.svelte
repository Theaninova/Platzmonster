<script lang="ts">
  import {enhance} from "../../../form"
  import {createEventDispatcher} from "svelte"
  import type {IReservation} from "../../../models/reservation"

  export let item: IReservation

  const dispatch = createEventDispatcher<{refresh: undefined}>()
  let deleteButton: HTMLButtonElement
</script>

<form
  method="post"
  action="/api/ratings/{item._id}/delete"
  use:enhance={{
    result: () => dispatch("refresh"),
    error: async ({response}) => alert(await response.text()),
  }}
>
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
