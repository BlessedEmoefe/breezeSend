import React, {useState} from 'react';
import {
  SearchBarContainer,
  SearchBarWrapper,
  StyledSearchbar,
  IconContainer,
  BargeContainer,
  SearchIconWrapper,
} from './searchBar.styles';
import Chart from 'react-native-vector-icons/AntDesign';

import {Badge} from 'react-native-paper';
import {FilterIcon} from '../../assets/svg/Icons';
import {Spacer} from '../spacer/spacer.component';
import { SearchIcon } from '../../assets/svg/Icons';

export const SearchBar = ({
  sort,
  cart,
  onPress,
  containerFunction,
  pointerEvents,
  Number,
  placeholder,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = query => setSearchQuery(query);
  // const chart = true

  return (
    <SearchBarContainer pointerEvents={pointerEvents ? pointerEvents : null}>
      <SearchBarWrapper flexDirection="row" justifyContent="center">
        <StyledSearchbar
          sort={sort || cart ? true : false}
          iconColor={'#727272'}
          placeholderTextColor="#727272"
          inputStyle={{color: '#1F2223'}}
          placeholder={placeholder ? placeholder : 'Search'}
          onChangeText={onChangeSearch}
          value={searchQuery}
          icon={() => null}
        />
        <SearchIconWrapper>
          <SearchIcon height={26} width={28}/>
        </SearchIconWrapper>
        <Spacer size="small" position="right" />
        {cart ? (
          <IconContainer onPress={onPress} background="transparent">
            <Chart name="shoppingcart" size={27} />
            <BargeContainer>
              <Badge>{Number}</Badge>
            </BargeContainer>
          </IconContainer>
        ) : sort ? (
          <IconContainer onPress={onPress}>
            <FilterIcon />
          </IconContainer>
        ) : null}
      </SearchBarWrapper>
    </SearchBarContainer>
  );
};
