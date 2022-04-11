<script lang='ts' >
  import type { User } from "dtos/Session"
  import TriggerSvg from "../assets/CaretDoubleDown.svg"

  export let info: User;
</script>

<div class="Menu">
  <img class="profilePic" src={info.profilePicture} alt="profile_image">
  <span class="username" > {info.username} </span>
  <img class="trigger" src={TriggerSvg} alt="trigger" />
</div>

<style lang="scss" >
  @import '../Styles/_colors.scss';
  .Menu {
    align-items: center;
    border: 2px solid $white;
    color: $white;
    height: 60px;
    display: flex;
    justify-content: center;
    padding: 0 5px;


    .profilePic {
      object-fit: cover;
      height: 45px;
      width: 45px;
    }

    .username {
      padding: 0 20px;
      font-size: 20px;
      font-family: 'Raleway', sans-serif;
    }

    .trigger {
      cursor: pointer;
      width: 32px;
    }
  }
</style>
