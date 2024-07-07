import React, {useState} from 'react';
import {SafeArea} from '../../../components/utility/safe-area.component';
import {Header} from '../../../components/header/header.component';
import {Ionicons} from '@expo/vector-icons';
import {colors} from '../../../infrastructure/theme/colors';
import {
  PageContainer,
  ContentContainer,
  HeaderText,
  Title,
  SubText,
  CheckableWrapper,
  CheckboxWrapper,
  InfoWrapper,
  InfoText,
  LinkedText,
  BottomSection,
  BottomTextWrapper,
  BottomText,
  LinkText,
} from './getStarted.styles';
import ButtonContainer from '../../../components/button/button.component';
import {Checkbox} from 'react-native-paper';
import { ScrollView } from 'react-native';
import { CountryCodePicker } from '../../../components/countryCodePicker/countryCodePicker.component';

const GetStarted = ({navigation}) => {
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);

  return (
    <SafeArea showStatusBar={true}>
       <ScrollView showsVerticalScrollIndicator={false}>
      <PageContainer>
        <Header svg={'previous'} navigation={navigation} />

        <ContentContainer>
          <HeaderText variant={'h5'}>Get Started</HeaderText>

          <CountryCodePicker />

          <CheckableWrapper>
            <CheckboxWrapper>
              <Checkbox
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked(!checked);
                }}
                uncheckedColor={colors.primary}
                color={colors.primary}
              />
            </CheckboxWrapper>
            <InfoWrapper>
              <InfoText variant="button">
                We’d like to keep you up to date with similar Breezesend
                products and services by email and other means. Untick here if
                you don’t want to receive these communications.
              </InfoText>
            </InfoWrapper>
          </CheckableWrapper>

          <CheckableWrapper>
            <CheckboxWrapper>
              <Checkbox
                status={checked2 ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked2(!checked2);
                }}
                uncheckedColor={colors.primary}
                color={colors.primary}
              />
            </CheckboxWrapper>
            <InfoWrapper>
              <InfoText variant="button">
                By checking this box you agree to the{' '}
                <LinkedText variant="button">Terms of service</LinkedText> and{' '}
                <LinkedText variant="button">Privacy Policy</LinkedText>,
                including verification of your identity with your mobile
                provider/third party.
              </InfoText>
            </InfoWrapper>
          </CheckableWrapper>
        </ContentContainer>

        <BottomSection>
          <ButtonContainer
            text="Continue"
            onPress={() => {
              navigation.navigate('CreateAccount');
            }}
          />
          <BottomTextWrapper>
            <BottomText variant="body">Already have an account?</BottomText>
            <LinkText
              variant="body"
              onPress={() => {
                navigation.navigate('Login');
              }}>
              Sign In
            </LinkText>
          </BottomTextWrapper>
        </BottomSection>
      </PageContainer>
      </ScrollView>
    </SafeArea>
  );
};

export default GetStarted;