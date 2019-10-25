<template>
  <div class="output">
    <span class="output-result">{{INPUT?INPUT:0}}</span>
  </div>
</template>
<script>
import {mapGetters} from 'vuex';

export default {
  name: "myoutput",
  computed:{
    ...mapGetters([
      'INPUT'
    ])
  },
  data: () => ({
  })
}
</script>
<style lang="css" scoped>
  .output{
    text-align: right;

  }
  .output-result{
    font-weight: 100;
    font-size: 50px;
    color: white;
  }
</style>
