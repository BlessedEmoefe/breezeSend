import React, {useState} from 'react';
import {SafeArea} from '../../../components/utility/safe-area.component';
import {
  PageContainer,
  ContentSection,
  HeaderWrapper,
  HeaderText,
  Card,
  NumberWrapper,
  StyledText,
  InfoSection,
  ButtonWrapper,
} from './AuthenticateWithApp.styles';
import {Header} from '../../../components/header/header.component';
import ButtonContainer from '../../../components/button/button.component';
import {colors} from '../../../infrastructure/theme/colors';
import {ScrollView, TouchableOpacity} from 'react-native';
import TextInputContainer from '../../../components/textInput/textInput.component';
import {FlatListContainer} from '../../../components/container/container.component';
import {Spacer} from '../../../components/spacer/spacer.component';

const stepsData = [
  {
    text: 'To activate 2FA on your account, kindly download the Google Authenticator app on your Android or IOS device. Enter the secret key or scan QR code with the Google Authenticator app. ',
  },
  {
    text: 'Once done, you will see a 6 digit code on the Google Authenticator app, enter it on your BreezeSend app to link.',
  },
];

const AuthenticateWithApp = ({navigation}) => {
  return (
    <SafeArea showStatusBar={true}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <PageContainer>
          <Header svg={'previous'} navigation={navigation} />

          <ContentSection>
            <HeaderWrapper>
              <HeaderText variant={'h5'}>
                Protect Your Account in Just Few Steps
              </HeaderText>
            </HeaderWrapper>

            <FlatListContainer
              width={'100%'}
              data={stepsData}
              // keyExtractor={}

              ItemSeparatorComponent={() => <Spacer size={'large'} />}
              renderItem={({item, index}) => (
                <Card>
                  <NumberWrapper>
                    <StyledText variant={'button'}>
                      {index + 1}
                      {'.'}
                    </StyledText>
                  </NumberWrapper>
                  <InfoSection>
                    <StyledText variant={'button'}>{item?.text}</StyledText>
                  </InfoSection>
                </Card>
              )}
            />
          </ContentSection>
          <ButtonWrapper>
            <ButtonContainer
              text="Continue"
              onPress={() => {
                navigation.navigate('SetupKey');
              }}
            />
          </ButtonWrapper>
        </PageContainer>
      </ScrollView>
    </SafeArea>
  );
};

export default AuthenticateWithApp;
