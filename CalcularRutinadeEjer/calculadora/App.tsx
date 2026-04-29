import { View, Text } from "react-native";
import { rutinaEjer } from "./services/logica";

export default function App() {

  const result = rutinaEjer([3, 0, 2, 4.5, 0, 3, 1], 2);

  return (
    <View>
      <Text>periodLength: {result.periodLength}</Text>
      <Text>trainingDays: {result.trainingDays}</Text>
      <Text>success: {result.success ? "true" : "false"}</Text>
      <Text>rating: {result.rating}</Text>
      <Text>ratingDescription: {result.ratingDescription}</Text>
      <Text>target: {result.target}</Text>
      <Text>average: {result.average}</Text>
    </View>
  );
}