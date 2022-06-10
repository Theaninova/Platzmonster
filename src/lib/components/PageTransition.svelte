<script lang="ts">
  import {fly} from "svelte/transition"

  export let activeRoute: string
</script>

{#key activeRoute}
  <main in:fly={{duration: 200, delay: 200, y: 30}} out:fly={{duration: 200, y: 30}}>
    <slot />
  </main>
  <div class="scroll-fade" />
{/key}

<style lang="scss">
  @import "../styles/styles.scss";

  main,
  .scroll-fade {
    grid-row: 2;
    grid-column: 1;
  }

  main {
    overflow-y: auto;
    padding-bottom: 16px;
  }

  .scroll-fade {
    justify-self: start;
    width: 100%;
    background: linear-gradient(to bottom, $primary-color, transparent);
    height: 16px;
  }
</style>
