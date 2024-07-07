import styled from 'styled-components/native';
import {Image} from 'react-native';
import {colors} from '../../../infrastructure/theme/colors';
import {Container} from '../../../components/container/container.component';
import {Text} from '../../../components/typography/text.component';
import {fontWeights} from '../../../infrastructure/theme/fonts';
import {ProgressBar} from 'react-native-paper';

import {Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const PageContainer = styled.View`
  width: 100%;
  min-height: ${height};
  flex: 1;
  padding-horizontal: 4%;
`;

export const ContentSection = styled(Container)`
  align-items: center;
  margin-top: 15px;
  min-height: 60%;
  /* background:red; */
  gap: 20px;
`;

export const StyledProgressBar = styled(ProgressBar)`
  margin-vertical: 15px;
  height: 7px;
  background-color: #e3e3e3;
`;
export const TextWrapper = styled(Container)`
  margin-top: 30px;
`;

export const HeaderText = styled(Text)`
  color: ${colors.black.strong};
  text-align: left;
  line-height: 30px;
  font-family: 'Poppins-Bold';
  margin-bottom: 15px;
`;

export const ParagraphText = styled(Text)`
  color: ${colors.black.regular};
  text-align: ${props => props.align || 'center'};
  /* line-height: 30px; */
  font-family: 'Poppins-Regular';
`;
export const BoldedText = styled(Text)`
  color: ${colors.black.strong};
  text-align: ${props => props.align || 'center'};
  font-family: 'Poppins-Medium';
`;

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
export const ButtonWrapper = styled(Container)`
  margin-top: 20%;
`;
