<script>
  import About from "../lib/components/About.svelte"
  import {session} from "$app/stores"
</script>

{#if $session.user}
  <h1>Dashboard</h1>
  <p>Hallo, {$session.user.firstname}</p>
{:else}
  <About />
{/if}
