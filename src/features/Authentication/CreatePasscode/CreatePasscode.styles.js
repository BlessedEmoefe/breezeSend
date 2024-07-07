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
  align-items: flex-start;
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
export const HeaderWrapper = styled(Container)`
  align-items: flex-start;
  /* background:red; */
  height: max-content;
  gap: 10px;
`;
export const HeaderText = styled(Text)`
  color: ${colors.black.strong};
  text-align: left;
  line-height: 30px;
  font-family: 'Poppins-Bold';
`;

// export const SubTextWrapper = styled(Container)`
//   background-color: ${colors.primary};
//   padding-left: 10px;
//   /* margin-top: 15px; */
// `;

export const SubText = styled(Text)`
  color: ${colors.black.regular};
  text-align: left;
  font-family: 'Poppins-Regular';
`;

export const Form = styled(Container)`
  gap: 15px;
`;

export const BottomSection = styled(Container)`
  gap: 10px;
  margin-top: 30px;
`;

export const ORText = styled(Text)`
  color: ${colors.black.strong};
  text-align: center;
  font-family: 'Poppins-Medium';
`;
export const FaceIDTextWrapper = styled(Container)`
  flex-direction: row;
  justify-content: center;
  gap: 6px;
`;
export const FaceIDText = styled(Text)`
  color: ${colors.primary};
  text-align: center;
  font-family: 'Poppins-Medium';
`;
export const ButtonWrapper = styled(Container)`
  margin-top: 20%;
`;
