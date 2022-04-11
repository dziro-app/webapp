<script lang="ts">
  import type { User } from 'dtos/Session';

  export let session: User | null

  import Logo from './Logo.svelte'
  import Menu from './Menu.svelte'

</script>

<header>
  <div class="logo_wrapper">
    <Logo />
  </div>
  <div>
    {#if session}
      <Menu info={session} />
    {/if}
  </div>
</header>

<style lang="scss" >
  @import '../Styles/_colors.scss';
  header {
    align-items: center;
    background: $black;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    padding: 0px 10px;
    height: 80px;
  }
</style>
