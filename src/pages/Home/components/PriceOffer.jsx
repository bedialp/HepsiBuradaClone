import { ChevronRight } from "lucide-react";
import * as Popover from "@radix-ui/react-popover";

export default function PriceOffer() {
  const PopoverText = ({ children }) => (
    <Popover.Root>
      <Popover.Trigger className="truncate text-sm font-light h-16">
        {children}
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content>
          {children}
          <Popover.Arrow />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
  return (
    <>
      <div className="px-80">
        {/* TEXT */}
        <div className="flex flex-row my-4 items-baseline">
          <h2 className="text-3xl pe-2">Efsane Fiyat, Efsane Teklif</h2>
          <div className="flex items-center">
            <a
              className="text-premium text-sm "
              href="https://www.hepsiburada.com/gunun-firsati-teklifi"
            >
              Tümü
            </a>
            <ChevronRight size={16} strokeWidth={1} />
          </div>
        </div>
        {/* CONTAİNER */}
        <div className="flex w-full h-72 flex-1  gap-4">
          <div className="w-1/5 bg-gray-200">
            <img src="https://images.hepsiburada.net/banners/s/0/224-371/homepageImage2177_20231031174304.png" />
          </div>
          <div
            data-index={1}
            className="slick-slide slick-active"
            tabIndex={-1}
            aria-hidden="false"
            style={{ outline: "none", width: 244 }}
          >
            <div>
              <div className="p-4">
                <div className="bg-white rounded-lg shadow-lg">
                  <a
                    title="Homend Alex Laser 1281H Moplu ve Haritalamalı Akıllı Robot Süpürge 2023 Model"
                    href="/homend-alex-laser-1281h-moplu-ve-haritalamali-akilli-robot-supurge-2023-model-p-HBCV00000PMFRO?magaza=Homend"
                    className="block p-4 hover:bg-gray-200"
                  >
                    <PopoverText>
                      Homend Alex Laser 1281H Moplu ve Haritalamalı Akıllı Robot
                      Süpürge 2023 Model
                    </PopoverText>
                    <div className="pt-1 h-auto w-auto">
                      <div className="relative pb-[100%]">
                        <img
                          alt="Homend Alex Laser 1281H Moplu ve Haritalamalı Akıllı Robot Süpürge 2023 Model"
                          width="200"
                          height="200"
                          src="https://productimages.hepsiburada.net/s/197/200-200/110000168056240.jpg"
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="text-2xl font-bold text-red-600">
                        6.499,00
                        <span className="text-black"> TL</span>
                      </div>
                      <div className="text-gray-400">
                        <div className="line-through">
                          8.999,00
                          <span className="text-black"> TL</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="w-1/5 bg-gray-400"></div>
          <div className="w-1/5 bg-gray-500"></div>
          <div className="w-1/5 bg-gray-600"></div>
        </div>
      </div>
    </>
  );
}
