import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {peso: 0, altura: 0, resultado: 0, resultadoText: ''};
    this.calcular = this.calcular.bind(this);
  }

  calcular() {
    let imc = this.state.peso / (this.state.altura * this.state.altura);
    let aux = this.state;
    aux.resultado = imc;
    if (aux.resultado > 0) {
      if (aux.resultado < 18.5) {
        aux.resultadoText = <Text style={styles.magreza}>Magreza.</Text>;
      } else if (aux.resultado <= 24.9) {
        aux.resultadoText = <Text style={styles.normal}>Normal.</Text>;
      } else if (aux.resultado <= 29.9) {
        aux.resultadoText = (
          <Text style={styles.sobrepeso}>Sobrepeso (grau nível I).</Text>
        );
      } else if (aux.resultado <= 39.9) {
        aux.resultadoText = (
          <Text style={styles.obesidade}>Obesidade (grau nível II).</Text>
        );
      } else if (aux.resultado > 40) {
        aux.resultadoText = (
          <Text style={styles.grave}>Obesidade grave (grau nível III).</Text>
        );
      }
      this.setState(aux);
    } else {
      aux.resultadoText = 'Dados inválidos!';
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Calculadora de IMC</Text>
        <View style={styles.lado}>
          <TextInput
            placeholder="Digite sua peso"
            keyboardType="numeric"
            style={styles.input}
            onChangeText={(peso) => {
              this.setState({peso});
            }}
          />
          <TextInput
            placeholder="Digite o seu altura"
            keyboardType="numeric"
            style={styles.input}
            onChangeText={(altura) => {
              this.setState({altura});
            }}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={this.calcular}>
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>
        <Text style={styles.label}>Calculo do índice de massa corporal:</Text>
        <Text style={[styles.resultado, {fontSize: 35}]}>
          {this.state.resultado.toFixed(2)}
        </Text>
        <Text style={styles.label2}>Classificação (grau):</Text>
        <Text style={styles.resultado}>{this.state.resultadoText}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FFFA',
  },
  titulo: {
    marginTop: 24,
    textAlign: 'center',
    fontSize: 43,
  },
  lado: {
    flexDirection: 'row',
  },
  input: {
    height: 50,
    width: '50%',
    textAlign: 'center',
    fontSize: 22,
    marginTop: 20,
    marginRight: -10,
  },
  button: {
    marginTop: 50,
    width: 290,
    marginLeft: 36,
    backgroundColor: '#66CDAA',
    borderRadius: 10,
  },
  buttonText: {
    alignSelf: 'center',
    padding: 10,
    fontSize: 25,
    marginRight: 10,
  },
  resultado: {
    textAlign: 'center',
    marginTop: 25,
    marginLeft: 0,
    fontSize: 30,
    padding: 5,
  },
  label: {
    textAlign: 'center',
    marginTop: 80,
    marginLeft: 0,
    fontSize: 28,
    padding: 5,
  },
  label2: {
    textAlign: 'center',
    marginTop: 25,
    marginLeft: -10,
    fontSize: 30,
    padding: 5,
  },
  magreza: {
    color: '#A9A9A9',
  },
  normal: {
    color: '#66CDAA',
  },
  sobrepeso: {
    color: '#FF7F50',
  },
  obesidade: {
    color: '#CD5C5C',
  },
  grave: {
    color: '#FF0000',
  },
});
