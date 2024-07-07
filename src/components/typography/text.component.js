import styled from 'styled-components/native';
import {theme} from '../../infrastructure/theme';

const defaultTextStyles = (/*theme*/) => `
  /*font-family: ${theme.fonts.body};*/
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.strong};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;
const title = (/*theme*/) => `
  font-size: ${theme.fontSizes.title};
`;

const smallTitle = (/*theme*/) => `
font-size: ${theme.fontSizes.smallTitle};

`;

const body = (/*theme*/) => `
font-size: ${theme.fontSizes.body};
font-family:'Lato-Regular';
`;

const smallBody = (/*theme*/) => `
  font-size: ${theme.fontSizes.smallBody};
  font-family:'Lato-Regular';
`;
const small = (/*theme*/) => `
font-size: ${theme.fontSizes.small};
font-family:'Lato-Regular';
`;

const verySmall = (/*theme*/) => `
  font-size: ${theme.fontSizes.verySmall};
  font-family:'Lato-Regular';
`;

const hint = (/*theme*/) => `
  font-size: ${theme.fontSizes.body};
  color: ${theme.colors.black.light};
  font-family:'Lato-Regular';
`;

const smallHint = (/*theme*/) => `
  font-size: ${theme.fontSizes.caption};
  color: ${theme.colors.black.light};
  font-family:'Lato-Regular';
`;

const error = (/*theme*/) => `
  color: ${theme.colors.red.strong};
  font-family:'Lato-Regular';
`;

const caption = (/*theme*/) => `
  font-size: ${theme.fontSizes.caption};
 font-family:'Lato-Regular';
`;
const button = (/*theme*/) => `
  font-size: ${theme.fontSizes.button};
  font-family:'Lato-Regular';
 
`;

const label = (/*theme*/) => `
  /*font-family: ${theme.fonts.heading};*/
  font-size: ${theme.fontSizes.body};
  font-family:'Lato-Regular';
 
`;
const h3 = (/*theme*/) => `
  /*font-family: ${theme.fonts.heading};*/
  font-size: ${theme.fontSizes.h3};
  
  color: ${theme.colors.blue.strong};
`;
const h4 = (/*theme*/) => `
  /*font-family: ${theme.fonts.heading};*/
  font-size: ${theme.fontSizes.h4};
   
  color: ${theme.colors.blue.strong};
`;
const h5 = (/*theme*/) => `
  /*font-family: ${theme.fonts.heading};*/
  font-size: ${theme.fontSizes.h5};
`;

const link = (/*theme*/) => `
 /* font-family: ${theme.fonts.body};*/
  font-size: ${theme.fontSizes.caption};
 font-family:'Lato-Regular';
  color: ${theme.colors.link.strong};
`;

const variants = {
  verySmall,
  small,
  caption,
  button,
  smallBody,
  body,
  smallTitle,
  title,
  h5,
  h4,
  h3,

  label,
  error,
  hint,
  smallHint,
  link,
};

export const Text = styled.Text`
  ${({theme}) => defaultTextStyles(theme)};
  ${({variant, theme}) => variants[variant](theme)};
`;

Text.defaultProps = {
  variant: 'body',
};
