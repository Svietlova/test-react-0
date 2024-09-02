import Description from "./Description.jsx";

export default function DescriptionList({ descrs }) {
  return (
    <ul>
      {descrs.map((item) => (
        <li key={item.id}>
          <Description descr={item} />
        </li>
      ))}
    </ul>
  );
}
