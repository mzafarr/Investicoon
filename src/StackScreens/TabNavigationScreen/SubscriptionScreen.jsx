import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  Button,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  ScrollView,
} from 'react-native';
import Colors from '../../../assets/Colors';
import {widthToDp} from '../../utils/Responsive';
import SubscriptionTypeCard from '../../Components/SubscriptionTypeCard/SubscriptionTypeCard';
import BulletPointText from '../../Components/BulletPointText/BulletPointText';

const SubscriptionScreen = ({navigation}) => {
  const [typeSelect, setTypeSelected] = useState('Basic');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Choose Your Subscription</Text>
        <SubscriptionTypeCard
          isSelected={typeSelect === 'Basic'}
          TeirName={'Basic'}
          TeirPrice="12"
          onPress={() => setTypeSelected('Basic')}
        />
        <SubscriptionTypeCard
          isSelected={typeSelect === 'Pro'}
          TeirName={'Pro'}
          TeirPrice="20"
          onPress={() => setTypeSelected('Pro')}
        />
        <SubscriptionTypeCard
          isSelected={typeSelect === 'Ultra Pro Max'}
          TeirName={'Ultra Pro Max'}
          TeirPrice="50"
          onPress={() => setTypeSelected('Ultra Pro Max')}
        />

        <View>
          <Text style={styles.title}>Description</Text>
          {typeSelect === 'Basic' && (
            <View>
              <BulletPointText text={'No Ads'} />
              <BulletPointText text={'Something here'} />
              <BulletPointText text={'Something there'} />
            </View>
          )}
          {typeSelect === 'Pro' && (
            <View>
              <BulletPointText text={'No Ads'} />
              <BulletPointText text={'No more other Ads'} />
              <BulletPointText text={'Something better than Basic 😉'} />
            </View>
          )}
          {typeSelect === 'Ultra Pro Max' && (
            <View>
              <BulletPointText text={'No Ads'} />
              <BulletPointText text={'No more other Ads'} />
              <BulletPointText text={'Better than Basic & Pro 😚'} />
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: widthToDp(5),
    backgroundColor: Colors.backgroundColor,
  },
  title: {
    fontSize: widthToDp(7),
    fontWeight: 'bold',
    color: Colors.white,
    marginVertical: widthToDp(5),
  },
  description: {
    fontSize: widthToDp(4),
    color: Colors.white,
    marginBottom: widthToDp(5),
  },
});

export default SubscriptionScreen;
