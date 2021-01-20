import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  TextInput,
  Dimensions,
  View,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  const [max, setMax] = React.useState(60);
  const [count, setCount] = React.useState(0);
  const [input, setInput] = React.useState('');

  const handleChangeCount = (newValue) => {
    typeof newValue === 'number' && newValue >= 30
      ? setMax(newValue)
      : setMax(30);
  };

  const handlePressCalculate = () => {
    let arr = [];
    let str = input;

    while (str.length > max) {
      let i = str.substring(0, max).lastIndexOf(' ');

      arr.push(str.substring(0, i));
      str = str.substring(i + 1);
    }

    arr.push(str);

    return setCount(arr.length);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.inputGroup}>
          <Text style={styles.header}>Text counter</Text>

          <View>
            <Text>Text:</Text>
            <TextInput
              style={styles.inputText}
              multiline
              placeholder="Enter text here"
              value={input}
              onChangeText={(text) => setInput(text)}
            />
          </View>

          <View style={styles.inputCountGroup}>
            <Text>Max count:</Text>
            <TextInput
              style={styles.inputCount}
              value={max.toString()}
              keyboardType="numeric"
              onChangeText={(text) => handleChangeCount(+text)}
              maxLength={3}
            />
          </View>
        </View>

        <View style={styles.buttonGroup}>
          <Text style={styles.counter}>Messages count: {count}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              handlePressCalculate();
            }}>
            <Text>Calculate</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    marginTop: 100,
  },
  header: {
    textAlign: 'center',
    paddingBottom: 30,
    fontSize: 20,
  },
  inputGroup: {
    paddingVertical: 20,
    flex: 7,
    alignItems: 'center',
  },
  buttonGroup: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
  },
  inputText: {
    borderWidth: 1,
    width: Dimensions.get('window').width - 50,
    marginBottom: 30,
    height: 300,
    borderRadius: 10,
    padding: 10,
  },
  inputCountGroup: {
    flexDirection: 'row',
  },
  inputCount: {
    marginLeft: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: 28,
  },
  button: {
    flex: 1,
    borderColor: 'rgb(45, 130, 230)',
    borderWidth: 3,
    borderRadius: 10,
    padding: 10,
    width: Dimensions.get('window').width - 50,
    alignItems: 'center',
  },
  counter: {
    flex: 2,
  },
});

export default App;
