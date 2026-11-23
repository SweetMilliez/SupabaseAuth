import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{headerShadowVisible: false,}}>
      <Tabs.Screen
        name="index"
        options={{
          title: "SignUp",
          headerTitleAlign: 'center',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color as string} size={size} />
         ),
        }}
        />

        <Tabs.Screen
        name="signin"
        options={{
          title: "SignIn",
          headerTitleAlign: 'center',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color as string} size={size} />
         ),
        }}
        />

        <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerTitleAlign: 'center',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color as string} size={size} />
         ),
        }}
        />
      </Tabs>
  );
}