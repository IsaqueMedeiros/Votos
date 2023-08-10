import { useState } from "react";

function HeaderComponent() {
  const [openHeader, setOpenHeader] = useState(false);
  return (
    <header className="w-[90%] md:w-[70%] max-w-[1000px] mx-auto relative z-[1000]">
      <nav className="absolute flex w-full items-center justify-between py-2 mt-2">
        <div className="flex w-full flex-wrap items-center justify-between md:justify-center">
          <button
            onClick={() => setOpenHeader(!openHeader)}
            className="z-50 md:hidden"
            type="button"
            aria-label="Trocar navegação"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              className="w-7 stroke-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>

          <div
            className={`${
              openHeader
                ? "fixed top-0 right-0 w-full h-full z-40 max-md:backdrop-blur-[2px] md:relative md:bg-transparent md:w-auto md:h-auto"
                : "hidden top-0 right-0 w-full md:block md:relative md:w-auto md:h-auto"
            }`}
            onClick={() => setOpenHeader(false)}
          >
            <ul
              className={
                "flex flex-col mt-14 md:mt-4 rounded-md p-4 md:flex-row py-2 md:ml-0 md:py-0 gap-4 md:gap-24 text-votosPink md:text-white bg-white w-[90%] md:w-[70%] max-w-[1000px] mx-auto md:bg-transparent"
              }
            >
              <li className="flex gap-2 items-center">
                <a onClick={() => setOpenHeader(false)} href="/" className="text-lg hover:opacity-60 duration-500">
                  Home
                </a>

                <div className="md:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    className="fill-white"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="
                        M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 
                        0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 
                        4a.5.5 0 0 1-.708-.708L13.293 
                        8.5H1.5A.5.5 0 0 1 1 8z
                      "
                    />
                  </svg>
                </div>
              </li>

              <li className="flex gap-2 items-center">
                <a onClick={() => setOpenHeader(false)} href="/" className="text-lg hover:opacity-60 duration-500">
                  Casamentos
                </a>

                <div className="md:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    className="fill-white"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="
                        M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 
                        0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 
                        4a.5.5 0 0 1-.708-.708L13.293 
                        8.5H1.5A.5.5 0 0 1 1 8z
                      "
                    />
                  </svg>
                </div>
              </li>

              <li className="flex gap-2 items-center">
                <a onClick={() => setOpenHeader(false)} href="/" className="text-lg hover:opacity-60 duration-500">
                  Votos
                </a>

                <div className="md:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    className="fill-white"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="
                        M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 
                        0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 
                        4a.5.5 0 0 1-.708-.708L13.293 
                        8.5H1.5A.5.5 0 0 1 1 8z
                      "
                    />
                  </svg>
                </div>
              </li>

              <li className="flex gap-2 items-center">
                <a onClick={() => setOpenHeader(false)} href="/" className="text-lg hover:opacity-60 duration-500">
                  Contato
                </a>

                <div className="md:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    className="fill-white"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="
                        M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 
                        0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 
                        4a.5.5 0 0 1-.708-.708L13.293 
                        8.5H1.5A.5.5 0 0 1 1 8z
                      "
                    />
                  </svg>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default HeaderComponent;
