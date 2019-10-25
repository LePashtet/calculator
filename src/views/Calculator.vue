<template>
  <div class="calc-wrp">
      <div class="calc">
        <div class="display">
          <myoutput></myoutput>
        </div>
        <div class="control-panel">
          <!-- Тут нужно поставить loop -->
          <btn text="AC"></btn>
          <btn text='+/-'></btn>
          <btn></btn>
          <btn :orange='true' text="÷"></btn>
          <btn text='9'></btn>
          <btn text='8'></btn>
          <btn text='7'></btn>
          <btn></btn>
          <btn></btn>
          <btn></btn>
          <btn></btn>
          <btn :orange='true' text='-'></btn>
          <btn></btn>
          <btn></btn>
          <btn></btn>
          <btn :orange='true' text='+'></btn>
          
          <btn></btn>
          <btn></btn>
          <btn text='.'></btn>
          <btn :orange='true' text='='></btn>
        </div>
      </div>
  </div>
</template>
<script>
import myoutput from "@/components/output.vue";
import btn from "@/components/button.vue";

export default {
  components: {
    myoutput,
    btn
  },

  name: "calculator",
  data: () => ({

  })
}
</script>
<style lang="css" scoped>
  .calc-wrp{
    margin: 200px auto;
    width: 328px;
    height:1000px;
  }
  .calc{

  }
  .display{
    background-color: grey;
  }
  .control-panel{
    display: flex;
    flex-wrap: wrap;
  }
</style>
