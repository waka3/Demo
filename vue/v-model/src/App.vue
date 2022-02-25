<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <child-comp v-model="comp" />
    <child-input v-model="input" />
    <child-select v-model="sel" :options="options" />
  </div>
</template>

<script>
import ChildComp from './components/ChildComp.vue'
import ChildInput from './components/ChildInput.vue'
import ChildSelect from './components/ChildSelect.vue'
export default {
  components: { ChildComp, ChildSelect, ChildInput },
  name: 'App',
  data(){
    return {
      input: 'input',
      comp: 'comp',
      sel: 5,
      options: [
        {label: '测试1', value: 1},
        {label: '测试2', value: 2},
        {label: '测试3', value: 3},
        {label: '测试4', value: 4},
        {label: '测试5', value: 5},
        {label: '测试6', value: 6},
        {label: '测试7', value: 7}
      ]
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
