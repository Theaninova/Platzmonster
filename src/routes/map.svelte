<script lang="ts">
  import {onMount} from "svelte"
  import "leaflet/dist/leaflet.css"
  import "leaflet.markercluster/dist/MarkerCluster.css"
  import "leaflet.markercluster/dist/MarkerCluster.Default.css"
  import type {IPlace} from "../lib/models/place"

  export let buildings: IPlace[]

  onMount(async () => {
    if (!window) return

    const leaflet = await import("leaflet")
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const cluster = await import("leaflet.markercluster/dist/leaflet.markercluster")
    const map = leaflet.map("map").setView([52.5123, 13.32697], 13)
    leaflet
      .tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "© OpenStreetMap",
      })
      .addTo(map)

    const markers = leaflet.markerClusterGroup()
    markers.addLayers(
      buildings
        .filter(it => it.location)
        .map(it =>
          leaflet
            .marker(it.location!.coordinates.reverse())
            .bindPopup(`${it.name} (${it.shortName})\n<a href="place/${it._id}">Details</a>`),
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
