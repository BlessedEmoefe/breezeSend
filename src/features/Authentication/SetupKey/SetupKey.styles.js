import styled from 'styled-components/native';
import {colors} from '../../../infrastructure/theme/colors';
import {Container} from '../../../components/container/container.component';
import {Text} from '../../../components/typography/text.component';
import {ImageBackground, Image, Dimensions} from 'react-native';

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
  min-height: ${height / 2};
  /* background-color: red; */
  gap: 30px;
`;

export const HeaderWrapper = styled(Container)`
  gap: 5px;
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

export const CopyCard = styled(Container)`
  flex-direction: row;
  min-height: 100px;
  width: 100%;
  gap: 5px;
  align-items: flex-start;
  justify-content: space-between;
  background-color: #ebe8fe;
  padding: 15px;
`;
export const CopyCardInfoSection = styled(Container)`
  gap: 5px;
  align-items: flex-start;
  justify-content: flex-start;
  width: 70%;
  /* background-color: red; */
`;

export const Title = styled(Text)`
  color: ${props => props.color || colors.black.strong};
  text-align: left;
  font-family: ${props => props.fontFamily || 'Lato-Regular'};
  line-height: 18px;
`;

export const Description = styled(Text)`
  color: ${props => props.color || colors.black.regular};
  text-align: left;
  font-family: ${props => props.fontFamily || 'Poppins-Regular'};
  line-height: 18px;
`;
export const CopyButtonWrapper = styled(Container)`
  justify-content: center;
  align-items: center;
  width: 20%;
  /* background-color:red; */
`;

export const Card = styled(Container)`
  flex-direction: row;
  /* background-color: red; */
  align-items: flex-start;
  gap: 2px;
`;
export const NumberWrapper = styled(Container)`
  width: 5%;
  height: max-content;
`;
export const StyledText = styled(Text)`
  color: ${props => props.color || colors.black.strong};
  text-align: left;
  font-family: ${props => props.fontFamily || 'Poppins-Regular'};
  line-height: 18px;
  width: 100%;
`;
export const InfoSection = styled(Container)`
  flex: 1;
  /* background-color: blue; */
`;

export const ButtonWrapper = styled(Container)`
  margin-top: 20%;
`;
