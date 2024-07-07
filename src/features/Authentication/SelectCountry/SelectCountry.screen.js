import React from 'react';
import {SafeArea} from '../../../components/utility/safe-area.component';
import {
  PageContainer,
  ContentSection,
  SelectYourCountryHeader,
  SearchBarWrapper,
  CountryLists,
  CountryCard,
  CountryInfoSection,
  CountryFlag,
  CountryName,
  CodeSection,
  CountryCode,
} from './SelectCountry.styles';
import {Header} from '../../../components/header/header.component';
import {SearchBar} from '../../../components/searchBar/searchBar.component';

import {FlatListContainer} from '../../../components/container/container.component';
import {
  GroupedSpacer,
  Spacer,
} from '../../../components/spacer/spacer.component';
import CanadaFlag from '../../../assets/images/canadaFlag.png';
import UnitedStatesFlag from '../../../assets/images/unitedStatesFlag.png';
import UnitedKingdomFlag from '../../../assets/images/unitedKingdomFlag.png';
import NigerianFlag from '../../../assets/images/nigerianFlag.png';
import GermanyFlag from '../../../assets/images/germanyFlag.png';
import SpainFlag from '../../../assets/images/spainFlag.png';
import TextInputContainer from '../../../components/textInput/textInput.component';
import {TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native';

const countries = [
  {country: 'Canada', code: '+1', flag: CanadaFlag},
  {country: 'United Kingdom', code: '+44', flag: UnitedKingdomFlag},

  {country: 'United States', code: '+1', flag: UnitedStatesFlag},

  {country: 'Nigeria', code: '+234', flag: NigerianFlag},

  {country: 'Germany', code: '+49', flag: GermanyFlag},

  {country: 'Spain', code: '+39', flag: SpainFlag},
];

const SelectCountry = ({navigation}) => {
  const renderItem = ({item}) => {
    return (
      item?.country.length > 0 && (
        <TouchableOpacity onPress={() => navigation.navigate('GetStarted')}>
          <CountryLists>
            <CountryCard>
              <CountryInfoSection>
                <CountryFlag source={item?.flag} resizeMode={'stretch'} />
                <CountryName variant={'button'}>{item?.country}</CountryName>
              </CountryInfoSection>
              <CodeSection>
                <CountryCode variant={'button'}>{item?.code}</CountryCode>
              </CodeSection>
            </CountryCard>
          </CountryLists>
        </TouchableOpacity>
      )
    );
  };

  return (
    <SafeArea showStatusBar={true}>
<ScrollView showsVerticalScrollIndicator={false}>
      <PageContainer>
        <Header svg={'previous'} navigation={navigation} />

        <ContentSection>
          <SelectYourCountryHeader variant={'h5'}>
            Select Your Country
          </SelectYourCountryHeader>
          <SearchBarWrapper>
            <SearchBar placeholder={' '} />
          </SearchBarWrapper>

          <FlatListContainer
            width={'100%'}
            data={countries}
            // keyExtractor={}
            ItemSeparatorComponent={() => <GroupedSpacer />}
            renderItem={renderItem}
          />
        </ContentSection>
      </PageContainer>
      </ScrollView>
    </SafeArea>
  );
};

export default SelectCountry;
