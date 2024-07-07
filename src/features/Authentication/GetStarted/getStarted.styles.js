import styled from 'styled-components/native';
import {Container} from '../../../components/container/container.component';
import {colors} from '../../../infrastructure/theme/colors';
import {Text} from '../../../components/typography/text.component';
import {fonts, fontWeights} from '../../../infrastructure/theme/fonts';
import {lineHeights} from '../../../infrastructure/theme/spacing';
import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const PageContainer = styled.View`
  width: 100%;
  min-height: ${height};
  flex: 1;
  padding-horizontal: 4%;
  /* background:red; */
`;
export const ContentContainer = styled(Container)`
  align-items: flex-start;
  margin-top: 15px;
  gap: 15px;
  height: 70%;
  /* background-color: red; */
`;

export const HeaderText = styled(Text)`
  color: ${colors.black.strong};
  /* font-weight: ${fontWeights.bold}; */
  text-align: left;
  line-height: 30px;
  font-family: 'Poppins-Bold';
`;

export const CheckableWrapper = styled(Container)`
  gap: 3px;
  flex-direction: row;
  align-items: flex-start;
`;
export const CheckboxWrapper = styled(Container)`
  width: max-content;
  /* background-color: blue; */
`;
export const InfoWrapper = styled(Container)`
  flex: 1;
  padding-top: 5px;
  flex-direction: row;
  justify-content: flex-start;
`;
export const InfoText = styled(Text)`
  color: ${colors.black.strong};
  font-family: 'Poppins-Regular';
`;

export const LinkedText = styled(Text)`
  color: ${colors.primary};
  font-family: 'Poppins-Medium';
`;

export const BottomSection = styled(Container)``;

export const BottomTextWrapper = styled(Container)`
  flex-direction: row;
  justify-content: center;
  gap: 4px;
  margin-top: 20px;
`;

export const BottomText = styled(Text)`
  color: ${colors.black.strong};
  font-weight: ${fontWeights.regular};
  text-align: center;
  font-family: 'Lato-Regular';
`;
export const LinkText = styled(Text)`
  color: ${colors.primary};
  font-weight: ${fontWeights.regular};
  font-family: 'Lato-Bold';
`;
