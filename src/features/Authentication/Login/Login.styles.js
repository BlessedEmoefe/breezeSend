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
  /* min-height: 40%; */
  /* background:red; */
  gap: 20px;
`;

export const HeaderWrapper = styled(Container)`
  gap: 5px;
  align-items: flex-start;
`;
export const HeaderText = styled(Text)`
  color: ${props => props.color || colors.black.strong};
  text-align: left;
  line-height: 30px;
  font-family: ${props => props.fontFamily || 'Poppins-Medium'};
`;

export const SnackWrapper = styled(Container)`
  background-color: ${colors.primary};
  padding-left: 10px;
  /* margin-top: 15px; */
`;

// export const ContentSection = styled(Container)`

// `;

export const SnackText = styled(Text)`
  color: ${colors.black.strong};
  text-align: left;
  font-family: 'Poppins-Regular';
  background-color: #e2defd;
  width: 100%;
  padding: 15px;
`;

export const Form = styled(Container)`
  gap: 15px;
  margin-top: 15px;
  /* background-color: red; */
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
  font-family: 'Poppins-Regular';
`;
export const LinkText = styled(Text)`
  color: ${colors.primary};
  font-weight: ${fontWeights.regular};
  font-family: 'Poppins-Regular';
`;

export const ORText = styled(Text)`
  color: ${colors.black.strong};
  text-align: center;
  font-family: 'Poppins-Medium';
  margin-top: 30px;
`;

export const ButtonWrapper = styled(Container)`
  margin-top: 20%;
`;

export const DualButtonWrapper = styled(Container)`
  margin-top: 10%;
  flex-direction: row;
  justify-content: space-between;
`;

export const Wrapper = styled(Container)`
  width: 45%;
`;
