<script lang='ts' >
  import type { SessionRepo } from "../../Repository/Remote/session"
  import Button from "dziro-components/src/Components/Button.svelte"

  export let repository: SessionRepo

  const spotifyLogin = async () => {
    try {
      const res = await repository.login()
      window.location.href = res.redirect
    } catch(e) {
      console.log(e)
    }
  }
</script>

<div class="Landing">

  <h1> Login </h1>

  <Button on:click={spotifyLogin} > Spotify </Button>

</div>

<style lang='scss' >
  @import "../../../../components/src/Styles/_texts.scss";
  .Landing {
    padding: 1em;
    h1 {
      @include title;
    }
  }
</style>