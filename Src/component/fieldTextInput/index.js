import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'
import { heightScreen, widthScreen, colors } from '../../utility';
const FieldTextInput = ({
    title,
    placeholder,
    onChangeText,
    secureTextEntry,
    stylesContainer,
    stylesTitle,
    stylesInput,
    onFocus,
    onSubmitEditing
}) => {
    let [state, setState] = useState(secureTextEntry);
    return (
        <View style={[ styles.container, stylesContainer]}>
            <Text 
            style={ [styles.title, stylesTitle]}
            >{title}</Text>

            <TextInput
            style= {[ styles.input, stylesInput ]}
            placeholder={ placeholder }
            onChangeText={ onChangeText }
            secureTextEntry= {state}
            onFocus= {onFocus}
            onSubmitEditing = {onSubmitEditing}
            ></TextInput>

            {
                secureTextEntry ? 
                <TouchableOpacity 
                style={styles.button}
                onPress= {() => setState(!state)}>
                    <Image 
                    style={ {height: '100%', width: '100%'} }
                    source={ state ? require('../../utility/images/icon_eye_slash.png') : require('../../utility/images/icon_eye.png') }
                    ></Image>
                </TouchableOpacity> 
                :
                <></>
            }
            
        </View>
    )
}

export default FieldTextInput

const styles = StyleSheet.create({
    container: {
        height: heightScreen * 0.095,
        width: widthScreen * 0.85,
        justifyContent:'space-between',
        // borderWidth:1
    },
    title: {
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 16,
        
    },
    input: {
        height: heightScreen * 0.06,
        paddingLeft: widthScreen * 0.04,
        paddingRight: widthScreen * 0.12,
        borderRadius:5,
        borderWidth:1,
        borderColor:colors.GRAY_DARK,
        fontStyle: 'normal',
        fontSize: 16,
    },
    button : {
        height: heightScreen * 0.03,
        width: widthScreen * 0.055,

        position:'absolute',
        right:widthScreen * 0.04,
        top:heightScreen*0.05
    }
})