/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import HTML from "react-native-render-html";

type Props = {};
export default class App extends Component<Props> {
  render() {
    const html =
      'hello <em class="hlt1">test</em> <em class="hlt1">test</em>_<em class="hlt1">test</em> <em class="hlt1">test</em> _ <em class="hlt1">test</em> Alexis ';

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <HTML
          html={html}
          tagsStyles={{
            em: {
              backgroundColor: "#aaa"
            }
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
