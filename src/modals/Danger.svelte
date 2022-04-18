<script lang="ts">
  export let errors: Array<string> 
</script>

{#if errors.length > 0 }
  <div class="Danger">
    {#each errors as error}
      <div class="errorMessage" > {error} </div>
    {/each}
  </div>
{/if}

<style lang="scss" >
  @import "../../../components/src/Styles/_colors.scss";
  @import "../../../components/src/Styles/_texts.scss";

  .errorMessage {
    @include small-text;
    background: $error;
    color: $white;
    text-align: center;
    padding: 0.5em;
    margin: 5px 0;
  }  
</style>