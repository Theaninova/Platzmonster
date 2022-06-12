<script>
  import {enhance} from "../lib/form"
  import PasswordInput from "../lib/components/PasswordInput.svelte"
</script>

<h1>Register</h1>

<form method="post" action="/register" use:enhance={{redirect: "/"}} class="card">
  <div class="input-group">
    <label for="registerusertype"><i>badge</i>type</label>
    <select id="registerusertype" name="registerusertype" required>
      <option value="user">User</option>
      <option value="admin">Admin</option>
    </select>
  </div>

  <div class="input-group">
    <label for="regusername"><i>account_circle</i></label>
    <input
      id="regusername"
      type="text"
      name="name"
      maxlength="30"
      size="30"
      placeholder="Wähle einen Usernamen aus"
      required
    />
  </div>

  <div class="input-group">
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
  </div>

  <div class="input-group">
    <label for="regnachname">Nachname</label>
    <input
      type="text"
      id="regnachname"
      name="nachname"
      maxlength="30"
      size="30"
      placeholder="Gebe deinen Nachnamen ein"
    />
  </div>

  <div class="input-group">
    <label for="regemail"><i>alternate_email</i></label>
    <input
      id="regemail"
      type="email"
      name="email"
      maxlength="30"
      size="30"
      placeholder="Gebe deine E-Mail-Adresse an"
      required
    />
  </div>

  <PasswordInput
    id="regpassword"
    type="password"
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
    type="password"
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

  input:invalid {
    box-shadow: 0 0 5px 1px red;
  }

  input:valid {
    content: "✓";
    background-color: powderblue;
  }
</style>
