import React, {useState} from 'react';
import CountryPicker from 'react-native-country-picker-modal';
import {
  Wrapper,
  InputWrapper,
  TextInputLabel,
  PhoneNumberInputWrapper,
  CountryCodePickerWrapper,
} from './countryCodePicker.styles';
import {Text, TouchableOpacity, View} from 'react-native';
import {BottomArrow} from '../../assets/svg/Icons';
import TextInputContainer from '../textInput/textInput.component';

export const CountryCodePicker = () => {
  const [phone, setPhone] = useState('');

  const [countryCode, setCountryCode] = useState('FR');
  const [country, setCountry] = useState(null);
  const [withCountryNameButton, setWithCountryNameButton] = useState(false);
  const [withFlag, setWithFlag] = useState(true);
  const [withEmoji, setWithEmoji] = useState(true);
  const [withFilter, setWithFilter] = useState(true);
  const [withAlphaFilter, setWithAlphaFilter] = useState(false);
  const [withCallingCode, setWithCallingCode] = useState(false);
  const onSelect = () => {
    setCountryCode(country.cca2);
    setCountry(country);
  };

  return (
    <Wrapper>
      <TextInputLabel variant={'body'}>Enter your phone number</TextInputLabel>
      <InputWrapper>
        <CountryCodePickerWrapper>
          <CountryPicker
            {...{
              countryCode,
              withFilter,
              withFlag,
              withCountryNameButton,
              withAlphaFilter,
              withCallingCode,
              withEmoji,
              onSelect,
            }}
            // visible
          />

          <BottomArrow />

          {country !== null && (
            <Text /*style={styles.data}*/>
              {JSON.stringify(country, null, 2)}
            </Text>
          )}
        </CountryCodePickerWrapper>

        <PhoneNumberInputWrapper>
          <TextInputContainer
            placeholder="+234"
            value={phone}
            onChangeText={text => setPhone(text)}
          />
        </PhoneNumberInputWrapper>
      </InputWrapper>
    </Wrapper>
  );
};
