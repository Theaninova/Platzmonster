<script lang="ts">
  import {enhance} from "../lib/form"
  import {refreshUser} from "../lib/refresh-user"
  import PasswordInput from "../lib/components/PasswordInput.svelte"
  import {loginFormNames} from "../lib/models/form-names/login.js"

  let usernameField: HTMLInputElement
</script>

<h1>Login</h1>

<form
  class="card"
  action="/api/auth/login"
  method="post"
  use:enhance={{
    result: refreshUser,
    redirect: "/",
    error: async ({response}) => {
      usernameField.setCustomValidity(await response.text())
    },
  }}
>
  <fieldset style="grid-column: span 2">
    <label for="uname"><i>account_circle</i></label>
    <input
      bind:this={usernameField}
      autocomplete="username"
      type="text"
      id="uname"
      placeholder="Username"
      name={loginFormNames.username}
      required
    />
  </fieldset>

  <PasswordInput
    autocomplete="current-password"
    id="psw"
    placeholder="Password"
    name={loginFormNames.password}
    required
  >
    <!--suppress XmlInvalidId -->
    <label for="psw"><i>password</i></label>
  </PasswordInput>

  <button type="submit">Login</button>
  <p>Noch keinen Account? <a href="/register">Registrieren</a></p>
</form>

<style>
  .card {
    width: max-content;
    background: white;
    padding: 16px;

    margin: auto;

    display: grid;
    gap: 4px;
    grid-template-columns: auto auto;
    grid-template-rows: min-content;
  }

  button {
    height: 48px;
    margin-block: 2px;
  }
</style>
