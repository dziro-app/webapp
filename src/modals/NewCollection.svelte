<script lang='ts'>
  export let title: string = "Nueva colección";
  export let onClose: () => void
  export let show : boolean = false

  import Button from "../components/Button.svelte"
  import TextInput from "../components/inputs/Text.svelte"
  import EmojiInput from "../components/inputs/Emoji.svelte"
  import ColorInput from "../components/inputs/Color.svelte"

  import BaseModal from "./Base.svelte"

</script>

{#if show}
  <BaseModal onClose={onClose} >
    <div class="NewCollection">
      <div class="header">
        <h3> {title} </h3>
      </div>
      <div class="content">
        <p>Agrega la información de la colección</p>
        <form>
          <TextInput label="Nombre" name="name" />
          <EmojiInput label="Emoji" name="emoji" />
          <ColorInput label="Color" name="color" />
          <div class="buttonWrapper">
            <Button>
              CREAR
            </Button>  
          </div>
        </form>
      </div>
    </div>
  </BaseModal>
{/if}

<style lang='scss'>
  @import "../Styles/_colors.scss";
  @import "../Styles/_texts.scss";

  .header {
    background: $black;
    box-sizing: border-box;
    padding: 16px 120px;
    h3 {
      border: 2px solid $white;
      color: $white; 
      @include title;
      padding: 16px 100px;
      margin: 0;
    }

  }
  
  .content {
    background: $white;
    padding: 1em;
    
    p {
      @include subtitle;
      text-align: center;
    }
    form {
      display: grid;
      grid-row-gap: 28px;
      margin: 0 auto;
      width: 300px;

      .buttonWrapper {
        margin: 8px 0;
        text-align: center;
      }
    }
  }
</style>