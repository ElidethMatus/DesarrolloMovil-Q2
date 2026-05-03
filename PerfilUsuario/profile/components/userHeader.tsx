import { View, Text } from "react-native";

type Props = {
  nombre: string;
  ocupacion: string;
};

export default function UserHeader(props: Props) {
  return (
    <View>
      <Text>
        Usuario: {props.nombre} - {props.ocupacion}
      </Text>
    </View>
  );
}