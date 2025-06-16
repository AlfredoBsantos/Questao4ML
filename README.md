# Validação de Modelo com ml5.js

Este projeto foi desenvolvido para a disciplina de Machine Learning, com o objetivo de pesquisar e demonstrar o uso da biblioteca **ml5.js** em um caso simples de validação de modelo.

O projeto consiste em uma aplicação web que treina uma rede neural para uma tarefa de classificação (diferenciar cores "claras" de "escuras") e, mais importante, implementa um ciclo completo de validação para avaliar a performance do modelo.

## ✨ Funcionalidades

- **Rede Neural no Navegador:** Implementação de uma rede neural de classificação usando a API amigável do `ml5.js`.
- **Processo de Validação:** O script separa os dados em um conjunto de treino (70%) e um de teste (30%) para uma avaliação justa do modelo.
- **Treinamento Interativo:** O console do navegador exibe o progresso do treinamento em tempo real, mostrando a evolução das épocas e a redução da perda (loss).
- **Cálculo de Acurácia:** Após o treino, o modelo é avaliado com os dados de teste e uma acurácia final é calculada e exibida.
- **Interface Limpa:** Uma interface de usuário simples e moderna desenvolvida com HTML e CSS para uma apresentação profissional.

---

## 🚀 Como Executar o Projeto

Para executar este projeto localmente, siga os passos abaixo.

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/AlfredoBsantos/Questao4ML.git](https://github.com/AlfredoBsantos/Questao4ML.git)
    ```

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd Questao4ML
    ```

3.  **Inicie um servidor local:**
    A maneira mais estável de executar este projeto, devido à forma como as bibliotecas de ML interagem com o navegador, é usando um servidor Python simples.
    ```bash
    python -m http.server
    ```
    (Use `python3` se o comando acima não funcionar).

4.  **Abra no navegador:**
    Abra seu navegador e acesse a URL: **`http://localhost:8000`**.

5.  **Observe o Console:**
    Pressione **F12** para abrir as ferramentas de desenvolvedor e clique na aba "Console" para ver todo o processo de treinamento e validação acontecer.

---

##  journeyman A Jornada da Depuração: Um Estudo de Caso

Este projeto se tornou um profundo estudo de caso sobre os desafios do desenvolvimento em Machine Learning no ambiente web (WebML). O erro inicial, que parecia simples, revelou uma série de conflitos complexos no ambiente de execução.

O problema central era que o script estava sendo **executado duas vezes**, causando uma falha catastrófica na inicialização do backend do TensorFlow.js. A investigação para resolver isso nos levou a aprender sobre:

1.  **Conflitos de Ambiente Local:** Descobrimos que a causa raiz era uma interferência de processos de segundo plano no sistema operacional.
    - **Sincronização na Nuvem:** Salvar o projeto em pastas gerenciadas pelo **OneDrive** ou outras pastas de sistema (`Documentos`) causa um comportamento imprevisível. A solução foi mover o projeto para um diretório neutro (`C:\DEV`).
    - **Software de GPU:** O software da **NVIDIA**, que gerencia a placa de vídeo, estava em conflito direto com a tentativa do navegador de acessar a GPU para WebGL. Desativar seus processos foi um passo crucial para a estabilidade.

2.  **Ordem e Sincronia de Bibliotecas:**
    - O erro `tf is not defined` nos ensinou que, ao usar funções do motor TensorFlow.js diretamente, é preciso garantir que a biblioteca `tf.js` seja carregada **antes** do `ml5.js`.
    - O erro `Backend 'undefined'` foi resolvido forçando a inicialização do backend com `await tf.setBackend('webgl')`, uma medida de segurança para contornar a instabilidade do ambiente específico.

---

## 🏁 Conclusão

O objetivo principal de demonstrar um ciclo de validação com `ml5.js` foi alcançado com sucesso. O resultado final é uma aplicação web funcional que treina um modelo e avalia sua acurácia de forma transparente.

Mais importante que o resultado final, no entanto, foi o processo. A depuração dos erros de ambiente proporcionou um aprendizado prático e avançado sobre os desafios reais que podem ocorrer ao se trabalhar com tecnologias que interagem diretamente com o hardware do usuário, como o WebGL.

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- **ml5.js**
- **TensorFlow.js** (carregado como dependência)
