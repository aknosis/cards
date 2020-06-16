<template>
    <img class="card" :alt="card.name" :src="'/cards/'+card.code+'.svg'" />
</template>
<script>

// import Card from '@/cards/card';

export default {
    name: 'Card',
    props: {
        card : {
            type: Object
        }
    }
}

</script>
<style scoped>
    img {
        max-height: 200px;
    }
</style>