import React, { } from 'react';
import {
    Image,
    Pressable,
    Text,
    View,
    ImageSourcePropType
} from 'react-native';
import { CardItem } from '../../../network/apiResponses/card';
import { styles } from '../styles';

const ActionComponent = ({
    item,
    idx,
    itemSelected,
    deleteFoodStyle,
    duplicateFoodStyle,
    onClose,
    shareFoodStyle
}: ({
    item: { name: string, icon: ImageSourcePropType },
    idx: number,
    itemSelected: CardItem,
    deleteFoodStyle: (id: string) => void,
    duplicateFoodStyle: (id: string) => void,
    onClose: () => void,
    shareFoodStyle: (id: string) => void,
})) => {
    const _onPress = (id: string) => {
        onClose();
        switch (item.name) {
            case 'Share':
                shareFoodStyle(id);
                break;
            case 'Duplicate':
                duplicateFoodStyle(id);
                break;
            default:
                deleteFoodStyle(id);
                break;
        }
    };

    return (
        <Pressable
            key={`ActionComponent${idx}`}
            style={[styles.btnMenu, idx == 0 && styles.marginTop10]}
            onPress={() => _onPress(itemSelected.id)}
        >
            <View style={styles.itemAction}>
                <Text style={styles.actionName}>{item.name}</Text>
                <Image
                    source={item.icon}
                    style={styles.iconAction}
                />
            </View>
        </Pressable>
    )
}
export default ActionComponent;