<template>
  <div id="app">
    <component :is="surface"></component>
    <p v-if="playing">
      <button @click="play">Let's Play!</button>
    </p>
  </div>
</template>

<script>
import Home from './components/Home.vue';
import Game from './components/Game.vue';
export default {
  name: 'App',
  components: {
    Home
  },
  data: () => ({
    surface: Game,
    playing: true
  }),
  methods: {
    play() {
      this.playing = false;
      this.surface = Game;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
