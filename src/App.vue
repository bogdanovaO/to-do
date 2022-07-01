<template>
    <Wrapper>
      <BreadCrumbsStyled>link/link/link</BreadCrumbsStyled>
      <router-view />
    </Wrapper>
</template>
<script>
import Wrapper from "./components/Wrapper";
export default {
  components: {
    Wrapper,
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
  background-color: #fafafa;
}
</style>
