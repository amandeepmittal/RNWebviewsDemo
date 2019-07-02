import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

class Home extends Component {
	state = {
		links: [
			{ title: 'JScrambler Blog', link: 'https://blog.jscrambler.com' },
			{ title: 'My Portfolio', link: 'https://amanhimself.dev' }
		]
	}

	handleButtonPress(item) {
		const { title, link } = item
		this.props.navigation.navigate('Browser', { title, link })
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.list}>
					{this.state.links.map((item, index) => (
						<TouchableOpacity
							key={index}
							onPress={() => this.handleButtonPress(item)}
							style={styles.button}
						>
							<Text style={styles.text}>{item.title}</Text>
						</TouchableOpacity>
					))}
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	},
	buttonList: {
		flex: 1,
		justifyContent: 'center'
	},
	button: {
		margin: 10,
		backgroundColor: '#356bca',
		borderRadius: 5,
		padding: 10
	},
	text: {
		color: '#fff',
		textAlign: 'center'
	}
})

export default Home
