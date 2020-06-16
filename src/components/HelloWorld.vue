<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Poker, built with JS and Vue live at <a href="https://www.twitch.tv/aknosis">https://www.twitch.tv/aknosis</a>
    </p>
    <h3>References</h3>
    <ul>
      <li><a href="https://www.me.uk/cards/" target="_blank" rel="noopener">SVG Card Generator</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
