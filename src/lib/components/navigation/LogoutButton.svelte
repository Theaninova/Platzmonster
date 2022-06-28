<script lang="ts">
  import {enhance} from "../../form"
  import {refreshUser} from "../../refresh-user"
</script>

<form
  use:enhance={{
    result: refreshUser,
    redirect: "/",
  }}
  method="post"
  action="/api/auth/logout"
>
  <button class="danger-button"><i>logout</i></button>
</form>
