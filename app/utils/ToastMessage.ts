import { ToastAndroid } from "react-native";

export default function ToastMessage(message:string){
    ToastAndroid.showWithGravityAndOffset(
        message,
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
        100,
        200
      );
}