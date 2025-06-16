# Validação de Modelo com ml5.js

Este projeto foi desenvolvido para a disciplina de Machine Learning, com o objetivo de pesquisar e demonstrar o uso da biblioteca **ml5.js** em um caso simples de validação de modelo.

O projeto consiste em uma aplicação web que treina uma rede neural para uma tarefa de classificação e implementa um ciclo completo de validação para avaliar a performance do modelo.

## 🎥 Apresentação em Vídeo

Uma apresentação completa deste projeto, incluindo a demonstração ao vivo e a discussão sobre a jornada de depuração, está disponível no link abaixo:

[![Assistir no YouTube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/watch?v=pRhVVsLpQps)

---

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
    A maneira mais estável de executar este projeto é usando um servidor Python simples.
    ```bash
    python -m http.server
    ```

4.  **Abra no navegador:**
    Acesse a URL: **`http://localhost:8000`**.

5.  **Observe o Console:**
    Pressione **F12** para abrir as ferramentas de desenvolvedor e clique na aba "Console".

---

##  journeyman A Jornada da Depuração: Um Estudo de Caso

Este projeto se tornou um profundo estudo de caso sobre os desafios do desenvolvimento em Machine Learning no ambiente web (WebML). O erro inicial, que parecia simples, revelou uma série de conflitos complexos no ambiente de execução. A investigação nos levou a aprender sobre:

1.  **Conflitos de Ambiente Local:** A importância de não desenvolver em pastas sincronizadas com a nuvem (**OneDrive**) ou pastas de sistema, e como softwares de GPU (**NVIDIA**) podem interferir com o **WebGL**.
2.  **Ordem e Sincronia de Bibliotecas:** A necessidade de carregar dependências como o **TensorFlow.js** na ordem correta e forçar a inicialização de backends para garantir a estabilidade.

---

## 🏁 Conclusão

O objetivo principal de demonstrar um ciclo de validação com `ml5.js` foi alcançado com sucesso. Mais importante que o resultado final, no entanto, foi o processo de depuração, que proporcionou um aprendizado prático e avançado sobre os desafios reais do desenvolvimento web com Machine Learning.

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- **ml5.js**
- **TensorFlow.js**
