import { View } from "react-native";
import Headmain from "../components/Headmain";
import ListMoney from "../components/listmoney";

export default function PageMain(){
    return (
        <View style={{flex:1}}>
            <Headmain></Headmain>
            <ListMoney></ListMoney>
        </View>
    );
}