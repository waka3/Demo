<template>
  <div>
    <input :value="value" @input="$emit('input', $event.target.value)" />
  </div>
</template>

<script>
export default {
  name: 'ChildComp',
  props: {
    value: String
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