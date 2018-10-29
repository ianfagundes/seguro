import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar
} from "react-native";

export default class Tela2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valorCobertura1: "",
      valorCobertura2: ""
    };
  }

  OnChangeHandler(field, value) {
    this.setState({ [field]: value });
  }

  onPressButton() {}

  render() {
    return (
      <View style={styles.container1}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.textoRenda}>Valor da cobertura para Morte</Text>
        <Text style={styles.textoRenda}>Valor da cobertura para invalidez</Text>
        <Text style={styles.textoRenda}>
          Gostaria de saber o quanto fica um seguro de vida para essas
          coberturas?
        </Text>
        <TouchableOpacity style={styles.button}>
          <View>
            <Text style={styles.buttonText}>Solicitar cálculo</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 20,
    paddingTop: 20
  },
  textoRenda: {
    fontSize: 20,
    color: "#757575",
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: "center"
  },
  button: {
    width: 240,
    backgroundColor: "#00a9c8",
    borderRadius: 25
  },
  buttonText: {
    padding: 15,
    color: "white",
    textAlign: "center",
    fontSize: 20
  }
});
