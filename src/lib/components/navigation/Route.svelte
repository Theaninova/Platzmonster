<script lang="ts">
  import {page} from "$app/stores"

  export let href: string
  export let icon: string | undefined

  export let shrink = true
  export let iconOnly = false
</script>

<li>
  <a
    class:activeRoute={$page.url.pathname?.startsWith(`/${href}`)}
    class="button"
    class:shrink-button={shrink}
    href="/{href}"
    >{#if !iconOnly}<span class:text={shrink}><slot /></span> {/if}
    {#if icon}<span class="icon-18" class:shrink-icon={shrink}>{icon}</span>{/if}
  </a>
</li>

<style lang="scss">
  @import "../../styles/theme";

  .activeRoute {
    background: $accent-color;
  }

  @media (max-width: 450px) {
    .text {
      display: none;
    }

    .shrink-button {
      border: none;
      padding: 20px 8px;
      box-shadow: 0 0 0 black;
    }

    .shrink-icon {
      font-variation-settings: "FILL" 0, "wght" 700, "GRAD" 0, "opsz" 28;
      font-family: "Material Symbols Rounded";
      font-size: 28px;
      font-style: inherit;
    }

    .shrink-icon {
      z-index: 5;
    }
  }
</style>
