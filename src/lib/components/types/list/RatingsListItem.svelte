<script lang="ts">
  import type {IRating} from "../../../models/rating"

  export let item: IRating
</script>

<div style="text-overflow: ellipsis">
  <p>{item.rating}<i>grade</i></p>
  {#if item.medal}
    <p><b>Eine Medallie wurde vergeben</b></p>
  {/if}
  <a class="parent-link" href="/place/{item.associatedId}"><i>pin_drop</i>Ort anzeigen</a>
  <a class="parent-link" href="/user/{item.userId}"><i>person</i>Nutzer anzeigen</a>
</div>

<style lang="scss">
  div {
    position: relative;
  }

  h3,
  .subtitle {
    width: calc(100% - 184px);
    overflow: hidden;
  }

  h3 {
    margin-block-end: 0;
  }

  p {
    margin-block: 4px;
  }

  abbr {
    text-decoration: none;
  }

  .icon-24 {
    cursor: help;
  }

  h3 {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  a {
    text-decoration: none;
    color: black;
  }

  a:hover {
    text-decoration: underline black;
  }

  .parent-link {
    display: flex;
    align-items: center;
  }
</style>
