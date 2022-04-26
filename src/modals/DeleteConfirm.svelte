<script lang="ts">
  import BaseModal from "dziro-components/src/Components/ModalBase.svelte"
  import Button from "dziro-components/src/Components/Button.svelte"

  export let onClose: () => void
  export let onConfirm: () => void
  export let confirmText: string
  

</script>

<BaseModal title="Eliminar" onClose={onClose} >
  <p> {confirmText} </p>
  <p>
    ¿Estás seguro que desea continuar?
  </p>
  <div class="buttonWrapper">
    <Button type="button" on:click={onClose} > Cancelar </Button>  
    <Button type="button" on:click={onConfirm}> Eliminar </Button>  
  </div>

</BaseModal>

<style lang="scss">
  @import "../../node_modules/dziro-components/src/Styles/_texts.scss";
  
  p {
    @include subtitle;
    text-align: center;
  }

  .buttonWrapper {
    margin: 8px 0;
    text-align: center;
  }

</style>