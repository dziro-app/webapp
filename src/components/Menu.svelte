<script lang='ts' >
  import type { User } from "../Entities/Session"

  export let info: User;
</script>

<div class="Menu">
  <img src={info.profile} alt="profile_image">
  <span> {info.username} </span>
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


    img {
      object-fit: cover;
      height: 45px;
      width: 45px;
    }

    span {
      font-size: 20px;
      padding: 0 20px;
    }
  }
</style>
