<script>
  import {enhance} from "../lib/form"
  import PasswordInput from "../lib/components/PasswordInput.svelte"
</script>

<h1>Register</h1>

<form method="post" action="/register" use:enhance={{redirect: "/"}} class="card">
  <fieldset>
    <label for="registerusertype"><i>badge</i>&nbsp;type</label>
    <select id="registerusertype" name="registerusertype" required>
      <option value="user">User</option>
      <option value="admin">Admin</option>
    </select>
  </fieldset>

  <fieldset>
    <label for="regusername"><i>account_circle</i></label>
    <input
      id="regusername"
      autocomplete="username"
      type="text"
      name="name"
      maxlength="30"
      size="30"
      placeholder="Wähle einen Usernamen aus"
      required
    />
  </fieldset>

  <fieldset>
    <label for="regvorname">Vorname</label>
    <input
      id="regvorname"
      type="text"
      name="vorname"
      maxlength="30"
      size="30"
      placeholder="Gebe deinen Vornamen ein"
      required
    />
  </fieldset>

  <fieldset>
    <label for="regnachname">Nachname</label>
    <input
      type="text"
      id="regnachname"
      name="nachname"
      maxlength="30"
      size="30"
      placeholder="Gebe deinen Nachnamen ein"
    />
  </fieldset>

  <fieldset>
    <label for="matrikelnummer"><i>pin</i></label>
    <input
      id="matrikelnummer"
      type="number"
      name="matrikelnummer"
      maxlength="30"
      size="30"
      placeholder="Gebe deine Matrikelnummer an"
      required
    />
  </fieldset>

  <fieldset>
    <label for="regemail"><i>alternate_email</i></label>
    <input
      id="regemail"
      autocomplete="username"
      type="email"
      name="email"
      maxlength="30"
      size="30"
      placeholder="Gebe deine E-Mail-Adresse an"
      required
    />
  </fieldset>

  <PasswordInput
    id="regpassword"
    autocomplete="new-password"
    name="password"
    minlength="8"
    maxlength="30"
    size="30"
    placeholder="Wähle ein Passwort aus"
    required
  >
    <!--suppress XmlInvalidId -->
    <label for="regpassword"><i>password</i></label>
  </PasswordInput>

  <PasswordInput
    id="passwordConfirmation"
    autocomplete="new-password"
    name="passwordConfirmation"
    minlength="8"
    maxlength="30"
    size="30"
    placeholder="Wiederhole das Passwort"
    required
  >
    <!--suppress XmlInvalidId -->
    <label for="regpassword"><i>password</i></label>
  </PasswordInput>

  <p>
    <input type="checkbox" id="agb" name="agb" required />
    Mit der Anmeldung bestätige ich, dass ich die Allgemeinen Geschäftsbedingungen akzeptiere und die Datenschutzrichtlinien
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
