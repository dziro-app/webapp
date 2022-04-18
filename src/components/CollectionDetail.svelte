<script lang="ts">
  import Color from "color"
  import type { Collection } from "../Entities/Collection"
  import Icon from "./icons/Icon.svelte"

  export let collection: Collection

  let showOptions = false

</script>

<div style={`background: ${Color(collection.color).lightness(60).desaturate(0.3).lighten(0.5)}`}>
  <div 
    style={`background: ${collection.color}`}
    class="header">
    <div class="iconWrapper">
      {collection.emoji}
    </div>
    <h3 style={`color: ${Color(collection.color).darken(0.35).desaturate(0.5).saturate(0.1)}`} > 
      {collection.name}
    </h3>
    <div class="menu">
      <Icon 
      on:click={() => { showOptions = !showOptions }}
      color={Color(collection.color).darken(0.35).desaturate(0.5).saturate(0.1)} />
      {#if showOptions}
        <div class="options">
          <div class="option">Editar</div>
          <div class="option">Eliminar</div>
        </div>
      {/if}
    </div>
  </div>
  <div class="items">
    {#each collection.items as item}
    {item.price}
    {/each}
  </div>
</div>

<style lang="scss">
  @import "../Styles/_texts.scss";
  @import "../Styles/_colors.scss";

  .header {
    align-items: center;
    display: grid;
    grid-template-columns: 36px 1fr 20px;
    padding: 24px;

    .iconWrapper {
      align-items: center;
      background: $white;
      border-radius: 50%;
      display: flex;
      font-size: 24px;
      height: 36px;
      justify-content: center;
      width: 36px;
    }
    h3 {
      font-size: 36px;
      font-family: 'Raleway', sans-serif;
      margin: 0;
      margin-left: 16px;
    }

    .menu {
      cursor: pointer;
      position: relative;
    }

    .options {
      background: $black;
      position: absolute;
      color: $white;
      right: 0;
      top: 100%;
      padding: 10px 5px;

      .option {
        @include mini-text;
        cursor: pointer;
        padding: 0.5em 5px;
        &:hover {
          background: $white;
          color: $black;
        }
      }
    }
    
  }
</style>