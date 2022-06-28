<script lang="ts">
  import Logo from "./Logo.svelte"
  import {page, session} from "$app/stores"
  import {UserType} from "../../models/user"
  import {fly} from "svelte/transition"
  import Route from "./Route.svelte"
  import LogoutButton from "./LogoutButton.svelte"
</script>

<nav class="card">
  <a href="/" style="margin-left: 8px; cursor: pointer" class="logo">
    <Logo active={$page.routeId === ""} />
  </a>
  {#if $session.user}
    <ul in:fly={{duration: 200, delay: 100, x: 100}} out:fly={{duration: 200, x: 100}}>
      {#if $session.user?.userType === UserType.ADMIN}
        <Route href="admin" icon="admin_panel_settings">Admin</Route>
      {/if}
      <Route href="user/search" icon="group_add">Friends</Route>
      <Route href="user/{$session.user?._id}" icon="account_circle">{$session.user?.name}</Route>
      <li><LogoutButton /></li>
    </ul>
  {:else}
    <ul in:fly={{duration: 200, delay: 100, x: -20}} out:fly={{duration: 200, x: -20}}>
      <Route href="login" icon="login">Login</Route>
      <Route href="register" icon="how_to_reg">Register</Route>
    </ul>
  {/if}
</nav>

<style lang="scss">
  @import "../../styles/theme";

  nav {
    display: grid;
    grid-template-columns: min-content auto;
    align-items: center;
    justify-items: end;
    height: min-content;

    overflow: hidden;

    background: $white;
    color: $black;

    grid-column: 1;
    grid-row: 1;

    z-index: 1000;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    gap: 4px;

    grid-column: 2;
    grid-row: 1;
  }
</style>
