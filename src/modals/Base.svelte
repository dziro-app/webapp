<script lang="ts" >
  import { fly } from 'svelte/transition'
  export let onClose: () => void
  
  let ref

  const defaultClose = (e) => {
    if(ref === e.target) {
      onClose()
    }
  }
</script>

<div 
  class="Modal" 
  bind:this={ref}
  transition:fly="{{ y: -10}}"
  on:click={defaultClose}  >
  <slot></slot>
</div>

<style lang="scss">
  .Modal {
    align-items: center;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    height: 100vh;
    justify-content: center;
    left: 0;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 2;
  }
</style>