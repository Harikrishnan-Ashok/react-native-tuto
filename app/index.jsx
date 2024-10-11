import { View, Text, } from "react-native"
import { Link } from "expo-router"
export default function App() {
	return (<>
		<View className="flex-1 items-center justify-center bg-white">
			<Text className="text-3xl">hello </Text>
			<Link href="/profile">go to profile</Link >
		</View>
	</>)
}
