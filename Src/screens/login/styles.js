import { StyleSheet } from 'react-native'
import { heightScreen, widthScreen, colors } from '../../utility' 

export default StyleSheet.create({
    container : {
        height : heightScreen,
        width: widthScreen,
    },
    containerHeader: {
        height : heightScreen * 0.4,
        width: widthScreen,
        paddingVertical: heightScreen * 0.03,
        paddingHorizontal: widthScreen * 0.075,
        // borderWidth:1
    },
    imageTitle: {
        height: heightScreen * 0.2,
        marginVertical: heightScreen* 0.02,
        aspectRatio: 1,
        borderRadius: 100,
        alignSelf:'center'
    },
    title: {
        fontSize: 35,
        fontWeight: '800',
        color: colors.ORANGE_DARK
    },
    containerBody: {
        height : heightScreen * 0.55,
        paddingHorizontal: widthScreen * 0.075,
        
    },
    textForgotPW: {
        fontSize: 16,
        color:colors.BLUE_DARK,
        alignSelf:'flex-end',
        marginVertical:heightScreen * 0.02
    },
})