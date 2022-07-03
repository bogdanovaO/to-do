import styled from 'vue-styled-components'


const buttonProps = {
  color: String,
  type: String,
  // theme: Object,

}

export const Button = styled('button',buttonProps)`
height: 36px;
min-width: 60px;
padding: 0 16px;
align-items: center;
border-radius: 4px;
letter-spacing: .05em;
justify-content: center;
text-decoration: none;
text-transform: uppercase;
transition-duration: .28s;
transition-property: box-shadow,transform,opacity;
transition-timing-function: cubic-bezier(.4,0,.2,1);
vertical-align: middle;
border-style: none;
&:hover {
  box-shadow: ${props => props.theme.effects.buttonShadow};
}
&:active {
}
`


