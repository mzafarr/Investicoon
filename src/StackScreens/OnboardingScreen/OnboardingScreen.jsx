import Video from 'react-native-video';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {defaultStyles} from '../../../assets/Styles';
import Colors from '../../../assets/Colors';
import {useNavigation} from '@react-navigation/native';
import {widthToDp} from '../../utils/Responsive';

const OnboardingScreen = () => {
  const navigation = useNavigation();
  const intro = require('../../../assets/videos/intro.mp4');
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Video
          source={intro}
          ref={ref => {
            this.player = ref;
          }} // Store reference
          resizeMode="cover"
          onBuffer={this.onBuffer}
          onError={this.videoError}
          style={styles.video}
          repeat={true}
        />

        <View style={{marginTop: widthToDp(15), padding: widthToDp(5)}}>
          <Text style={styles.header}>Ready to change the way you money?</Text>
        </View>

        <View style={styles.buttons}>
          <TouchableOpacity
            onPress={() => navigation.navigate('LoginScreen')}
            style={{
              backgroundColor: 'white',
              padding: widthToDp(3),
              borderRadius: widthToDp(10),
            }}>
            <Text
              style={{
                color: Colors.primary,
                fontSize: widthToDp(6),
                paddingHorizontal: widthToDp(9),
                fontWeight: '500',
              }}>
              Log in
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('SignUpScreen')}
            style={{
              backgroundColor: Colors.primary,
              padding: widthToDp(3),
              borderRadius: widthToDp(10),
            }}>
            <Text
              style={{
                fontSize: widthToDp(6),
                fontWeight: '500',
                paddingHorizontal: widthToDp(9),
                color: 'white',
              }}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  video: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: 'absolute',
  },
  header: {
    fontSize: 36,
    fontWeight: '900',
    textTransform: 'uppercase',
    color: 'white',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: widthToDp(10),
    marginBottom: 60,
    alignItems: 'center',
    paddingHorizontal: widthToDp(2),
  },
});
export default OnboardingScreen;
