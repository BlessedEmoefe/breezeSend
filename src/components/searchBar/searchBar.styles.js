import styled from 'styled-components/native';
import {Searchbar, IconButton} from 'react-native-paper';
import {TouchableOpacity, View} from 'react-native';
import {Container} from '../container/container.component';
import Icons from 'react-native-vector-icons/Entypo';

export const SearchBarContainer = styled.TouchableOpacity`
  width: 100%;
  height: 52px;
`;

export const SearchBarWrapper = styled(Container)`
  width: 100%;
  /* background-color: blue; */
`;
export const StyledSearchbar = styled(Searchbar)`
  background-color: #f5f5f5;
  elevation: 5;
  width: ${props => (props.sort ? '87%' : '100%')};
  border-radius: 0px;
  border-width: 1px;
  border-color: #c1c1c1;
  height: 55px;
`;
export const SearchIconWrapper = styled(Container)`
  position: absolute;
  right: 5;
  width:max-content;
  padding-horizontal:10px;
  /* background-color: red; */
  height:100%;
  justify-content: center;
`;
export const IconContainer = styled.TouchableOpacity`
  height: 50px;
  width: ${props => (props.width ? props.width : '52px')};
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: 14px;
  background-color: ${props =>
    props.background ? props.background : '#00AAFF'};
`;

export const BargeContainer = styled.View`
  position: absolute;
  top: 5px;
  height: 25px;
  width: 25px;
  right: -2px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 50px;
`;
