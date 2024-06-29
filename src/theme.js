import { Platform } from "react-native";

const theme = {
    logIn:{
        textPrimary:'#ff6b6b',
        textSecondary:'#757575',
        white: '#fff'
    },
    input:{
        borderRadius: 4,
    },
    appBar:{
        primary:'#24292e',
        textPrimary: "#fff",
        textSecondary:'#999'
    },
    colors: {
        textPrimary:'#24292e',
        textSecondary:'#586069',
        primary:'#0366d6',
        white: '#fff'
    },
    fontSizes: {
        body: 14,
        subheading: 16,
        title: 32
    },
    fonts: {
        main: Platform.select({
            ios: 'Arial',
            android: 'System',
            default: 'System'
        }),
    },
    fontWeights: {
        normal: '400',
        bold: '700',
    }
}

export default theme;
