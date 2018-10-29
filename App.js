import { createStackNavigator } from "react-navigation";

import Tela3 from "./src/pages/Tela3";

import firebase from "firebase";

const config = {
  databaseURL: "https://ssat-seguro-vida.firebaseio.com/",
  projectId: "ssat-seguro-vida"
};

firebase.initializeApp(config);

export default createStackNavigator(
  {
    Tela3: {
      screen: Tela3,
      navigationOptions: {
        title: "Ssat Corretora"
      }
    }
  },
  {
    navigationOptions: {
      title: "Series",
      headerTintColor: "#ffffff",
      headerStyle: {
        backgroundColor: "#20334f",
        borderBottomWidth: 1,
        borderBottomColor: "#BDBDBD"
      },
      headerTitleStyle: {
        color: "#ffffff",
        fontSize: 30
      }
    }
  }
);
