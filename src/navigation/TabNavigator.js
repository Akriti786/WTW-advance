import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { IconButton } from "react-native-paper";

import HomeScreen from "../screens/HomeScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import WatchlistScreen from "../screens/WatchlistScreen";
import WatchedScreen from "../screens/WatchedScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: 90,
          paddingBottom: 35,
          paddingTop: 5,
        },
      }}
    >
      {/* Home */}
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <IconButton icon="home" iconColor={color} size={24} />
          ),
        }}
      />

      {/* Watchlist */}
      <Tab.Screen
        name="Watchlist"
        component={WatchlistScreen}
        options={{
          tabBarLabel: "Watchlist",
          tabBarIcon: ({ color }) => (
            <IconButton icon="star" iconColor={color} size={24} />
          ),
        }}
      />

      {/* Watched */}
      <Tab.Screen
        name="Watched"
        component={WatchedScreen}
        options={{
          tabBarLabel: "Watched",
          tabBarIcon: ({ color }) => (
            <IconButton icon="play-circle" iconColor={color} size={24} />
          ),
        }}
      />

      {/* Favorites */}
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarLabel: "Favorites",
          tabBarIcon: ({ color }) => (
            <IconButton icon="heart" iconColor={color} size={24} />
          ),
        }}
      />

      {/* Settings */}
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <IconButton icon="cog" iconColor={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
