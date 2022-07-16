<script lang="ts">
  import {enhance} from "../lib/form"
  import {refreshUser} from "../lib/refresh-user"
  import PasswordInput from "../lib/components/PasswordInput.svelte"
  import {loginFormNames} from "../lib/models/form-names/login.js"

  let usernameField: HTMLInputElement
  let wiggle = undefined
</script>

<h1>Login</h1>

<form
  class="card"
  action="/api/auth/login"
  method="post"
  use:enhance={{
    result: refreshUser,
    redirect: "/",
    error: () => (wiggle = !wiggle),
  }}
>
  <fieldset style="grid-column: span 2">
    <label for="uname"><i>account_circle</i></label>
    <input
      bind:this={usernameField}
      autocomplete="username"
      type="text"
      id="uname"
      placeholder="Nutzername"
      name={loginFormNames.username}
      required
    />
  </fieldset>

  <PasswordInput
    autocomplete="current-password"
    id="psw"
    placeholder="Passwort"
    name={loginFormNames.password}
    required
  >
    <!--suppress XmlInvalidId -->
    <label for="psw"><i>password</i></label>
  </PasswordInput>

  {#key wiggle}
    <button type="submit" class:wiggle={typeof wiggle !== "undefined"}>Login</button>
  {/key}
  <p>Noch keinen Account? <a href="/register">Registrieren</a></p>
</form>

<style lang="scss">
  @import "../lib/styles/theme";
  @import "../lib/styles/shake-horizontal";

  @keyframes flash {
    10% {
      background: lighten($error-color, 45%);
      color: $error-color;
    }
    50% {
      background: lighten($error-color, 45%);
      color: $error-color;
    }
  }

  .wiggle {
    animation: flash 0.6s cubic-bezier(0.455, 0.03, 0.515, 0.955) both,
      shake-horizontal 0.6s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
  }

  .card {
    width: max-content;
    background: white;
    padding: 16px;

    margin-inline: auto;

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
