export default function Description({ descr: { age, food, cartoon, juice } }) {
  return (
    <div>
      <p>Age: {age}</p>
      <p>Favorite food: {food}</p>
      <p>Cartoon today? {cartoon ? "Yeah, now" : "Nope"}</p>
      <p>
        How many juice he drink everyday? {juice} <hr />
      </p>
    </div>
  );
}
