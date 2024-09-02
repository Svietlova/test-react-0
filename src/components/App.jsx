import DescriptionList from "./DescriprionList.jsx";
import initDescrs from "../descrs.json";

export default function App() {
  const title = "My Minion Ed";
  const imgUrl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9BY7FFwYMisUogXxVYpcMvW8LrLiMAGAxkw&s";

  return (
    <>
      <h1>{title}</h1>
      <img src={imgUrl} alt="minion Ed" width="360" />
      <hr />
      <input type="text" />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
        eveniet labore consectetur distinctio. Voluptates ipsa laudantium
        cupiditate facere harum aperiam, rem, unde dolorem quo aliquid earum
        illum reprehenderit. Aut, reiciendis.
      </p>
      <h3>Time to watch cartoon</h3>
      <ul>
        {["8:00", "12:00", "17:30"].map((el, idx) => (
          <li key={idx}>{el}</li>
        ))}
      </ul>

      <h3>Description of Ed:</h3>
      <DescriptionList descrs={initDescrs} />
    </>
  );
}
