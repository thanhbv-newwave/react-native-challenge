import React, { createRef, useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  Pressable,
  Text,
  View,
  Dimensions,
  ImageSourcePropType,
  ActivityIndicator
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { IC_ADD, LOGO } from '../../assets/images';
import { stylesApp } from '../../contants/styles.constants';
import { cardList } from '../../mock';
import { CardItem } from '../../network/apiResponses/card';
import Colors from '../../utils/Colors';
import { styles } from './styles';
import ActionModal from './widget/ActionModal';
import ItemList from './widget/ItemList';
interface Props {
  cardData: CardItem[],
  loading: boolean,
  addFoodStyle: () => void,
  deleteFoodStyle: (id: string) => void,
  duplicateFoodStyle: (id: string) => void,
  shareFoodStyle: (id: string) => void,
}
const CartListScreen = (props: Props) => {
  const {cardData, loading, addFoodStyle, deleteFoodStyle, duplicateFoodStyle, shareFoodStyle} = props;
  const arrLength = cardData?.length;
  const [elRefs, setElRefs] = React.useState([]);
  const [state, setState] = useState({
    showModal: false,
    isBottom: false,
    top: 0,
    height: 0,
    bottom: 0,
  });
  const [index, setIndex] = useState(0);
  useEffect(() => {
    setElRefs((elRefs) =>
      Array(arrLength)
        //@ts-ignore
        .fill()
        .map((_, i) => elRefs[i] || createRef()),
    );
  }, [arrLength]);
  const _showAction = (index: number) => {
    setIndex(index);
    //@ts-ignore
    elRefs[index].current?.measure(_updatePosition)
  }
  const _onClose = () => {
    setState({
      ...state,
      showModal: false
    })
  }
  const _updatePosition = (x: number, y: number, w: number, h: number, pageX: number, pageY: number) => {
    const top = pageY - 6;
    const bottom = pageY + h;
    const bottomSpace = Dimensions.get('screen').height - bottom;
    let isBottom = false;
    if (bottomSpace > Dimensions.get('screen').height / 2) {
      isBottom = true;
    }
    setState({
      top: top,
      isBottom: isBottom,
      showModal: true,
      height: h,
      bottom: bottomSpace,
    })
  }

  return (
    <>
      <View style={stylesApp.container}>
        <LinearGradient
          colors={[Colors.orangish, Colors.maize]}
          style={styles.linearGradient}
          start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
        >
          <Image source={LOGO} style={styles.logo} />
          <LinearGradient
            colors={[Colors.whiteZero, Colors.transparentPointTwo, Colors.transparentPointEightFive, Colors.gray]}
            style={styles.height80}
            locations={[0, 0.2, 0.75, 1]}
          />
        </LinearGradient>
        <View style={styles.content}>
          <FlatList
            //@ts-ignore
            data={cardData}
            style={styles.flatListStyles}
            renderItem={({ item, index }: { item: { name: string }, index: number }) => <ItemList
              item={item}
              index={index}
              showAction={_showAction}
              elRefs={elRefs}
            />
            }
            keyExtractor={(item, index) => index.toString()}
            ListFooterComponent={loading ? <ActivityIndicator size={'small'} color={Colors.gray}/> : null}
          />
        </View>
        <View style={styles.bottom}>
          <View style={styles.footer}>
            <View style={styles.viewNewFood}>
              <Pressable onPress={addFoodStyle}>
                <Image
                  source={IC_ADD}
                  style={styles.icAdd}
                />
              </Pressable>
              <Text style={styles.txtNewFood}>{'New Food Style'}</Text>
            </View>
          </View>
        </View>
      </View>
      <ActionModal
        state={state}
        onClose={_onClose}
        index={index}
        cardData={cardData}
        deleteFoodStyle={deleteFoodStyle}
        duplicateFoodStyle={duplicateFoodStyle}
        shareFoodStyle={shareFoodStyle}
      />
    </>
  );
};

export default CartListScreen;
