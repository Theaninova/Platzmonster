<script>
  import {enhance} from "../lib/form"

  const requiredMessage = "This field is required"
</script>

<form method="post" action="/register" use:enhance={{redirect: "/"}}>
  <h1>Register</h1>

  <label for="name">Username</label><br />
  <input
    type="text"
    name="name"
    maxlength="30"
    size="30"
    placeholder="Wähle einen Usernamen aus"
    required
  /><br /><br />

  <label for="vorname">Vorname</label><br />
  <input
    type="text"
    name="vorname"
    maxlength="30"
    size="30"
    placeholder="Gebe deinen Vornamen ein"
    required
  /><br /><br />

  <label for="nachname">Nachname</label><br />
  <input type="text" name="nachname" maxlength="30" size="30" placeholder="Gebe deinen Nachnamen ein" /><br
  /><br />

  <label for="email">Email</label><br />
  <input
    type="email"
    name="email"
    maxlength="30"
    size="30"
    placeholder="Gebe deine E-Mail-Adresse an"
    required
  /><br /><br />

  <label for="password">Passwort</label><br />
  <input
    type="password"
    name="password"
    minlength="8"
    maxlength="30"
    size="30"
    placeholder="Wähle ein Passwort aus"
    required
  /><br /><br />

  <label for="passwordConfirmation">Passwort wiederholen</label><br />
  <input
    type="password"
    name="passwordConfirmation"
    minlength="8"
    maxlength="30"
    size="30"
    placeholder="Wiederhole das Passwort"
    required
  /><br />

  <label for="agb" /><br />
  <input type="checkbox" name="agb" required />Mit der Anmeldung bestätige ich, dass ich die Allgemeinen
  Geschäftsbedingungen akzeptiere und die Datenschutzrichtlinien gelesen habe.<br /><br />

  <button type="submit"> Account erstellen </button>
</form>

<style>
  input:invalid {
    box-shadow: 0 0 5px 1px red;
  }

  input:valid {
    content: "✓";
    background-color: powderblue;
  }
</style>
