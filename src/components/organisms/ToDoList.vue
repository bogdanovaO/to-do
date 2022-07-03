<template>
  <div>
    <Wrapper xy="0 15 5 0" :positiony="0">
      <Row :rpt="1" size="1fr">
        <Title1>To-Do List</Title1>
      </Row>
      <Row :rpt="3" size="auto" position="end">
        <router-link
          style="text-decoration: none; color: inherit"
          :to="'/create'"
        >
          <Create />
        </router-link>
      </Row>



      
    </Wrapper>

    <MainContainer type="primary">
      <NoteItem v-for="note in notes" :note="note" />
    </MainContainer>
  </div>
</template>

<script>
import Row from "../atoms/Row";
import Wrapper from "../atoms/Wrapper";
import { Title1 } from "../atoms/Text";
import { MainContainer } from "../atoms/Containers";
import NoteItem from "../molecules/NoteItem.vue";
import Create from "../icons/Create.vue";


export default {
  name: "ToDoList",
  data() {
    return {
      notes: null,

    };
  },
  components: {
    Row,
    Wrapper,
    MainContainer,
    NoteItem,
    Title1,
    Create,

  },
  methods: {


  },

  created() {
    this.$store.dispatch("loadNotes");
    this.notes = this.$store.state.notes;
  },
};
</script>