import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import colors from '../utils/color';

const Cita = ({item, eliminarPaciente}) => {
  
  const eliminar = (id) => {
    console.log('eliminado...', id);
    eliminarPaciente(id);
  };

  return (
    <View style={styles.cita}>
      <DataInfo title="Paciente: " value={item.paciente} />
      <DataInfo title="Propietario: " value={item.propietario} />
      <DataInfo title="Sintomas: " value={item.sintomas} />

      <View>
      <TouchableHighlight onPress={ () => eliminar(item.id)} style={styles.btnEliminar}>
        <Text style={styles.textoEliminar}>Eliminar Paciente</Text>
      </TouchableHighlight>
      </View>
    </View>
  )
}

// Componente Interno
const DataInfo = ({ title, value }) => {
  return (
  <View style={styles.viewInfo}>
    <Text style={styles.texto}>{title}</Text>
    <Text style={styles.label}>{value}</Text>
  </View>
  )
}

const styles = StyleSheet.create({
  btnEliminar: {
    padding: 10,
    backgroundColor: colors.BTN_ELIMINAR,
    borderRadius: 10,
    marginVertical: 20
  },
  cita: {
    backgroundColor: '#FFF',
    borderBottomColor: '#e1e1e1',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    paddingVertical: 20,
    paddingHorizontal: 10
  },
  label: {
    fontWeight: 'bold',
    fontSize: 10
  },
  texto: {
    fontSize: 10
  },
  textoEliminar: {
    color: colors.COLOR_TEXT,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  viewInfo:{
    flexDirection: 'row',
    marginBottom: 10,
    padding: 10
  }
})

export default Cita;