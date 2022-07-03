import styled from 'vue-styled-components';


const textProps = {
  type: String
}

export const Title1 = styled('h1', textProps)`
font-size: ${props => props.theme.sizes.Title1}px;
font-style: normal;
margin: 0;
color: ${props => props.theme.colors.textMain}
font-stretch: normal;
`
export const Title2 = styled('h1', textProps)`
font-size: ${props => props.theme.sizes.Title2}px;
font-weight: bold;
color: ${props => props.theme.colors.textMain}
font-style: normal;
margin: 0;
font-stretch: normal;
`
export const Title3 = styled('h1', textProps)`
font-size: ${props => props.theme.sizes.Title3}px;
color: ${props => props.theme.colors.textMain}
font-style: normal;
font-stretch: normal;
margin: 0;
`
export const Title4 = styled('h1', textProps)`
font-size: ${props => props.theme.sizes.Title4}px;
color: ${props => props.theme.colors.textLight}
font-style: normal;
margin: 0;
font-stretch: normal;
`
export const Title5 = styled('h1', textProps)`
font-size: ${props => props.theme.sizes.Title5}px;
font-weight: bold;
font-style: normal;
color: #676767;
margin: 0;
font-stretch: normal;
`
