import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Add from './screens/Add';
import Delete from './screens/Delete';
import Home from './screens/Home';

const StackNavigator = createStackNavigator({
    Delete: {
        screen: Delete
    },
    Add: {
        screen: Add
    },
    Home: {
        screen: Home
    },
}, {
    initialRouteName: "Home"
})


export default createAppContainer(StackNavigator)