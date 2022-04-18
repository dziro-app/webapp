<script lang="ts">
  import type {Item} from "../../Entities/Item"

  export let data: Item
  
</script>

<div class="Item">
  <img src={data.image} alt="preview" />

  <div class="info">

  </div>

  <div class="price">
    {data.price}
  </div>
</div>

<style lang="scss">
  @import "../../Styles/_colors.scss";
  @import "../../Styles/_sizing.scss";
  @import "../../Styles/_texts.scss";

  .Item {
    border-radius: 10px;
    box-sizing: 0 1px 4px 1px $smoke;
    padding: sizing(1);
    height: 291px;
    width: 225px;

    img {
      height: 175px;
      width: 216px;
    }

    .info {
      padding: sizing(2) sizing(3);
    }
    .price {
      @include subtitle;
      text-align: center;
    }
  }
</style>