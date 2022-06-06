<script lang="ts">
  import Logo from "./Logo.svelte"

  export let activeRoute

  const routes: string[] = ["login", "register", "admin"]
</script>

<nav class="card">
  <a href="/" style="margin-left: 8px"><Logo style="width: 48px; aspect-ratio: 1" /></a>
  <ul>
    {#each routes as route}
      <li><a class:activeRoute={activeRoute.endsWith(route)} class="button" href="/{route}">{route}</a></li>
    {/each}
  </ul>
</nav>

<style lang="scss">
  @import "../styles/styles.scss";

  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin-right: 4px;
    background: $white;
    color: $black;
  }

  a {
    all: unset;
    text-transform: capitalize;
    cursor: pointer;
    font-weight: bold;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    gap: 8px;
    margin-right: 8px;
  }

  .activeRoute {
    background: $accent-color;
  }
</style>
