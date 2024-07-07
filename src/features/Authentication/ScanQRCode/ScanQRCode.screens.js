import React, {useState} from 'react';
import {SafeArea} from '../../../components/utility/safe-area.component';
import {
  PageContainer,
  ContentSection,
  HeaderWrapper,
  HeaderText,
  QRCodeWrapper,
  ButtonWrapper,
} from './ScanQRCode.styles';
import {Header} from '../../../components/header/header.component';
import ButtonContainer from '../../../components/button/button.component';
import {colors} from '../../../infrastructure/theme/colors';
import {ScrollView, TouchableOpacity} from 'react-native';
import TextInputContainer from '../../../components/textInput/textInput.component';
import {GroupedSpacer} from '../../../components/spacer/spacer.component';
import QRCOdeIcon from '../../../assets/svg/QRcode.svg';

const ScanQRCode = ({navigation}) => {
  return (
    <SafeArea showStatusBar={true}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <PageContainer>
          <Header svg={'previous'} navigation={navigation} />

          <ContentSection>
            <HeaderWrapper>
              <HeaderText variant={'h5'}>Scan QR Code</HeaderText>
            </HeaderWrapper>

            <QRCodeWrapper>
              <QRCOdeIcon />
            </QRCodeWrapper>
          </ContentSection>
          <ButtonWrapper>
            <ButtonContainer
              text="Show Setup Key"
              backgroundColor={'transparent'}
              color={colors.primary}
              borderColor={colors.primary}
              onPress={() => {
                navigation.navigate('SetupKey');
              }}
            />
            <GroupedSpacer />
            <ButtonContainer
              text="Continue"
              onPress={() => {
                navigation.navigate('AuthenticateWithGoogle');
              }}
            />
          </ButtonWrapper>
        </PageContainer>
      </ScrollView>
    </SafeArea>
  );
};

export default ScanQRCode;
