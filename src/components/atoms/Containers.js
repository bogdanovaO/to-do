import styled from 'vue-styled-components';


const containersProps = {
  type: String
}

export const MainContainer = styled('div', containersProps)
`
overflow-y: scroll;
width: 100%;
height: 70vh;
display: flex;
flex-direction: column;
padding: 54px 54px 49px 54px;
background:  ${ props =>  props.theme.colors.pageAccent  };
border-radius: ${props => props.theme.sizes.radius}px;
`
export const ListContainer = styled('div', containersProps)
`
width: 100%;
padding: 10px;
margin-bottom: 10px;
background:  ${props => props.theme.colors.pageMain};
border-radius: ${props => props.theme.sizes.radius}px;
`
export const TaskContainer = styled('div', containersProps)
`
width: 100%;
padding: 10px;
margin-bottom: 10px;
background:  ${props => props.theme.colors.pageMain};
border-radius: ${props => props.theme.sizes.radius}px;
`

export const NoteContainer = MainContainer.extend`
background:  ${props => props.theme.colors.pageAccent};

`