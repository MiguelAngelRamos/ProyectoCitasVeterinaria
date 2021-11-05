import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Alert, ScrollView, Button } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import 'moment/locale/es';
import shortid from 'shortid';
import colors from '../utils/color';


const Formulario = () => {

  const [paciente, setPaciente] = useState('');
  const [propietario, setPropietario] = useState('');
  const [telefono, setTelefono] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');

  // Libreria DateTimePickerModal
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false); // fecha
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false); // hora

  // funciones para la fecha 
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirmDate = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };

  // Funciones para la hora

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleConfirmTime = (hora) => {
    console.warn("A date has been picked: ", hora);
    hideDatePicker();
  };

  return (
   <>
    <ScrollView style={styles.formulario}>
      <View>
        <Text style={styles.label}>Paciente: </Text>
        <TextInput style={styles.input}/>
      </View>

      <View>
        <Text style={styles.label}>Dueño: </Text>
        <TextInput style={styles.input}/>
      </View>

      <View>
        <Text style={styles.label} >Telefono Contacto: </Text>
        <TextInput 
          style={styles.input}
          keyboardType='numeric'
        />
      </View>

    </ScrollView>
   </>
  )
}

export default Formulario

const styles = StyleSheet.create({
  formulario: {
    backgroundColor: colors.FORM_BACKGROUND,
    paddingVertical: 20,
    paddingHorizontal: 10
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20
  },
  input: {
    borderColor: '#e1e1e1',
    borderWidth: 1,
    borderStyle: 'solid',
    marginTop: 10,
    height: 50
  }
})
