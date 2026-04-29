import { View, Text } from "react-native";
import { rutinaEjer } from "../services/logica";

export default function Calculadora() {

  const result = rutinaEjer([3, 0, 2, 4.5, 0, 3, 1], 2);

  return (
    <View>
      <Text>Promedio: {result.average}</Text>
    </View>
  );
}