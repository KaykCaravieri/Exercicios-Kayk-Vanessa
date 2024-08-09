import Titulo from "./components/Titulo";
import Contador from "./components/Contador";
import FormularioSoma from "./components/FormularioSoma";
import FormularioSub from "./components/FormularioSub";
import FormularioMult from "./components/FormularioMult";
import FormularioDiv from "./components/FormularioDiv";
import FormularioMedia from "./components/FormularioMedia";
import FormularioTemperatura from "./components/FormularioTemperatura";
import FormularioTempCelsius from "./components/FormularioTempCelsius";
import FormularioRetangulo from "./components/FormularioRetangulo";
import FormularioCirculo from "./components/FormularioCirculo";
import FormularioRetanguloPerimetro from "./components/FormularioRetanguloPerimetro";
import FormularioCirculoPerimetro from "./components/FormularioCirculoPerimetro";
import FormularioExpoente from "./components/FormularioExpoente";
import FormularioMetrosParaCentimetros from "./components/FormularioMetrosParaCentimetros";
import FormularioQuilometrosParaMilhas from "./components/FormularioQuilometrosParaMilhas";
import FormularioIMC from "./components/FormularioIMC";
import FormularioDesconto from "./components/FormularioDesconto";
import FormularioJurosSimples from "./components/FormularioJurosSimples";
import FormularioJurosCompostos from "./components/FormularioJurosCompostos";
import FormularioDiasParaTempo from "./components/FormularioDiasParaTempo";
import FormularioVelocidadeMedia from "./components/FormularioVelocidadeMedia";

function App() {
  return ( 
    <div>
      <Titulo nome = "Vanessa" sobrenome = "Borges"/>
      <Titulo nome = "Kayk" sobrenome = "Caravieri"/>
      <Contador/>
      <FormularioSoma/>
      <FormularioSub/>
      <FormularioMult/>
      <FormularioDiv/>
      <FormularioMedia/>
      <FormularioTemperatura/>
      <FormularioTempCelsius/>
      <FormularioRetangulo/>
      <FormularioCirculo/>
      <FormularioRetanguloPerimetro/>
      <FormularioCirculoPerimetro/>
      <FormularioExpoente/>
      <FormularioMetrosParaCentimetros/>
      <FormularioQuilometrosParaMilhas/>
      <FormularioIMC/>
      <FormularioDesconto/>
      <FormularioJurosSimples/>
      <FormularioJurosCompostos/>
      <FormularioDiasParaTempo/>
      <FormularioVelocidadeMedia/>
    </div>
  );
}

export default App;
