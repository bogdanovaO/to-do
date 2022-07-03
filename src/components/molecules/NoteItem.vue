<template>
  <div>
    <router-link style="text-decoration: none; color: inherit;"
 :to="'/editing/'+ note.id ">
    <ListContainer type="note">
      <Row :rpt="2" size="auto" position="space-between">
      <Title2> {{subStrTitle(note.title, 'note')}}</Title2>
      <Title5>{{completed}}</Title5>
      </Row>

      <Row v-for="task in note.tasks" :key="task.id" :rpt="2" size="auto" position="start" padding="10px 0 0 0">
        <Dot/>
             <Title4 >
     {{subStrTitle(task.title,  'task')}}
      </Title4>

      </Row>

    </ListContainer>
    </router-link>
  </div>
</template>

<script>
import { ListContainer } from "../atoms/Containers"
import Row from '../atoms/Row'
import {Title2,Title4, Title5} from "../atoms/Text"
import Dot from "../icons/Dot.vue"

export default {
  name: "NoteItem",
  components: {
    ListContainer,
    Row,
    Title2,
    Title4,
    Title5,
    Dot
  },
  props: {
    note: Object
  },
  computed: {
    completed: function() {
      const completed = this.note.tasks.filter(task => task.checked === true)
      const total = completed.length + ' / ' + this.note.tasks.length
      return total

    }

  },
  methods: {
        subStrTitle: function (title, type) {

          let num = type === 'note' ? 
          50 
          : type === 'task' ?
          80
          :
          50

      if (title.length < num) {
        return title
      }
      return  title.substr(0, num) + '...'
    }

  },
};
</script>