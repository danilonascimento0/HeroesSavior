import React from 'react';
import { View, SafeAreaView } from 'react-native';
import Home from "./src/components/home/Home";
import { Root } from "native-base";
import { styles } from "./src/assets/style/BaseStyle";

export default function App() {
  return (
      <View style={styles.container}>
          <Root>
              <SafeAreaView style={{flex: 1}}>
                <Home/>
              </SafeAreaView>
          </Root>
      </View>
  );
}
