import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const LoginScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require('../../assets/images/pagapoco.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>Iniciar sesión</Text>

      {/* Email */}
      <TextInput
        placeholder="Email"
        placeholderTextColor="#000"
        style={styles.input}
        keyboardType="email-address"
      />

      {/* Contraseña */}
      <TextInput
        placeholder="Contraseña"
        placeholderTextColor="#000"
        style={styles.input}
        secureTextEntry
      />

      {/* Botones sociales */}
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Icon name="google" size={22} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Icon name="twitter" size={22} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Icon name="facebook" size={22} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Botón de ingresar */}
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Ingresar</Text>
      </TouchableOpacity>

      {/* Enlace de registro */}
      <Text style={styles.registerText}>
        ¿No tienes una cuenta? <Text style={{ fontWeight: '500' }}>Registrate</Text>
      </Text>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 32,
    paddingTop: 60,
    alignItems: 'center',
  },
  logo: {
    width: 160,
    height: 160,
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  input: {
    width: '100%',
    height: 48,
    backgroundColor: '#E9E0EC', // Color lavanda claro
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 16,
    fontSize: 16,
  },
  socialContainer: {
    flexDirection: 'row',
    gap: 16,
    marginVertical: 20,
  },
  socialButton: {
    backgroundColor: '#E9E0EC',
    borderRadius: 100,
    padding: 12,
  },
  loginButton: {
    backgroundColor: '#9D70F9',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 50,
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  registerText: {
    color: '#000',
    fontSize: 14,
  },
});
