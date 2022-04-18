<script type="ts">
  export let label: string = ""
  export let name: string
  export let value

  import BaseInput from "./Base.svelte"

  let ref
  let defaultValue = value

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
      bind:value={value}
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
      cursor: pointer;
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
