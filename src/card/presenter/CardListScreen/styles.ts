import {StyleSheet} from 'react-native';
import {fonts} from '../../../assets/fonts';
import {getStatusBarHeight, isIphoneX} from '../../../utils';
import Colors from '../../../utils/Colors';
import {paddingApp} from '../../../utils/Const';
export const styles = StyleSheet.create({
  linearGradient: {
    width: '100%',
    height: 137 + getStatusBarHeight(true),
    justifyContent: 'flex-end',
  },
  logo: {
    width: 22,
    height: 26,
    position: 'absolute',
    top: isIphoneX() ? getStatusBarHeight(true) : 9 + getStatusBarHeight(true),
    left: paddingApp,
  },
  height80: {
    height: 80,
  },
  content: {
    flex: 1,
    marginTop: -82,
  },
  itemList: {
    backgroundColor: Colors.white,
    marginTop: 6,
    marginHorizontal: paddingApp,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 7,
  },
  txtName: {
    paddingHorizontal: 18,
    paddingVertical: 14,
    fontSize: 18,
    lineHeight: 22,
    flex: 1,
    fontFamily: fonts.ProximaNovaAltBold,
  },
  icOption: {
    width: 24,
    height: 24,
  },
  bottom: {
    height: 56,
    justifyContent: 'flex-end',
  },
  footer: {
    backgroundColor: Colors.white,
    height: isIphoneX() ? 44 : 40,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 15,
  },
  viewNewFood: {
    backgroundColor: Colors.white,
    marginHorizontal: paddingApp,
    borderRadius: 6,
    position: 'absolute',
    top: isIphoneX() ? -20 : -16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.5,
    elevation: 7,
    alignItems: 'center',
    paddingTop: 6,
    paddingBottom: 2,
  },
  icAdd: {
    width: 38,
    marginTop: 1,
    marginLeft: 7,
    height: 38,
  },
  txtNewFood: {
    fontSize: 18,
    lineHeight: 22,
    flex: 1,
    fontFamily: fonts.ProximaNovaAltBold,
  },
  btnOption: {
    marginTop: 14,
    marginRight: 14,
  },
  btnMenu: {
    marginRight: 14,
  },
  marginTop10: {
    marginTop: 10,
  },
  itemAction: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 10,
  },
  actionName: {
    color: Colors.greenTeal,
    fontSize: 15,
    fontFamily: fonts.ProximaNovaAltSemibold,
  },
  iconAction: {
    width: 40,
    height: 40,
  },
  contentModal: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.transparentModal,
  },
  lstAction: {
    position: 'absolute',
    right: 0,
  },
  flatListStyles: {
    flex: 1,
  },
});
