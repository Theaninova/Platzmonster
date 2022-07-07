<script context="module">
  export const load = ({url}) => ({
    props: {
      activeRoute: url.pathname,
    },
  })
</script>

<script>
  import "../lib/styles/styles.scss"
  import Navigation from "../lib/components/navigation/Navigation.svelte"
  import PageTransition from "../lib/components/PageTransition.svelte"

  export let activeRoute
</script>

<Navigation />

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
    grid-template-rows: min-content auto;
  }

  @media (max-width: $breakpoint-phone) {
    body {
      grid-template-rows: 1fr auto;
      margin: 0;
    }
  }
</style>
