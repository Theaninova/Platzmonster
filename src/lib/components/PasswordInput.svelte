<script lang="ts">
  import {validateMatch} from "../validate-match"

  export let validationField: string = undefined

  let showPassword = false

  $: type = showPassword ? "text" : "password"
  $: icon = showPassword ? "visibility" : "visibility_off"
</script>

<fieldset>
  <slot />
  {#if validationField}
    <input {type} {...$$props} use:validateMatch={validationField} />
  {:else}
    <input {type} {...$$props} />
  {/if}

  <div class="icon-24 password-toggle" on:click={() => (showPassword = !showPassword)}>
    {icon}
  </div>
</fieldset>

<style>
  .password-toggle {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    padding-right: 8px;
    cursor: pointer;
  }
</style>
