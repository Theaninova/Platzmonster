<script>
  import {validateMatch} from "../validate-match"
  let showPassword = false
  $: type = showPassword ? "text" : "password"
  $: icon = showPassword ? "visibility" : "visibility_off"
</script>

<fieldset>
  <slot />
  <input {type} {...$$props} use:validateMatch={"regpassword"} />

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
