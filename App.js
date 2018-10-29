import { createStackNavigator } from 'react-navigation';

import Tela3 from './src/pages/Tela3';

export default createStackNavigator({
  'Tela3': {
    screen: Tela3,
    navigationOptions:{
      title:'Ssat Corretora'
    }
  }
},
  {
    'navigationOptions': {
      title:'Series',
      headerTintColor:'#ffffff',
      headerStyle:{
        backgroundColor:'#20334f',
        borderBottomWidth:1,
        borderBottomColor:'#BDBDBD',
      },
      headerTitleStyle:{
        color:'#ffffff',
        fontSize:30,
      }
    }
  }
);
