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
} from './AuthenticateWithGoogle.styles';
import {Header} from '../../../components/header/header.component';
import ButtonContainer from '../../../components/button/button.component';
import {colors} from '../../../infrastructure/theme/colors';
import {ScrollView} from 'react-native';
import TextInputContainer from '../../../components/textInput/textInput.component';

import {CodeInput} from '../../../components/codeInput/codeInput.component';

const AuthenticateWithGoogle = ({navigation}) => {
  return (
    <SafeArea showStatusBar={true}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <PageContainer>
          <Header svg={'previous'} navigation={navigation} />

          <ContentSection>
            <HeaderWrapper>
              <HeaderText variant={'h5'}>
                Enter Google Authenticator Code
              </HeaderText>
              <SubText variant={'button'}>
                Please enter the google authenticator code to complete the
                process
              </SubText>
            </HeaderWrapper>

            <Form>
              <CodeInput />
            </Form>
          </ContentSection>
          <ButtonWrapper>
            <ButtonContainer
              text="Continue"
              onPress={() => {
                // navigation.navigate('Home');
              }}
            />
          </ButtonWrapper>
        </PageContainer>
      </ScrollView>
    </SafeArea>
  );
};

export default AuthenticateWithGoogle;
