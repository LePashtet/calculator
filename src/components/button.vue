<template>
  <div class="btn-wrp">
    <button type="button" @click='enter' class="btn" :style="orange? 'background-color: orange':''" name="button">{{ text }}</button>
  </div>
</template>
<script>
export default {
  props: ['text','orange'],
  data: () => ({

  }),
  methods: {
    enter() {
      this.$store.dispatch('enter', this.text)
    }
  }
}
</script>
<style lang="css" scoped>
  .btn{
    border: 1px grey solid;
    width: 80px;
    height: 60px;
    background-color: #CDCDCD;
    font-size: 30px;
  }
  .btn-wrp{
    height: 60px;

  }
  .btn:active{
    box-shadow:  0 0 10px rgba(0,0,0,0.5);
  }
</style>
