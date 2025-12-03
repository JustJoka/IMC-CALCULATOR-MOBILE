import * as React from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native';
import { Button } from 'react-native-paper';


export default class App extends React.Component {
  state = {
    peso: 0,
    altura: 0,
    imc: 0,
    legenda: 'indeterminado'
  };


  calcularIMC = () => {
    const resultado = this.state.peso / (this.state.altura * this.state.altura);
    this.setState ({
      imc: resultado
    });

    if (resultado < 18) {
      this.setState({
        legenda: 'Anêmico'
      });
    } else if (resultado >= 18.5 && resultado < 24.5){
      this.setState({
        legenda: 'Normal'
      });
    } else if (resultado >= 25 && resultado < 30){
      this.setState({
        legenda: 'Sobrepeso'
      });
    } else if (resultado >= 30 && resultado < 40) {
      this.setState({
        legenda: 'Obesidade'
      });
    } else if (resultado >= 40) {
      this.setState({
        legenda: 'Obesidade grave'
      });
    }

  };
  render(){
    return(
      <View style={styles.app}>
        <Text style={styles.title}> Seu IMC </Text>
        <View style={styles.resultado}>
          <Text style={styles.imc}> {this.state.imc.toFixed(1)} </Text>
          <Text style={styles.diagnostico}> {this.state.legenda} </Text>
        </View>

        <View>
          <TextInput style={styles.input} placeholder="Peso" onChangeText={valor => {
            this.setState({peso: valor.replace(',', '.')})
          }}
          />
          <TextInput style={styles.input} placeholder="Altura" onChangeText={valor => {
            this.setState({altura: valor.replace(',', '.')})
          }}
          />    
        </View>

        <Button mode='contained' onPress ={this.calcularIMC} style={styles.botao}>
          Calcular
        </Button>
     </View>
    );
  }
};

const styles = StyleSheet.create ({
  app: {
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Arial',
   },

  title: {
    textAlign: 'center',
    fontWeight: 700,
    marginTop: 50,
    marginBottom: 25,
    fontSize:18,
  },
  resultado: {
    width: 140,
    backgroundColor: '#008B8B',
    borderRadius: 10,
    alignItems: 'center',
    padding: 8,
  },
  imc: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff'
  },
  diagnostico: {
    fontSize: 16,
    fontWeight: 500,
    color: '#fff'

  },
  input: {
    padding: 25,
    marginBottom:15,
    borderColor: 'red',
    borderRadius: 15,
    backgroundColor: 'lightgray',
    marginTop: 32.5,
    textAlign: "center",
    color: 'darkgreen',
    fontWeight: 'bold',
  },
  botao: {
    marginTop: 60,
    color: 'blue',
    backgroundColor: 'blue',
  },
});

