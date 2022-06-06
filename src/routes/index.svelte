<script>
  export let users = [
    "user1",
    "user2",
    "user4",
  ]
</script>

<h1>Platzmonster</h1>

{#each users as user}
  <p>{user}</p>
{/each}
