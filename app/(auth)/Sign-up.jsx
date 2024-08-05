import { View, Text, ScrollView, Image, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "./../../components/CustomButton";
import { Link, router } from "expo-router";
import { createUser } from "../../lib/appwrite";
import { useGlobalContext } from "../../context/GlobalProvider";

const SignUp = () => {

  const { setUser, setIsLoggedIn } = useGlobalContext();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [issubmiting, setIssubmiting] = useState(false);








  
  const submit = () => {
  
    if(form.username ==="" || form.email ==="" || form.password ==="" ){
      Alert.alert("Error","Please Fill All Inputs")
    }
    
setIssubmiting(true)

    try {
      const result =createUser(form.email , form.password , form.username )
    setUser(result)
    setIsLoggedIn(true)
    router.replace("/Home")
    
    } catch (error) {
      Alert.alert("Error",error.message)
      
    }finally{
      setIssubmiting(false)
    }
    
    };

  return (
    <SafeAreaView className="bg-primary h-full ">
      <ScrollView>
        <View className="min-h-[83vh] w-full justify-center my-7 px-4">
          <Image
            source={images.logo}
            className="w-[115px] h-[35px]"
            resizeMode="contain"
          />

          <Text className="text-white font-semibold text-2xl mt-10 font-psemibold ">
            Sign Up to Aora
          </Text>

          <FormField
            title="User name"
            otherStyle={"mt-7"}
            value={form.username}
          
            handleChangeText={(e) => setForm({ ...form, username: e })}
          />
          <FormField
            title="Email"
            otherStyle={"mt-7"}
            value={form.email}
            keyboardType="email-address"
            handleChangeText={(e) => setForm({ ...form, email: e })}
          />
          <FormField
            title="Password"
            otherStyle={"mt-7"}
            placeholder=""
            value={form.password}
           
            handleChangeText={(e) => setForm({ ...form, password: e })}
          />

          <CustomButton
            isLoading={issubmiting}
            title={"Sign Up"}
            handlePress={ submit}
           
            containerStyle="mt-7"
          />

          <View className="pt-5 justify-center flex-row gap-2 ">
            <Text className="text-gray-100 text-lg font-pregular  ">
              Already have an account?
            </Text>

            <Link
              href="/Sign-in"
              className="text-secondary font-psemibold text-lg  "
            >
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
