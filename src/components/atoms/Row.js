import styled from 'vue-styled-components'


const RowProps = {
  rpt: Number,
  position: String,
  size: String,
  padding: String
}

const Row = styled('div', RowProps)`
display: grid;
padding: ${props => props.padding ? props.padding : '0;'}
width: 100%;
align-items: center;
flex-direction: row;
justify-content: ${props => props.position};
grid-template-columns: repeat(${props => props.rpt +','+ props.size});
grid-template-rows: auto;
grid-column-gap: 16px;

`
export default Row