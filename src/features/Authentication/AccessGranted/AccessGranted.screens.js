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
} from './AccessGranted.styles';
import {Header} from '../../../components/header/header.component';
import ButtonContainer from '../../../components/button/button.component';
import {colors} from '../../../infrastructure/theme/colors';
import {ScrollView} from 'react-native';
import TextInputContainer from '../../../components/textInput/textInput.component';
import AllSetUpIcon from '../../../assets/svg/AllSetUp.svg';



const AccessGranted = ({navigation}) => {
  return (
    <SafeArea showStatusBar={true}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <PageContainer>
          <Header svg={'previous'} navigation={navigation} />

          <ContentSection>
            <HeaderWrapper>
              <HeaderText variant={'h5'}>Access Granted!</HeaderText>
              <SubText variant={'button'}>
                Congratulations! Your phone number has been successfully
                verified, and access to your BreezeSend account has been
                granted.
              </SubText>
            </HeaderWrapper>
            <AllSetUpIcon />
          </ContentSection>
          <ButtonWrapper>
            <ButtonContainer
              text="Proceed"
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

export default AccessGranted;
