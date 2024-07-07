import React, {useState} from 'react';
import {SafeArea} from '../../../components/utility/safe-area.component';
import {
  PageContainer,
  ContentSection,
  HeaderWrapper,
  HeaderText,
  SubText,
  Card,
  InfoSection,
  Title,
  Description,
  CheckCircleWrapper,
  Circle,
  ButtonWrapper,
} from './VerificationMethod.styles';
import {Header} from '../../../components/header/header.component';
import ButtonContainer from '../../../components/button/button.component';
import {colors} from '../../../infrastructure/theme/colors';
import {ScrollView, TouchableOpacity} from 'react-native';
import {FlatListContainer} from '../../../components/container/container.component';
import {Spacer} from '../../../components/spacer/spacer.component';

const verificationMethodData = [
  {
    title: 'Authentication App',
    description:
      ' Use an authenticator app like Google Authenticator or  Authy to generate one-time passwords.',
    path: 'AuthenticateWithApp',
  },
  {
    title: 'SMS Verification',
    description:
      ' Receive a verification code via SMS to your registered phone number.',
    path: 'SMSVerification',
  },
];

const VerificationMethod = ({navigation}) => {
  const [selected, setSelected] = useState();

  return (
    <SafeArea showStatusBar={true}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <PageContainer>
          <Header svg={'previous'} navigation={navigation} />

          <ContentSection>
            <HeaderWrapper>
              <HeaderText variant={'h4'}>
                Choose Your Verification Method
              </HeaderText>
              <SubText variant={'button'}>
                Add an extra layer of security to your BreezeSend account by
                enabling two-factor authentication (2FA). With 2FA, you'll need
                to provide a second form of verification in addition to your
                password whenever you sign in.
              </SubText>
            </HeaderWrapper>

            <FlatListContainer
              width={'100%'}
              data={verificationMethodData}
              // keyExtractor={}

              ItemSeparatorComponent={() => <Spacer size={'large'} />}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() => {
                    setSelected(item.path);
                  }}>
                  <Card>
                    <InfoSection>
                      <Title variant={'body'}>{item?.title}</Title>
                      <Description variant={'button'}>
                        {item?.description}
                      </Description>
                    </InfoSection>

                    <CheckCircleWrapper>
                      <Circle
                        checked={item?.path === selected ? true : false}
                      />
                    </CheckCircleWrapper>
                  </Card>
                </TouchableOpacity>
              )}
            />
          </ContentSection>
          <ButtonWrapper>
            <ButtonContainer
              text="Next"
              onPress={() => {
                navigation.navigate(selected);
              }}
            />
          </ButtonWrapper>
        </PageContainer>
      </ScrollView>
    </SafeArea>
  );
};

export default VerificationMethod;
