import React from 'react';

import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import Login from '../../features/Authentication/Login/Login.screen';
import SelectCountry from '../../features/Authentication/SelectCountry/SelectCountry.screen';
// import ForgotPassword from '../../features/Authentication/ForgotPassword/forgotPassword.screen';
// import NewPassword from '../../features/Authentication/NewPassword/newPassword.screen';
// import BackEmail from '../../features/Authentication/BackEmail/backEmail.screen';
// import Successful from '../../features/Authentication/Successful/successful.screen';

import GetStarted from '../../features/Authentication/GetStarted/getStarted.screen';
import Onboarding from '../../features/Authentication/Onboarding/onboarding.screen';
// import SplashScreen from '../../features/Authentication/Splash/splash.screen';
// import SignInAndCreateAccount from '../../features/Authentication/SignInAndCreateAccount/signInAndCreateAccount.screen';
import {View, Text} from 'react-native';
import CreateAccount from '../../features/Authentication/CreateAccount/CreateAccount.screen';
import EnterAddress from '../../features/Authentication/EnterAddress/EnterAddress.screen';
import EnterPostalCode from '../../features/Authentication/EnterPostalCode/EnterPostalCode.screen';
import ProtectYourAccount from '../../features/Authentication/ProtectYourAccount/ProtectYourAccount.screen';
import ReferralPasscode from '../../features/Authentication/ReferralPasscode/ReferralPasscode.screen';
import CreatePasscode from '../../features/Authentication/CreatePasscode/CreatePasscode.screen';
import AllSetUp from '../../features/Authentication/AllSetUp/AllSetUp.screen';
import AccountSecurity from '../../features/Authentication/AccountSecurity/AccountSecurity.screen';
import VerificationMethod from '../../features/Authentication/VerificationMethod/VerificationMethod.screens';
import SMSVerification from '../../features/Authentication/SMSVerification/SMSVerification.screens';
import VerificationCode from '../../features/Authentication/VerificationCode/VerificationCode.screens';
import AccessGranted from '../../features/Authentication/AccessGranted/AccessGranted.screens';
import AuthenticateWithApp from '../../features/Authentication/AuthenticateWithApp/AuthenticateWithApp.screens';
import SetupKey from '../../features/Authentication/SetupKey/SetupKey.screens';
import ScanQRCode from '../../features/Authentication/ScanQRCode/ScanQRCode.screens';
import AuthenticateWithGoogle from '../../features/Authentication/AuthenticateWithGoogle/AuthenticateWithGoogle.screens';

const AuthenticationStack = createStackNavigator();
const screenOptions = {
  //   ...TransitionPresets.ModalPresentationIOS,
  headerShown: false,
};

export const AuthNavigator = () => {
  const {Navigator, Screen} = AuthenticationStack;

  return (
    <Navigator
      //screenOptions={{ headerShown: false }}
      screenOptions={screenOptions}
      initialRouteName="Onboard">
      {/* <AuthenticationStack.Screen name="Splash" component={SplashScreen} /> */}
      <Screen name="Onboard" component={Onboarding} />
      <Screen name="SelectCountry" component={SelectCountry} />
      <Screen name="GetStarted" component={GetStarted} />
      <Screen name="CreateAccount" component={CreateAccount} />
      <Screen name="EnterAddress" component={EnterAddress} />
      <Screen name="EnterPostalCode" component={EnterPostalCode} />
      <Screen name="ProtectYourAccount" component={ProtectYourAccount} />
      <Screen name="ReferralPasscode" component={ReferralPasscode} />
      <Screen name="CreatePasscode" component={CreatePasscode} />
      <Screen name="AllSetUp" component={AllSetUp} />
      <Screen name="Login" component={Login} />
      <Screen name="AccountSecurity" component={AccountSecurity} />
      <Screen name="VerificationMethod" component={VerificationMethod} />
      <Screen name="SMSVerification" component={SMSVerification} />

      <Screen name="VerificationCode" component={VerificationCode} />

      <Screen name="AccessGranted" component={AccessGranted} />

      <Screen name="AuthenticateWithApp" component={AuthenticateWithApp} />
      <Screen name="SetupKey" component={SetupKey} />
      <Screen name="ScanQRCode" component={ScanQRCode} />
      <Screen
        name="AuthenticateWithGoogle"
        component={AuthenticateWithGoogle}
      />
     
    </Navigator>
  );
};
