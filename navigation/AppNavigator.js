import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Home from '../screens/Home'

const AppContainer = createStackNavigator({
	Home: {
		screen: Home,
		navigationOptions: ({ navigation }) => ({
			title: 'Home',
			headerTintColor: 'blue'
		})
	}
})

export default createAppContainer(AppContainer)
