import { View, Text, Button } from 'react-native'
import React, { useEffect } from 'react'
import { CameraView, useCameraPermissions } from 'expo-camera/next'

const CameraNX = () => {
    const [permisions, requestPermission] = useCameraPermissions()

    useEffect(() => {
        const result = async () => await requestPermission()
    }, [])

    if (!permisions?.granted)
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Text>Permission Denied</Text>
                <Button
                    title="request access"
                    onPress={async () => {
                        await requestPermission()
                    }}
                />
            </View>
        )

    return <CameraView style={{ flex: 1 }}></CameraView>
}

export default CameraNX
