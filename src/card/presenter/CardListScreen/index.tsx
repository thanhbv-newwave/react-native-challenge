import React, {createRef, useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  Pressable,
  Text,
  View,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';
import {IC_ADD, LOGO} from '../../../assets/images';
import {stylesApp} from '../../../contants/styles.constants';
import {addCard, deleteCard, getCardList} from '../../../redux/card.slice';
import {useAppDispatch} from '../../../redux/hooks';
import {getCard} from '../../../redux/selectors/cardSelector';
import Colors from '../../../utils/Colors';
import {styles} from './styles';
import ActionModal from './widget/ActionModal';
import ItemList from './widget/ItemList';

const CartListScreen = () => {
  const {cardList, isLoading} = useSelector(getCard);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCardList());
  }, [dispatch]);

  const arrLength = cardList?.length;
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
    setElRefs(elRefs =>
      Array(arrLength)
        //@ts-ignore
        .fill()
        .map((_, i) => elRefs[i] || createRef()),
    );
  }, [arrLength]);
  const _showAction = (index: number) => {
    setIndex(index);
    //@ts-ignore
    elRefs[index].current?.measure(_updatePosition);
  };
  const _onClose = () => {
    setState({
      ...state,
      showModal: false,
    });
  };
  const _updatePosition = (
    x: number,
    y: number,
    w: number,
    h: number,
    pageX: number,
    pageY: number,
  ) => {
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
    });
  };

  const _addFoodStyle = () => {
    dispatch(addCard());
  };

  const _deleteFoodStyle = (id: string) => {
    dispatch(deleteCard(id));
  };

  const _duplicateFoodStyle = (id: string) => {};

  const _shareFoodStyle = (id: string) => {};

  return (
    <>
      <View style={stylesApp.container}>
        <LinearGradient
          colors={[Colors.orangish, Colors.maize]}
          style={styles.linearGradient}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}>
          <Image source={LOGO} style={styles.logo} />
          <LinearGradient
            colors={[
              Colors.whiteZero,
              Colors.transparentPointTwo,
              Colors.transparentPointEightFive,
              Colors.gray,
            ]}
            style={styles.height80}
            locations={[0, 0.2, 0.75, 1]}
          />
        </LinearGradient>
        <View style={styles.content}>
          <FlatList
            //@ts-ignore
            data={cardList}
            style={styles.flatListStyles}
            renderItem={({
              item,
              index,
            }: {
              item: {name: string};
              index: number;
            }) => (
              <ItemList
                item={item}
                index={index}
                showAction={_showAction}
                elRefs={elRefs}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
            ListFooterComponent={
              isLoading ? (
                <ActivityIndicator size={'small'} color={Colors.gray} />
              ) : null
            }
          />
        </View>
        <View style={styles.bottom}>
          <View style={styles.footer}>
            <View style={styles.viewNewFood}>
              <Pressable onPress={_addFoodStyle}>
                <Image source={IC_ADD} style={styles.icAdd} />
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
        cardData={cardList}
        deleteFoodStyle={_deleteFoodStyle}
        duplicateFoodStyle={_duplicateFoodStyle}
        shareFoodStyle={_shareFoodStyle}
      />
    </>
  );
};

export default CartListScreen;
