<script lang="ts">
  import type {IReservation} from "../../../models/reservation"

  export let item: IReservation
</script>

<div style="text-overflow: ellipsis">
  <h3>Reservierung</h3>
  <p>Von: {new Date(item.from).toLocaleString()}</p>
  <p>Bis: {new Date(item.to).toLocaleString()}</p>
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
