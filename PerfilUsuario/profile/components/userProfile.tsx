import { View } from "react-native";
import UserHeader from "./userHeader";
import UserDetails from "./userDetails";

type Usuario = {
  nombre: string;
  edad: number;
  ciudad: string;
  ocupacion: string;
};

type Props = {
  usuario: Usuario;
};

export default function UserProfile(props: Props) {
  return (
    <View>
      <UserHeader
        nombre={props.usuario.nombre}
        ocupacion={props.usuario.ocupacion}
      />

      <UserDetails
        edad={props.usuario.edad}
        ciudad={props.usuario.ciudad}
      />
    </View>
  );
}