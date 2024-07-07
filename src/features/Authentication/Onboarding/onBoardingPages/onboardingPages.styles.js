import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

import {Text} from '../../../../components/typography/text.component';
import {colors} from '../../../../infrastructure/theme/colors';
import {fontWeights} from '../../../../infrastructure/theme/fonts';
import {Container} from '../../../../components/container/container.component';

let DEVICE = Dimensions.get('screen');
const {width, height} = Dimensions.get('window');

export const ContainerWrapper = styled(Container)`
  height: 100%;
  width: 100%;
  padding-top: 20;
`;

export const OnboardingWrapper = styled(Container)`
  gap: 5;
  align-items: flex-start;
`;

export const Title = styled(Text)`
  color: ${colors.black.strong};
  font-weight: ${fontWeights.semiBold};
  text-align: left;
  width: 80%;
  font-family: 'Poppins-Bold';
  line-height: 40px;
`;
export const SubText = styled(Text)`
  color: ${colors.black.strong};
  font-weight: ${fontWeights.regular};
  text-align: left;
  line-height: 24px;
  font-family: 'Lato-Regular';
`;

export const SlideWrapper = styled(Container)`
  width: 100%;
  height: 100%;
  justify-content: flex-start;
`;

export const AppIntroSliderWrapper = styled.View`
  width: 100%;
  height: 70%;
  min-height: auto;
`;

export const ButtonSection = styled(Container)`
  justify-content: space-between;
  align-items: center;
`;
