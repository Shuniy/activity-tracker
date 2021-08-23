import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";
import AddEntry from "./components/AddEntry";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import History from "./components/History";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { purple, white } from "./utils/colors";
import Constants from "expo-constants";
import EntryDetail from "./components/EntryDetail";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

function FitnessStatusBar({ backgroundColor, ...props }) {
  return (
    <SafeAreaView style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </SafeAreaView>
  );
}

const RouteConfigs = {
  History: {
    name: "History",
    component: History,
    options: {
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="ios-bookmarks" size={30} color={tintColor} />
      ),
      title: "History",
    },
  },
  AddEntry: {
    component: AddEntry,
    name: "AddEntry",
    options: {
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="plus-square" size={30} color={tintColor} />
      ),
      title: "Add Entry",
    },
  },
};

const TabNavigatorConfig = {
  navigationOptions: {
    header: null,
  },
  screenOptions: {
    activeTintColor: Platform.OS === "ios" ? purple : white,
    style: {
      height: 56,
      backgroundColor: Platform.OS === "ios" ? white : purple,
      shadowColor: "rgba(0, 0, 0, 0.24)",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowRadius: 6,
      shadowOpacity: 1,
    },
    indicatorStyle: {
      backgroundColor: "yellow",
    },
  },
};

const Tab =
  Platform.OS === "ios"
    ? createBottomTabNavigator()
    : createMaterialTopTabNavigator();

const TabNav = () => (
  <Tab.Navigator {...TabNavigatorConfig}>
    <Tab.Screen {...RouteConfigs["History"]} />
    <Tab.Screen {...RouteConfigs["AddEntry"]} />
  </Tab.Navigator>
);

// Config for StackNav
const StackNavigatorConfig = {
  options: "screen",
};
const StackConfig = {
  TabNav: {
    name: "Home",
    component: TabNav,
    options: { headerShown: false },
  },
  EntryDetail: {
    name: "Entry Detail",
    component: EntryDetail,
    options: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      },
      title: "Entry Detail",
    },
  },
};
const Stack = createStackNavigator();
const MainNav = () => (
  <Stack.Navigator {...StackNavigatorConfig}>
    <Stack.Screen {...StackConfig["TabNav"]} />
    <Stack.Screen {...StackConfig["EntryDetail"]} />
  </Stack.Navigator>
);

export default class App extends React.Component {
  render() {
    const store = createStore(reducer);
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <FitnessStatusBar backgroundColor={white} barStyle="light" />
          <NavigationContainer>
            <MainNav />
          </NavigationContainer>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
