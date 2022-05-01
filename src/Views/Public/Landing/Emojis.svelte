<script lang="ts">

  import { randomNumber } from "./utils"

  let emojis = ["⌚", "🔭", "👜", "👗", "📺", "🏀", "🕶", "💊", "🔬", "📐", "📷", "💄", "🍍", "👕", "🚤", "🔒", "🛶", "🎷", "🎧", "👒", "🐔", "⏰", "🤖",  "📕", "👺"]

  let columns = 9
  let delta = 1
  let start = Math.ceil(columns /2)
  let auxCounter = 0

  const getEmojiStyle = () => {
    if (auxCounter >= delta)  {
      auxCounter = 0
      delta = delta + 2
      start = start - 1
    }

    const columnStyle = `grid-column: ${start+auxCounter}/${start+ auxCounter+1}`;
    const positionStyle = `transform: rotateZ(${randomNumber(-30, 30)}deg) translateY(${randomNumber(-30, 30)}px)`
    auxCounter ++;

    return `${columnStyle}; ${positionStyle}`
  }

</script>

<div class="emojis">
  {#each emojis as emoji}
    <div style={getEmojiStyle()} class="emoji">
      {emoji}
    </div>
  {/each}
</div>

<style lang="scss">
  @import "../../../../node_modules/dziro-components/src/Styles/_sizing.scss";
  .emojis {
    display: grid;
    font-size: 2em;
    grid-template-columns: repeat(9, 1fr);
    grid-row-gap: sizing(6);

    .emoji {
      text-align: center;
    }
  }

  @media screen and(max-width: 762px) {
    .emojis {
      font-size: 1.5em;
      // margin-top: 2em;
    }
  }
</style>