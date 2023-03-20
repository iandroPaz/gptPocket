import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {generateAnswer} from './api';

const App = () => {
  const [text, setText] = useState('');
  const [returnText, setReturnText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    setIsLoading(true);
    const answer = await generateAnswer(text);
    if (answer) {
      setReturnText(`${answer}\n`);
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  return (
    <View style={styles.container}>
      <Image source={require('./src/openai.png')} style={styles.logoOpenai} />
      <Text style={styles.plusText}>{'+'}</Text>
      <Image
        source={require('./src/piegoBranca.png')}
        style={styles.logoPiego}
      />
      <ScrollView style={styles.resultScroll}>
        <Text style={styles.resultText}>{returnText}</Text>
      </ScrollView>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Faça sua pergunta"
        textAlign="center"
      />
      <TouchableOpacity style={styles.button} onPress={handleSend}>
        {isLoading ? (
          <ActivityIndicator size="small" color="white" />
        ) : (
          <Text style={styles.buttonText}>Enviar</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  logoPiego: {
    width: 248,
    height: 75,
    marginBottom: 10,
    resizeMode: 'stretch',
  },
  logoOpenai: {
    width: 195,
    height: 80,
    marginBottom: 10,
    resizeMode: 'stretch',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#F5F5F5',
  },
  button: {
    backgroundColor: '#995CF5',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: '40%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#F5F5F5',
    fontSize: 16,
  },
  resultScroll: {
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#F5F5F5',
    width: '80%',
    height: '30%',
    borderBottomWidth: 15,
    borderTopWidth: 10,
  },
  resultText: {
    fontSize: 18,
    color: 'black',
  },
  plusText: {
    fontSize: 20,
    color: '#F5F5F5',
  },
});

export default App;
