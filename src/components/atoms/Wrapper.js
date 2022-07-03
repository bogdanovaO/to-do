import styled from 'vue-styled-components';
import basicStyles from '../../styles/basic';

const wrapProps = {
  xy: String,
  size: String,
  type: String
}

const Wrapper = styled('section', wrapProps)
`
  width: ${props => props.size ? props.size : '800px'};
  box-sizing: border-box;
  margin: 0 auto;
  padding: ${props => props.xy ? props.xy.replace(/ /g, 'px ') : 0}px;
  position: relative;
`

export default Wrapper