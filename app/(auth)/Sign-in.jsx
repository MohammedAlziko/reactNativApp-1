import { View, Text, ScrollView, Image, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from './../../components/CustomButton';
import { Link, router } from "expo-router";
import { getCurrentUser, Login } from "../../lib/appwrite";
import { useGlobalContext } from "../../context/GlobalProvider";

const SignIn = () => {

  const { setUser, setIsLoggedIn } = useGlobalContext();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [issubmiting, setIssubmiting] = useState(false)

const submit = async () => { 


  if( form.email ==="" || form.password ==="" ){
    Alert.alert("Error","Please Fill All Inputs")
  }
  
setIssubmiting(true)

  try {
    await Login(form.email , form.password  )
  const result =await getCurrentUser();

setUser(result)
setIsLoggedIn(true)

Alert.alert("Success","User Signed in successfully")
  router.replace("/Home")
  
  } catch (error) {
    Alert.alert("Error",error.message)
    
  }finally{
    setIssubmiting(false);
  }
  


 }



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
            Log in to Aora
          </Text>

          <FormField
           title="Email"
            otherStyle={"mt-7"}
            value={form.email}
            keyBoardType="email-address"
            handleChangeText={(e) => setForm( {...form, email:e}) }
            />
          <FormField
           title="Password"
            otherStyle={"mt-7"}
            placeholder=""
              value={form.password}
            keyBoardType="password"
            handleChangeText={(e) => setForm( {...form, password:e}) }
            />

<CustomButton 
isLoading={issubmiting}
title={"Sign In"}
handlePress={ submit }
textStyle=""
containerStyle="mt-7"

/>

<View className="pt-5 justify-center flex-row gap-2 " >

<Text className="text-gray-100 text-lg font-pregular  " >
  Don't have an account?
</Text>

<Link href="/Sign-up" className="text-secondary font-psemibold text-lg  " >Sign Up</Link>

</View>


        </View>


      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
