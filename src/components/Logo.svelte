<script>
  import LogoSvg from "../assets/logo.svg"
</script>

<div class="Logo">
  <img src={LogoSvg} alt="logo" />
  <div class="name">
    DZIRO
  </div>
</div>

<style lang='scss' >
  @import '../Styles/_colors.scss';
  @import '../Styles/_texts.scss';
  @import '../Styles/_sizing.scss';
  .Logo {
    @include title;
    align-items: center;
    border: 2px solid $white;
    display: flex;
    color: $white;
    padding: sizing(0.5) sizing(1);

    .name {
      padding-left: 0.3em;
    }
  }
</style>
