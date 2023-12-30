import { useState } from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native-web";
import { Stack, useRouter } from "expo-router";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";

const Home = () => {
  const router = useRouter();
  return (
    <SafeAreaView sx={{ flex: 1 }}>
      <Stack.Screen />
    </SafeAreaView>
  );
};

export default Home;
