import { useState } from "react";
import { options } from "../assets/opportunitesData";

function Opportunities() {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const bgUrl =
    selectedOption.bgSrc ??
    "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2121_20231027102437.jpeg";

  const handleOptionChange = (key) => {
    const chosenOption = options.find((option) => option.key === key);
    setSelectedOption(chosenOption);
  };

  return (
    <div
      className={`flex flex-col gap-2 p-4 items-center bg-center bg-cover`}
      style={{ backgroundImage: `url('${bgUrl}')` }}
    >
      <SelectorGroup
        selectedKey={selectedOption.key}
        handleOptionChange={handleOptionChange}
      />
      <div className="flex flex-row flex-1 bg-white shadow-lg p-1 border border-indigo-300 rounded-lg">
        <div className="flex justify-center items-center w-full min-w-[480px]">
          {selectedOption.content}
        </div>
        <img
          className="rounded-lg"
          width="672"
          height="378"
          alt="Resim"
          src={selectedOption.imageSrc}
        />
      </div>
      <div className="h-16"></div>
    </div>
  );
}

const Selector = ({ children, htmlFor }) => (
  <label
    className="flex justify-center cursor-pointer rounded-full bg-opacity-0 text-white font-semibold p-2 px-4 bg-white peer-checked:bg-opacity-100 peer-checked:text-zinc-700"
    htmlFor={htmlFor}
  >
    {children}
  </label>
);

const SelectorGroup = ({ selectedKey, handleOptionChange }) => (
  <ul className="flex flex-row justify-center max-w-[75vw] w-full gap-6">
    {options.map(({ key, label }) => (
      <li key={key} className="relative">
        <input
          className="peer sr-only"
          type="radio"
          value={key}
          name="answer"
          id={key}
          checked={selectedKey === key}
          onChange={() => handleOptionChange(key)}
        />
        <Selector htmlFor={key}>{label}</Selector>
      </li>
    ))}
  </ul>
);

export default Opportunities;
