export default function Page({ cars }) {
  return (
    <>
      <h1>Hello, Next.js!</h1>

      <div>
        {cars && cars.length > 0 ? (
          <ul>
            {cars.map((car) => (
              <li key={car.codigo}>{car.nome}</li>
            ))}
          </ul>
        ): (
          <p>Dados de carros não disponíveis.</p>
        )}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  // Aqui você coloca a lógica da função que deseja executar ao iniciar a página
  // Por exemplo, pode ser uma chamada a uma API para buscar dados iniciais
  const data = await fetch("https://parallelum.com.br/fipe/api/v1/carros/marcas"); // Exemplo de chamada a uma API
  const jsonData = await data.json();
  console.log(jsonData);

  // Retorne os dados obtidos como propriedades para a página
  return {
    props: {
      cars: jsonData,
    },
  };
}
