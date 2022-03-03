<script lang='ts' >
  import type { SessionRepo } from "../../Repository/Remote/session"

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

  <button on:click={spotifyLogin} > Spotify </button>

</div>

<style lang='scss' >
  .Landing {
    padding: 1em;
  }
</style>