import React from 'react';
import {SafeArea} from '../../../components/utility/safe-area.component';
import {
  PageContainer,
  StyledProgressBar,
  ContentSection,HeaderWrapper,
  HeaderText,SubText,
  Form,
  ButtonWrapper,
  BottomSection,
  ORText,
  FaceIDTextWrapper,
  FaceIDText,
} from './CreatePasscode.styles';
import {Header} from '../../../components/header/header.component';
import TextInputContainer from '../../../components/textInput/textInput.component';
import ButtonContainer from '../../../components/button/button.component';
import {colors} from '../../../infrastructure/theme/colors';
import {fontSizes} from '../../../infrastructure/theme/fonts';
import {FaceId} from '../../../assets/svg/Icons';
import { ScrollView } from 'react-native';

const CreatePasscode = ({navigation}) => {
  return (
    <SafeArea showStatusBar={true}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <PageContainer>
          <Header svg={'previous'} navigation={navigation} />

          <StyledProgressBar progress={0.8} color={colors.black.strong} />
          <ContentSection>
            <HeaderWrapper>
              <HeaderText variant={'h5'}>Create Passcode</HeaderText>
              <SubText variant={'button'}>
                This passcode will be used for logging in
              </SubText>
            </HeaderWrapper>
          </ContentSection>
          <ButtonWrapper>
            <ButtonContainer
              text="Proceed"
              onPress={() => {
                navigation.navigate('CreateAccount');
              }}
            />
            <BottomSection>
              <ORText variant="body">OR</ORText>
              <FaceIDTextWrapper>
                <FaceId width={'20'} height={'22'} />
                <FaceIDText variant="body">Create a Face ID</FaceIDText>
              </FaceIDTextWrapper>
            </BottomSection>
          </ButtonWrapper>
        </PageContainer>
      </ScrollView>
    </SafeArea>
  );
};

export default CreatePasscode;
