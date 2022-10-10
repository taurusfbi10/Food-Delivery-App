import { View, Text, Button, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { heightScreen, widthScreen, colors } from '../../utility'
import React from 'react'
const FieldButton = ({
    onPress, 
    title,
    stylesContainer,
    stylesTitle,
    stylesIcon,
    icon,
    
}) => {
return (
      <TouchableOpacity 
        onPress={onPress}
        style= {[styles.container, stylesContainer]}
        >
       {
        icon ? <Image
        style= {[styles.icon, stylesIcon]}
        source = {icon}>
        </Image>:
        <></>
       }
        <Text 
        style= {[styles.title, stylesTitle]}
        >{title}</Text>
      </TouchableOpacity>
  )
}
export default FieldButton;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal:widthScreen * 0.075,
        alignSelf:'center',
        paddingVertical:heightScreen * 0.01,
        flexDirection:'row',
        
        borderRadius: 5,
        elevation: 4,
        backgroundColor: colors.BLUE_DARK,
        alignItems: 'center',
        
    },
    icon: {
        height: heightScreen * 0.03,
        width: widthScreen * 0.06,
        marginRight: widthScreen * 0.06
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        alignSelf: 'center',
        color: colors.WHITE,
    },
});