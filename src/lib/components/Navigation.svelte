<script lang="ts">
  import Logo from "./Logo.svelte"

  export let activeRoute

  const routes: string[] = ["login", "register", "admin"]
</script>

<nav class="card">
  <a href="/" style="margin-left: 8px; cursor: pointer" class="logo">
    <Logo active={activeRoute === "/"} />
  </a>
  <ul>
    {#each routes as route}
      <li><a class:activeRoute={activeRoute.includes(route)} class="button" href="/{route}">{route}</a></li>
    {/each}
  </ul>
</nav>

<style lang="scss">
  @import "../styles/styles.scss";

  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    background: $white;
    color: $black;
  }

  a {
    all: unset;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    gap: 4px;
  }

  .activeRoute {
    background: $accent-color;
  }
</style>
