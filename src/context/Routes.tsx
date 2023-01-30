import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { Tasks } from '../screens/tasks/Tasks'
import { Lo } from '../screens/lo/Lo'
import { Dashboard } from '../screens/dashboard/Dashboard'
import { Companies } from '../screens/companies/Companies'
import { Profile } from '../screens/profile/Profile'
import { TouchableOpacity } from 'react-native/'
import { FilterButtom } from '../global/components/headerTasksFilter/FilterButton'
import { Host } from 'react-native-portalize'

const MenuNav = createBottomTabNavigator()
const TaskStack = createStackNavigator()
const LoStack = createStackNavigator()

const TaskStackScreen = () => {
    return(
        <TaskStack.Navigator presentation='card' screenOptions={{ cardStyle: { flex: 1 }, headerShown: true }}>
            <TaskStack.Screen name='TaskTable' component={Tasks}
              ScreenOptions={{animationEnabled: false}} 
              options={{title: 'Atividades',
                 headerStyle: {
                backgroundColor: '#00264B'
              },
              headerTintColor: '#fff',
              headerTitleStyle:{
                fontWeight: 'bold',
                fontSize: 22
              },
              headerTitleAlign: 'center',
              headerRight: () => (
                <FilterButtom title='Filtro'  />
             )
        
              }} />
        </TaskStack.Navigator>
    )
}

const LoStackScreen = () => {
    return(
        <LoStack.Navigator presentation='card' screenOptions={{ cardStyle: { flex: 1 }, headerShown: false }}>
            <LoStack.Screen name='TaskTable' component={Lo} />
        </LoStack.Navigator>
    )
}

export const Routes = () => {
    return (
      <NavigationContainer independent={true}>
        <MenuNav.Navigator
          screenOptions={{
            tabBarShowLabel: true,
            headerShown: false,
            tabBarStyle: {
              height: 80,
              padding: 8,
              backgroundColor: '#fff',
              borderTopColor: 'transparent',
              borderWidth: 1,
              borderColor: '#D4D4D4'
            },
            tabBarActiveTintColor: '#00264B',
            tabBarItemStyle: {
              paddingBottom: 3,
              paddingTop: 3
            }
          }}>
          <MenuNav.Screen 
            name='Dashboard' 
            component={Dashboard}
            options={{
              tabBarLabel: 'Início'
            //   tabBarIcon: ({focused}) => {
            //     if(focused){
            //     return <Ionicons name="grid" size={24} color='#414141' />
            //     }
            //     return <Ionicons name="grid" size={24} color='#d3d1c4' />
            //   }
            }} />
          <MenuNav.Screen 
            name='Tasks' 
            component={TaskStackScreen} 
            options={{
              tabBarLabel: 'Atividades',
            //   tabBarIcon: ({focused}) => {
            //     if(focused){
            //       return <FontAwesome name="file-text" size={24} color="#414141" />
            //     } 
            //       return <FontAwesome name="file-text" size={24} color="#d3d1c4" />
            //   }
            }} />
          <MenuNav.Screen 
            name='Lo' 
            component={LoStackScreen} 
            options={{
              tabBarLabel: 'LO',
            //   tabBarIcon: ({focused}) => {
            //     if(focused){
            //       return <MaterialCommunityIcons name="file-certificate" size={30} color="#414141" />
            //     }
            //     return <MaterialCommunityIcons name="file-certificate" size={30} color="#d3d1c4" />
            //   }
            }} />
          <MenuNav.Screen 
            name='Companies' 
            component={Companies} 
            options={{
              tabBarLabel: 'Empresas',
            //   tabBarIcon: ({focused}) => {
            //     if(focused){
            //       return <FontAwesome name="industry" size={24} color="#414141" />
            //     }
            //     return <FontAwesome name="industry" size={24} color="#d3d1c4" />
            //   }
            }} />
          <MenuNav.Screen 
            name='Profile' 
            component={Profile} 
            options={{
              tabBarLabel: 'Perfil',
              tabBarShowLabel: true,
            //   tabBarIcon: ({focused}) => {
            //     if(focused){
            //       return <FontAwesome name="user-circle-o" size={24} color="#414141" />
            //     }
            //     return <FontAwesome name="user-circle-o" size={24} color="#d3d1c4" />
            //   }
            }} />
        </MenuNav.Navigator>
      </NavigationContainer> 
    );
  }