<template>
  <div>
    <Wrapper xy="0 15 5 0">
      <Modal @close="toggleWarn" v-if="warning" :title="warningMessage">
        <template v-slot:header>
          <Title1>{{ warningMessage }} </Title1>
        </template>
        <template v-slot:footer>
          <Row v-if="warningType === 'cancel'" :rpt="2" size="auto" position="center">
            <router-link to="/">
              <Button type="cansel">Нет</Button>
            </router-link>
            <Button type="confirm" @click="onSave">Да</Button>
          </Row>
          <Row v-if="warningType === 'delete'" :rpt="2" size="auto" position="center">
    
              <Button type="cansel" @click="toggleWarn">Нет</Button>

            <Button type="confirm" @click="deleteNote" >Да</Button>
          </Row>
        </template>
      </Modal>
      <Row :rpt="2" size="auto" position="space-between">
        <StyledInput
          placeholder="Введите заголовок"
          v-model="note.title"
        ></StyledInput>
        <!-- <Title1 v-else> {{note.title}}</Title1> -->

        <Row :rpt="4" size="auto" position="end">
          <Create @handleClick="createTask" :w="40" :h="40" />
          <Save @handleClick="onSave" />
          <Cancel @handleClick="toggleWarn" />
          <Trash @handleClick="toggleWarn" />
        </Row>
      </Row>
    </Wrapper>
    <NoteContainer>
      <div v-if="note && note.tasks">
        <TaskItem
          @saveTask=""
          @deleteTask="deleteTask"
          v-for="task in note.tasks"
          :task="task"
        />
      </div>
    </NoteContainer>
  </div>
</template>

<script>
import { Title1 } from "../atoms/Text";
import Trash from "../icons/Trash.vue";
import Wrapper from "../atoms/Wrapper";
import Row from "../atoms/Row";
import { NoteContainer } from "../atoms/Containers";
import TaskItem from "../molecules/TaskItem.vue";
import Cancel from "../icons/Cancel.vue";
import Save from "../icons/Save.vue";
import Create from "../icons/Create.vue";
import StyledInput from "../atoms/StyledInput";
import Modal from "../molecules/Modal.vue";
import { Button } from "../atoms/Button";

export default {
  name: "NoteEditor",
  data() {
    return {
      note: null,
      warning: false,
      warningMessage: null,
    };
  },
  // watch: {
  //   note: {
  //     handler(newValue, oldValue) {
  //       debugger
  //     },
  //     deep: true
  //   }
  // },
  components: {
    Title1,
    Wrapper,
    Row,
    NoteContainer,
    TaskItem,
    Trash,
    Save,
    Cancel,
    StyledInput,
    Create,
    Modal,
    Button,
  },
  computed: {
    createMod: function () {
      return this.$route.name === "CreatePage" ? true : false;
    },
  },

  created() {
    this.$store.dispatch("loadNotes");
    this.notes = this.$store.state.notes;
    this.createMod ? this.getTemplateNote() : this.getCurrentNote();
  },
  updated() {
    // this.note  = null
  },
  methods: {
    getCurrentNote() {
      this.$store.dispatch("getNote", this.$route.params.id);
      this.note = this.$store.state.currentNote;
    },
    getTemplateNote() {
      this.$store.dispatch("createNoteTemplate");
      this.note = this.$store.state.noteTemplate;
    },
    createTask() {
      this.$store.dispatch("createTaskTemplate");
      this.note.tasks.push(this.$store.state.taskTemplate);
    },
    deleteTask(id) {
      let ind = null;
      this.note.tasks.find((el, i) => {
        if (el.id === id) {
          ind = i;
          return;
        }
      });
      this.note.tasks.splice(ind, 1);
    },
    deleteNote() {
      this.$store.dispatch("deleteNote", this.note.id)
      this.$router.push({ name: "Home" });

    },
    onSave() {
      this.createMod
        ? this.$store.dispatch("createNote", this.note)
        : this.$store.dispatch("editNote", this.note);

      this.$router.push({ name: "Home" });
    },
    toggleWarn(type) {
      type === "cancel"
        ? (this.warningMessage = "Сохранить изменения?")
        : type === "delete"
        ? (this.warningMessage = "Вы уверены что хотите удалить заметку?")
        : null;
      this.warningType = type
      this.warning = !this.warning;
    },
  },
};
</script>