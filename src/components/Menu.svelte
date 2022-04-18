<script lang='ts' >
  import type { User } from "dtos/Session"
  import TriggerSvg from "../assets/CaretDoubleDown.svg"

  export let info: User
  let isOpen = false
</script>

<div class="Menu">
  <div class="info" >
    <img class="profilePic" src={info.profilePicture} alt="profile_image">
    <span class="username" > {info.username} </span>
    <img 
    class="trigger"
    class:open={isOpen}
    on:click={() => { isOpen = !isOpen }}
    src={TriggerSvg}
    alt="trigger" />
  </div>
  {#if isOpen}
    <div class="options">
      <div class="option"> Acerca de </div>
      <div class="option"> Cerrar sesíon </div>
    </div>
  {/if}
</div>

<style lang="scss" >
  @import '../Styles/_colors.scss';
  @import "../Styles/_sizing.scss";
  @import "../Styles/_texts.scss";
  .Menu {
    border: 2px solid $white;
    color: $white;
    padding: sizing(1) 5px;
    position: relative;
    .info {
      align-items: center;
      display: flex;
      justify-content: center;
    }

    .profilePic {
      object-fit: cover;
      height: 30px;
      width: 30px;
    }
    .username {
      padding: 0 20px;
      font-size: 20px;
      font-family: 'Raleway', sans-serif;
    }
    .trigger {
      cursor: pointer;
      transition: all 0.3s;
      width: 26px;
      &.open {
        transform: rotateZ(180deg);
      }
    }
    .options {
      @include small-text;
      background: $black;
      box-sizing: border-box;
      left: 0;
      padding: 10px 5px;    
      position: absolute;
      top: 105%;
      width: 100%;
      z-index: 3;
      .option {
        padding: 0.5em 5px;
        &:hover {
          background: $white;
          color: $black;
          cursor: pointer;
        }
      }
    }
  }
</style>
