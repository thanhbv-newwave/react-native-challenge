import React from 'react';
import {
  Image,
  Pressable,
  Text,
  View,
  ImageSourcePropType,
  Modal,
} from 'react-native';
import {IC_CLOSE} from '../../../../assets/images';
import {stylesApp} from '../../../../contants/styles.constants';
import {actions} from '../../../../mock';
import {CardItem} from '../../../../network/apiResponses/card';
import {styles} from '../styles';
import ActionComponent from './ActionComponent';
const HEIGHT_ACTION = 140;
interface Props {
  state: {
    showModal: boolean;
    top: number;
    bottom: number;
    height: number;
  };
  index: number;
  cardData: CardItem[];
  onClose: () => void;
  deleteFoodStyle: (id: string) => void;
  duplicateFoodStyle: (id: string) => void;
  shareFoodStyle: (id: string) => void;
}
const ActionModal = (props: Props) => {
  const {
    state,
    index,
    cardData,
    onClose,
    deleteFoodStyle,
    duplicateFoodStyle,
    shareFoodStyle,
  } = props;
  const arrAction = actions;
  return (
    <Modal visible={state.showModal} transparent animationType="fade">
      <Pressable style={stylesApp.flex1} onPress={onClose}>
        <View style={styles.contentModal}>
          <View
            style={[
              styles.itemList,
              {
                position: 'absolute',
                top: state.top,
              },
            ]}>
            <Text style={styles.txtName}>{cardData[index]?.name}</Text>
            <Pressable style={styles.btnOption} onPress={onClose}>
              <Image source={IC_CLOSE} style={styles.icOption} />
            </Pressable>
          </View>
          <View
            style={[
              styles.lstAction,
              state.bottom > HEIGHT_ACTION
                ? {
                    marginTop: state.height + state.top + 6,
                  }
                : {
                    bottom: state.bottom + state.height + 6,
                  },
            ]}>
            {arrAction?.map(
              (
                item: {name: string; icon: ImageSourcePropType},
                idx: number,
              ) => (
                <ActionComponent
                  item={item}
                  idx={idx}
                  deleteFoodStyle={deleteFoodStyle}
                  onClose={onClose}
                  itemSelected={cardData[index]}
                  duplicateFoodStyle={duplicateFoodStyle}
                  shareFoodStyle={shareFoodStyle}
                  key={`ActionModal${index}`}
                />
              ),
            )}
          </View>
        </View>
      </Pressable>
    </Modal>
  );
};
export default ActionModal;
