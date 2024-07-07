import React, {useState} from 'react';
import {SafeArea} from '../../../components/utility/safe-area.component';
import {
  PageContainer,
  ContentSection,
  HeaderWrapper,
  HeaderText,
  SubText,
  Form,
  BottomTextWrapper,
  BottomText,
  LinkText,
  ButtonWrapper,
} from './VerificationCode.styles';
import {Header} from '../../../components/header/header.component';
import ButtonContainer from '../../../components/button/button.component';
import {colors} from '../../../infrastructure/theme/colors';
import {ScrollView} from 'react-native';
import TextInputContainer from '../../../components/textInput/textInput.component';


import { CodeInput } from '../../../components/codeInput/codeInput.component';


const VerificationCode = ({navigation}) => {
 

  return (
    <SafeArea showStatusBar={true}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <PageContainer>
          <Header svg={'previous'} navigation={navigation} />

          <ContentSection>
            <HeaderWrapper>
              <HeaderText variant={'h5'}>Enter Verification Code</HeaderText>
              <SubText variant={'button'}>
                Enter the 6 digit code sent to +234******2244
              </SubText>
            </HeaderWrapper>

            <Form>
              <CodeInput />
              <BottomTextWrapper>
                <BottomText variant="button">
                  Didn't receive the code?
                </BottomText>
                <LinkText
                  variant="button"
                  onPress={() => {
                    navigation.navigate('Login');
                  }}>
                  Resend Code
                </LinkText>
              </BottomTextWrapper>
            </Form>
          </ContentSection>
          <ButtonWrapper>
            <ButtonContainer
              text="Continue"
              onPress={() => {
                navigation.navigate('AccessGranted');
              }}
            />
          </ButtonWrapper>
        </PageContainer>
      </ScrollView>
    </SafeArea>
  );
};

export default VerificationCode;
