import React, {useState} from 'react';
import {SafeArea} from '../../../components/utility/safe-area.component';
import {
  PageContainer,
  ContentSection,
  StyledProgressBar,
  HeaderText,
  SnackWrapper,
  SnackText,
  Form,
  ButtonWrapper,
  DualWrapper,
} from './CreateAccount.styles';
import {Header} from '../../../components/header/header.component';
import {
  GroupedSpacer,
  Spacer,
} from '../../../components/spacer/spacer.component';
import TextInputContainer from '../../../components/textInput/textInput.component';
import ButtonContainer from '../../../components/button/button.component';
import {colors} from '../../../infrastructure/theme/colors';
import { ScrollView } from 'react-native';

const CreateAccount = ({navigation}) => {
  const [enterAddress, setEnterAddress] = useState(false);
  const [enterPostCode, setEnterPostCode] = useState(false);
  const [protectAccount, setProtectAccount] = useState(false);
  const [referralCode, setReferralCode] = useState(false);
  // const [enterAddress, setEnterAddress] = useState(false);
  // const [enterAddress, setEnterAddress] = useState(false);

  return (
    <SafeArea showStatusBar={true}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <PageContainer>
          <Header svg={'previous'} navigation={navigation} />

          <StyledProgressBar progress={0.4} color={colors.black.strong} />
          <ContentSection>
            <HeaderText variant={'h5'}>Create Your Account</HeaderText>

            <SnackWrapper>
              <SnackText variant={'button'}>
                Enter your legal names as shown on your government issued
                identity document
              </SnackText>
            </SnackWrapper>

            <Form>
              <DualWrapper>
                <TextInputContainer
                  placeholder=" "
                  label="First name*"
                  containerWidth={'45%'}
                  // value={phone}
                  // onChangeText={text => setPhone(text)}
                />

                <TextInputContainer
                  placeholder=" "
                  label={'Middle name (optional)'}
                  containerWidth={'45%'}
                  // value={phone}
                  // onChangeText={text => setPhone(text)}
                />
              </DualWrapper>

              <TextInputContainer
                placeholder=" "
                label={'Last name*'}
                // value={phone}
                // onChangeText={text => setPhone(text)}
              />
              <TextInputContainer
                placeholder=" "
                label={'Email Address*'}
                // value={phone}
                // onChangeText={text => setPhone(text)}
              />
              <TextInputContainer
                label={'Date of Birth (optional)'}
                placeholder="DD - MM - YY"
                // value={phone}
                // onChangeText={text => setPhone(text)}
              />
            </Form>
          </ContentSection>
          <ButtonWrapper>
            <ButtonContainer
              text="Continue"
              onPress={() => {
                navigation.navigate('EnterAddress');
              }}
            />
          </ButtonWrapper>
        </PageContainer>
      </ScrollView>
    </SafeArea>
  );
};

export default CreateAccount;
