<script lang='ts'>
  import * as yup from 'yup'

  import type {CreateCollectionDto} from "../dtos/Collection"
  
  export let title: string = "Nueva colección"
  export let onClose: () => void
  export let onSubmit: (data: CreateCollectionDto) => void
  export let show : boolean = false

  import Button from "dziro-components/src/Components/Button.svelte"
  import TextInput from "dziro-components/src/Components/InputText.svelte"
  import EmojiInput from "dziro-components/src/Components/InputEmoji.svelte"
  import ColorInput from "dziro-components/src/Components/InputColor.svelte"

  import BaseModal from "dziro-components/src/Components/ModalBase.svelte"

  const schema = yup.object().shape({
    name: yup.string().required("El nombre no puede ser vacío"),
    emoji: yup.string().required("El emoji no puede estar vacío"),
    color: yup.string().required("El color no puede estar vacío"),
  })

  let values: CreateCollectionDto = {
    name: "Ropa",
    emoji: "👕",
    color: "#D8D00C"
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
  <BaseModal title={title} onClose={onClose} >
    <div class="NewCollection">
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
  </BaseModal>
{/if}

<style lang='scss'>
  @import "../../../components/src/Styles/_colors.scss";
  @import "../../../components/src/Styles/_texts.scss";

  .errorMessage {
    background: $error;
    color: $white;
    text-align: center;
    padding: 0.5em;
    margin: 1em 0;
  }  
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
  
</style>