<script type="ts">
  export let label: string = ""
  export let name: string
  export let value

  import BaseInput from "./Base.svelte"
</script>

<div class="EmojiInput">
  <BaseInput label={label} name={name} >
    <input id={name} name={name} placeholder={label} bind:value={value} type="text">
  </BaseInput>
</div>

<style lang="scss">
  @import "../../Styles/_inputs.scss";

  .EmojiInput{
    input {
      @include input;
    }
  }
</style>
