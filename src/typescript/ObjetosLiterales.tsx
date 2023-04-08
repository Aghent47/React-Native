interface Persona {
    nombre: string;
    edad: number;
    direccion: Direccion;
}

interface Direccion {
    calle: string;
    pais: string;
    ciudad: string;
}


export const ObjetosLiterales = () => {

    const persona:Persona = {
        nombre: 'Neider',
        edad: 35,
        direccion: {
            calle: 'Calle 1',
            pais: 'Colombia',
            ciudad: 'Bogota'
        }
    }

  return (
    <>
      <h2>Objetos Literales</h2>
        <code>
            <pre>
            {JSON.stringify(persona, null, 2)}  
            </pre>
        </code>
    </>
  );
};
