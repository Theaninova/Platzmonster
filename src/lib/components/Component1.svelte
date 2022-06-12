<script>
import {enhance} from "../lib/form"
  let show_password = true
$: type = show_password ? 'password' : 'text'
let value = '';

</script>

<form action="/login" method="post" use:enhance={{redirect: "/"}}>

    <label for="uname"><b>Username</b></label><br>
    <input type="text" id="uname" placeholder="Enter Username" size="30" name="uname" required><br><br>

    <label for="psw"><b>Passwort</b></label><br>
    <input {type} id="psw" placeholder="Enter Password" size="30" name="psw" required ><br><br>

    <input type="checkbox" on:click="{ () => show_password = !show_password }">Passwort anzeigen

    <button type="submit">Login</button><br><br>

</form>

<p>Noch keinen Account? <a href="/register">Registrieren</a></p>

<style>
  form {
    background: white;
    color: black;
  }
</style>
