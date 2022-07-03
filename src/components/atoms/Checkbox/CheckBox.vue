<template>
<div @click="handleClick">
  <Checked v-if="checked"/>
  <Unchecked v-else/>

</div>

  
</template>

<script>
import Checked from "./Checked.vue"
import Unchecked from "./Unchecked.vue"
export default {
  name: 'Checkbox',
  components: {
    Checked,
    Unchecked
  },
  props: {
    checked: Boolean,
    id: Number
  },
  methods: {
    handleClick()  {
      this.$emit("onChange", this.props.id)
    }
  }
}
</script>