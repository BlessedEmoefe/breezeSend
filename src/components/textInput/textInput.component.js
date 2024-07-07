import React, {useState, useMemo, useEffect} from 'react';

import SecureIcon from 'react-native-vector-icons/Ionicons';
import {TextInput} from 'react-native';

import {
  TextInputContainerWrap,
  TextInputStyled,
  TextInputLabel,
} from './textInput.styles';
import {colors} from '../../infrastructure/theme/colors';

const TextInputContainer = ({
  placeholder,
  textValue,
  slash,
  secure,
  label,
  containerWidth,
  labelFontSize,
  labelColor,
  labelFontFamily,
}) => {
  const [value, setValue] = useState(textValue);

  // no re-rendering on "slash" toggle
  const user = useMemo(() => {
    return value;
  }, [value]);

  const [isPassword, revealPassword] = useState(true);

  // toggle password visibility
  const showPasscode = () => revealPassword(isPassword => !isPassword);

  const styledInput = {
    fontSize: 16,
    color: colors.black.strong,
    width: '100%',
    height: '100%',
    letterSpacing: 0.75,
    fontFamily: 'Lato-Regular',
  };

  return (
    <TextInputContainerWrap width={containerWidth}>
      {label && (
        <TextInputLabel
          labelFontSize={labelFontSize}
          labelColor={labelColor}
          labelFontFamily={labelFontFamily}>
          {label}
        </TextInputLabel>
      )}
      <TextInputStyled>
        <TextInput
          value={value}
          placeholderTextColor={colors.black.soft}
          style={[styledInput, slash ? {width: '90%'} : {width: '100%'}]}
          onChangeText={value => setValue(value)}
          autoFocus
          placeholder={placeholder}
          secureTextEntry={slash || (secure && isPassword)}
        />

        {slash && (
          <SecureIcon
            onPress={showPasscode}
            name="eye-off-outline"
            // eye-outline
            size={22}
            color={colors.black.soft}
          />
        )}
      </TextInputStyled>
    </TextInputContainerWrap>
  );
};

export default TextInputContainer;
