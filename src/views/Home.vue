<template>
  <div>
    <ToDoList/>
  </div>
</template>
<script>

import ToDoList from '../components/organisms/ToDoList.vue'


export default {
  name: 'Home',
  components: {
    ToDoList
  },
  props: {
    theme: Object
  },
}
</script>

