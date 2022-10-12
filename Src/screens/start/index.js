import {ImageBackground, View } from 'react-native'
import React from 'react'
import FieldButton from '../../component/fieldButton'
import styles from './style'
import { heightScreen } from '../../utility'
import { useNavigation } from '@react-navigation/native'


const Start = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <ImageBackground source={require('../../utility/images/start.png')}
         style={styles.imagebg}
        >
        <FieldButton
            stylesContainer={{marginVertical:heightScreen * 0.08, paddingVertical:heightScreen*0.02, borderRadius:20}}
            title={'Get Started'}
            onPress={() => navigation.navigate('Login')}
        />
        </ImageBackground>
    </View>
  )
}

export default Start