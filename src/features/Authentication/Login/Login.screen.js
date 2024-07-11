import React, {useState} from 'react';
import {SafeArea} from '../../../components/utility/safe-area.component';
import {
  PageContainer,
  ContentSection,
  HeaderWrapper,
  HeaderText,
  SnackWrapper,
  SnackText,
  Form,
  ButtonWrapper,
  BottomSection,
  BottomTextWrapper,
  BottomText,
  LinkText,
  ORText,
  DualButtonWrapper,
  Wrapper,
} from './Login.styles';
import {Header} from '../../../components/header/header.component';
import {
  GroupedSpacer,
  Spacer,
} from '../../../components/spacer/spacer.component';
import TextInputContainer from '../../../components/textInput/textInput.component';
import ButtonContainer from '../../../components/button/button.component';
import {colors} from '../../../infrastructure/theme/colors';
import {ScrollView} from 'react-native';
import {CountryCodePicker} from '../../../components/countryCodePicker/countryCodePicker.component';
import {FaceId, FingerPrintIcon} from '../../../assets/svg/Icons';

const Login = ({navigation}) => {
  const [enterAddress, setEnterAddress] = useState(false);

  return (
    <SafeArea showStatusBar={true}>
      <ScrollView>
        <PageContainer>
          <Header svg={'previous'} navigation={navigation} />

          <ContentSection>
            <HeaderWrapper>
              <HeaderText
                color={colors.primary}
                fontFamily={'Poppins-Bold'}
                variant={'h5'}>
                Hi, John👋
              </HeaderText>
              <HeaderText variant={'h5'}>Login to BreezeSend</HeaderText>
            </HeaderWrapper>

            <Form>
              <CountryCodePicker />
              <TextInputContainer
                placeholder=" "
                label={'Enter your password'}
                labelColor={colors.black.strong}
                labelFontFamily={'Poppin-Regular'}
                // value={phone}
                // onChangeText={text => setPhone(text)}
              />
            </Form>
            <BottomTextWrapper>
              <BottomText variant="button">Trouble logging in?</BottomText>
              <LinkText
                variant="button"
                onPress={() => {
                  navigation.navigate('Login');
                }}>
                Recover your account
              </LinkText>
            </BottomTextWrapper>
          </ContentSection>
          <ButtonWrapper>
            <ButtonContainer
              text="Login"
              onPress={() => {
                navigation.navigate('CreateAccount');
              }}
            />
          </ButtonWrapper>

          <BottomTextWrapper>
            <BottomText variant="button">Don’t have an account yet?</BottomText>
            <LinkText
              variant="button"
              onPress={() => {
                navigation.navigate('Login');
              }}>
              Sign Up
            </LinkText>
          </BottomTextWrapper>
          <ORText variant="body">OR</ORText>
          <DualButtonWrapper flexDirection={'row'}>
            <Wrapper>
              <ButtonContainer
                leftIcon={<FaceId color={'#fff'} />}
                text="Face ID"
                onPress={() => {
                  navigation.navigate('CreateAccount');
                }}
              />
            </Wrapper>
            <Wrapper>
              <ButtonContainer
                leftIcon={<FaceId color={'#fff'} />}
                text="Fingerprint"
                onPress={() => {
                  // navigation.navigate('Home');
                }}
              />
            </Wrapper>
          </DualButtonWrapper>
        </PageContainer>
      </ScrollView>
    </SafeArea>
  );
};

export default Login;
