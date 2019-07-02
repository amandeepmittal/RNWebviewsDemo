import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Home from '../screens/Home'
import Browser from '../screens/Browser'

const HomeStack = createStackNavigator({
	Home: {
		screen: Home,
		navigationOptions: ({ navigation }) => ({
			title: 'Home',
			headerTintColor: 'blue'
		})
	},
	Browser: {
		screen: Browser,
		navigationOptions: ({ navigation }) => ({
			title: navigation.state.params.title,
			headerTintColor: 'green'
		})
	}
})

const AppContainer = createAppContainer(HomeStack)

export default AppContainer
