import { View, Text, SafeAreaView,TextInput , Image, StatusBar, KeyboardAvoidingView, Animated, Button, Keyboard} from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import styles from './styles'
import FieldTextInput from '../../component/fieldTextInput'
import FieldButton from '../../component/fieldButton'
import { heightScreen } from '../../utility'

const Login = () => {
    const headerMotion = useRef(new Animated.Value(0)).current;

    // function handle animation 
    const animatedKeyBoard = (motion, value, duration) => {
        Animated.timing(
            motion,
            {
                toValue:value,
                duration: duration,
                useNativeDriver:false
                
            }
        ).start();
    }
    // hanlde to avoid view when showing key board
    useEffect(()=> {
        const showSubscription = Keyboard.addListener('keyboardDidShow',() =>{
            animatedKeyBoard(headerMotion, heightScreen * -0.27, 500);
        })
        const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
            animatedKeyBoard(headerMotion, 0, 500);
        })
        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        }
    },[]);

    const Header = () => {
        return(
            <Animated.View style = {[styles.containerHeader, {marginTop: headerMotion}]}>
                <Image 
                style= {styles.imageTitle}
                source= {require('../../utility/images/image_title.png')}
                ></Image>
                <Text style= {styles.title}>Sign In</Text>
                <Text style= {[styles.title, {fontSize:28, fontWeight:'600'}]}>Wellcome!</Text>
            </Animated.View>
        )
    }

    const Body = () => {
        // variable dataLogin
        let [dataLogin, setDataLogin] = useState({
            name : '',
            email: '',
            password:'',
        })
        // handle entry data login
        const handleInput = (key, value) => {
            setDataLogin({
                ...dataLogin,
                [key]: value
            })
        }
        // handle login
        const pressLogin = () => {
            console.log(dataLogin)
        }
        // handle register
        const pressRegister = () => {
        }
        // handle forgot password 
        const pressForgotPW = () => {
            
        }
        return (
            <View style={styles.containerBody}>
                {/* Text input Username*/}
                <FieldTextInput  
                stylesContainer={{marginVertical:heightScreen * 0.02}}
                title={'User name'}
                placeholder={'Username or email address'}
                onChangeText={(newWord) => {handleInput('name', newWord)}}
                onSubmitEditing={Keyboard.dismiss}
                />
                {/* Text input password*/}
                <FieldTextInput  
                stylesContainer={{marginVertical:heightScreen * 0.02}}
                title={'Password'}
                placeholder={'At least 8 characters'}
                secureTextEntry={true}
                onChangeText={(newWord) => {handleInput('password', newWord)}}
                onSubmitEditing={Keyboard.dismiss}
                />       
                {/* Text forgot password*/}
                <Text 
                style={styles.textForgotPW}
                pressForgotPW= {() => pressForgotPW()}
                > Forgot Password?</Text>
                {/* button Login*/}
                <FieldButton
                stylesContainer={{marginVertical:heightScreen * 0.02}}
                title={'Sign in'}
                onPress={() => pressLogin()}
                />
                {/* Text register*/}
                <View 
                style={{flexDirection:'row', justifyContent:'center'}}>
                    <Text 
                    style={[styles.textForgotPW,{color:'black'}]}>Don’t have an account?</Text>
                    <Text 
                    style={styles.textForgotPW}
                    onPress={() => pressRegister()}
                    > Sign up now!</Text>
                </View>
            </View>
        )
    }

    return (
        <View style= {styles.container}>
        <StatusBar barStyle={'dark-content'} backgroundColor={'white'}/>
            <Header/>
            <Body/>
        </View>
    )
}

export default Login