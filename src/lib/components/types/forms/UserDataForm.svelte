<script lang="ts">
  import PasswordInput from "../../PasswordInput.svelte"
  import {userDataFormNames} from "../../../models/form-names/user-data"
  import type {IUser} from "../../../models/user"

  export let user: IUser = undefined
  export let isAdmin = false
</script>

{#if isAdmin}
  <fieldset>
    <label for="registerusertype"><i>badge</i>&nbsp;typ</label>
    <select id="registerusertype" name={userDataFormNames.userType} required>
      <option value="user">User</option>
      <option value="admin">Admin</option>
    </select>
  </fieldset>
{/if}

<fieldset>
  <label for="regusername"><i>account_circle</i></label>
  <input
    id="regusername"
    autocomplete="username"
    type="text"
    name={userDataFormNames.name}
    maxlength="30"
    size="30"
    value={user?.name || ""}
    placeholder="Nutzername"
    required
  />
</fieldset>

<fieldset>
  <label for="regvorname">Vorname</label>
  <input
    id="regvorname"
    type="text"
    name={userDataFormNames.firstName}
    maxlength="30"
    size="30"
    value={user?.firstname || ""}
    placeholder="Vorname"
    required
  />
</fieldset>

<fieldset>
  <label for="regnachname">Nachname</label>
  <input
    type="text"
    id="regnachname"
    name={userDataFormNames.lastName}
    maxlength="30"
    size="30"
    value={user?.lastname || ""}
    placeholder="Nachname"
  />
</fieldset>

<fieldset>
  <label for="matrikelnummer"><i>pin</i></label>
  <input
    id="matrikelnummer"
    type="number"
    name={userDataFormNames.matrikelNumber}
    maxlength="30"
    size="30"
    value={user?.matrikelNumber || ""}
    placeholder="Matrikelnummer"
    required
  />
</fieldset>

<fieldset>
  <label for="regemail"><i>alternate_email</i></label>
  <input
    id="regemail"
    autocomplete="username"
    type="email"
    name={userDataFormNames.email}
    maxlength="30"
    size="30"
    value={user?.email || ""}
    placeholder="E-Mail Adresse"
    required
  />
</fieldset>

<PasswordInput
  id="regpassword"
  autocomplete="new-password"
  name={userDataFormNames.password}
  minlength="8"
  maxlength="30"
  size="30"
  placeholder="Passwort"
  required
>
  <!--suppress XmlInvalidId -->
  <label for="regpassword"><i>password</i></label>
</PasswordInput>

<PasswordInput
  id="passwordConfirmation"
  autocomplete="new-password"
  name={userDataFormNames.passwordConfirmation}
  validationField="regpassword"
  minlength="8"
  maxlength="30"
  size="30"
  placeholder="Passwort Wiederholen"
  required
>
  <!--suppress XmlInvalidId -->
  <label for="regpassword"><i>password</i></label>
</PasswordInput>
