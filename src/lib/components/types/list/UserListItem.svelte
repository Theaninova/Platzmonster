<script lang="ts">
  import type {IUser} from "../../../models/user"
  import {UserType} from "../../../models/user.js"

  export let item: IUser

  const userTypeTitles = {
    [UserType.ADMIN]: "This is an admin user.",
    [UserType.USER]: "This is a regular user.",
  }
</script>

<div>
  <h3>
    <abbr class="icon-24" title={userTypeTitles[item.userType]}
      >{item.userType === UserType.USER ? "account_circle" : "admin_panel_settings"}</abbr
    >
    {item.name}
  </h3>
  <p class="subtitle">{item.firstname} {item.lastname}</p>
  <p>{item.matrikelNumber}, {item.email}</p>
</div>

<style lang="scss">
  h3 {
    margin-block-end: 0;
  }

  p {
    margin-block: 4px;
  }

  abbr {
    text-decoration: none;
    cursor: help;
  }

  h3 {
    display: flex;
    align-items: center;
    gap: 4px;
  }
</style>
