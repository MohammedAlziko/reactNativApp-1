import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({title, containerStyle ,textStyle ,handlePress ,isLoading}) => {
  return (
    <TouchableOpacity
    activeOpacity={0.7}
    onPress={handlePress}
    disabled={isLoading}
    className={`${containerStyle}
    bg-secondary min-h-[62px] rounded-xl justify-center items-center ${isLoading && "opacity-50"}
    `} >
      <Text className={` ${textStyle} text-primary font-psemibold text-lg`} >{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton