<script lang="ts">
  import PlaceDataForm from "../../../lib/components/types/forms/PlaceDataForm.svelte"

  export let place
</script>

<h1>Ort bearbeiten</h1>

<form method="post" class="card">
  <PlaceDataForm {place} />
  <button type="submit">Änderungen speichern</button>
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
