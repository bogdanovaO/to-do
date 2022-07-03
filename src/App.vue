<template>
    <Wrapper>
      <router-view />
    </Wrapper>
</template>
<script>
import Wrapper from "./components/atoms/Wrapper";

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
@import url('https://fonts.googleapis.com/css2?family=Padauk:wght@400;700&display=swap');
body {
  font-family: 'Padauk', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #fafafa;
}
</style>
