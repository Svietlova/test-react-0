import Description from "./Description";

function App() {
  const title = "My Minion Ed";
  const imgUrl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9BY7FFwYMisUogXxVYpcMvW8LrLiMAGAxkw&s";

  return (
    <>
      <h1>{title}</h1>
      <img src={imgUrl} alt="minion Ed" width="360" />
      <input type="text" />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
        eveniet labore consectetur distinctio. Voluptates ipsa laudantium
        cupiditate facere harum aperiam, rem, unde dolorem quo aliquid earum
        illum reprehenderit. Aut, reiciendis.
      </p>
      <h3>Description of Ed:</h3>
      <Description />
    </>
  );
}

export default App;
