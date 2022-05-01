<script lang='ts' >
  import Emojis from "./Emojis.svelte"
  import Logo from "dziro-components/src/Components/Logo.svelte"
  import Button from "dziro-components/src/Components/Button.svelte"
  import CollectonButton from "dziro-components/src/Components/CollectionButton.svelte"
  import CollectionItem from "dziro-components/src/Components/CollectionItem.svelte"
  import Extensions from "./Extensions.svelte"

  import { randomNumber } from "./utils"

</script>

<div class="Landing">

  <div class="content">
    <div class="Hero">
      <div>
        <h2>Organiza</h2>
        <h2 class="end" >tus</h2>
      </div>
      <div>
        <h2>Compras</h2>
        <h2 class="end">online</h2>
      </div>
    </div>
  </div>


  <Emojis />

  <div class="logo">
    <a href="./Free/" >
      <p>
        Usa la versión abierta, 100% gratuita, por siempre y para siempre.
      </p>
    </a>
    <a href="./Free/" >
      <Logo color="black" />
    </a>
  </div>

  <div id="video">
    <iframe 
      width="560" height="315" 
      src="https://www.youtube.com/embed/dytTKQXLhJA" title="YouTube video player" 
      frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
    </iframe>
    <div>
      <a href="./Free/" >  
        <Button> 👉 IR A LA APP</Button>
      </a>
    </div>
  </div>

  <div class="features">
    <div class="feature" id="lists" >
      <h3>
        Crea tus listas
      </h3>
      
      <div class="show">
        <div class="full" style={`transform: rotateZ(${randomNumber(-20, 0)}deg)`} >
          <CollectonButton name="Libros"  color="#1C84FF" emoji="📚"/>
        </div>
        <div style={`transform: rotateZ(${randomNumber(0, 20)}deg)`}>
          <CollectonButton name="Ropa"  color="#EDE63E" emoji="👕"/>
        </div>
        <div style={`transform: rotateZ(${randomNumber(-20, 0)}deg)`}>
          <CollectonButton name="Hogar"  color="#52E469" emoji="🏠"/>
        </div>
        <div class="full" style={`transform: rotateZ(${randomNumber(-15, 15)}deg)`}>
          <CollectonButton name="Navidad"  color="#E45264" emoji="🎄"/>
        </div>
      </div>
      
    </div>


    <div class="feature" id="cards">
      <h3>
        AGREGA ARTÍCULOS
      </h3>
      
      <div class="show">
        <CollectionItem
          name="Logitech MX Vertical Mouse Inalmbrico Ergonmico, Multi-Ordenador, 2,4 GHz/Bluetooth con Receptor Unifying USB, Seguimiento ptico 4000 DPI, 4 Botones, Carga Rpida, Porttil/PC/Mac/iPad OS - Negro : Amazon.com.mx: Electrnicos"
          image="https://m.media-amazon.com/images/I/71P5QJEcfRL._AC_SX679_.jpg"
          website="https://www.amazon.com.mx/Logitech-Inal%C3%A1mbrico-Ergon%C3%B3mico-Multi-Ordenador-Seguimiento/dp/B07FNJB8TT/ref=sr_1_6?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=36KTBO6O0X52Z&keywords=mouse+ergonomico&qid=1651358922&sprefix=mouse+etrgonomico%2Caps%2C102&sr=8-6"
          price={1259.00} />
        <CollectionItem
          name="ProsourceFit Rodillera y codera de Yoga de 15 mm, se Adapta a tapetes estndar para articulaciones Libres de Dolor en Yoga, Pilates, Ejercicios de Piso, Gris, 5/8\/15mm : Amazon.com.mx: Deportes y Aire Libre"
          image="https://m.media-amazon.com/images/I/81rf7pBk1-L._AC_SX679_.jpg"
          website="https://www.amazon.com.mx/dp/B079JPJVL1/ref=cm_gf_aada_iaaa_d_p0_e0_qd0_g6l9rdM6Kj7e4Y4EPpdk?th=1"
          price={287.79} />
        <CollectionItem
          name="JBLXtreme 3 Altavoz porttil con Bluetooth, batera incorporada, funcin impermeable y resistente al polvo, y carga - azul, JBLXTREME3BLUAM (Reacondicionado) : Amazon.com.mx: Electrnicos"
          image="https://m.media-amazon.com/images/I/81wQeoJyDRL._AC_SX679_.jpg"
          website="https://www.amazon.com.mx/JBLXtreme-incorporada-impermeable-resistente-JBLXTREME3BLUAM/dp/B08T6F3KXT/ref=sr_1_5?pd_rd_r=e0e29850-a6e0-4651-8c67-8c3869b2f27e&pd_rd_w=jZOd8&pd_rd_wg=2MX62&pf_rd_p=66460e9c-a1aa-407d-950a-452dfe16ba7e&pf_rd_r=EB8SREA0B2WNCJ73984P&qid=1651359278&rnid=9687394011&s=electronics&sr=1-5&th=1"
          price={7021.04} />
      </div>
    </div>
  </div>


  <div class="feature" id="extensions">
    <h3>
      AGILIZA EL PROCESO CON LAS EXTENSIONES
    </h3>
    <div class="show">
      <Extensions />
    </div>
  </div>


  <footer>
    <div class="author">
      Hecho con  💜 por <a href="https://www.linkedin.com/in/everitosan/" target="_blank" > evesan </a>
    </div>
    <Logo />
  </footer>

</div>

<style lang='scss' >
  @import "../../../../node_modules/dziro-components/src/Styles/_texts.scss";
  @import "../../../../node_modules/dziro-components/src/Styles/_sizing.scss";
  @import "../../../../node_modules/dziro-components/src/Styles/_colors.scss";

  .Landing {
    background-color: #F8F8F8;
    margin-top: 3em;
  }

  .content {
    padding: 1em;
  }
  
  .Hero {
    align-items: center;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: sizing(4);
    justify-content: center;
    margin: 0 auto;
    max-width: 1060px;
    padding-top: sizing(8);
    text-transform: uppercase;
    h2 {
      @include title;
      font-size: 128px;
      font-weight: 400;
      margin: 0;
      transform: rotateZ(-12deg);
    }

    .end {
      text-align: right;
      font-size: 90px;
    }
  }

  .logo {
    background: $white;
    padding: 1.5em 0;
    text-align: center;
    display: flex;
    justify-content: space-around;
    align-items: center;
    grid-gap: sizing(2);
    margin: 4em 0;

    p {
      @include small-text;
    }
    a, a:visited {
      color: $black;
    }
  }

  #video {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    grid-gap: sizing(4);
    margin: sizing(15) 0;
  }

  .features {
    padding: 1em 2em;
  }

  .feature {
    align-items: center;
    align-content: center;
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    justify-content: center;
    text-align: center;
    padding: 4em 0;

    h3 {
      @include title;
      font-weight: 100;
      text-transform: uppercase; 
      max-width: 400px;
      margin: 0 auto;
    }
  }

  #lists {
    .show {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: sizing(6);
    
      div {
        justify-self: center;
        transition: all 0.3s;
      }
      .full {
        grid-column: 1/3;
      }
    }
    &:hover {
      .show div {
        transform: rotateZ(0deg) !important;
      }
    }
    :global(.CollectionButton) {
      width: 200px;
    }
  }

  #cards {
    .show {
      display: flex;
      justify-content: center;

      :global(a) {
        transition: all 0.3s;
      }

      :global(a:nth-child(2)) {
        position: relative;
        z-index: 1;
      }
      
      :global(a:first-child) {
        transform: rotateZ(0deg) translateX(100%);
        transform-origin: 100% 100%;
      }
      :global(a:last-child) {
        transform: rotateZ(0deg) translateX(-100%);
        transform-origin: 0% 100%;
      }
    }
    &:hover {
      .show {
        :global(a:first-child) {
          transform: rotateZ(-20deg) translateX(60%);
        }
        :global(a:last-child) {
          transform: rotateZ(20deg) translateX(-60%);
        }
      }
    }
  }

  footer {
    background: $black;
    color: $white;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1em;

    a, a:hover, a:visited {
      color: $white;
    }

    .author {
      @include small-text;
    }
  }

  @media screen and(max-width: 1090px) {
    .Hero {
      max-width: 800px;

      h2 { font-size: 90px;}
      .end {
        font-size: 60px;
      }
    }
  }

  @media screen and(max-width: 950px) {
    .feature {
      grid-template-columns: 1fr;
      .show {
        margin-top: 3em;
      }
    }
  }

  @media screen and(max-width: 762px) {
    .Hero {
      max-width: 400px;
      display: block;
      .end {
        text-align: center;
      }
    }

    .logo {
      flex-direction: column;
    }


    .features {
      padding: 0.5em;
    }

    #lists {
      :global(.CollectionButton) {
       width: 135px;
      }
    }

    #cards {
      overflow: hidden;
      .show {
        :global(a:first-child) {
          transform: rotateZ(-20deg) translateX(60%);
        }
        :global(a:last-child) {
          transform: rotateZ(20deg) translateX(-60%);
        }
      }
    }
  }
</style>