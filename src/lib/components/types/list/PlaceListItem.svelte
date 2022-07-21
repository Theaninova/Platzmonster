<script lang="ts">
  import type {IPlace} from "../../../models/place"
  import {PlaceType} from "../../../models/place.js"

  export let item: IPlace

  const placeTypeTitles = {
    [PlaceType.BUILDING]: "Gebäude",
    [PlaceType.ROOM]: "Raum",
    [PlaceType.WORK_PLACE]: "Arbeitsplatz",
  }
</script>

<div>
  <h3>
    <abbr class="icon-24" title={placeTypeTitles[item.type]}
      >{item.type === PlaceType.BUILDING
        ? "house"
        : item.type === PlaceType.ROOM
        ? "meeting_room"
        : "laptop_chromebook"}</abbr
    >
    <a href="/place/{item._id}"><abbr title={item._id}>{item.name}</abbr></a>
  </h3>
  <p class="subtitle">{item.name}</p>
  {#if item.description === null || item.description === undefined}
    <p />
  {:else}
    <p>{item.description}</p>
  {/if}

  {#if item.parentId}
    <a class="parent-link" href="/place/{item.parentId}"
      ><i>arrow_upward</i>{item.type === PlaceType.ROOM ? "Gebäude" : "Raum"} anzeigen</a
    >
  {/if}
  <p />
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

  a:not(.button):hover {
    text-decoration: underline black;
  }

  .parent-link {
    display: flex;
    align-items: center;
  }
</style>
