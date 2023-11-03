export default function topLinks({ items }) {
  return (
    <>
      <ul className="flex justify-end gap-4 pe-20 pt-4 text-xs">
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
