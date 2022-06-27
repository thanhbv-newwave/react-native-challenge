import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {IC_OPTIONS} from '../../../../assets/images';
import {styles} from '../styles';
interface Props {
  item: {name: string};
  index: number;
  elRefs: any;
  showAction: (index: number) => void;
}
const ItemList = (props: Props) => {
  const {item, index, elRefs, showAction} = props;
  return (
    <View key={`ItemList${index}`} style={styles.itemList} ref={elRefs[index]}>
      <Text style={styles.txtName}>{item?.name}</Text>
      <Pressable style={styles.btnOption} onPress={() => showAction(index)}>
        <Image source={IC_OPTIONS} style={styles.icOption} />
      </Pressable>
    </View>
  );
};
export default ItemList;
