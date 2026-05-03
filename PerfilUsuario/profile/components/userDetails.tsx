import { View, Text } from "react-native";

type Props = {
  edad: number;
  ciudad: string;
};

export default function UserDetails(props: Props) {
  return (
    <View>
      <Text>
        Información: {props.edad} - {props.ciudad}
      </Text>
    </View>
  );
}