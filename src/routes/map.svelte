<!--suppress TypeScriptUMDGlobal -->
<script lang="ts">
  /* eslint-disable no-undef */
  import {onMount} from "svelte"
  import "leaflet/dist/leaflet.css"
  import "leaflet.markercluster/dist/MarkerCluster.css"
  import "leaflet.markercluster/dist/MarkerCluster.Default.css"
  import type {IPlace} from "../lib/models/place"

  export let buildings: IPlace[]

  onMount(async () => {
    if (!window) return

    await import("leaflet")
    await import("leaflet.markercluster/dist/leaflet.markercluster")

    const map = L.map("map").setView([52.5123, 13.32697], 13)
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "© OpenStreetMap",
    }).addTo(map)

    const markers = L.markerClusterGroup()
    markers.addLayers(
      buildings
        .filter(it => it.location)
        .map(it =>
          L.marker(it.location!.coordinates.reverse()).bindPopup(
            `${it.name} (${it.shortName})\n<a href="place/${it._id}">Details</a>`,
          ),
        ),
    )
    map.addLayer(markers)
  })
</script>

<div id="map" />

<style lang="scss">
  @import "../lib/styles/theme";

  #map {
    width: calc(100% - 8px);
    height: 100%;

    border: 2px solid black;
    margin-right: 4px;
    box-shadow: $card-shadow;

    border-radius: 0 0 $card-border-radius $card-border-radius;

    :global(.leaflet-control-zoom) {
      transform: translateY(16px);
    }
  }

  @media (max-width: $breakpoint-phone) {
    #map {
      transform: translateY(16px);
      width: 100%;
      border: none;
      border-radius: 0;
      margin: 0;
      box-shadow: none;

      :global(.leaflet-control-attribution) {
        transform: translateY(-16px);
      }

      :global(.leaflet-control-zoom) {
        transform: translateY(-32px);
      }

      :global(.leaflet-top) {
        bottom: 0;
        top: unset;
      }
    }
  }
</style>
