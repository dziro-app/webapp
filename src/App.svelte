<script lang="ts">

  import Header from "dziro-components/src/Components/Header.svelte"
  import Landing from "./Views/Public/Landing/Main.svelte"


  import { FireBaseanalytics } from "./Repository/Analytics"

  const fs = new FireBaseanalytics()

</script>
<main>


  <div class="Header">
    <Header />
  </div>

  <Landing analyticsRepo={fs} />

</main>

<style global lang="scss">
  @import "./Styles/_global.scss";
  .Header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 3;
  }
</style>

