import { useState } from 'react';

function FormularioDiv() {
    const [resultado, setResultado] = useState(null);  
    const [valor1, setValor1] = useState("");
    const [valor2, setValor2] = useState("");
    const [mensagem, setMensagem] = useState("");  

    const calcularDivisao = () => {
        
        setMensagem("");
        setResultado(null);

        if (Number(valor2) === 0) {
            setMensagem("Erro: Divisão por zero não é permitida.");
            return;
        }

        const resultadoDivisao = Number(valor1) / Number(valor2);
        setResultado(resultadoDivisao);
    }

    return (
        <div>
            <h3>Divisão Valores</h3>
            <input
                type="number"
                placeholder="Informe o valor 1"
                value={valor1}
                onChange={(e) => setValor1(e.target.value)}
            />
            <input
                type="number"
                placeholder="Informe o valor 2"
                value={valor2}
                onChange={(e) => setValor2(e.target.value)}
            />
            <button onClick={calcularDivisao}>Calcular</button>
            {mensagem && <p>{mensagem}</p>}  {}
            {resultado !== null && !mensagem && <p>O valor da Divisão é: {resultado}</p>}  {}
        </div>
    );
}

export default FormularioDiv;