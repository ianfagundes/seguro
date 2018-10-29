import React from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  Switch,
  StatusBar
} from "react-native";

export default class Tela1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rendaMensal1: "",
      rendaMensal2: "",
      switchState: false
    };
  }

  OnChangeHandler(field, value) {
    this.setState({ [field]: value });
  }

  handleSwitchChange(value) {
    this.setState({
      switchState: value
    });
  }

  onPressButton() {}

  render() {
    return (
      <View style={styles.container1}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.textoRenda}>
          texto com informações importantes sobre a renda da pessoa
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Valor mensal em R$ da renda principal"
          value={this.state.rendaMensal1}
          onChangeText={value => this.OnChangeHandler("rendaMensal1", value)}
        />
        <Text style={styles.textoRenda}>
          Mais alguem compõe a renda mensal da sua familia ?
        </Text>
        <Switch
          value={this.state.switchState}
          onValueChange={value => this.handleSwitchChange(value)}
        />
        {this.state.switchState ? (
          <TextInput
            style={styles.input}
            placeholder="Valor mensal em R$ da renda secundária"
            value={this.state.rendaMensal2}
            onChangeText={value => this.OnChangeHandler("rendaMensal2", value)}
          />
        ) : null}
        <TouchableOpacity style={styles.button}>
          <View>
            <Text style={styles.buttonText}>Calcular</Text>
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
  input: {
    width: 240
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
