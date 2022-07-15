<script>
  import {enhance} from "../lib/form"
  import {refreshUser} from "../lib/refresh-user"
</script>

<h1>Arbeitsplatz Registrieren</h1>

<form method="post" action="/registerplace" use:enhance={{redirect: "/"}} class="card">
  <fieldset>
    <label for="registerplacetype"><i>badge</i>&nbsp;typ</label>
    <select id="registerplacetype" name="registerplacetype" required>
      <option value="user">Gebäude</option>
      <option value="admin">Raum</option>
      <option value="admin">Arbeitsplatz</option>
    </select>
  </fieldset>

  <fieldset>
    <label for="regplacename"><i>home</i></label>
    <input
      id="regplacename"
      type="text"
      name="regplacename"
      value=""
      maxlength="30"
      size="30"
      placeholder="Namen eingeben"
      required
    />
  </fieldset>

  <fieldset>
    <label for="regshortname">Kürzel</label>
    <input
      id="regshortname"
      type="text"
      name="regshortname"
      value=""
      maxlength="30"
      size="30"
      placeholder="Kürzel eingeben"
      required
    />
  </fieldset>

  <fieldset>
    <label for="regstreet"><i>add_road</i></label>
    <input
      type="text"
      id="regadress"
      name="regadress"
      value=""
      maxlength="30"
      size="30"
      placeholder="Straße"
    />
  </fieldset>

  <fieldset>
    <label for="regnumber"><i>looks_one</i></label>
    <input
      type="text"
      id="regnumber"
      name="regnumber"
      value=""
      maxlength="5"
      size="5"
      placeholder="Hausnummer"
    />
  </fieldset>

  <fieldset>
    <label for="regadditional"><i>info</i></label>
    <input
      id="regadditional"
      type="text"
      name="regadditional"
      value=""
      maxlength="30"
      size="30"
      placeholder="Optionale Informationen"
    />
  </fieldset>

  <fieldset>
    <label for="regzip"><i>pin</i></label>
    <input
      type="text"
      id="regzip"
      name="regzip"
      value=""
      maxlength="10"
      size="10"
      placeholder="Postleitzahl"
    />
  </fieldset>

  <fieldset>
    <label for="regcity"><i>location_city</i></label>
    <input type="text" id="regcity" name="regcity" value="" maxlength="20" size="20" placeholder="Stadt" />
  </fieldset>

  <fieldset>
    <label for="regdescription"><i>description</i></label>
    <textarea
      id="regdescription"
      name="regdescription"
      value=""
      rows="2"
      cols="2"
      placeholder="Beschreibung hinzufügen"
    />
  </fieldset>
  <br /><br />

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
