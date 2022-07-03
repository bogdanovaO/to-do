<template>
  <transition name="fade" >
    <div class="modal"  >
      <div class="modal__backdrop" />

      <div class="modal__dialog">
        <Wrapper xy="20 20 20 20" size="100%">

       
        <!-- <div class="modal__header"> -->
          <Row :rpt="2" size="auto" position="space-between">
                      <Title2>{{title}}</Title2>
          <Button  @click="$emit('close')" >
          <CanselMin/>
          </Button>
                </Row>
                 </Wrapper>
        <!-- </div> -->

        <div class="modal__body">
          <slot name="body"/>
        </div>

        <div class="modal__footer">
          <slot name="footer"/>
        </div>
      </div>
    </div>
  </transition>
</template>

<!-- <script>
export default {
  name: "Modal",
  data() {
    return {
      show: true
    };
  },
  methods: {
    closeModal() {
      this.show = false;
      document.querySelector("body").classList.remove("overflow-hidden");
    },
    openModal() {
      this.show = true;
      document.querySelector("body").classList.add("overflow-hidden");
    }
  }
};
</script> -->

<script>
import CanselMin from '../icons/CanselMin.vue'
import {Button} from '../atoms/Button'
import {Title2} from '../atoms/Text'
import  Row from '../atoms/Row'
import Wrapper from '../atoms/Wrapper'
export default {
  components: {
    CanselMin,
    Button,
    Title2,
    Row,
    Wrapper

  },
  props: {
    title: String
  }
  
}
</script>




<style lang="scss" scoped>
.modal {
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9;
  &__backdrop {
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
  }
  &__dialog {
    background-color: #ffffff;
    position: relative;
    width: 600px;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    z-index: 2;
    @media screen and (max-width: 992px) {
      width: 90%;
    }
  }
  &__close {
    // width: 30px;
    // height: 30px;
  }
  &__header {
    padding: 20px 20px 10px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
  &__body {
    padding: 10px 20px 10px;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
  &__footer {
    padding: 10px 20px 20px;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>