<script lang="ts" >
  import { onMount } from "svelte"
  import { navigate } from "svelte-navigator"
  import { useParams, useLocation } from "svelte-navigator"

  import type { SessionRepo } from "../../Repository/Remote/session"

  import { sessionStore } from "../../Store/session"

  export let repository: SessionRepo

  const params = useParams()
  const location = useLocation()

  const askToken = async() => {    

    try {
      const via = $params.via
      const query = new URLSearchParams($location.search);
      const code = query.get("code")
      
      const res = await repository.getToken(via, code)
      
      sessionStore.setToken(res.access_token)
      sessionStore.setUser(res.user)
      
      navigate("/", {replace: false})

    } catch(e) {
      console.log(e)
    }
  }

  onMount(() => {
    askToken()
  })

</script>

<h1>Espere</h1>