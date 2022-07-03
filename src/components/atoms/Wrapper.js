import styled from 'vue-styled-components';
import basicStyles from '../../styles/basic';

const wrapProps = {
  xy: String,
  type: String
}

const Wrapper = styled('section', wrapProps)
`
  width: 800px;
  margin: 0 auto;
  padding: ${props => props.xy ? props.xy.replace(/ /g, 'px ') : 0};
  position: relative;
`

export default Wrapper