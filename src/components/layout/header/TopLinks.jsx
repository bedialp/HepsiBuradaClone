export default function TopLinks({ items }) {
  return (
    <>
      <ul className="flex flex-row justify-end gap-4 pt-4 text-xs">
        {items.map((item, index) => (
          <li key={index}>
            <a className={index === 4 || index === 6 ? "text-premium" : ""}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
