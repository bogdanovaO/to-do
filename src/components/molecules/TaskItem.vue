<template>
  <div v-if="task && mode">
    <ListContainer type="note">
      <Row @click="changeMode" :rpt="3" size="auto" position="start">
        <CheckBox :checked="true" />
        <StyledInput
          type="text"
          placeholder="Что нужно сделать?"
          v-model="task.title"
        >
          bgfbfgbfb
        </StyledInput>
        <Row :rpt="1" size="auto" position="end">
          <CancelMin @handleClick="$emit('deleteTask', task.id)"></CancelMin>
        </Row>
      </Row>
    </ListContainer>
  </div>
</template>

<script>
import { ListContainer } from "../atoms/Containers";
import { Title3 } from "../atoms/Text";
import Row from "../atoms/Row";
import CheckBox from "../atoms/Checkbox/CheckBox.vue";
import StyledInput from "../atoms/StyledInput";
import SaveMin from "../icons/SaveMin.vue";
import CancelMin from "../icons/CanselMin.vue";

export default {
  name: "TaskItem",
  data() {
    return {
      mode: "edit",
    };
  },
  components: {
    ListContainer,
    Title3,
    CheckBox,
    StyledInput,
    SaveMin,
    CancelMin,
    Row,
  },
  props: {
    task: Object,
  },
  methods: {
    changeMode() {
      this.mode = "create";
    },
  },
};
</script>