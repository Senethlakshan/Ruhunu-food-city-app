import React, { useState } from "react";
import { NativeBaseProvider, Box, Input, Button, Text, Image } from "native-base";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Handle login logic here
    console.log("Login:", email, password);
  };

  const handleRegister = () => {
    // Handle register logic here
    console.log("Register:", email, password);
  };

  return (
    <NativeBaseProvider>
      <Box p={4} alignItems="center">
        <Image
          source={require("./path/to/your/image.jpg")} // Replace with the actual image path
          alt="Logo"
          size="xl"
          mb={4}
          rounded="full"
        />
        <Text fontSize="xl" fontWeight="bold" mb={4}>
          Login/Register
        </Text>
        <Input
          mb={4}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          rounded="full"
        />
        <Input
          mb={4}
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          rounded="full"
        />
        <Button
          mb={2}
          onPress={handleLogin}
          rounded="full"
          size="lg"
          colorScheme="primary"
        >
          Login
        </Button>
        <Button
          onPress={handleRegister}
          variant="outline"
          rounded="full"
          size="lg"
          colorScheme="primary"
        >
          Register
        </Button>
      </Box>
    </NativeBaseProvider>
  );
}
