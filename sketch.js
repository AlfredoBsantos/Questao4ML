// Opções da Rede Neural
const options = {
    task: 'classification',
    inputs: ['r', 'g', 'b'],
    outputs: ['label'],
    debug: false
};

// Inicializa a Rede Neural
const nn = ml5.neuralNetwork(options, modelReady);

// Função para mostrar o progresso do treinamento
function whileTraining(epoch, loss) {
    console.log(`Época: ${epoch} | Perda (loss): ${loss.loss.toFixed(4)}`);
}

// Função que é chamada quando o modelo está pronto
async function modelReady() {
    // Forçamos o TensorFlow a definir o backend para WebGL antes de fazer qualquer outra coisa.
    // Manteremos isso como uma garantia extra de estabilidade.
    await tf.setBackend('webgl');
    console.log('Backend do TensorFlow forçado para WebGL com sucesso!');
    
    console.log('Rede Neural pronta! Iniciando processo de treinamento...');

    // Dados
    const allData = [
        { r: 255, g: 0, b: 0, label: 'clara' }, { r: 0, g: 255, b: 0, label: 'clara' },
        { r: 255, g: 255, b: 255, label: 'clara' }, { r: 200, g: 200, b: 200, label: 'clara' },
        { r: 0, g: 0, b: 0, label: 'escura' }, { r: 50, g: 0, b: 0, label: 'escura' },
        { r: 0, g: 50, b: 0, label: 'escura' }, { r: 25, g: 25, b: 25, label: 'escura' }
    ];

    // 1. Preparação dos Dados
    allData.sort(() => Math.random() - 0.5);
    const trainData = allData.slice(0, Math.floor(allData.length * 0.7));
    const testData = allData.slice(Math.floor(allData.length * 0.7));
    console.log(`Dados de treino: ${trainData.length}, Dados de teste: ${testData.length}`);

    trainData.forEach(item => { nn.addData({ r: item.r, g: item.g, b: item.b }, { label: item.label }); });

    // 2. Treinamento
    nn.normalizeData();
    const trainingOptions = { epochs: 50, batchSize: 4 };
    
    // Agora o treinamento tem 3 partes: opções, a função 'enquanto treina', e a função 'quando terminar'
    nn.train(trainingOptions, whileTraining, () => finishedTraining(testData));
}

// 3. Validação
async function finishedTraining(testData) {
    console.log('Treinamento finalizado!');
    console.log('--- INICIANDO VALIDAÇÃO ---');

    let correctPredictions = 0;
    for (const item of testData) {
        const input = { r: item.r, g: item.g, b: item.b };
        const result = await nn.classify(input);
        const predictedLabel = result[0].label;
        const actualLabel = item.label;
        console.log(`Entrada: {R:${input.r}, G:${input.g}, B:${input.b}} -> Previsto: ${predictedLabel}, Real: ${actualLabel}`);
        if (predictedLabel === actualLabel) { correctPredictions++; }
    }

    const accuracy = (correctPredictions / testData.length) * 100;
    console.log('--- VALIDAÇÃO FINALIZADA ---');
    console.log(`Acurácia do modelo: ${accuracy.toFixed(2)}% ✨`);
}