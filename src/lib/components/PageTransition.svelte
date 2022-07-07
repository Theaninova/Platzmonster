<script lang="ts">
  import {fly} from "svelte/transition"

  export let activeRoute: string
</script>

{#key activeRoute}
  <main
    style="margin-inline: {activeRoute.endsWith('map') ? 0 : 8}px"
    in:fly={{duration: 200, delay: 200, y: 30}}
    out:fly={{duration: 200, y: 30}}
  >
    <slot />
  </main>
{/key}

<style lang="scss">
  @import "../styles/theme.scss";

  main {
    overflow-y: auto;
    overflow-x: hidden;
    padding-bottom: 16px;

    transform: translateY(-16px);
    height: calc(100% - 8px);

    grid-row: 2;
    grid-column: 1;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    flex-grow: 1;
  }

  @media (max-width: $breakpoint-phone) {
    main {
      grid-row: 1;
      grid-column: 1;

      padding-bottom: 32px;
      transform: translateY(-16px);
      height: calc(100% + 16px);
      margin-inline: 8px;
    }
  }
</style>
