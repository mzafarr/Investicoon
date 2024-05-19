import {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {defaultStyles} from '../../../assets/Styles';
import Colors from '../../../assets/Colors';
import {useNavigation} from '@react-navigation/native';
import {widthToDp} from '../../utils/Responsive';
import CustomTextInput from '../../Components/CustomTextInput/CustomTextInput';
import Toast from 'react-native-toast-message';
import useAuth from '../../CustomHooks/useAuth/useAuth';
import PillButton from '../../Components/PillButton/PillButton';
import HeaderBar from '../../Components/HeaderBar/HeaderBar';
import {useSelector} from 'react-redux';

const FeatureScreen = () => {
  const {suggestFeature} = useAuth();
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [loading, setLoading] = useState(false);
  const userEmail = useSelector(state => state?.userData?.data?.email);
  const callFeatureApi = async () => {
    if (title && description) {
      setLoading(true);
      await suggestFeature(userEmail, title, description);
      setLoading(false);
    } else {
      Toast.show({
        type: 'error',
        text1: 'Please fill all the fields',
      });
    }
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.background}}>
      <ScrollView contentContainerStyle={{flex: 1}}>
        <HeaderBar />
        <View style={defaultStyles.container}>
          <Text style={[defaultStyles.header, {fontSize: widthToDp(10)}]}>
            Suggest a Feature!
          </Text>
          <Text style={defaultStyles.descriptionText}>
            We are happy to see you helping us grow. We would love to hear
            you're feedback and suggestions.
          </Text>
          <CustomTextInput
            placeholder="Title"
            placeholderTextColor={Colors.gray}
            value={title}
            onChangeText={setTitle}
          />
          <CustomTextInput
            placeholder="Description"
            placeholderTextColor={Colors.gray}
            value={description}
            onChangeText={setDescription}
            multiline={true}
            height={150}
          />
          <View style={{flex: 1}} />

          <PillButton
            ButtonText="Submit Request"
            email={title}
            fullName={true}
            password={description}
            onPress={() => callFeatureApi()}
            loading={loading}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: widthToDp(3),
    flexDirection: 'row',
  },
  input: {
    backgroundColor: Colors.lightGray,
    padding: 20,
    borderRadius: 16,
    fontSize: 20,
    marginRight: 10,
  },
  enabled: {
    backgroundColor: Colors.primary,
  },
  disabled: {
    backgroundColor: Colors.primaryMuted,
  },
});

export default FeatureScreen;
