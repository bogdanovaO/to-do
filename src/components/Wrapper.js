import styled from 'vue-styled-components';
import basicStyles from '../styles/basic';

const wrapProps = {
  Y: Number,
  X: Number,
  type: String
}

const Wrapper = styled('section', wrapProps)
`
  width: 800px;
  margin: 0 auto;
  padding: ${wrapProps.Y ? '50px':  0 }
  position: relative;
`

export default Wrapper