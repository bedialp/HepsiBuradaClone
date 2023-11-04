import { useState } from "react";

const Opportunities = () => {
  const [selectedOption, setSelectedOption] = useState("marka günleri");

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  const options = [
    {
      key: "marka günleri",
      label: "Marka Günleri",
      content: "markalar burada.",
      imageSrc:
        "https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2095_20231102084716.jpeg",
    },
    {
      key: "elektronik",
      label: "Elektronik",
      content: "Elektronik ürünler burada.",
      imageSrc:
        "https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2093_20231103132039.jpeg",
    },
    {
      key: "market",
      label: "Market",
      content: "market ürünleri burada.",
      imageSrc:
        "https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2135_20231103143108.jpeg",
    },
    {
      key: "ev, yaşam",
      label: "Ev, Yaşam",
      content: "ev ve yaşam ürünleri burada.",
      imageSrc: "https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2115_20231026211239.jpeg",
    },
    {
      key: "moda ve güzellik",
      label: "Moda ve Güzellik",
      content: "Moda ve Güzellik ürünleri burada.",
      imageSrc: "https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2119_20231102154040.jpeg",
    },
    {
      key: "anne, çocuk",
      label: "Anne, Çocuk",
      content: "Anne, Çocuk ürünleri burada.",
      imageSrc: "https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2105_20231031141721.jpeg",
    },
    {
      key: "teknolojik fırsatlar",
      label: "Teknolojik Fırsatlar",
      content: "Teknolojik Fırsatlar burada.",
      imageSrc: "https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2107_20231103182841.png",
    },
    {
      key: "ayrıcalıklar",
      label: "Ayrıcalıklar",
      content: "ayrıcalıklar burada.",
      imageSrc: "https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2165_20231031175057.png",
    },
  ];

  return (
    <div className="relative">
      <div className="relative">
        <img
          src="https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2121_20231027102437.jpeg"
          alt="Resim"
          className="w-full h-auto"
        />
        <div className="absolute bg-white shadow-lg left-0 p-6 border mt-2 border-indigo-300 rounded-lg w-[97vw] mx-auto transition-all duration-500 ease-in-out translate-x-1 opacity-100 visible">
          {options.find((option) => option.key === selectedOption)?.content}
          <img
            width="672"
            height="378"
            alt="Resim"
            src={
              options.find((option) => option.key === selectedOption)?.imageSrc
            }
          ></img>
        </div>
      </div>
      <div className="flex justify-center w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-2">
        <div className="flex h-20">
          <ul className="mx-auto grid max-w-full w-full grid-cols-8 gap-x-2 px-1">
            {options.map((option) => (
              <li key={option.key} className="relative">
                <input
                  className="peer sr-only"
                  type="radio"
                  value={option.key}
                  name="answer"
                  id={option.key}
                  checked={selectedOption === option.key}
                  onChange={() => handleOptionChange(option.key)}
                />
                <label
                  className="flex justify-center cursor-pointer rounded-full border border-gray-300 bg-white py-1 px-2 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-indigo-500 transition-all duration-500 ease-in-out"
                  htmlFor={option.key}
                >
                  {option.label}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Opportunities;
