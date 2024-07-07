import React from 'react';
import {SafeArea} from '../../../components/utility/safe-area.component';
import {
  PageContainer,
  StyledProgressBar,
  ContentSection,
  TextWrapper,
  HeaderText,
  ParagraphText,
  BoldedText,
  Form,
  ButtonWrapper,
  BottomTextWrapper,
  BottomText,
} from './AllSetUp.styles';
import {Header} from '../../../components/header/header.component';
import ButtonContainer from '../../../components/button/button.component';
import {colors} from '../../../infrastructure/theme/colors';
import AllSetUpIcon from '../../../assets/svg/AllSetUp.svg';
import {Paragraph} from 'react-native-paper';
import { ScrollView } from 'react-native';

const AllSetUp = ({navigation}) => {
  return (
    <SafeArea showStatusBar={true}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <PageContainer>
          <Header svg={'previous'} navigation={navigation} />

          <ContentSection>
            <AllSetUpIcon />
            <TextWrapper>
              <HeaderText variant={'h5'}>You’re all set up!</HeaderText>
              <ParagraphText variant={'button'}>
                Welcome to Breezesend! Your account has been successfully
                created, and you're now ready to breeze through your financial
                transactions effortlessly.
              </ParagraphText>
              <BoldedText variant={'button'}>
                Here's what you can do next:
              </BoldedText>
            </TextWrapper>

            <TextWrapper alignItems="flex-start">
              <BoldedText variant={'button'}>1. Verify Your Account</BoldedText>
              <BoldedText variant={'button'} align="left">
                2. Set Up Your Profile:{' '}
                <ParagraphText variant={'button'} align="left">
                  {' '}
                  Complete your profile setup to personalize your Breezesend
                  experience. Add a profile picture, set security measures, and
                  customize your preferences.
                </ParagraphText>
              </BoldedText>
            </TextWrapper>
          </ContentSection>

          <ButtonWrapper>
            <ButtonContainer
              text="Proceed"
              onPress={() => {
                navigation.navigate('AccountSecurity');
              }}
            />
          </ButtonWrapper>
        </PageContainer>
      </ScrollView>
    </SafeArea>
  );
};

export default AllSetUp;
