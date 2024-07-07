import React from 'react';
import {Spacer} from '../spacer/spacer.component';
import {
  ButtonContainerWrapper,
  ButtonWrapper,
  ButtonText,
} from './button.styles';

const ButtonContainer = ({
  backgroundColor,
  color,
  text = 'Register',
  rightIcon,
  leftIcon,
  onPress,
  width,
  height,
  paddingHorizontal,
  borderRadius,
  border,
  textTransform,
  fontSizeVariant,
  fontWeight,
  borderColor,
  borderWidth,
}) => {
  return (
    <ButtonContainerWrapper
      onPress={onPress ? () => onPress() : null}
      width={width}
      borderRadius={borderRadius}
      borderColor={borderColor}
      borderWidth={borderWidth}>
      <ButtonWrapper
        height={height}
        paddingHorizontal={paddingHorizontal}
        width={width ? width : '100%'}
        flexDirection="row"
        backgroundColor={backgroundColor}
        onPress={() => console.log('onPress')}>
        {leftIcon ? leftIcon : null}
        {leftIcon ? <Spacer position="left" size="medium" /> : null}
        <ButtonText
          fontWeight={fontWeight}
          textTransform={textTransform}
          color={color}
          variant={fontSizeVariant ? fontSizeVariant : 'body'}>
          {text}
        </ButtonText>
        {rightIcon ? <Spacer position="right" size="medium" /> : null}
        {rightIcon ? rightIcon : null}
      </ButtonWrapper>
    </ButtonContainerWrapper>
  );
};
export default ButtonContainer;
