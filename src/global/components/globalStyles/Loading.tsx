import { ActivityIndicator, Modal, StyleSheet, View } from "react-native"
import { InovateLogo } from "../../icons/InovateLogo"

type LoadingProps = {
    visible: boolean
}

export const Loading = ({visible} :LoadingProps) =>  {
    return(
        <Modal 
            visible={visible} 
            animationType='fade'
            transparent
        >
            <View style={styles.container}>
                <View style={styles.logo}>
                    <InovateLogo size={78} fill='#00264B' />
                </View>
                <ActivityIndicator 
                    size='large'
                    color='#00264B'
                    animating={true}
                />
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.7)'
    },
    logo: {
        position: 'relative',
        right: 5,
        bottom: 15
    }
})
