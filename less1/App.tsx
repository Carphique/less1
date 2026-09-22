import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState<number>(0);
  const [inputValue, setInputValue] = useState<string>('0');

  const handleInputChange = (text: string) => {
    setInputValue(text);
    const parsed = parseInt(text, 10);
    if (!isNaN(parsed)) {
      setCount(parsed);
    } else if (text === '' || text === '-') {
      setCount(0);
    }
  };

  const handleIncrement = () => {
    const newCount = count + 1;
    setCount(newCount);
    setInputValue(newCount.toString());
  };

  const handleDecrement = () => {
    const newCount = count - 1;
    setCount(newCount);
    setInputValue(newCount.toString());
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>My First App</Text>
        
        <Text style={styles.counterText}>Counter: {count}</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Встановіть значення:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={inputValue}
            onChangeText={handleInputChange}
            placeholder="0"
          />
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={[styles.button, styles.decrementBtn]}
            onPress={handleDecrement}
          >
            <Text style={styles.buttonText}>-1</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.incrementBtn]}
            onPress={handleIncrement}
          >
            <Text style={styles.buttonText}>+1</Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333333',
  },
  counterText: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 20,
    color: '#2563eb',
  },
  inputContainer: {
    alignItems: 'center',
    marginBottom: 25,
    width: '100%',
  },
  inputLabel: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 18,
    width: 120,
    textAlign: 'center',
    backgroundColor: '#fafafa',
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 15,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    minWidth: 80,
    alignItems: 'center',
  },
  incrementBtn: {
    backgroundColor: '#22c55e',
  },
  decrementBtn: {
    backgroundColor: '#ef4444',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});