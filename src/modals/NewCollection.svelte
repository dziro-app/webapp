<script lang='ts'>
  import * as yup from 'yup'

  import type {CreateCollectionDto} from "../dtos/Collection"
  
  export let title: string = "Nueva colección"
  export let onClose: () => void
  export let onSubmit: (data: CreateCollectionDto) => void
  export let show : boolean = false

  import Button from "../components/Button.svelte"
  import TextInput from "../components/inputs/Text.svelte"
  import EmojiInput from "../components/inputs/Emoji.svelte"
  import ColorInput from "../components/inputs/Color.svelte"

  import BaseModal from "./Base.svelte"

  const schema = yup.object().shape({
    name: yup.string().required("El nombre no puede ser vacío"),
    emoji: yup.string().required("El emoji no puede estar vacío"),
    color: yup.string().required("El color no puede estar vacío"),
  })

  let values: CreateCollectionDto = {
    name: "Ropa",
    emoji: "👕",
    color: "#AC86FF"
  }

  let errors = []

  const validateForm = async (e: Event) => {
    try {
      await schema.validate(values, { abortEarly: false })
      onSubmit(values)
    } catch (e) {
      errors = e.errors
    }
  }

</script>

{#if show}
  <BaseModal onClose={onClose} >
    <div class="NewCollection">
      <div class="header">
        <h3> {title} </h3>
      </div>
      <div class="content">
        <p>Agrega la información de la colección</p>
        {#each errors as error}
          <div class="errorMessage" > {error} </div>
        {/each}
        <form on:submit|preventDefault={validateForm} >
          <TextInput label="Nombre" name="name" bind:value={values.name} />
          <EmojiInput label="Emoji" name="emoji" bind:value={values.emoji} />
          <ColorInput label="Color" name="color" bind:value={values.color} />
          <div class="buttonWrapper">
            <Button type="submit" >
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


  .errorMessage {
    background: $error;
    color: $white;
    text-align: center;
    padding: 0.5em;
    margin: 1em 0;
  }

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