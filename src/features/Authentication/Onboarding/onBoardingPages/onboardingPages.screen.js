import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';

import {
  ContainerWrapper,
  Title,
  SubText,
  ButtonSection,
  OnboardingWrapper,
  SlideWrapper,
  AppIntroSliderWrapper,
} from './onboardingPages.styles';
import ButtonComponent from '../../../../components/button/button.component';
import {colors} from '../../../../infrastructure/theme/colors';
import {
  Spacer,
  GroupedSpacer,
} from '../../../../components/spacer/spacer.component';
import {
  OnboardingWelcomeIcon
} from '../../../../assets/svg/Icons';
import MultiCurrency from '../../../../assets/svg/multiCurrency.svg';
import WelcomeIcon from '../../../../assets/svg/welcomeIcon.svg';
import RewardIcon from '../../../../assets/svg/rewardIcon.svg';

const slides = [
  {
    key: 1,
    title: 'Welcome to Breezesend',
    subText:
      'Explore seamless cross-border transactions with Breezesend. Lets get started',
  },
  {
    key: 2,
    title: 'Your multi-currently hub.',
    subText:
      'Manage CAD, USD, and NGN effortlessly in separate wallets. Secure, convenient, and all in one place.',
  },
  {
    key: 3,
    title: 'Share the breeze, reap the the rewards.',
    subText:
      'Refer friends, earn rewards together. Spread the word and enjoy exclusive benefits with BreezeSend.',
  },
];

const OnboardingPages = ({navigation}) => {


  const renderItem = ({item}) => {
    return (
      <ContainerWrapper>
        <OnboardingWrapper>
          <Title variant="h4">{item.title}</Title>
          <Spacer />
          <SubText variant="body">{item.subText}</SubText>
        </OnboardingWrapper>
        <GroupedSpacer />
        <GroupedSpacer />

        {item.key == 1 ? (
          <WelcomeIcon width={'100%'} height={'300'} />
        ) : item.key == 2 ? (
          <MultiCurrency width={'100%'} height={'300'} />
        ) : item.key == 3 ? (
          <RewardIcon width={'100%'} height={'300'} />
        ) : (
          <OnboardingWelcomeIcon />
        )}
      </ContainerWrapper>
    );
  };


  return (
    <SlideWrapper paddingHorizontal justifyContent="center">
      <AppIntroSliderWrapper>
        <AppIntroSlider
          showNextButton={false}
          activeDotStyle={{
            backgroundColor: colors.primary,
          }}
          dotStyle={{
            backgroundColor: '#fff',
            borderWidth: 1,
            borderColor: colors.primary,
          }}
          renderItem={renderItem}
          data={slides}
        />
      </AppIntroSliderWrapper>

      <ButtonSection>
        <ButtonComponent
          text={'Create an Account'}
          onPress={() => navigation.navigate('SelectCountry')}
        />
        <GroupedSpacer />
        <ButtonComponent
          text={'Login'}
          backgroundColor={'transparent'}
          color={colors.primary}
          borderColor={colors.primary}
          onPress={() => navigation.navigate('Login')}
        />
      </ButtonSection>
    </SlideWrapper>
  );
};

export default OnboardingPages;
