import React, {useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  Button,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import Colors from '../../../assets/Colors';
import {widthToDp} from '../../utils/Responsive';
import OutlineButton from '../../Components/OutlinedButton/OutlineButton';
import {LineChart} from 'react-native-gifted-charts';
import SplashScreen from 'react-native-splash-screen';
import HeaderBar from '../../Components/HeaderBar/HeaderBar';

const CompanyViewScreen = ({}) => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  const ptData = [
    {value: 160, date: '1 Apr 2022'},
    {value: 180, date: '2 Apr 2022'},
    {value: 190, date: '3 Apr 2022'},
    {value: 180, date: '4 Apr 2022'},
    {value: 140, date: '5 Apr 2022'},

    {value: 220, date: '9 Apr 2022'},
    {
      value: 240,
      date: '10 Apr 2022',
      label: '10 Apr',
      labelTextStyle: {color: 'lightgray', width: 60},
    },
    {value: 280, date: '11 Apr 2022'},
    {value: 260, date: '12 Apr 2022'},

    {value: 370, date: '17 Apr 2022'},
    {value: 285, date: '18 Apr 2022'},
    {value: 295, date: '19 Apr 2022'},
    {
      value: 300,
      date: '20 Apr 2022',
      label: '20 Apr',
      labelTextStyle: {color: 'lightgray', width: 60},
    },
    {value: 280, date: '21 Apr 2022'},
    {value: 295, date: '22 Apr 2022'},
    {value: 230, date: '28 Apr 2022'},
    {value: 210, date: '29 Apr 2022'},
    {
      value: 200,
      date: '30 Apr 2022',
      label: '30 Apr',
      labelTextStyle: {color: 'lightgray', width: 60},
    },
    {value: 240, date: '1 May 2022'},
    {value: 250, date: '2 May 2022'},
  ];
  const company = {
    symbol: 'AAPL:NASDAQ',
    name: 'Apple Inc',
    type: 'stock',
    price: 186.88,
    open: 187.51,
    high: 188.3,
    low: 186.29,
    volume: 26061718,
    previous_close: 186.28,
    change: 0.6,
    change_percent: 0.3221,
    pre_or_post_market: 187.79,
    pre_or_post_market_change: 1.0622,
    pre_or_post_market_change_percent: 0.5688,
    last_update_utc: '2024-05-14 17:42:46',
    country_code: 'US',
    exchange: 'NASDAQ',
    exchange_open: '2024-05-14 09:30:00',
    exchange_close: '2024-05-14 16:00:00',
    timezone: 'America/New_York',
    utc_offset_sec: -14400,
    currency: 'USD',
    about:
      "Apple Inc. is an American multinational corporation and technology company headquartered in Cupertino, California, in Silicon Valley. It designs, develops, and sells consumer electronics, computer software, and online services. Devices include the iPhone, iPad, Mac, Apple Watch, Vision Pro, and Apple TV; operating systems include iOS, iPadOS, and macOS; and software applications and services include iTunes, iCloud, Apple Music, and Apple TV+.\nFor most of 2011 to 2024, Apple became the world's largest company by market capitalization until Microsoft assumed the position in January 2024. In 2022, Apple was the largest technology company by revenue, with US$394.3 billion. As of 2023, Apple was the fourth-largest personal computer vendor by unit sales, the largest manufacturing company by revenue, and the largest vendor of mobile phones in the world. It is one of the Big Five American information technology companies, alongside Alphabet, Amazon, Meta, and Microsoft.\nApple was founded as Apple Computer Company on April 1, 1976, to produce and market Steve Wozniak's Apple I personal computer. The company was incorporated by Wozniak and Steve Jobs in 1977.",
    year_low: 164.075,
    year_high: 199.62,
    primary_exchange: 'NASDAQ',
    company_website: 'http://www.apple.com/',
    company_country_code: 'US',
    company_country: 'United States',
    company_state: 'California',
    company_city: 'Cupertino',
    company_street_address: 'One Apple Park Way',
    company_ceo: 'Tim Cook',
    company_employees: 161000,
    company_cdp_score: 'A-',
    company_founded_date: '1976-04-01',
    company_cdp_url: 'https://www.cdp.net/en/responses/865',
    avg_volume: 62684101,
    company_pe_ratio: 29.0495,
    company_market_cap: 2864712937910.1562,
    company_dividend_yield: 0.5353,
    wikipedia_url: 'https://en.wikipedia.org/wiki/Apple_Inc.',
    google_mid: '/m/07zmbvf',
  };
  const openLink = async url => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      console.error("Don't know how to open URI: ", url);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar />
      <ScrollView
        contentContainerStyle={{paddingBottom: widthToDp(15)}}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>{company?.name}.</Text>
        <View style={styles.flexContainer}>
          <OutlineButton buttonText={company?.symbol} />
          <OutlineButton buttonText={company?.exchange} />
          <OutlineButton buttonText={company?.type} />
        </View>

        <View>
          <View style={styles.simpleFlexContainer}>
            <Text style={styles.priceTitle}>{company?.price}</Text>
            <Text style={styles.currency}> {company?.currency}</Text>
          </View>
          <View
            style={[
              styles.simpleFlexContainer,
              {
                marginHorizontal: widthToDp(6),
                paddingTop: widthToDp(1.5),
              },
            ]}>
            <Text
              style={[
                styles.priceTitle,
                {fontSize: widthToDp(4.5), fontWeight: 'regular'},
                company?.change > 0
                  ? {color: Colors.green}
                  : {color: Colors.red},
              ]}>
              {company?.change}({company?.change_percent}%)
            </Text>
          </View>
          <View
            style={[
              styles.simpleFlexContainer,
              {flexDirection: 'column', paddingTop: widthToDp(2)},
            ]}>
            <Text style={styles.market}>
              Market open: {company?.exchange_open}
            </Text>
            <Text style={styles.market}>
              Market close: {company?.exchange_close}
            </Text>
          </View>
        </View>
        <View>
          <View
            style={{
              paddingVertical: widthToDp(5),
            }}>
            <LineChart
              areaChart
              data={ptData}
              rotateLabel
              yAxisOffset={ptData[0].value - 20}
              width={widthToDp(100)}
              hideDataPoints
              color="#00ff83"
              thickness={2}
              startFillColor="rgba(20,105,81,0.3)"
              endFillColor="rgba(20,85,81,0.01)"
              startOpacity={0.9}
              endOpacity={0.2}
              initialSpacing={0}
              noOfSections={6}
              yAxisThickness={0}
              rulesColor="transparent"
              yAxisTextStyle={{color: Colors.white}}
              xAxisColor="lightgray"
              pointerConfig={{
                pointerStripHeight: widthToDp(15),
                pointerStripColor: 'lightgray',
                pointerStripWidth: 2,
                pointerStripHeight: widthToDp(40),
                pointerColor: 'lightgray',
                radius: 6,
                pointerLabelWidth: widthToDp(20),
                pointerLabelHeight: widthToDp(20),
                activatePointersOnLongPress: true,
                pointerLabelComponent: items => {
                  return (
                    <View
                      style={{
                        height: 90,
                        width: 100,
                        justifyContent: 'center',
                        marginTop: -30,
                        marginLeft: -40,
                      }}>
                      <Text
                        style={{
                          color: 'white',
                          fontSize: 14,
                          marginBottom: 6,
                          textAlign: 'center',
                        }}>
                        {items[0].date}
                      </Text>

                      <View
                        style={{
                          paddingHorizontal: 14,
                          paddingVertical: 6,
                          borderRadius: 16,
                          backgroundColor: 'white',
                        }}>
                        <Text
                          style={{
                            fontWeight: 'bold',
                            textAlign: 'center',
                            color: 'black',
                          }}>
                          {'$' +
                            Math.round(parseFloat(items[0].value) * 100) / 10}
                        </Text>
                      </View>
                    </View>
                  );
                },
              }}
            />
          </View>
        </View>
        <View style={{rowGap: widthToDp(2)}}>
          <Text style={styles.title}>Company Profile</Text>
          <View style={styles.flexContainer}>
            <Text style={styles.description}>Website:</Text>
            <TouchableOpacity onPress={() => openLink}>
              <Text style={styles.description}>{company?.company_website}</Text>
            </TouchableOpacity>
          </View>
          <Text style={[styles.description, {marginHorizontal: widthToDp(3)}]}>
            Company Address: {company?.company_street_address},{' '}
            {company?.company_city}, {company?.company_state},{' '}
            {company?.company_country}
          </Text>
          <Text style={[styles.description, {marginHorizontal: widthToDp(3)}]}>
            Full-time Employees: {company?.company_employees}
          </Text>
          <Text style={[styles.description, {marginHorizontal: widthToDp(3)}]}>
            Timezone: {company?.timezone}
          </Text>
        </View>
        <View>
          <Text style={[styles.title, {fontSize: widthToDp(6)}]}>
            Description:
          </Text>
          <Text style={[styles.description, {marginHorizontal: widthToDp(3)}]}>
            {company?.about}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors?.backgroundColor,
  },

  description: {
    fontSize: widthToDp(4),
    color: Colors.white,
    marginTop: widthToDp(1.5),
  },
  priceTitle: {
    fontSize: widthToDp(10),
    fontWeight: 'bold',
    color: Colors.white,
  },
  title: {
    paddingTop: widthToDp(5),
    fontSize: widthToDp(7),
    fontWeight: 'bold',
    color: Colors.white,
    marginHorizontal: widthToDp(3),
  },
  flexContainer: {
    flexDirection: 'row',
    paddingTop: widthToDp(3),
    marginHorizontal: widthToDp(3),
    gap: widthToDp(3),
  },
  simpleFlexContainer: {
    flexDirection: 'row',
    marginHorizontal: widthToDp(3),
    paddingTop: widthToDp(5),
    alignItems: 'baseline',
  },
  currency: {
    fontSize: widthToDp(7),
    color: Colors.white,
  },
  market: {
    fontSize: widthToDp(4),
    color: Colors.lightGray,
    marginTop: widthToDp(1.5),
  },
});

export default CompanyViewScreen;
