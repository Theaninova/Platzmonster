<script>
  import {enhance} from "../lib/form"
</script>

<form method="post" action="/register" use:enhance={{redirect: "/"}}>
  <h1>Register</h1>

  <label for="registerusertype">Usertype</label><br />
  <select id="registerusertype" name="registerusertype">
    <option value="user">User</option>
    <option value="admin">Admin</option>

    required />

  </select>
  <br /><br />

    <label for="regusername">Username</label><br />
    <input
      id="regusername"
      type="text"
      name="name"
      maxlength="30"
      size="30"
      placeholder="Wähle einen Usernamen aus"
      required
    /><br /><br />

    <label for="regvorname">Vorname</label><br />
    <input
      id="regvorname"
      type="text"
      name="vorname"
      maxlength="30"
      size="30"
      placeholder="Gebe deinen Vornamen ein"
      required
    /><br /><br />

    <label for="regnachname">Nachname</label><br />
    <input
      type="text"
      id="regnachname"
      name="nachname"
      maxlength="30"
      size="30"
      placeholder="Gebe deinen Nachnamen ein"
    /><br /><br />

    <label for="regemail">Email</label><br />
    <input
      id="regemail"
      type="email"
      name="email"
      maxlength="30"
      size="30"
      placeholder="Gebe deine E-Mail-Adresse an"
      required
    /><br /><br />

    <label for="regpassword">Passwort</label><br />
    <input
      id="regpassword"
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
      id="passwordConfirmation"
      type="password"
      name="passwordConfirmation"
      minlength="8"
      maxlength="30"
      size="30"
      placeholder="Wiederhole das Passwort"
      required
    /><br />

    <label for="agb" /><br />
    <input type="checkbox" id="agb" name="agb" required />Mit der Anmeldung bestätige ich, dass ich die
    Allgemeinen Geschäftsbedingungen akzeptiere und die Datenschutzrichtlinien gelesen habe.<br /><br />

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
