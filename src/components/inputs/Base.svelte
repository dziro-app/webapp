<script type="ts">
  export let label: string = ""
  export let name: string
</script>

<div class="Input">
  {#if label !== ""}
    <label for={name}>{label}</label>
  {/if}
  <slot></slot>
</div>

<style lang="scss">
  @import "../../Styles/_inputs.scss";

  .Input{
    label {
      @include label;
    }
  }
</style>
