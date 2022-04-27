<script lang="ts" >
  import * as yup from 'yup'

  import type {CreateItemDto} from "../dtos/Item"
  import BaseModal from "dziro-components/src/Components/ModalBase.svelte"

  import Button from "dziro-components/src/Components/Button.svelte"
  import Danger from "./Danger.svelte"
  import TextInput from "dziro-components/src/Components/InputText.svelte"

  export let title: string = "Nuevo artículo"
  export let submitText: string = "CREAR"
  export let onClose: () => void
  export let onSubmit: (data: CreateItemDto) => void
  export let defaultValues: CreateItemDto | null = null

  const schema = yup.object().shape({
    title: yup.string().required("El título no puede ser vacío"),
    image: yup.string().url("Url inválida").required("La imagen no puede ser vacío"),
    price: yup.string().required("El precio no puede estar vacío"),
    website: yup.string().url("Url inválida").required("El website no puede estar vacío"),
  })

  let values: CreateItemDto = {
    title: "",
    image: "",
    price: 0,
    website: ""
  }

  let extCode: string = ""
  let errors = []
  let showCodeInput = false


  if (defaultValues) {
    values = { 
      ...values,
      ...defaultValues
    }
  }

  const validateCode = () => {
    try {
      let dataStr = window.atob(extCode)
      values = JSON.parse(dataStr)
      showCodeInput = false
      errors = []
    } catch(e) {
      errors = ["Código inválido"]
    }
  }

  const validateForm = async (e: Event) => {
    try {
      await schema.validate(values, { abortEarly: false })
      onSubmit(values)
    } catch (e) {
      errors = e.errors
    }
  }

</script>

<BaseModal title={title} onClose={onClose} >

  <form autocomplete="off" on:submit|preventDefault={validateForm} >
    <p>Agrega la información del artículo</p>
    <p class='lit'> 
      <span>Para usar</span>
      {#if showCodeInput}
        <span> el formulario completo </span>
      {:else}
        <span> un código de la extensión </span>
      {/if}
      <span class="link" on:click={() => { showCodeInput = ! showCodeInput}} > haz click aquí </span>
    </p>
    <Danger errors={errors} />

  {#if showCodeInput}
    <TextInput label="Código de extensión" name="extensionCode" bind:value={extCode} />
    <div class="buttonWrapper">
      <Button type="button" on:click={validateCode} > Validar código </Button>  
    </div>
  {:else}
    <TextInput label="Título" name="title" bind:value={values.title} />
    <TextInput label="Imagen (Url)" name="image" bind:value={values.image} />
    <TextInput label="Precio" name="price" bind:value={values.price} />
    <TextInput label="Sitio web" name="website" bind:value={values.website} />
    <div class="buttonWrapper">
      <Button type="submit" >
        {submitText}
      </Button>  
    </div>
  {/if}
  </form>

</BaseModal>


<style lang='scss'>
  @import "../../node_modules/dziro-components/src/Styles/_colors.scss";
  @import "../../node_modules/dziro-components/src/Styles/_texts.scss";
  p {
    @include subtitle;
    text-align: center;
  }

  .lit {
    @include small-text;
    margin: 0;

    .link{
      text-decoration: underline;
      &:hover {
        cursor: pointer;
      } 
    }
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