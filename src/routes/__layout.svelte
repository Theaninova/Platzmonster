<script context="module">
  export const load = ({url}) => ({
    props: {
      activeRoute: url.pathname,
    },
  })
</script>

<script>
  import "../lib/styles/styles.scss"
  import Navigation from "../lib/components/Navigation.svelte"
  import PageTransition from "../lib/components/PageTransition.svelte"

  export let activeRoute
</script>

<Navigation {activeRoute} />

<PageTransition {activeRoute}>
  <slot />
</PageTransition>

<style global lang="scss">
  @import "../lib/styles/styles.scss";

  html,
  body {
    overflow: hidden;
    height: 100%;
  }

  body {
    font-family: "Kanit", sans-serif;

    color: white;
    background: $primary-color;

    display: grid;
    grid-template-rows: 76px auto;
  }
</style>
