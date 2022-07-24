<script lang="ts">
  import Logo from "./Logo.svelte"
  import {page, session} from "$app/stores"
  import {UserType} from "../../models/user"
  import {fly} from "svelte/transition"
  import Route from "./Route.svelte"
  import LogoutButton from "./LogoutButton.svelte"
</script>

<nav class="card">
  <a href="/" class="logo">
    <Logo active={$page.routeId === ""} />
  </a>
  {#if $session.user}
    <ul in:fly={{duration: 200, delay: 100, x: 100}} out:fly={{duration: 200, x: 100}}>
      <Route href="map" icon="map">Karte</Route>
      <Route href="place/search" icon="domain_add">Reservieren</Route>
      <Route href="user/search" icon="group">Personen</Route>
      <li class="divider" />

      <Route href="user/{$session.user?._id}" iconOnly icon="account_circle" />
      <li><LogoutButton /></li>
    </ul>
  {:else}
    <ul in:fly={{duration: 200, delay: 100, x: -20}} out:fly={{duration: 200, x: -20}}>
      <!-- <Route href="register" icon="how_to_reg">Registrieren</Route> -->
      <Route href="login" icon="login">Login</Route>
    </ul>
  {/if}
</nav>

<style lang="scss">
  @import "../../styles/theme";

  .divider {
    width: 2px;
  }

  .logo {
    margin-left: 8px;
    cursor: pointer;
  }

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

  @media (max-width: $breakpoint-phone) {
    nav {
      grid-row: 2;
      grid-column: 1;
      border-radius: 16px 16px 0 0;
      border-style: solid none none none;
      box-shadow: none;
      margin: 0;
    }
  }

  ul {
    padding-left: 4px;
    list-style: none;
    display: flex;
    flex-direction: row;
    gap: 4px;
    align-items: center;

    grid-column: 2;
    grid-row: 1;
  }
</style>
