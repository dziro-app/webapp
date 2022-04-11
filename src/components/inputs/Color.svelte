<script type="ts">
  export let label: string = ""
  export let name: string

  import BaseInput from "./Base.svelte"

  let ref
  let defaultValue = "#000000"

  const changeEvent = (e) => {
    defaultValue = e.target.value
  }

</script>

<div class="ColorInput">
  <BaseInput label={label} name={name} >
    <div class="display" on:click={() => { ref.click() }}>
      {defaultValue}
      <div class="preview" style={`background: ${defaultValue}`} ></div>
    </div>
    <input
      id={name} name={name}
      bind:this={ref} 
      on:change={changeEvent}
      placeholder={label} type="color">
  </BaseInput>
</div>

<style lang="scss">
  @import "../../Styles/_inputs.scss";

  .ColorInput{
    .display {
      @include input;
      align-items: center;
      color: $gray;
      display: flex;
      justify-content: space-between;
    }
    input { display: none;}
    .preview {
      border-radius: 50%;
      height: 16px;
      width: 16px;
    }
  }
</style>
