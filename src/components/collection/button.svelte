<script lang="ts" >
  import Color from "color"

  import type {Collection} from "../../Entities/Collection"
  export let collection: Collection
</script>

<div
  on:click
  style={`background: ${collection.color}`}
  class="CollectionButton">
  <div class="iconWrapper">
    {collection.emoji}
  </div>
  <div 
    style={`color: ${Color(collection.color).darken(0.35).desaturate(0.5)}`}
    class="name">
    {collection.name}
  </div> 
</div>

<style lang="scss" >
  @import "../../Styles/_colors.scss";
  @import "../../Styles/_texts.scss";

  .CollectionButton {
    align-items: center;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.05);
    cursor: pointer;
    display: flex;
    transition: all 0.3s;
    padding: 12px 16px;

    &:hover {
      box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    }
  }

  .iconWrapper {
    align-items: center;
    background: $white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    height: 29px;
    width: 29px;
  }

  .name {
    @include normal-text;
    margin-left: 16px;
  }
</style>