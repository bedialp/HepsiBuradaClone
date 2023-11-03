export default function menuBar({ items }) {
  return (
    <ul className="flex justify-center gap-4 pe-20 pt-4 text-xs">
      {items.map((item, index) => (
        <li key={index}>
          <div>{item}</div>
        </li>
      ))}
    </ul>
  );
}
