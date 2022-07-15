<script lang="ts">
    import type {IReservation} from "../../../models/reservation";

    export let item: IReservation


</script>

<div style="text-overflow: ellipsis">

   <h3> Reservierung </h3>
    <p> von: {item.from} </p>
    <p> bis: {item.to} </p>
    <p class="card"> Nutzer: {item.userId}</p>

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
</style>