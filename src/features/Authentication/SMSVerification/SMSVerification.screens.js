import React, {useState} from 'react';
import {SafeArea} from '../../../components/utility/safe-area.component';
import {
  PageContainer,
  ContentSection,
  HeaderWrapper,
  HeaderText,
  SubText,
  Form,
  ButtonWrapper,
} from './SMSVerification.styles';
import {Header} from '../../../components/header/header.component';
import ButtonContainer from '../../../components/button/button.component';
import {colors} from '../../../infrastructure/theme/colors';
import {ScrollView, TouchableOpacity} from 'react-native';
import TextInputContainer from '../../../components/textInput/textInput.component';



const SMSVerification = ({navigation}) => {
  

  return (
    <SafeArea showStatusBar={true}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <PageContainer>
          <Header svg={'previous'} navigation={navigation} />

          <ContentSection>
            <HeaderWrapper>
              <HeaderText variant={'h5'}>Enter Your Phone Number</HeaderText>
              <SubText variant={'button'}>
                To proceed with SMS verification, please enter the phone number
                (********675) used in registering. We'll send a unique
                verification code to this number for authentication purposes.
              </SubText>
            </HeaderWrapper>

            <Form>
              <TextInputContainer
                placeholder=" "
                label={'Enter your Phone Number'}
                labelColor={colors.black.strong}
                // value={phone}
                // onChangeText={text => setPhone(text)}
              />
            </Form>
          </ContentSection>
          <ButtonWrapper>
            <ButtonContainer
              text="Continue"
              onPress={() => {
                navigation.navigate('VerificationCode');
              }}
            />
          </ButtonWrapper>
        </PageContainer>
      </ScrollView>
    </SafeArea>
  );
};

export default SMSVerification;
