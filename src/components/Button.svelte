<script lang='ts'>
  export let form: "outline" | "normal"  = "normal"
  export let type: "button" | "submit" = "button"
</script>

<button 
  class:outline={form==="outline"}
  class:normal={form==="normal"}
  type={type}
  on:click>
  <slot></slot>
</button>


<style lang="scss">
  @import "../Styles/_colors.scss";
  @import "../Styles/_texts.scss";

  button {
    @include  normal-text;
    border: none;
    background: none;
    cursor: pointer;

    &.normal {
      background: $asphalt;
      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.06);
      color: $white;
      padding: 16px 64px;
      transition: all 0.3s;
      &:hover {
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
      }
    }

    &.outline {
      border: 2px dashed $gray;
      border-radius: 6px;
      color: $gray;
      font-size: 18px;
      opacity: 0.8;
      transition: all linear 0.3s;
      padding: 16px;
      &:hover {
        background: $smoke;
        opacity: 1;
      }
    }
  }
</style>

