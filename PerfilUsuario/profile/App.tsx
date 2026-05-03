import { View, StyleSheet } from "react-native";
import UserProfile from "./components/userProfile";

export default function App() {

  const usuario1 = {
    nombre: "Carlos",
    edad: 22,
    ciudad: "Tegucigalpa",
    ocupacion: "Estudiante",
  };

  const usuario2 = {
    nombre: "Ana",
    edad: 25,
    ciudad: "San Pedro Sula",
    ocupacion: "Ingeniera",
  };

  return (
    <View style={styles.container}>
      <UserProfile usuario={usuario1} />
      <UserProfile usuario={usuario2} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});