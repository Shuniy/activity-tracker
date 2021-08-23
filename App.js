import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import AddEntry from "./components/AddEntry";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers";
import History from "./components/History";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { purple, white, tintColor, gray } from "./utils/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Constants from "expo-constants";

const Tab =
  Platform.OS === "ios"
    ? createBottomTabNavigator()
    : createMaterialTopTabNavigator();

const store = createStore(reducer);

function FitnessStatusBar({ backgroundColor, ...props }) {
  return (
    <SafeAreaView style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </SafeAreaView>
  );
}

const Tabs = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let icon;
              if (route.name === "AddEntry") {
                icon = (
                  <FontAwesome name="plus-square" size={size} color={color} />
                );
              } else if (route.name === "History") {
                icon = (
                  <Ionicons name="ios-bookmarks" size={size} color={color} />
                );
              }
              return icon;
            },
            activeTintColor: Platform.OS === "ios" ? purple : white,
            style: {
              backgroundColor: Platform.OS === "ios" ? white : purple,
            },
            indicatorStyle: {
              // Android tab indicator (line at the bottom of the tab)
              backgroundColor: "yellow",
            },
          })}
        >
          <Tab.Screen name="History" component={History} />
          <Tab.Screen name="AddEntry" component={AddEntry} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default function App() {
  // Uncomment to reset local data:
  // AsyncStorage.clear()
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <FitnessStatusBar backgroundColor={white} barStyle="light" />
        <Tabs />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
