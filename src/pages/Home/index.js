import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from '../../components/Header'
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
const list = [{
  id: 1,
  label: 'Boleto Internet',
  value: '305,00',
  date: '12/06/2022',
  type: 0
},
{
  id: 2,
  label: 'Salário',
  value: '2.900,00',
  date: '05/06/2022',
  type: 1
},
{
  id: 3,
  label: 'Rendimentos',
  value: '934,00',
  date: '09/06/2022',
  type: 1
}
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Matheus Calixto" />
      
      <Balance saldo="9.550,00" gastos="489,00"/>
      <Text style={styles.title}>Últimas Movimentações</Text>
    
      <FlatList 
      style={styles.list} 
      data={list}
      keyExtractor={ (item)=> String(item.id)}
      showsVerticalScrollIndicator={false}
      renderItem={ ({ item }) => <Movements data={item}/>}
       />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 14,
    marginRight: 14,
    marginTop: 14,
  },
  list:{
    marginStart: 14,
    marginEnd: 14,
  }
});
