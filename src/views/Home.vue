<template>



<MainContainer type="primary">
  <NotePreview/>
  


</MainContainer>




  
</template>

<script>
// @ is an alias to /src
import BreadCrumbsStyled from '../components/BreadCrumbs/BreadCrumbsStyled';

import { MainContainer}  from '../components/Containers'
import NotePreview from '../components/NotePreview.vue';
import Text from '../components/Text'


export default {
  name: 'Home',
  components: {
    BreadCrumbsStyled,

    MainContainer,
    NotePreview

  }
}
</script>
