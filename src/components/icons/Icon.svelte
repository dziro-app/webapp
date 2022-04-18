<script lang="ts">
  export let name: "dots" | "chevron" | "globe" = "dots"
  export let size = 32
  export let color = "#c0c0c0"
</script>

<svg on:click width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
  {#if name === "dots"}
    <path d="M16 17.5C16.8284 17.5 17.5 16.8284 17.5 16C17.5 15.1716 16.8284 14.5 16 14.5C15.1716 14.5 14.5 15.1716 14.5 16C14.5 16.8284 15.1716 17.5 16 17.5Z" fill={color}/>
    <path d="M16 9.5C16.8284 9.5 17.5 8.82843 17.5 8C17.5 7.17157 16.8284 6.5 16 6.5C15.1716 6.5 14.5 7.17157 14.5 8C14.5 8.82843 15.1716 9.5 16 9.5Z" fill={color}/>
    <path d="M16 25.5C16.8284 25.5 17.5 24.8284 17.5 24C17.5 23.1716 16.8284 22.5 16 22.5C15.1716 22.5 14.5 23.1716 14.5 24C14.5 24.8284 15.1716 25.5 16 25.5Z" fill={color}/>
  {:else if name === "globe"}
    <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M4.6875 12H27.3125" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M4.6875 20H27.3125" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16 27.6748C18.7614 27.6748 21 22.4478 21 15.9998C21 9.5519 18.7614 4.32483 16 4.32483C13.2386 4.32483 11 9.5519 11 15.9998C11 22.4478 13.2386 27.6748 16 27.6748Z" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
  {/if}
</svg>
  



<style lang="scss">

</style>