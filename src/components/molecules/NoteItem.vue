<template>
  <div>
    <router-link style="text-decoration: none; color: inherit;"
 :to="'/editing/'+ note.id ">
    <ListContainer type="note">
      <Title2> {{note.title}}</Title2>
     <Row v-for="task in note.tasks" :key="task.id">
     {{task.title}}
      </Row>
    </ListContainer>
    </router-link>
  </div>
</template>

<script>
import { ListContainer } from "../atoms/Containers"
import Row from '../atoms/Row'
import {Title2} from "../atoms/Text"

export default {
  name: "NoteItem",
  components: {
    ListContainer,
    Row,
    Title2
  },
    props: {
    note: Object
  },
};
</script>