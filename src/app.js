import { LightningElement } from "lwc";

export default class App extends LightningElement {
  title = "Welcome to Lightning Web Components!";
//criar variáveis e atributos
nome = " Julia Meireles";
telefone = ' (11)7768-9011';
cpf = ' 345.261.773-22' ;
idade = ' 85';
email = 'jumei@gmail.com';
instagram = "https://www.instagram.com";
linkedin = "https://www.linkedin.com";

visible = true;


// uso de variavel da classe, dentro dos nossos metodos
// trocar o valor de visible quando clicado de true p/ false
// foi utilizada uma var fora e aplicada dentro de um metodo


trocarDiv(){
  //this.visible = false;
  if(this.visible == true) {
    this.visible = false;
  }else{
    this.visible = true;
  }
}

//trocarDiv(){
//    this.visible = !this.visible;
//  }



/**exercício de classe
 * criar método chamado de alterar valores
 * vai mudar o valor do nome, telefone, cpf, 
 * idade, email, instagram, e likedin
 * 
 * No html criar um novo botão chamado 'Altera Valor' 
 * que ative a função
 * 
 */

alterarValores(){
this.nome = 'Gabes';
this.telefone = '654714234';
this.cpf = '5464967646' ;
this.idade = 22;
this.email = 'outro@email';
this.instagram = '@algumacoisa';
this.linkedin = 'linkedin' ;
}

}





















