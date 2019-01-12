import styled from 'styled-components';

const BlueButton = styled.button`  
  border:none;
  outline: none;
  color: #f5f5f5;
  text-decoration: none;
  text-transform: uppercase;
  text-shadow: 0 1px 3px hsla(152, 20%, 20%,0.2);
  background: #258dc8;
  background: -moz-linear-gradient(top, hsla(202,69%,47%,1) 0%, hsla(202,69%,47%,1) 100%);
  background: -webkit-linear-gradient(top, hsla(202,69%,47%,1) 0%,hsla(202,69%,47%,1) 100%);
  background: linear-gradient(to bottom, hsla(202,69%,47%,1) 0%,hsla(202,69%,47%,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#258dc8', endColorstr='#258dc8',GradientType=0 );
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
  transition: all 300ms;
  padding: 1rem 2rem;
  border-radius: 4px;
  cursor: pointer;
  margin: 1rem;

  &:hover{
    transform: translate(0px, -2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  }
  
  &:active{
    transform: translate(0px, 2px);
    box-shadow: 0 2px 6px rgba(0,0,0,0.2);
  }
`;

export default BlueButton;
