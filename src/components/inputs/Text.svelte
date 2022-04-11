<script type="ts">
  export let label: string = ""
  export let name: string

  import BaseInput from "./Base.svelte"
</script>

<div class="TextInput">
  <BaseInput label={label} name={name} >
    <input id={name} name={name} placeholder={label} type="text">
  </BaseInput>
</div>

<style lang="scss">
  @import "../../Styles/_inputs.scss";

  .TextInput{
    input {
      @include input;
    }
  }
</style>
