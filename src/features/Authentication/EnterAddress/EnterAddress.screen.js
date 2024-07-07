import React from 'react';
import {SafeArea} from '../../../components/utility/safe-area.component';
import {
  PageContainer,
  StyledProgressBar,
  ContentSection,
  HeaderText,
  Form,
  ButtonWrapper,
  BottomTextWrapper,
  BottomText,
} from './EnterAddress.styles';
import {Header} from '../../../components/header/header.component';
import TextInputContainer from '../../../components/textInput/textInput.component';
import ButtonContainer from '../../../components/button/button.component';
import {colors} from '../../../infrastructure/theme/colors';
import {fontSizes} from '../../../infrastructure/theme/fonts';
import {LocationIcon} from '../../../assets/svg/Icons';
import {ScrollView, TouchableOpacity} from 'react-native';
import {PressableContainer} from '../../../components/container/container.component';

const EnterAddress = ({navigation}) => {
  return (
    <SafeArea showStatusBar={true}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <PageContainer>
          <Header svg={'previous'} navigation={navigation} />

          <StyledProgressBar progress={0.4} color={colors.black.strong} />
          <ContentSection>
            <HeaderText variant={'h5'}>Enter Address</HeaderText>

            <Form>
              <TextInputContainer
                placeholder=" "
                label={'Enter your home address'}
                labelFontSize={fontSizes.button}
                labelColor={colors.black.strong}
                labelFontFamily={'Poppins-Regular'}
                // value={phone}
                // onChangeText={text => setPhone(text)}
              />
            </Form>
            <PressableContainer
              onPress={() => {
                navigation.navigate('EnterPostalCode');
              }}>
              <BottomTextWrapper>
                <LocationIcon />
                <BottomText variant="button">
                  Or enter postal code instead
                </BottomText>
              </BottomTextWrapper>
            </PressableContainer>
          </ContentSection>
          <ButtonWrapper>
            <ButtonContainer
              text="Continue"
              onPress={() => {
                navigation.navigate('ProtectYourAccount');
              }}
            />
          </ButtonWrapper>
        </PageContainer>
      </ScrollView>
    </SafeArea>
  );
};

export default EnterAddress;
