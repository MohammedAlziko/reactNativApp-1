import { Link, router ,Redirect } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import {  Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';
import { useGlobalContext } from '../context/GlobalProvider';




export default function App() {
  const { isLoading ,isLoggedIn} =useGlobalContext();


  if (!isLoading && isLoggedIn) return <Redirect href="/home" />;
  return (


    
    <SafeAreaView  className="h-full bg-primary "  >
     
<ScrollView contentContainerStyle={{height:"100%"}} >
<View className="w-full min-h-[85vh] justify-center items-center px-4" >

<Image source={images.logo} className="w-[130px] h-[84px]  " resizeMode='contain'    />
<Image source={images.cards} className="max-w-[380px] h-[300px]  " resizeMode='contain'    />

<View className="mt-5 relative" >
  <Text className="font-bold text-3xl text-white text-center" >
Discover Endless Possibilities with  <Text className="text-secondary-200" >Aora</Text>
  </Text>
  <Image source={images.path} className="absolute -right-8 -bottom-2 w-[136px] h-[15px] " resizeMode='contain' />
</View>

<Text className=" text-gray-100 text-center mt-7 text-sm font-pregular " >
Where creativity meets innovation: embark on a journey of 
limitless exploration with Aora
</Text>


<CustomButton 
title="Continue with Email"
 containerStyle ={"w-full mt-7"}
textStyle ={""}
handlePress={() => router.push("/Sign-in")} 
isLoading={false}
 />

</View>



</ScrollView>


<StatusBar backgroundColor='#161622' style='light'  />
    </SafeAreaView>
  );
}

