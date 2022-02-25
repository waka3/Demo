<template>
  <div>
    <input :value="modelVal" @input="$emit('input', $event.target.value)" />
  </div>
</template>

<script>
export default {
  name: 'ChildInput',
  // 显示指明modal的名字和绑定的方法
  model: {
    prop: 'modelVal', // 指向props的参数名
    event: 'input' // 事件名称
  },
  props: {
    modelVal: String
  }
}
</script>

<style scoped>
input{
  width: 250px;
  height: 40px;
  margin-top: 10px;
}
</style>