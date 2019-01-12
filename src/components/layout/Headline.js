import styled from 'styled-components';

const Headline = styled.h1`
  color: #767676;
  padding-bottom: 1rem;
  border-bottom: 2px solid rgba(0,0,0,0.1);
  
  background: #b4ddb4;
  background: -moz-linear-gradient(top, hsl(120,38%,79%) 0%, hsl(120,38%,65%) 17%, hsl(120,38%,51%) 33%, hsl(120,100%,27%) 67%, hsl(120,100%,17%) 83%, hsl(120,100%,7%) 100%);
  background: -webkit-linear-gradient(top, hsl(120,38%,79%) 0%,hsl(120,38%,65%) 17%,hsl(120,38%,51%) 33%,hsl(120,100%,27%) 67%,hsl(120,100%,17%) 83%,hsl(120,100%,7%) 100%);
  background: linear-gradient(to bottom, hsl(120,38%,79%) 0%,hsl(120,38%,65%) 17%,hsl(120,38%,51%) 33%,hsl(120,100%,27%) 67%,hsl(120,100%,17%) 83%,hsl(120,100%,7%) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#b4ddb4', endColorstr='#002400',GradientType=0 );
  
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 200;
  font-size: 3rem;
  text-align: center;
  vertical-align: middle;
`;

export default Headline;
