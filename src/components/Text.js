import styled from 'vue-styled-components';
import basicStyles from '../styles/basic';

const textProps = {
  type: String
}

export const Title1 = styled('h1', textProps)`
font-size: ${basicStyles.sizes.Title1}px;
font-style: normal;
font-stretch: normal;
`
export const Title2 = styled('h1', textProps)`
font-size: ${basicStyles.sizes.Title2}px;
font-style: normal;
font-stretch: normal;
`
export const Title3 = styled('h1', textProps)`
font-size: ${basicStyles.sizes.Title3}px;
font-style: normal;
font-stretch: normal;
`
export const Title4 = styled('h1', textProps)`
font-size: ${basicStyles.sizes.Title4}px;
font-style: normal;
font-stretch: normal;
`
