import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = ({ navigation }) => {
  //   const navigation = useNavigation();
  return (
    <SafeAreaView className="w-full h-full bg-[#00A9FF] justify-around text-center items-center">
      <View>
        <Text className="text-4xl font-bold text-white">Let's Get Started</Text>
      </View>
      <View>
        <Image
          source={require("../assets/welcome.png")}
          style={{ width: 350, height: 350 }}
        ></Image>
      </View>
      <View className="space-y-4">
        <TouchableOpacity
          className="py-4 bg-yellow-400 px-12 rounded-xl justify-center items-center"
          onPress={() => navigation.navigate("Signup")}
        >
          <Text className="text-xl font-bold ">Sign Up</Text>
        </TouchableOpacity>
        <View className="flex-row justify-center py-2">
          <Text className="text-white">Already Have a Account ?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text className="text-yellow-400">Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
