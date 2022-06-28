<script lang="ts">
  export let text: string
  export let hidden = false
</script>

<div>
  <span class="copy-something" on:click={() => navigator.clipboard.writeText(text)}
    ><span class="icon-14">content_copy</span> <slot />:</span
  >
  <abbr class:hidden title={hidden ? "click to reveal" : text}>{text}</abbr>
</div>

<style lang="scss">
  div {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  abbr {
    text-decoration: none;
  }

  .hidden {
    filter: blur(4px);
    cursor: pointer;
    transition: filter 0.2s ease-in-out;

    &:active {
      filter: blur(0px);
    }
  }

  .copy-something {
    cursor: pointer;
    transition: color 0.2s ease-in-out;

    &:hover {
      opacity: 0.6;
    }
    &:active > span {
      opacity: 0.8;
    }
  }
</style>
