<template>
  <div class="calc-wrp">
      <div class="calc">
        <div class="display">
          <myoutput></myoutput>
        </div>
        <div class="control-panel">
          <btn v-for='btn in buttons' :text='btn.text' :orange='btn.orange'></btn>
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
    buttons: [{text:'AC'},{text:'+/-'},{},{text:'÷', orange: true},{text:'9'},{text:'8'},{text:'7'},{text:'*', orange: true},{text:'6'},{text:'5'},{text:'4'},{text:'-', orange: true},{text:'3'},{text:'2'},{text:'1'},{text:'+', orange: true},{text:'0'},{},{text:'.'},{text:'=', orange: true},]
  })
}
</script>
<style lang="css" scoped>
  .calc-wrp{
    margin: 200px auto;
    width: 320px;
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
