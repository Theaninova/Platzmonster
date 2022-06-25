<script lang="ts">
  import type {IUser} from "../../../models/user"
  import {UserType} from "../../../models/user.js"

  export let item: IUser
</script>

<h3>
  <span class="icon-24">{item.userType === UserType.USER ? "account_circle" : "admin_panel_settings"}</span>
  {item.name}
</h3>
<p class="subtitle">{item.firstname} {item.lastname}</p>
<p>{item.matrikelNumber}, {item.email}</p>

<style lang="scss">
  h3 {
    margin-block-end: 0;
  }

  p {
    margin-block: 4px;
  }
</style>
