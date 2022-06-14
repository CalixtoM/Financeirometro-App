import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Balance( {saldo, gastos} ) {
    const [showValue, setShowValue] = useState(false)
 return (
    <View style={styles.container}>
        
        <View style={styles.item}>
            <Text style={styles.itemTitle}>Saldo</Text>
            <View style={styles.content}>
                <Text style={styles.currencySymbol}>R$</Text>
                <TouchableOpacity onPress={ () => setShowValue(!showValue)} >
                    
                    { showValue ? ( <Text style={styles.balance}> { saldo } </Text> ) : (<View style={styles.skeleton}></View>)}
                </TouchableOpacity>
            </View>
        </View>

        <View style={styles.item}>
            <Text style={styles.itemTitle}>Gastos</Text>
            <View style={styles.content}>
                <Text style={styles.currencySymbol}>R$</Text>
                <TouchableOpacity onPress={ () => setShowValue(!showValue)} >
                    
                    { showValue ? (<Text style={styles.gastos}>{ gastos }</Text> ) : (<View style={styles.skeleton}></View>)}
                </TouchableOpacity>
            </View>
        </View>

    </View>

    
  );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 18,
        paddingEnd: 18,
        marginTop: -24,
        marginStart: 14,
        marginEnd: 14,
        borderRadius: 4,
        paddingTop: 22,
        paddingBottom: 22,
        zIndex: 99,
    },
    itemTitle:{
        color: '#DADADA'
    },
    content:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    currencySymbol:{
        color: '#DADADA',
        marginRight: 6,
    },
    balance:{
        fontSize: 22,
        color: '#2ecc71' 
    },
    gastos:{
        fontSize: 22,
        color: '#e74c2c'
    },
    skeleton:{
        marginTop: 6,
        width: 80,
        height: 10,
        backgroundColor: '#DADADA',
        borderRadius: 8
      }
})