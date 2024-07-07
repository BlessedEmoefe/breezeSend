
import React,{useState} from "react";
import {Text, StyleSheet} from 'react-native';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';



const styles = StyleSheet.create({
  root: {flex: 1, padding: 20},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {
    marginTop: 20,
    justifyContent: 'space-between',
    gap: 5,
    width: '100%',
  },
  cell: {
    width: 50,
    height: 60,
    lineHeight: 38,
    fontSize: 20,
    borderWidth: 1,
    borderColor: '#DBDBDB',
    textAlign: 'center',
    borderRadius: 5,
    backgroundColor: '#FDFDFD',
  },
  focusCell: {
    borderColor: '#000',
    backgroundColor: 'teal',
  },
});

export const CodeInput =()=>{
 const [value, setValue] = useState('');
 const ref = useBlurOnFulfill({value, cellCount: 6});
 const [props, getCellOnLayoutHandler] = useClearByFocusCell({
   value,
   setValue,
 });

  return (
    <CodeField
      ref={ref}
      {...props}
      // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
      value={value}
      onChangeText={setValue}
      cellCount={6}
      rootStyle={styles.codeFieldRoot}
      keyboardType="number-pad"
      textContentType="oneTimeCode"
      autoComplete={Platform.select({
        android: 'sms-otp',
        default: 'one-time-code',
      })}
      testID="my-code-input"
      renderCell={({index, symbol, isFocused}) => (
        <Text
          key={index}
          style={[styles.cell, isFocused && styles.focusCell]}
          onLayout={getCellOnLayoutHandler(index)}>
          {symbol || (isFocused ? <Cursor /> : null)}
        </Text>
      )}
    />
  );
}