<script lang='ts' >
  import { Router, Route } from "svelte-navigator"
  import { sessionStore } from "../../Store/session"
  // Repositories
  import { ApiUrl} from "../../Repository/Remote"
  import { CollectionRepo } from "../../Repository/Remote/collection"
  import { ItemRepo } from "../../Repository/Remote/item"
  import { FireBaseanalytics } from "../../Repository/Analytics"


  import WhishList from "./WhishLists.svelte"

  let cRepo
  let aRepo
  let iRepo

  $:{
    cRepo = new CollectionRepo(ApiUrl, $sessionStore.token)
    iRepo = new ItemRepo(ApiUrl, $sessionStore.token)
    aRepo = new FireBaseanalytics()
  }

</script>

<Router basepath="/Pro">
  <Route path="/" >
    <WhishList 
      analyticsRepo={aRepo}
      itemRepo={iRepo} 
      collectionRepo={cRepo}
    />
  </Route>
</Router>

