import styled from "styled-components/native";
import { Text } from "../../components/typography/text.component";
import { fonts, fontWeights, fontSizes } from "../../infrastructure/theme/fonts";

export const TextInputContainerWrap = styled.View`
  flex-direction: column;
  justify-content: center;
  margin: 5px 0;
  width: ${(props)=> props.width || "100%"};
`;

export const TextInputLabel = styled(Text)`
  font-size: ${props => props.labelFontSize || fontSizes.button};
  line-height: 26px;
  margin: 0 0 5px 0;
  color: ${props => props.labelColor || '#737373'};
  font-family: ${props => props.labelFontFamily || 'Lato-Regular'};
`;

export const TextInputStyled = styled.View`
  border-color: #c1c1c1;
  border-width: 1px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0px 13px 0px 5px;
  width: 100%;
  height:56px;
  background: #fafafa;
  /* border-radius: 12px; */
`;
