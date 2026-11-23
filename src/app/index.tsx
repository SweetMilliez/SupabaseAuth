import { useState } from 'react';
import { TextInput } from "react-native";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const FormSignUp = () => {
  const [firstName, onChangeFirstName] = useState('Placeholder');
  const [lastName , onChangeLastName] = useState('Placeholder');
  const [email, onChangeEmail] = useState('Placeholder');
  const [password, onChangePassword] = useState('Placeholder');


  return (
  <SafeAreaProvider>
    <SafeAreaView>
      <TextInput
      onChangeText={onChangeFirstName}
      value={firstName}
      placeholder="Please enter your first name"
      />
      <TextInput
      onChangeText={onChangeLastName}
      value={lastName}
      placeholder="Please enter your last name"
      />
      <TextInput
      onChangeText={onChangeEmail}
      value={email}
      placeholder="Please enter your email address"
      keyboardType="email-address"
      />

    </SafeAreaView>
  </SafeAreaProvider>
  
  

)}
