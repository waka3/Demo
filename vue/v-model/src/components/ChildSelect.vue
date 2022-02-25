<template>
  <select @change="handleChange">
    <option v-for="item in options" :key="item.value" :value="item.value" :selected="val === item.value">{{item.label}}</option>
  </select>
</template>

<script>
export default {
  name: 'ChildSelect',
  model: {
    prop: 'val', // 指向props的参数名
    event: 'change' // 事件名称
  },
  props: {
    val: [Number, String],
    options: Array
  },
  methods: {
    handleChange($event){
      this.$emit('change', $event.target.value)
    }
  }
}
</script>

<style scoped>
select{
  width: 250px;
  height: 40px;
  margin-top: 10px;
}
</style>