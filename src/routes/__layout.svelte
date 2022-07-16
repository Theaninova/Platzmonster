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

  //noinspection CssInvalidAtRule
  @layer base {
    html {
      -webkit-tap-highlight-color: transparent;
    }
  }

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

  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb,
  ::-webkit-scrollbar-track {
    border-radius: 5px;
  }
  ::-webkit-scrollbar-track {
    margin-block: 2px;
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: darken($primary-color, 20%);
    transition: all 0.2s ease-in-out;
    &:hover {
      background-color: darken($primary-color, 30%);
    }
  }

  @media (max-width: $breakpoint-phone) {
    body {
      grid-template-rows: 1fr auto;
      margin: 0;
    }
  }
</style>
