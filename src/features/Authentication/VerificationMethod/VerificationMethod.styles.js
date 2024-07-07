import styled from 'styled-components/native';
import {colors} from '../../../infrastructure/theme/colors';
import {Container} from '../../../components/container/container.component';
import {Text} from '../../../components/typography/text.component';

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
  /* min-height: 70%; */
  /* background:red; */
  gap: 30px;
`;

export const HeaderWrapper = styled(Container)`
  gap: 10px;
  align-items: flex-start;
`;
export const HeaderText = styled(Text)`
  color: ${colors.black.strong};
  text-align: left;

  /* line-height: 30px; */
  font-family: 'Poppins-Bold';
`;
export const SubText = styled(Text)`
  color: ${props => props.color || colors.black.strong};
  text-align: left;
  font-family: ${props => props.fontFamily || 'Poppins-Regular'};
  line-height: 18px;
`;

export const Card = styled(Container)`
  flex-direction: row;
  min-height: 120px;
  width: 100%;
  gap: 5px;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.headerShade.light};
  padding: 15px;
`;
export const InfoSection = styled(Container)`
  gap: 5px;
  align-items: flex-start;
  width: 90%;
  /* background-color: red; */
`;

export const Title = styled(Text)`
  color: ${props => props.color || colors.black.strong};
  text-align: left;
  font-family: ${props => props.fontFamily || 'Poppins-Medium'};
  line-height: 18px;
`;

export const Description = styled(Text)`
  color: ${props => props.color || colors.black.regular};
  text-align: left;
  font-family: ${props => props.fontFamily || 'Poppins-Regular'};
  line-height: 18px;
`;
export const CheckCircleWrapper = styled(Container)`
  justify-content: center;
  align-items: center;
  background-color: 'transparent';
  border-color: ${colors.primary};
  border-width: 3px;
  width: 25px;
  height: 25px;
  border-radius: 20px;
`;
export const Circle = styled(Container)`
  width: 15px;
  height: 15px;
  background-color: ${props =>
    props.checked ? colors.primary : 'transparent'};
  border-radius: 15px;
`;

export const ButtonWrapper = styled(Container)`
  margin-top: 20%;
`;
