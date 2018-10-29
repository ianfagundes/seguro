import React from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Switch
} from "react-native";

import firebase from "firebase";

export default class Tela3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fumante: false,
      nome: "",
      email: ""
    };
  }

  handleSwitchChange(value) {
    this.setState({
      switchState: value
    });
  }

  OnChangeHandler(field, value) {
    this.setState({ [field]: value });
  }

  writeUserData(nome) {
    firebase
      .database()
      .ref("clientes/")
      .set({
        nome
      })
      .then(data => {
        //success callback
        console.log("data ", data);
      })
      .catch(error => {
        //error callback
        console.log("error ", error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />

        <TextInput
          style={styles.input}
          placeholder="Nome completo"
          value={this.state.nome}
          onChangeText={value => this.OnChangeHandler("nome", value)}
        />

        <TextInput
          style={styles.input}
          placeholder="Data de nascimento"
          value={this.state.nascimento}
          onChangeText={value => this.OnChangeHandler("nascimento", value)}
        />

        <TextInput
          style={styles.input}
          placeholder="CPF"
          value={this.state.cpf}
          onChangeText={value => this.OnChangeHandler("cpf", value)}
        />

        <TextInput
          style={styles.input}
          placeholder="CEP"
          value={this.state.cep}
          onChangeText={value => this.OnChangeHandler("cep", value)}
        />

        <TextInput
          style={styles.input}
          placeholder="email"
          value={this.state.email}
          onChangeText={value => this.OnChangeHandler("email", value)}
        />

        <Text style={styles.textColor}> Fumante? </Text>
        <Switch
          value={this.state.switchState}
          onValueChange={value => this.handleSwitchChange(value)}
        />

        <TextInput
          style={styles.input}
          placeholder="Telefone"
          value={this.state.telefone}
          onChangeText={value => this.OnChangeHandler("telefone", value)}
        />

        <TextInput
          style={styles.input}
          textContentType="jobTitle"
          placeholder="Profissão"
          value={this.state.profissao}
          onChangeText={value => this.OnChangeHandler("profissao", value)}
        />

        <TouchableOpacity
          style={styles.button}
          value={this.state.nome}
          onPress={() => this.writeUserData(this.state.nome)}>
          <View>
            <Text style={styles.buttonText}>Enviar Solicitação</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 20,
    paddingTop: 20
  },
  input: {
    width: 240,
    backgroundColor: "white",
    borderRadius: 25,
    fontSize: 20,
    textAlign: "center",
    padding: 5
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
  },
  textColor: {
    color: "#bfbfbf",
    fontSize: 20
  }
});
