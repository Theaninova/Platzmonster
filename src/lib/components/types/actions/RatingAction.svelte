<script lang="ts">
  import {onMount} from "svelte"
  import {enhance} from "../../../form"
  import type {RatingInfo} from "../../../../routes/api/ratings/[associatedId]/get-rating"
  import {rateFormNames} from "../../../models/form-names/rate"
  import {fade} from "svelte/transition"

  export let item: {_id: string}
  let rating: Promise<RatingInfo>

  const reload = async () => {
    rating = fetch(`/api/ratings/${item._id}/get-rating`)
      .then(it => it.json() as RatingInfo)
      .then(it => {
        console.log(it?.userRating?.medal)
        return it
      })
  }

  onMount(reload)

  let submitButton: HTMLButtonElement
</script>

{#await rating then rating}
  <form
    transition:fade
    method="post"
    action="/api/ratings/{item._id}/rate"
    use:enhance={{
      result: reload,
      error: async ({response}) => alert(await response.text()),
    }}
  >
    <div class="star-container icon-24">
      {#each [5, 4, 3, 2, 1] as ratingOption}
        <input
          type="radio"
          on:input={() => submitButton.click()}
          name={rateFormNames.rating}
          checked={ratingOption === rating?.userRating?.rating}
          value={ratingOption}
        />
      {/each}
    </div>
    <input
      on:input={() => submitButton.click()}
      class="icon-24"
      type="checkbox"
      name={rateFormNames.medal}
      checked={rating?.userRating?.medal}
    />

    <p style="place-self: start">
      {rating?.rating?.rating?.toFixed(2) || ""}
    </p>
    <p>{rating?.rating?.medals || 0}</p>

    <button bind:this={submitButton} type="submit" style="display: none"><i>done</i></button>
  </form>
{/await}

<style lang="scss">
  @import "../../../styles/theme";

  form,
  .loading {
    position: absolute;
    top: 0;
    right: 0;
  }

  p {
    margin: 0;
    font-size: 1em;
    transform: translateY(-0.5em);
  }

  form {
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
    justify-items: center;
  }

  .star-container {
    display: inline-flex;
    flex-direction: row-reverse;
  }

  .star-container:not(:hover) > input[type="radio"] {
    &:checked ~ input::after,
    &:checked::after {
      font-variation-settings: "FILL" 1, "wght" 500, "GRAD" 0, "opsz" 24;
      color: $primary-color;
    }
  }

  .star-container > input[type="radio"] {
    appearance: none;
    font: inherit;
    margin: 0;

    &::after {
      cursor: pointer;
      content: "grade";
      color: black;

      transition: all $card-transition-duration ease-in-out;
    }

    &:hover ~ input::after,
    &:hover::after {
      font-variation-settings: "FILL" 1, "wght" 500, "GRAD" 0, "opsz" 24;
      color: $black;
    }
  }

  input[type="checkbox"] {
    appearance: none;

    &::after {
      cursor: pointer;
      content: "workspace_premium";
      transition: all $card-transition-duration ease-in-out;
    }
    &:hover::after {
      font-variation-settings: "FILL" 1, "wght" 500, "GRAD" 0, "opsz" 24;
      color: $black;
    }
    &:checked::after {
      font-variation-settings: "FILL" 1, "wght" 500, "GRAD" 0, "opsz" 24;
      color: $primary-color;
    }
  }
</style>
