import { View, Text } from "react-native";
import { rutinaEjer } from "../services/logica";

export default function Calculadora(props: ReturnType<typeof rutinaEjer>) {
  return (
    <View>
      <Text>Promedio: {props.average}</Text>
    </View>
  );
}