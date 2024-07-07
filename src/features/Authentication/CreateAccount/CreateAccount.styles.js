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

export const HeaderText = styled(Text)`
  color: ${colors.black.strong};
  text-align: left;
  line-height: 30px;
  font-family: 'Poppins-Bold';
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
export const DualWrapper = styled(Container)`
  /* background-color: green; */
  flex-direction: row;
  justify-content: space-between;
`;
export const CountryCard = styled(Container)`
  flex-direction: row;
  justify-content: space-between;
`;

export const CountryInfoSection = styled(Container)`
  flex-direction: row;
  gap: 15px;
  width: max-content;
`;
export const CountryFlag = styled(Image)`
  width: 40px;
  height: 30px;
`;
export const CountryName = styled(Text)`
  color: ${colors.black.strong};
  font-weight: ${fontWeights.regular};
  font-family: 'Poppins-Regular';
`;
export const CodeSection = styled(Container)`
  width: max-content;
`;
export const CountryCode = styled(Text)`
  color: ${colors.black.strong};
  font-weight: ${fontWeights.regular};
  font-family: 'Poppins-Regular';
`;

export const ButtonWrapper = styled(Container)`
  margin-top: 20%;
`;
