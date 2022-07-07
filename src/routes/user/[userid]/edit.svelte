<script lang="ts">
  import UserDataForm from "../../../lib/components/types/forms/UserDataForm.svelte"

  export let user
</script>

<h1>Edit - TODO</h1>

<!--
<code>{JSON.stringify(user)}</code>

<p>
  This file is now located in <code>/src/routes/user/[userid]/edit.svelte</code>. Refer to the index file in
  the same folder for more info.
</p>
--->
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
