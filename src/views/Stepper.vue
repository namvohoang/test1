<template>
  <div>
      <div class="steps">
        <div class="circle" @click="changeStep(1)">1</div>
        <div class="line"></div>
        <div class="circle" @click="changeStep(2)">2</div>
        <div class="line"></div>
        <div class="circle" @click="changeStep(3)">3</div>
      </div>
      <component :is="step"></component>
  </div>
</template>
<script>
import Step1 from '../components/Step1';
import Step2 from '../components/Step2';
import Step3 from '../components/Step3';

export default {
  name: 'Stepper',
  components: {
    Step1,
    Step2,
    Step3
  },
  data: () => {
    return {
      step: 'step-1'
    }
  },
  methods: {
    changeStep(value) {
      this.step = 'Step' + value;
    }
  }
}
</script>
<style scoped>
  .steps {
    display: flex;
    align-items: center;
  }
  
  .circle {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border: 1px solid green;
    border-radius: 50%;
    cursor: pointer;
  }

  .circle:hover {
    color: white;
    background-color: green;
  }

  .line {
    border: 1px solid green;
    height: 0;
    flex-grow: 2;
    margin: 0 5px;
  }
</style>