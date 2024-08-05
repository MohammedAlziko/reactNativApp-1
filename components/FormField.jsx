import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { icons } from '../constants'

const FormField = ({otherStyle,handleChangeText ,title ,value,placeholder,...props}) => {
 
 const [showPassword,setShowPassword] =useState(false)
    return (
    <View className={`space-y-2 ${otherStyle} `} >
      <Text className="text-base text-gray-100 font-pmedium " >{title}</Text>

<View className="border-2 border-black-200 focus:border-secondary h-16 bg-black-100
rounded-2xl px-4 items-center w-full  flex-row
" >
    <TextInput 
    
    className="flex-1   text-white font-psemibold text-base "
    value={value}
placeholder={placeholder}
placeholderTextColor="#7b7b8b"
onChangeText={handleChangeText}
secureTextEntry={title === "Password" && !showPassword }
{...props}
    />

{  
title === "Password" && (

<TouchableOpacity onPress={() => setShowPassword(!showPassword) } >

<Image className="h-6 px-2 w-6" resizeMode='contain ' source={ !showPassword ? icons.eye :icons.eyeHide } />

</TouchableOpacity>


)

}

</View>


    </View>
  )
}

export default FormField