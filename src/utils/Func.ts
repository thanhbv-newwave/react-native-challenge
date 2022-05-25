import { Dimensions, Platform, StatusBar } from "react-native";
const DEFAULT_WIDTH = Platform.OS == 'ios' ? 375 : 400;
const screenSize = Dimensions.get('window');
export function isIphoneX() {
    return (
        Platform.OS === 'ios' &&
        !Platform.isPad &&
        !Platform.isTVOS &&
        (screenSize.height === 812 || screenSize.width === 812 || screenSize.height === 896 || screenSize.width === 896)
    );
};

export function getStatusBarHeight(safe: boolean) {
    return Platform.OS == 'ios'
        ? isIphoneX() ? (safe ? 44 : 30) : 20
        : StatusBar.currentHeight ? StatusBar.currentHeight : 24
};
