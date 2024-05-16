import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  SafeAreaView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../../assets/Colors';
import {BlurView} from '@react-native-community/blur';
import {heightToDp} from '../../utils/Responsive';

const ProfileScreen = () => {
  const [firstName, setFirstName] = useState('Abdul');
  const [lastName, setLastName] = useState('Hadi');
  const [edit, setEdit] = useState(false);
  const [activeIcon, setActiveIcon] = useState('Default');

  useEffect(() => {
    // const loadCurrentIconPref = async () => {
    //   const icon = await getAppIcon();
    //   console.log('🚀 ~ loadCurrentIconPref ~ icon:', icon);
    //   setActiveIcon(icon);
    // };
    // loadCurrentIconPref();
  }, []);

  const onSaveUser = async () => {
    // try {
    //   await user?.update({ firstName: firstName!, lastName: lastName! });
    //   setEdit(false);
    // } catch (error) {
    //   console.error(error);
    // } finally {
    //   setEdit(false);
    // }
  };

  const onCaptureImage = async () => {
    // let result = await ImagePicker.launchImageLibraryAsync({
    //   mediaTypes: ImagePicker.MediaTypeOptions.Images,
    //   allowsEditing: true,
    //   aspect: [4, 3],
    //   quality: 0.75,
    //   base64: true,
    // });
    // if (!result.canceled) {
    //   const base64 = `data:image/png;base64,${result.assets[0].base64}`;
    //   console.log(base64);
    //   user?.setProfileImage({
    //     file: base64,
    //   });
    // }
  };

  const onChangeAppIcon = async icon => {
    // await setAppIcon(icon.toLowerCase());
    // setActiveIcon(icon);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <BlurView
        style={styles.absolute}
        blurType="dark"
        blurAmount={32}
        reducedTransparencyFallbackColor="white"
      />
      <View style={{alignItems: 'center', paddingTop: heightToDp(10)}}>
        <View style={{flexDirection: 'row', gap: 6}}>
          <View style={styles.editRow}>
            <Text style={{fontSize: 26, color: '#fff'}}>John Doe</Text>
          </View>
        </View>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.btn}>
          <Ionicons name="person" size={24} color={'#fff'} />
          <Text style={{color: '#fff', fontSize: 18}}>Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Ionicons name="bulb" size={24} color={'#fff'} />
          <Text style={{color: '#fff', fontSize: 18}}>Suggest a feature</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
          <Ionicons name="log-out" size={24} color={'#fff'} />
          <Text style={{color: '#fff', fontSize: 18}}>Log out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  editRow: {
    flex: 1,
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.gray,
  },
  captureBtn: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.gray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputField: {
    width: 140,
    height: 44,
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#fff',
  },
  actions: {
    backgroundColor: 'rgba(256, 256, 256, 0.1)',
    borderRadius: 16,
    gap: 0,
    margin: 20,
  },
  btn: {
    padding: 14,
    flexDirection: 'row',
    gap: 20,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default ProfileScreen;
