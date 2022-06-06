<script>
  import { UserType } from "../models/user";

  export let name;
  export let login;
</script>

<p>Component 1</p>
<input type="password" />
{#if login}
  <input type="email" />
{/if}
<select>
  {#each Object.values(UserType) as type}
    <option>{type}</option>
  {/each}
</select>
<button type="submit">{name}</button>
<p>Component 1 Ende</p>
