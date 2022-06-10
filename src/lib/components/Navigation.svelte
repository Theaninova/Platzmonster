<script lang="ts">
  import Logo from "./Logo.svelte"
  import {session} from "$app/stores"
  import {UserType} from "../models/user"
  import {enhance} from "../form"
  import {refreshUser} from "../refresh-user"
  import {fly} from "svelte/transition"

  export let activeRoute

  $: loggedIn = !!$session.user
  $: routes = $session.user
    ? $session.user.userType === UserType.ADMIN
      ? [["admin", "admin_panel_settings"]]
      : []
    : [
        ["login", "login"],
        ["register", "how_to_reg"],
      ]
</script>

<nav class="card">
  <a href="/" style="margin-left: 8px; cursor: pointer" class="logo">
    <Logo active={activeRoute === "/"} />
  </a>
  {#key $session.user}
    <ul
      in:fly={{duration: 200, delay: 100, x: loggedIn ? 30 : -30}}
      out:fly={{duration: 200, x: loggedIn ? -30 : 30}}
    >
      {#each routes as [route, icon]}
        <li>
          <a class:activeRoute={activeRoute.includes(route)} class="button" href="/{route}"
            >{route ? route : ""}{#if icon}<span class="icon-18">{icon}</span>{/if}</a
          >
        </li>
      {/each}
      {#if $session.user}
        <li>
          <a class="button">{$session.user.name}<i>account_circle</i></a>
        </li>
        <li>
          <form
            use:enhance={{
              result: refreshUser,
            }}
            method="post"
            action="/api/auth/logout"
          >
            <button class="logout"><i>logout</i></button>
          </form>
        </li>
      {/if}
    </ul>
  {/key}
</nav>

<style lang="scss">
  @import "../styles/styles.scss";

  .logout:hover {
    background: $error-color;
    color: $on-error-color;
  }

  nav {
    display: grid;
    grid-template-columns: min-content auto;
    align-items: center;
    justify-items: end;
    height: min-content;

    background: $white;
    color: $black;

    grid-column: 1;
    grid-row: 1;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    gap: 4px;

    grid-column: 2;
    grid-row: 1;
  }

  .activeRoute {
    background: $accent-color;
  }
</style>
