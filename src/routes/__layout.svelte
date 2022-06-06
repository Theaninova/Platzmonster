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

  export let activeRoute
</script>

<Navigation {activeRoute} />

<main>
  <slot />
</main>

<style global lang="scss">
  @import "../lib/styles/styles.scss";

  h1 {
    font-size: clamp(3rem, -4rem + 22.8571vw, 6rem);
    margin-block: 1rem;
    color: $accent-color;
  }

  body {
    font-family: "Kanit", sans-serif;

    color: white;
    background: $primary-color;
  }
</style>
