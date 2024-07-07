import React, {useState} from 'react';
import {SafeArea} from '../../../components/utility/safe-area.component';
import {
  PageContainer,
  ContentSection,
  StyledProgressBar,
  HeaderText,
  Form,
  ButtonWrapper,
  HintSection,
  InfoBox,
  CheckCircle,
  InfoText,
} from './ProtectYourAccount.styles';
import {Header} from '../../../components/header/header.component';
import TextInputContainer from '../../../components/textInput/textInput.component';
import ButtonContainer from '../../../components/button/button.component';
import {colors} from '../../../infrastructure/theme/colors';
import {FlatListContainer} from '../../../components/container/container.component';
import {Spacer} from '../../../components/spacer/spacer.component';
import { ScrollView } from 'react-native';
const hints = [
  {completed: true, hint: 'At least one uppercase'},
  {completed: true, hint: 'At least one number'},
  {completed: true, hint: 'At least one special character (eg _$%&)'},
  {completed: false, hint: 'Minimum of 8 characters'},
];

const ProtectYourAccount = ({navigation}) => {
  const [enterAddress, setEnterAddress] = useState(false);
  const [enterPostCode, setEnterPostCode] = useState(false);

  return (
    <SafeArea showStatusBar={true}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <PageContainer>
        <Header svg={'previous'} navigation={navigation} />

        <StyledProgressBar progress={0.4} color={colors.black.strong} />
        <ContentSection>
          <HeaderText variant={'h5'}>Protect Your Account</HeaderText>

          <Form>
            <TextInputContainer
              placeholder=" "
              label={'Create your password'}
              slash
              labelColor={colors.black.regular}
              // value={phone}
              // onChangeText={text => setPhone(text)}
            />
            <TextInputContainer
              placeholder=" "
              label={'Confirm your password'}
              labelColor={colors.black.regular}
              slash
              // value={phone}
              // onChangeText={text => setPhone(text)}
            />
          </Form>

          <FlatListContainer
            width={'100%'}
            data={hints}
            // keyExtractor={}

            ItemSeparatorComponent={() => <Spacer size={'medium'} />}
            renderItem={({item}) => (
              <HintSection>
                <InfoBox>
                  <CheckCircle
                    background={item?.completed ? colors.primary : '#fff'}
                  />
                  <InfoText variant="button">{item?.hint}</InfoText>
                </InfoBox>
              </HintSection>
            )}
          />
        </ContentSection>
        <ButtonWrapper>
          <ButtonContainer
            text="Continue"
            onPress={() => {
              navigation.navigate('ReferralPasscode');
            }}
          />
        </ButtonWrapper>
      </PageContainer>
      </ScrollView>
    </SafeArea>
  );
};

export default ProtectYourAccount;
