import { Image, StyleSheet, Platform, View, Text } from 'react-native';
import {useState, useEffect} from 'react';
//import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Auth from '@/components/Auth';
import * as LocalAuthentication from 'expo-local-authentication';

export default function HomeScreen() {

  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
    // Check if hardware supports biometrics
    useEffect(() => {
      (async () => {
        const compatible = await LocalAuthentication.hasHardwareAsync();
        setIsBiometricSupported(compatible);
      })();
    });

    function onAuthenticate () {
      const auth = LocalAuthentication.authenticateAsync({
        promptMessage: 'Authenticate',
        fallbackLabel: 'Enter Password',
      });
      auth.then(result => {
        setIsAuthenticated(result.success);
          console.log(result);
      }
      );
    }


  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#eee', dark: '#000' }}
      headerImage={
        <Image
        source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeI-tcsAm03GHbfmhxii3S2cs0a_hRY6LUEjI2MLA6H2qp4bIt-3RzUQW94dpTsL2Bqlk&usqp=CAU'}}
          // source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Sentinel Vision</ThemedText>
        <Image
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'transparent',
          tintColor: 'white'
        }}
        source={{ uri: 'https://www.svgrepo.com/show/13938/security-camera.svg' }}
      />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText>
        1)  To begin, authenticate with your phone's biometric authentication (if supported or use your passcode)
        </ThemedText>

        <ThemedText>
          2) Connect your camera to the app
        </ThemedText>

        <Auth onAuthenticate={onAuthenticate}/>

        {/* <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this starter app.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run{' '}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText> */}
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: '100%',
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
