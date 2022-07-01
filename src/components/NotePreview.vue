<template>
  <div>
    <router-link to="/editing">
    <NoteContainer type="note">
      <Title2> Название заметки</Title2>
    </NoteContainer>
    </router-link>
  </div>
</template>

<script>
import { NoteContainer } from "./Containers";
import { Title2 } from "./Text";
import CheckBox from "./CheckBox";
export default {
  name: "NotePreview",
  components: {
    NoteContainer,
    Title2,
    CheckBox,
  },
};
</script>