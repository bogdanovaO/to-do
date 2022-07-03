<template>
  <div v-if="task && mode">
    <ListContainer type="note">
      <Row  :rpt="1" size="5% 85% 5%" position="start" padding="10px 10px 10px 15px">
        <CheckBox @onChange="$emit('handleCheck', task.id)" :key="task.id" :checked="task.checked" />
  
        <StyledInput
          size="16px"
          type="text"
          placeholder="Что нужно сделать?"
          v-model="task.title"
        />
        
        
        <!-- <Row :rpt="1" size="auto" position="end"> -->
          <CancelMin @handleClick="$emit('deleteTask', task.id)"></CancelMin>
        <!-- </Row> -->
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

  },
};
</script>