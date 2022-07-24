<script>
  import {enhance} from "../lib/form"
  import {refreshUser} from "../lib/refresh-user"
  import UserDataForm from "../lib/components/types/forms/UserDataForm.svelte"

  export let isAdmin
</script>

<h1>Registrieren</h1>

<form method="post" action="/register" use:enhance={{redirect: "/", result: refreshUser}} class="card">
  <UserDataForm {isAdmin} />

  <p>
    <input type="checkbox" id="agb" name="agb" required />
    Mit der Anmeldung bestätige ich, dass ich die <a href="/agb">Allgemeinen Geschäftsbedingungen</a>
    akzeptiere und die <a href="/datenschutz">Datenschutzrichtlinien</a>
    gelesen habe.
  </p>

  <button type="submit"> Account erstellen </button>
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
