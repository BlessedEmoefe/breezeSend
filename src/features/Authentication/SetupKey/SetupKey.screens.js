import React, {useState} from 'react';
import {SafeArea} from '../../../components/utility/safe-area.component';
import {
  PageContainer,
  ContentSection,
  HeaderWrapper,
  HeaderText,
  CopyCard,
  CopyCardInfoSection,
  Title,
  Description,
  CopyButtonWrapper,
  Card,
  NumberWrapper,
  StyledText,
  InfoSection,
  ButtonWrapper,
} from './SetupKey.styles';
import {Header} from '../../../components/header/header.component';
import ButtonContainer from '../../../components/button/button.component';
import {colors} from '../../../infrastructure/theme/colors';
import {ScrollView, TouchableOpacity} from 'react-native';
import TextInputContainer from '../../../components/textInput/textInput.component';
import {FlatListContainer} from '../../../components/container/container.component';
import {GroupedSpacer, Spacer} from '../../../components/spacer/spacer.component';

const stepsData = [
  {
    text: 'Click the + icon and select ‘enter a setup key’',
  },
  {
    text: 'Enter BreezeSend in account name',
  },
  {text: 'Copy and paste the above setup key in the ‘Key’ input field'},
];

const SetupKey = ({navigation}) => {
  return (
    <SafeArea showStatusBar={true}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <PageContainer>
          <Header svg={'previous'} navigation={navigation} />

          <ContentSection>
            <HeaderWrapper>
              <HeaderText variant={'h5'}>Copy Setup Key</HeaderText>
            </HeaderWrapper>

            <CopyCard>
              <CopyCardInfoSection>
                <Title variant={'body'}>Setup Key</Title>
                <Description variant={'button'}>
                  WWKKYYYYH5UIIIOOPPLJKKKHS36788Q977HHGSNBBXNJDJEKKK67THNSH6HSVBBN
                </Description>
              </CopyCardInfoSection>

              <CopyButtonWrapper>
                <ButtonContainer
                  height={'30px'}
                  borderRadius={'0'}
                  fontSizeVariant={'caption'}
                  text="Copy"
                  onPress={() => {}}
                />
              </CopyButtonWrapper>
            </CopyCard>

            <FlatListContainer
              width={'100%'}
              data={stepsData}
              // keyExtractor={}

              ItemSeparatorComponent={() => <Spacer size={'large'} />}
              renderItem={({item, index}) => (
                <Card>
                  <NumberWrapper>
                    <StyledText variant={'button'}>
                      {index + 1}
                      {'.'}
                    </StyledText>
                  </NumberWrapper>
                  <InfoSection>
                    <StyledText variant={'button'}>{item?.text}</StyledText>
                  </InfoSection>
                </Card>
              )}
            />
          </ContentSection>
          <ButtonWrapper>
            <ButtonContainer
              text="Scan QR Code"
              backgroundColor={'transparent'}
              color={colors.primary}
              borderColor={colors.primary}
              onPress={() => {
                navigation.navigate('ScanQRCode');
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

export default SetupKey;
