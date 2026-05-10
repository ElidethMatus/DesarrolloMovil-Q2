import { StyleSheet, View } from 'react-native';

import AlumnoProvider from './providers/alumnoProviders';

import FormularioAlumno from './components/Alumnos/formularioAlumno';
import ListaAlumnos from './components/Alumnos/lista';

export default function App() {
  return (

    <View style={styles.container}>

      <AlumnoProvider>
        <FormularioAlumno />
        <ListaAlumnos />
      </AlumnoProvider>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    padding: 20,
  },
});