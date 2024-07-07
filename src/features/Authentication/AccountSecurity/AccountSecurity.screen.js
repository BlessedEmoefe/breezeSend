import React, {useState} from 'react';
import {SafeArea} from '../../../components/utility/safe-area.component';
import {
  PageContainer,
  ContentSection,
  HeaderWrapper,
  HeaderText,SubText,
  ButtonWrapper,
} from './AccountSecurity.styles';
import {Header} from '../../../components/header/header.component';
import ButtonContainer from '../../../components/button/button.component';
import {colors} from '../../../infrastructure/theme/colors';
import AccountSecurityIcon from '../../../assets/svg/AccountSecurity.svg';
import {ScrollView} from 'react-native';

const AccountSecurity = ({navigation}) => {
  return (
    <SafeArea showStatusBar={true}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <PageContainer>
          <Header svg={'previous'} navigation={navigation} />

          <ContentSection>
            <HeaderWrapper>
              <HeaderText variant={'h4'}>
                Boost Your Account Security
              </HeaderText>
              <SubText variant={'button'}>
                Add an extra layer of security to your BreezeSend account by
                enabling two-factor authentication (2FA). With 2FA, you'll need
                to provide a second form of verification in addition to your
                password whenever you sign in.
              </SubText>
            </HeaderWrapper>
            <AccountSecurityIcon />
          </ContentSection>
          <ButtonWrapper>
            <ButtonContainer
              text="Get Started"
              onPress={() => {
                navigation.navigate('VerificationMethod');
              }}
            />
          </ButtonWrapper>
        </PageContainer>
      </ScrollView>
    </SafeArea>
  );
};

export default AccountSecurity;
