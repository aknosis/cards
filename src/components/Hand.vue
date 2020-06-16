<template>
  <div>
    <span>
      <Card v-for="card in hand.cards" :key="card.code" :card="card" />
    </span>
    <p>{{ hand.show() }}</p>
  </div>
</template>
<script>
import Card from "./Card";

export default {
  name: "Hand",
  components: {
    Card
  },
  props: {
    hand: {
      type: Object
    }
  }
};
</script>
<style scoped>
.card + .card {
    margin-left: 10px;
}
</style>