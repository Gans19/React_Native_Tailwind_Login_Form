import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaView className="w-full h-full flex-1 bg-[#00A9FF] ">
      <View className="flex-row justify-start">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="bg-yellow-400 rounded-tr-2xl rounded-bl-2xl p-3 ml-4 my-4"
        >
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View className="flex-row justify-center items-center mt-6 mb-12">
        <Image
          source={require("../assets/login.png")}
          style={{ width: 200, height: 200 }}
        ></Image>
      </View>
      <View
        className="flex-1 bg-white pt-8 px-8"
        style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
      >
        <View className="form space-y-4">
          <Text className="text-gray-500 ml-4">Email Address</Text>
          <TextInput
            className="p-4 bg-gray-200 text-gray-700 rounded-2xl"
            placeholder="Enter Email Address"
          />
        </View>
        <View className="form space-y-4 mt-2">
          <Text className="text-gray-500 ml-4">Password</Text>
          <TextInput
            className="p-4 bg-gray-200 text-gray-700 rounded-2xl"
            secureTextEntry
            placeholder="Enter Password"
          />
          <TouchableOpacity
            className="flex items-end"
            // onPress={() => navigation.navigate("Signup")}
          >
            <Text>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text className="py-3 bg-yellow-400 text-xl px-12 rounded-xl justify-center items-center text-center font-bold">
              Login
            </Text>
          </TouchableOpacity>
        </View>
        <View className="flex items-center justify-center my-4 ">
          <Text className="font-bold text-xl">Or</Text>
          <View className="flex-row space-x-12 my-4">
            <TouchableOpacity>
              <Image source={require("../assets/google.png")}></Image>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require("../assets/apple.png")}></Image>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require("../assets/facebook.png")}></Image>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
