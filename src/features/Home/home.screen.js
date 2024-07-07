import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  Image,
  SectionList,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Pressable,
  Dimensions,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';

import {SafeArea} from '../../components/utility/safe-area.component';
import {
  Container,
  FlatListContainer,
  PressableContainer,
  ScrollViewContainer,
} from '../../components/container/container.component';
import {Header} from '../../components/header/header.component';
import {colors} from '../../infrastructure/theme/colors';
import {
  PageContainer,
  ContentContainer,
  Wrapper,
  RowContainer,
  ModalWrapper,
  MapInfoContainer,
  ContainerHandle,
  HeaderText,
  CardText,
  HorizontalTable,
  LeftSection,
  RightSection,
  BigText,
  SubText,
} from './home.styles';

import {Spacer} from '../../components/spacer/spacer.component';
import {SearchBar} from '../../components/searchBar/searchBar.component';
import ButtonContainer from '../../components/button/button.component';
import {BannerCard} from '../../components/bannerCard/bannerCard.component';
import {CardListHeader} from '../../components/cardListHeader/cardListHeader.component';
import {ModalComponent} from '../../components/modal/modal.component';

const windowWidth = Dimensions.get('window').width;

const Home = ({navigation}) => {
  const [homeModal, setHomeModal] = useState(false);
  const [confirmDeliveryModal, setconfirmDeliveryModal] = useState(false);
  const home = true;
  const showModal = () => setHomeModal(true);

  const hideModal = () => setHomeModal(false);
  const [selected, setSelected] = useState();

  const confirmDelivery = false;

  return (
    <PageContainer height="100%">
      <ContentContainer>
        <Header
          navigation={navigation}
          text={null}
          paddingHorizontal
        />
        <Spacer size="large" position="top" />
      </ContentContainer>
    </PageContainer>
  );
};

export default Home;

// <ModalWrapper paddingHorizontal homeModal={homeModal}>
//         <ModalComponent
//           homeModal={homeModal}
//           hideModal={hideModal}
//           home={true}
//           selected={selected}
//           setSelected={setSelected}
//           confirmDelivery={confirmDelivery}
//         />
//       </ModalWrapper>
//       <PressableContainer onPress={() => navigation.navigate('Search')}>
//         <Wrapper paddingHorizontal pointerEvents="box-only">
//           <SearchBar sort />
//         </Wrapper>
//       </PressableContainer>
//       <Spacer size="large" position="top" />
//       <Wrapper style={{paddingStart: 16}}>
//         <FlatListContainer
//           data={BannerData}
//           keyExtractor={item => item.id}
//           horizontal={true}
//           paddingEnd={16}
//           contentContainerStyle={{paddingEnd: 16}}
//           ItemSeparatorComponent={() => (
//             <Spacer size="large" position="right" />
//           )}
//           renderItem={({item}) => (
//             <BannerCard
//               image={item.image}
//               onPress={() => {
//                 console.log('Hey');
//               }}
//               firstGradientColor={item.firstGradientColor}
//               secondGradientColor={item.secondGradientColor}
//               thirdGradientColor={item.thirdGradientColor}
//               headerText={item.headerText}
//               discountPercentage={item.discountPercentage}
//               description={item.description}
//             />
//           )}
//         />
//       </Wrapper>
//       <Spacer size="large" position="top" />
//       <SectionList
//         sections={data}
//         // style={{backgroundColor:"red",paddingHorizontal:"4%"}}
//         keyExtractor={item => item.key}
//         showsVerticalScrollIndicator={false}
//         renderItem={renderItem}
//         renderSectionHeader={renderSectionHeader}
//         onEndReached={handleEndReached}
//         onEndReachedThreshold={0.1}
//         ItemSeparatorComponent={() => (
//           <Spacer size="large" position="right" />
//         )}
//         ListFooterComponent={isLoadingMore && <ActivityIndicator />}
//         stickySectionHeadersEnabled={false}
//         ListHeaderComponent={() => (
//           <Wrapper>
//             <ButtonContainer />
//             <Spacer size="large" position="top" />
//           </Wrapper>
//         )}
//       />

// <ScrollViewContainer>
//   <PageContainer height="100%">
//     <ContentContainer>
//       <Header
//         text={null}
//         paddingHorizontal
//         grade={true}
//         // svg="previous"
//       />
//       <Spacer size="large" position="top" />
//       <Wrapper paddingHorizontal>
//         <SearchBar sort onPress={() => {}} />
//       </Wrapper>
//       <Spacer size="large" position="top" />
//       <Wrapper style={{paddingStart: 16}}>
//         <FlatListContainer
//           data={BannerData}
//           keyExtractor={item => item.id}
//           horizontal={true}
//           paddingEnd={16}
//           contentContainerStyle={{paddingEnd: 16}}
//           ItemSeparatorComponent={() => (
//             <Spacer size="large" position="right" />
//           )}
//           renderItem={({item}) => (
//             <BannerCard
//               image={item.image}
//               firstGradientColor={item.firstGradientColor}
//               secondGradientColor={item.secondGradientColor}
//               thirdGradientColor={item.thirdGradientColor}
//               headerText={item.headerText}
//               discountPercentage={item.discountPercentage}
//               description={item.description}
//             />
//           )}
//         />
//       </Wrapper>
//       <Spacer size="large" position="top" />
//       <Wrapper paddingHorizontal>
//         <ButtonContainer
//         // backgroundColor={}
//         // color={}
//         // text={}
//         // rightIcon={}
//         // leftIcon={}
//         // onPress={}
//         // width={}
//         // borderRadius={}
//         />
//       </Wrapper>
//       <Spacer size="large" position="top" />

//       <Wrapper>
//         <CardListHeader title="Subjects" />
//         <FlatListContainer
//           data={subjectData}
//           keyExtractor={item => item.id}
//           numColumns={2}
//           columnWrapperStyle={{justifyContent: 'space-between'}}
//           contentContainerStyle={{
//             width: '100%',
//             // padding: 10,
//           }}
//           ItemSeparatorComponent={() => (
//             <Spacer size="large" position="top" />
//           )}
//           renderItem={({item}) => (
//             <MultiPurposeCard
//               image={item.image}
//               firstGradientColor={item.firstGradientColor}
//               secondGradientColor={item.secondGradientColor}
//               thirdGradientColor={item.thirdGradientColor}
//               headerText={item.headerText}
//               discountPercentage={item.discountPercentage}
//               description={item.description}
//             />
//           )}
//         />
//       </Wrapper>
//       <Spacer size="large" position="top" />
//       <Wrapper>
//         <CardListHeader title="recommended for you" />
//         <FlatListContainer
//           data={subjectData}
//           keyExtractor={item => item.id}
//           numColumns={2}
//           columnWrapperStyle={{justifyContent: 'space-between'}}
//           contentContainerStyle={{
//             width: '100%',
//             // padding: 10,
//           }}
//           ItemSeparatorComponent={() => (
//             <Spacer size="large" position="top" />
//           )}
//           renderItem={({item}) => (
//             <MultiPurposeCard
//               image={item.image}
//               firstGradientColor={item.firstGradientColor}
//               secondGradientColor={item.secondGradientColor}
//               thirdGradientColor={item.thirdGradientColor}
//               headerText={item.headerText}
//               discountPercentage={item.discountPercentage}
//               description={item.description}
//             />
//           )}
//         />
//       </Wrapper>
//     </ContentContainer>
//   </PageContainer>
// </ScrollViewContainer>
