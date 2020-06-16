
<template>
  <div>
    <h1>GAME</h1>
    <div>
      <Hand :hand="hand" />
      {{ ranker.rank(hand)}}
    </div>
  </div>
</template>

<script>

import { ShuffledDeck } from '@/cards/deck';
import Hand from './Hand';
import Ranker from '@/games/poker/ranker';

const deck = ShuffledDeck;

const hand = deck.deal(5);
const ranker = new Ranker(hand);

export default {
  name: 'Game',
  components: {
    Hand,
  },
  data: () => ({
      hand,
      ranker
  })
}
</script>