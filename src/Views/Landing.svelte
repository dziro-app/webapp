<script lang='ts' >
  import { SessionRepo } from "../Repository/Remote/session"

  const repo = new SessionRepo("http://localhost:3001")

  const spotifyLogin = async () => {
    const res = await repo.login()
    console.log(res)
    window.location.href = res.redirect
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