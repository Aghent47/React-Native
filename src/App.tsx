// import { TiposBasicos } from "./typescript/TiposBasicos";
// import { ObjetosLiterales } from "./typescript/ObjetosLiterales";
// import { Funciones } from "./typescript/Funciones";

import { Counter } from "./components/Counter";

const App = () => {
  return (
    <div className="mt-2" >
      <h1>Introducción React Native con TS </h1>
      <hr />
      {/* <TiposBasicos /> */}
      {/* <ObjetosLiterales /> */}
      {/* <Funciones/> */}
      <Counter/>
    </div>
  )
}

export default App;