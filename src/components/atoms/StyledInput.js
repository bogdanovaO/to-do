import styled from 'vue-styled-components'


const inputProps = {
  size: String

}

const StyledInput = styled('input', inputProps)`
height: 36px;
outline: none;
// width: 350px;
font-size: ${props => props.size };
border: none;
background: ${props => props.theme.colors.pageMain}
}
&:hover {
}
&:focus {
  border-bottom: 1px solid #000;
}
`

export default StyledInput 