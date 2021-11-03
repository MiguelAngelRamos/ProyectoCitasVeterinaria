import React, {useState} from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  FlatList, 
  Platform,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Keyboard 
} from 'react-native';
import Cita from './src/components/Cita';
import Formulario from './src/components/Formulario';
import colors from './src/utils/color';

const App = () => {
  const [mostrarForm, setMostrarForm] = useState(false);
  const [citas, setCitas] = useState([
    { id: 1, paciente: 'Rocky', propietario: 'Miguel', sintomas: 'No come'},
    { id: 2, paciente: 'Benito', propietario: 'Daniel', sintomas: 'Falta de apetito'},
    { id: 3, paciente: 'Fox', propietario: 'Javiera', sintomas: 'No duerme'}
  ]);
  // Eliminar paciente
  const eliminarPaciente = id => {

  };

  // Mostrar u Ocultar el formulario
  const mostrarFormulario = () => {
    setMostrarForm(!mostrarForm)
  };

  // Para ocultar el teclado
  const cerrarTeclado = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={ cerrarTeclado }>
      <View style={styles.contenedor}>
        <Text style={styles.titulo}>Organizador de Citas</Text>

        <View>
        <TouchableHighlight onPress={mostrarFormulario} style={styles.btnMostrarForm}>
          <Text style={styles.textoMostrarForm}>{mostrarForm?'Cancelar Cita': 'Crear Cita'}</Text>
        </TouchableHighlight>
        </View>

        <View style={styles.contenido}>
          { mostrarForm? (
            <>
            <Formulario/>
            </>
          ) : (
            <>
            <Text style={styles.titulo}> {citas.length > 0? 'Administrar las Citas': 'No hay citas, agregar una?'}</Text>
            <FlatList 
              style={styles.lista}
              data={citas}
              renderItem={ ({ item })=> ( <Cita item={item} />)}
            />
            </>
          ) }
        </View>

      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: colors.PRIMARY_COLOR,
    flex: 1
  },
  titulo: {
    color: colors.COLOR_TEXT,
    marginTop: Platform.OS === 'ios'? 40: 20,
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  btnMostrarForm: {
    padding: 10,
    backgroundColor: colors.PRIMARY_COLOR_DARK,
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 5
  },
  textoMostrarForm: {
    color: colors.COLOR_TEXT,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  contenido: {
    flex: 1,
    marginHorizontal: '2.5%'
  },
  lista: {
    flex: 1
  }
})

export default App;
// marginTop: 10,
// marginBottom: 10,

// marginLeft: 10,
// marginRight: 10

// {
//   citas.map( cita => ( <View key={cita.id}><Text>{cita.paciente}</Text></View>))
// }