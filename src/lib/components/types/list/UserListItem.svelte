<script lang="ts">
  import type {IUser} from "../../../models/user"
  import {UserType} from "../../../models/user.js"
  import CopyableText from "../../CopyableText.svelte"

  export let item: IUser

  const userTypeTitles = {
    [UserType.ADMIN]: "Administrator",
    [UserType.USER]: "Nutzer",
  }
</script>

<div style="text-overflow: ellipsis">
  <h3>
    <abbr class="icon-24" title={userTypeTitles[item.userType]}
      >{item.userType === UserType.USER ? "account_circle" : "admin_panel_settings"}</abbr
    >
    <a href="/user/{item._id}"><abbr title={item._id}>{item.name}</abbr></a>
  </h3>
  <p class="subtitle">{item.firstname} {item.lastname}</p>
  <p>{item.matrikelNumber}, {item.email}</p>
  {#if item.password}
    <CopyableText hidden={true} text={item.password}>Passwort Hash</CopyableText>
    <CopyableText text={item._id}>UserID</CopyableText>
  {/if}
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
  }

  .icon-24 {
    cursor: help;
  }

  h3 {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  a {
    text-decoration: none;
    color: black;
  }

  a:hover {
    text-decoration: underline black;
  }
</style>
