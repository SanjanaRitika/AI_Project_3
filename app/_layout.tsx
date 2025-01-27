import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen name="index" />
      <Stack.Screen name="pages/Crop" />
      <Stack.Screen name="pages/Fertilizer" />
      
    
    </Stack>
  );
}
