<script lang="ts" >
  import { Router, Route } from "svelte-navigator";
  import { SessionRepo } from "../../Repository/Remote/session"

  import Login from "./Login.svelte"
  import Landing from "./Landing/Main.svelte"
  import Oauth from "./Oauth.svelte";

  const repo = new SessionRepo("http://localhost:3001")

</script>

<Router>
  <Route path="/auth/:via/callback">
    <Oauth repository={repo} />
  </Route>
  <Route path="/" >
    <Landing />
  </Route>
  <Route path="/login" >
    <Login repository={repo} />
  </Route>
</Router>