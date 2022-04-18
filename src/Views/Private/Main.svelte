<script lang='ts' >
  import { Router, Route } from "svelte-navigator";
  import { sessionStore } from "../../Store/session"
  // Repositories
  import { CollectionRepo } from "../../Repository/Remote/collection"

  import WhishList from "./WhishLists.svelte"

  let repo

  $:{
    repo = new CollectionRepo("http://localhost:3001", $sessionStore.token)
  }


</script>

<Router>
  <Route path="/" >
    <WhishList repository={repo} />
  </Route>
</Router>

