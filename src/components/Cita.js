import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Cita = ({item}) => {
  return (
    <View style={styles.cita}>
      <View style={styles.viewInfo}>
        <Text style={styles.label}>{item.paciente}</Text>
      </View>
    </View>
  )
}

export default Cita

const styles = StyleSheet.create({
  cita: {
    backgroundColor: '#FFF',
    borderBottomColor: 'gray',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    paddingVertical: 20,
    paddingHorizontal: 10
  },
  label: {
    fontWeight: 'bold',
    fontSize: 10
  },
  viewInfo:{
    flexDirection: 'row',
    marginBottom: 10,
    padding: 10
  }
})
