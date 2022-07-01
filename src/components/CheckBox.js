import styled  from 'vue-styled-components';
import basicStyles from '../styles/basic';

const checkboxProps = {
  checked: Boolean,
  hovered: Boolean,

}

const CheckBox = styled('div', checkboxProps)`
width: 10px;
height: 10px;
background: #000;
display: inline-block;

`

export default CheckBox