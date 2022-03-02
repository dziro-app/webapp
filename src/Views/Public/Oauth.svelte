<script lang="ts" >
  import { onMount } from "svelte";
  import { useParams, useLocation } from "svelte-navigator"
  import type { SessionRepo } from "../../Repository/Remote/session"

  import { sessionStore } from "../../Store/session"

  export let repository: SessionRepo

  const params = useParams()
  const location = useLocation()

  const askToken = async() => {    
    const via = $params.via
    const query = new URLSearchParams($location.search);
    const code = query.get("code")

    const token = await repository.getToken(via, code)

    sessionStore.setToken(token)
    console.log(token)
    // sessionStore.setUser(userData)
  }

  onMount(() => {
    askToken()
  })

</script>

<h1>Espere</h1>