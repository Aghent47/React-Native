export const TiposBasicos = () => {

  const nombre: string = 'Neider';
  const edad: number = 35;
  const estaActivo: boolean = false;


  const poderes: (string|number)[] = []; //'Velocidad', 'Volar', 'Respirar en el agua'
  poderes.push(1);
  poderes.push('Volar');
  poderes.push('Respirar en el agua');
  
  return (
    <>
        <h3>Tipos Basicos</h3>
        { nombre }, { edad }, { estaActivo ? 'Activo' : 'Inactivo' }
        <br />
        { poderes.join(', ') }
    </>
  )
}
