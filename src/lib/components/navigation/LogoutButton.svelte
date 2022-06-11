<script lang="ts">
  import {enhance} from "../../form"
  import {refreshUser} from "../../refresh-user"
</script>

<form
  use:enhance={{
    result: refreshUser,
  }}
  method="post"
  action="/api/auth/logout"
>
  <button class="logout"><i>logout</i></button>
</form>

<style lang="scss">
  @import "../../styles/styles";

  .logout:hover {
    background: $error-color;
    color: $on-error-color;
  }
</style>
