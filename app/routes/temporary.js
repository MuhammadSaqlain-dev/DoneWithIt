const Stack = createStackNavigator();
function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen name="Tweet" component={Tweet} />
      <Stack.Screen
        name="TweetDetails"
        component={TweetDetails}
        options={{
          headerStyle: { backgroundColor: "tomato" },
          headerTintColor: "white",
        }}
      />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: "tomato",
      activeTintColor: "white",
      inactiveBackgroundColor: "#eee",
      inactiveTintColor: "black",
    }}
  >
    <Tab.Screen
      name="Feed"
      component={StackNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Account"
      component={Account}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="account" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

const Account = () => (
  <Screen>
    <Text>Account</Text>
  </Screen>
);

// Functional Components
const Tweet = ({ navigation }) => {
  return (
    <Screen>
      <Text>Tweet</Text>
      <Button
        title="Details"
        onPress={() => navigation.navigate("TweetDetails", { id: "1" })}
      />
    </Screen>
  );
};
function TweetDetails({ route }) {
  return (
    <Screen>
      <Text>TweetDetails {route.params.id}</Text>
    </Screen>
  );
}
