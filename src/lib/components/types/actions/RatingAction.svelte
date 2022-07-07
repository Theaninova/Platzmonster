<script lang="ts">
  import {onMount} from "svelte"
  import {enhance} from "../../../form"
  import type {RatingInfo} from "../../../../routes/api/ratings/[associatedId]/get-rating"
  import {rateFormNames} from "../../../models/form-names/rate"

  export let item: {_id: string}
  let rating: Promise<RatingInfo>

  const reload = async () => {
    rating = fetch(`/api/ratings/${item._id}/get-rating`).then(it => it.json() as RatingInfo).then(it => {
      console.log(it?.userRating?.medal)
      return it
    })
  }

  onMount(reload)
</script>

{#await rating}
  <p>loading ratings</p>
{:then rating}
  <form
    method="post"
    action="/api/ratings/{item._id}/rate"
    use:enhance={{
      result: reload,
      error: async ({response}) => alert(await response.text()),
    }}
  >
    <span>{rating?.rating?.rating?.toFixed(2) || "no rating"}</span>

    {#each [1, 2, 3, 4, 5] as ratingOption}
      <input type="radio" name={rateFormNames.rating} checked={ratingOption === rating?.userRating?.rating} value={ratingOption} required/>
    {/each}
    <span>{rating?.rating?.medals || 0}</span>
    <input type="checkbox" name={rateFormNames.medal} checked={rating?.userRating?.medal} />
    <button type="submit">Submit Rating</button>
  </form>
{/await}
