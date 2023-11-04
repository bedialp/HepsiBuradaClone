export default function MenuBar({ items }) {
  return (
    <ul className="flex justify-center gap-4 pe-20 pt-4 pb-4 text-xs">
      {items.map((item, index) => (
        <li key={index}>
          <div>{item}</div>
        </li>
      ))}
    </ul>
  );
}
