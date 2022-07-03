<template>
  <div class="hello">
    <Wrapper />
  </div>
</template>

<script>
import Wrapper from '../Wrapper.js';
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  components: {
    Wrapper,
  },
};
</script>

<style scoped lang="scss">

</style>
