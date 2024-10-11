import { Stack } from "expo-router";
import { StatusBar } from "react-native";
export default function RootLayout() {
	return (<>
		<StatusBar></StatusBar>
		<Stack>
			<Stack.Screen name="index" options={{ headerShown: true }} ></Stack.Screen>
		</Stack>
	</>)
}
