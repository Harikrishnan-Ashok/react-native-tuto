import { Text, View } from "react-native"
import { Link } from "expo-router"
import { StyleSheet } from "react-native"
export default function Profile() {
	return (<View style={style.container}>
		<Text>Profile</Text>
		<Link href="/">go back</Link>
	</View>)
}
const style = StyleSheet.create({
	container: {
		display: 'flex',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	}
})
