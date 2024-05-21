import {Platform, StyleSheet} from 'react-native';
import Colors from './Colors';
import {widthToDp} from '../src/utils/Responsive';

export const defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: Platform.OS === 'ios' ? widthToDp(5) : widthToDp(3),
  },
  header: {
    fontSize: widthToDp(11),
    fontWeight: '700',
    color: Colors.white,
  },
  pillButton: {
    padding: widthToDp(3),
    height: widthToDp(15),
    borderRadius: widthToDp(15),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Platform.OS === 'ios' ? widthToDp(0) : widthToDp(3),
  },
  textLink: {
    color: Colors.primary,
    marginTop: widthToDp(5),
    fontSize: widthToDp(4),
    marginLeft: widthToDp(3),
    fontWeight: '500',
  },
  descriptionText: {
    fontSize: 18,
    marginTop: 20,
    color: Colors.lightGray,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
  pillButtonSmall: {
    paddingHorizontal: 20,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTextSmall: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 20,
    marginBottom: 10,
  },
  block: {
    marginHorizontal: 20,
    padding: 14,
    backgroundColor: '#fff',
    borderRadius: 16,
    gap: 20,
  },
});
