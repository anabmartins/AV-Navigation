import { Tabs } from "expo-router";
import { Feather } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 

export default function AppLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Bank",
          href: '/',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="money-check-alt" size={24} color="green" />
  )}}
      />
       <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          href: 'home',
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={24} color="green" />    
  )
        }}
      />
      <Tabs.Screen
        name="sobre"
        options={{
          title: "Sobre",
          href: null,
        }}
      />
      <Tabs.Screen
        name="cadastro"
        options={{
          title: "Cadastro",
          href: null,
        }}
      />
    </Tabs>
  );
}