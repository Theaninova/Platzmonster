<script>
  import {enhance} from "../../lib/form"
  import {refreshUser} from "../../lib/refresh-user"
  import PlaceDataForm from "../../lib/components/types/forms/PlaceDataForm.svelte"
</script>

<h1>Arbeitsplatz Registrieren</h1>

<form method="post" action="/place/register" use:enhance={{redirect: "/", result: refreshUser}} class="card">
  <PlaceDataForm />

  <button type="submit"> Arbeitsplatz erstellen </button>
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
