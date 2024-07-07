import styled from 'styled-components/native';
import {Container} from '../container/container.component';
import {colors} from '../../infrastructure/theme/colors';
import {Text} from '../typography/text.component';
import {fonts, fontWeights} from '../../infrastructure/theme/fonts';
import {lineHeights} from '../../infrastructure/theme/spacing';

export const Wrapper = styled(Container)`
  align-items: flex-start;
`;

export const TextInputLabel = styled(Text)`
  line-height: 26px;
  margin: 0 0px 5px;
  text-align: left;
  color: #000;
  font-family: 'Lato-Regular';
`;

export const InputWrapper = styled(Container)`
  flex-direction: row;
  gap: 5px;
`;

export const CountryCodePickerWrapper = styled(Container)`
  /* background-color: blue; */
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 25%;
  border-width: 1px;
  gap: 2px;
  height: 55px;
  border-color: #c1c1c1;
`;

export const PhoneNumberInputWrapper = styled(Container)`
  flex: 1;
  padding: 0;
`;
