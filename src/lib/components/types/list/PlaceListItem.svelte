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
  
  <div style="text-overflow: ellipsis">
    <h3>
      <abbr class="icon-24" title={placeTypeTitles[item.type]}
        >{item.type === PlaceType.BUILDING ? "house" : item.type === PlaceType.ROOM ? "meeting_room" : "laptop_chromebook"}</abbr
      >
      <a href="/place/{item._id}"><abbr title={item._id}>{item.name}</abbr></a>
    </h3>
    <p class="subtitle">{item.name}</p>
    {#if item.description === null || item.description === undefined}
    <p />
    {:else}
    <p>{item.description}</p>
  {/if}
  
    {#if item.type === PlaceType.BUILDING}
    <p />
  {:else if item.type === PlaceType.ROOM}
  <button><a href="/place/{item.parentId}">Zum Gebäude <i>arrow_upward</i></a></button>
  {:else}
  <button><a href="/place/{item.parentId}">Zum Raum <i>arrow_upward</i></a></button>
  {/if}
    <p></p>
  </div>
  
  <style lang="scss">
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