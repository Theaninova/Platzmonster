<script lang="ts">
  import {page} from "$app/stores"

  export let href: string
  export let icon: string | undefined
</script>

<li>
  <a class:activeRoute={$page.routeId?.includes(href)} class="button" {href}
    ><slot />{#if icon}<span class="icon-18">{icon}</span>{/if}</a
  >
</li>

<style lang="scss">
  @import "../../styles/theme";

  .activeRoute {
    background: $accent-color;
  }
</style>
