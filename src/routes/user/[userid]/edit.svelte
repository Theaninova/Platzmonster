<script lang="ts">
  import UserDataForm from "../../../lib/components/types/forms/UserDataForm.svelte"

  export let user
</script>

<h1>Edit - TODO</h1>

<form method="post" class="card">
  <UserDataForm {user} />

  <button type="submit"> Speichern </button>
</form>

<style>
  .card {
    background: white;
    color: black;
    max-width: 400px;
    margin-inline: auto;

    padding: 16px;

    display: grid;
    gap: 4px;
  }
</style>
