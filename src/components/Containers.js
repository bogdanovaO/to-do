import styled from 'vue-styled-components';
import basicStyles from '../styles/basic';

const containersProps = {
  type: String
}

export const MainContainer = styled('div', containersProps)
`
width: 100%;
display: flex;
flex-direction: column;


padding: 54px 54px 49px 54px;
background:  ${basicStyles.colors.pageAccent};
border-radius: ${basicStyles.sizes.radius}px;
`
export const NoteContainer = styled('div', containersProps)
`
width: 100%;
padding: 10px;
margin-bottom: 10px;
background:  ${basicStyles.colors.pageMain};
border-radius: ${basicStyles.sizes.radius}px;
`