

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Screen1 from './screens/screen1';
import Screen2 from './screens/screen2';
import Screen3 from './screens/screen3';
import Screen4 from './screens/screen4';
import Screen5 from './screens/screen5';
import Screen6 from './screens/screen6';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();
const dates = ["24", "25", "26", "27", "28", "29"];
function MyTabBar({ state, navigation, descriptors }) {
  return (
    <View style={{ paddingBottom: 5 }}>
      <View style={{
        flexDirection: 'row',
        backgroundColor: '#ffff',
        height: 85,
        shadowColor: '#333333',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 5
      }}>

        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];

          const label = route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
          const backgroundColor = isFocused ? "#e75480" : "white";
          const tintColor = isFocused ? "#e75480" : "black";
          const color = isFocused ? "white" : "black";

          return (
            <TouchableOpacity
              onPress={onPress}
              testID={options.tabBarTestID}
            >
              <View style={{ flexDirection: "row", marginBottom: 10 }}>
                <View style={{ height: 60, marginTop: 10, justifyContent: "space-around", width: 70, alignItems: "center" }}>
                  <Text style={{ color: tintColor, fontSize: 12, fontWeight: "600" }}>{label}</Text>
                  <View style={{ width: 35, height: 35, borderRadius: 35 / 2, marginTop: 5, backgroundColor, justifyContent: "center" }}>
                    <Text style={{ textAlign: "center", fontWeight: "700", color }}>{dates[index]}</Text></View>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>

    </View>

  );
}



class MyTabs extends React.Component {

  render() {
    return (

      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: "pink",
            inactiveTintColor: "grey",
          }}
          tabBar={props => <MyTabBar {...props} />}
        >
          <Tab.Screen name="Mon" component={Screen1} num="22" />
          <Tab.Screen name="Tue" component={Screen2} num="23" />
          <Tab.Screen name="Wed" component={Screen3} num="24" />
          <Tab.Screen name="Thur" component={Screen4} num="25" />
          <Tab.Screen name="Fri" component={Screen5} num="26" />
          <Tab.Screen name="Sat" component={Screen6} num="27" />
        </Tab.Navigator>
      </NavigationContainer>

    );
  }
}
function App() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ marginTop: 50, marginBottom: 10 }}>
        <Text style={{ textAlign: "center" }}>Choose Your Slot</Text>
      </View>
      <MyTabs />
    </View>

  )
}
export default App;
