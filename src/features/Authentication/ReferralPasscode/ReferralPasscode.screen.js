import React from 'react';
import {SafeArea} from '../../../components/utility/safe-area.component';
import {
  PageContainer,
  StyledProgressBar,
  ContentSection,
  HeaderText,
  Form,
  ButtonWrapper,
} from './ReferralPasscode.styles';
import {Header} from '../../../components/header/header.component';
import TextInputContainer from '../../../components/textInput/textInput.component';
import ButtonContainer from '../../../components/button/button.component';
import {colors} from '../../../infrastructure/theme/colors';
import {fontSizes} from '../../../infrastructure/theme/fonts';
import {GroupedSpacer} from '../../../components/spacer/spacer.component';
import { ScrollView } from 'react-native';
const ReferralPasscode = ({navigation}) => {
  return (
    <SafeArea showStatusBar={true}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <PageContainer>
        <Header svg={'previous'} navigation={navigation} />

        <StyledProgressBar progress={0.4} color={colors.black.strong} />
        <ContentSection>
          <HeaderText variant={'h5'}>Have a referral code?</HeaderText>

          <Form>
            <TextInputContainer
              placeholder=" "
              label={'Enter referral code (optional)'}
              labelFontSize={fontSizes.button}
              // labelColor={colors.black.strong}
              // labelFontFamily={'Poppins-Regular'}
              // value={phone}
              // onChangeText={text => setPhone(text)}
            />
          </Form>
        </ContentSection>
        <ButtonWrapper>
          <ButtonContainer
            text="Skip"
            backgroundColor={'transparent'}
            color={colors.primary}
            borderColor={colors.primary}
            onPress={() => {
              navigation.navigate('AllSetUp');
            }}
          />
          <GroupedSpacer />
          <ButtonContainer
            text="Finish"
            onPress={() => {
              navigation.navigate('AllSetUp');
            }}
          />
        </ButtonWrapper>
      </PageContainer>
      </ScrollView>
    </SafeArea>
  );
};

export default ReferralPasscode;
