import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from '../../components/Header'
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

const list = [{
  id: 1,
  label: 'Disney Plus',
  value: '27,90',
  date: '01/06/2022',
  type: 0
},
{
  id: 2,
  label: 'Salário',
  value: '2.900,00',
  date: '29/05/2022',
  type: 1
},
{
  id: 3,
  label: 'Aposta Santastico',
  value: '200,00',
  date: '18/05/2022',
  type: 1
}
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Matheus Calixto" />
      
      <Balance saldo="3.072,10" gastos="27,90"/>
      
      <Actions />

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
    margin: 14
  },
  list:{
    marginStart: 14,
    marginEnd: 14,
  }
});
