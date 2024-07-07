import styled from 'styled-components/native';
import {Image} from 'react-native';
import {colors} from '../../../infrastructure/theme/colors';
import {Container} from '../../../components/container/container.component';
import {Text} from '../../../components/typography/text.component';
import {fontWeights} from '../../../infrastructure/theme/fonts';

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
  gap: 15px;
`;
export const SelectYourCountryHeader = styled(Text)`
  color: ${colors.black.strong};
  /* font-weight: ${fontWeights.bold}; */
  text-align: left;
  line-height: 30px;
  font-family: 'Poppins-Bold';
`;

export const SearchBarWrapper = styled(Container)``;
export const CountryLists = styled(Container)``;
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
