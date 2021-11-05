import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Alert, ScrollView, Button, TouchableHighlight } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import 'moment/locale/es';
import shortid from 'shortid';
import colors from '../utils/color';


const Formulario = ({setCitas, setMostrarForm}) => {

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
    // console.warn("La fecha seleccionada es: ", date);
    const fechaCita = moment(date).format('LL');
    setFecha(fechaCita);
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
    // console.warn("A date has been picked: ", hora);
    const horaCita = moment(hora).format('LT');
    setHora(horaCita);
    hideDatePicker();
  };

  const crearNuevaCita = () => {

    //Miguel Ramos
    // Validar
    if( paciente.trim() === '' || propietario.trim() === '' || telefono.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
      mostrarAlerta();
      return;
    }

    // Crear una nueva cita
    const cita = {
      paciente,
      propietario,
      telefono,
      fecha,
      hora,
      sintomas
    };
    cita.id = shortid.generate();
    // const citaNueva = [...citas, cita];
    // setCitas(citaNueva);
    setCitas( c => [...c, cita]);


    // Ocultar el formulario
    setMostrarForm(false);
    // Resetear los valores del formulario
  };

  const mostrarAlerta = () => {
      // titulo
      // mensaje
      // Arreglo de botones
    Alert.alert(
      'Error',
      'Todos los campos son obligatorios',
      [{
        text: 'OK'
      }]
    )
  };

  return (
   <>
    <ScrollView style={styles.formulario}>
      <View>
        <Text style={styles.label}>Paciente: </Text>
        <TextInput 
          style={styles.input}
          onChangeText={ (texto) => setPaciente(texto) }
        />
      </View>

      <View>
        <Text style={styles.label}>Dueño: </Text>
        <TextInput 
          style={styles.input}
          onChangeText={ (texto) => setPropietario(texto) }
        />
      </View>

      <View>
        <Text style={styles.label} >Telefono Contacto: </Text>
        <TextInput 
          style={styles.input}
          onChangeText={ (texto) => setTelefono(texto) }
          keyboardType='numeric'
        />
      </View>

      <View>
        <Text style={styles.label} >Fecha: </Text>
        <Button title="Seleccionar la fecha" onPress={showDatePicker}/>
        <DateTimePickerModal 
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirmDate}
          onCancel={hideDatePicker}
          locale='es_ES'
          headerTextIOS="Elige la fecha"
          cancelTextIOS="Cancelar"
          confirmTextIOS="Confirmar"
          
        />
        <Text>{fecha}</Text>
      </View>


      <View>
        <Text style={styles.label} >Hora: </Text>
        <Button title="Seleccionar la hora" onPress={showTimePicker}/>
        <DateTimePickerModal 
          isVisible={isTimePickerVisible}
          mode="time"
          onConfirm={handleConfirmTime}
          onCancel={hideTimePicker}
          locale='es_ES'
          headerTextIOS="Elige la hora"
          cancelTextIOS="Cancelar"
          confirmTextIOS="Confirmar"
        />
        <Text>{hora}</Text>
      </View>

      <View>
        <Text style={styles.label} >Sintomas: </Text>
        <TextInput
          multiline 
          style={styles.input}
          onChangeText={ (texto) => setSintomas(texto) }
        />
      </View>

      <View>
      <TouchableHighlight onPress={ () => crearNuevaCita()} style={styles.btnSubmit}>
        <Text style={styles.textoSubmit}>Crear nueva cita</Text>
      </TouchableHighlight>
      </View>

    </ScrollView>
   </>
  )
}

export default Formulario

const styles = StyleSheet.create({
  btnSubmit: {
    padding: 10,
    backgroundColor: colors.PRIMARY_COLOR_DARK,
    marginVertical: 10
  },
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
  },
  textoSubmit: {
    color: colors.COLOR_TEXT,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})
