<script lang="ts">
  import {fly} from "svelte/transition"

  export let activeRoute: string
</script>

{#key activeRoute}
  <main in:fly={{duration: 200, delay: 200, y: 30}} out:fly={{duration: 200, y: 30}}>
    <slot />
  </main>
{/key}

<style lang="scss">
  @import "../styles/theme.scss";

  main {
    overflow-y: auto;
    padding-bottom: 16px;

    transform: translateY(-16px);
    height: calc(100% - 8px);

    grid-row: 2;
    grid-column: 1;
  }
</style>
