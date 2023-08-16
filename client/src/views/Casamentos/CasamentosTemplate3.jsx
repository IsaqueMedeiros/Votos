import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

export default function CasamentosTemplate3() {
<<<<<<< HEAD
  const [activeTab, setActiveTab] = React.useState("html");
  const data = [
    {
      label: "Casamentos",
      value: "casamentos",
      desc: `Tamanhos de Casamento: Casamentos entre 0 e 500+ convidados.`,
    },
    {
      label: "Serviços",
      value: "serviços",
      desc: `Serviços oferecidos:
=======
    const [activeTab, setActiveTab] = React.useState("casamentos");
    const data = [
        {
            label: "Casamentos",
            value: "casamentos",
            desc: `Tamanhos de Casamento: Realizamos casamentos entre 0 e 500+ convidados.`,
        },
        {
            label: "Serviços",
            value: "serviços",
            desc: `Serviços oferecidos:
>>>>>>> 2ae9d4e ()
            Cerimonial,
            Músicas,
            Coordenador de casamento, Personal Trainner.`,
    },
    {
      label: "Cerimônia",
      value: "cerimonia",
      desc: `Realizamos cerimônias: Religiosas, Civil, Exterior, Ar Livre, Simbólica, Temática, Ecológica.`,
    },
  ];

<<<<<<< HEAD
  return (
    <main className="h-screen flex flex-col md:flex-row justify-evenly items-center bg-votosPink">
      <span className="h-5/6 w-10/12 flex flex-col md:flex-row justify-evenly items-center bg-votosRed rounded-[2rem] md:rounded-[5rem]">
        <div className="mr-[2rem] overflow-hidden">
          <h1 className="text-4xl lg:text-6xl text-votosPink lg:leading-[4rem]">
            NOSSOS
            <br />
            CERIMONIAIS
          </h1>
          <p className="text-white lg:text-2xl mt-4 lg:mt-8">
            Informações sobre os
            <br /> Cerimoniais da Votos.
          </p>
        </div>
        <div className="w-[90%] md:w-[30%]">
          <Tabs value={activeTab}>
            <TabsHeader
              className="rounded-none bg-transparent outline-none p-0 flex flex-col gap-1 xl:flex-row"
              indicatorProps={{
                className:
                  "bg-transparent border-votosPink shadow-none rounded-none",
              }}
            >
              {data.map(({ label, value }) => (
                <Tab
                  key={value}
                  value={value}
                  onClick={() => setActiveTab(value)}
                  className={
                    activeTab === value
                      ? "bg-votosRed rounded-[1rem] border-2 border-votosPink"
                      : ""
                  }
                >
                  <p className="text-white">{label}</p>
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody className="mt-2">
              {data.map(({ value, desc }) => (
                <TabPanel
                  key={value}
                  value={value}
                  className="rounded-[1rem] bg-white text-votosBlack text-center"
                >
                  {desc}
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        </div>
      </span>
    </main>
  );
}
=======
    return (
        <main className="h-screen flex flex-col md:flex-row justify-evenly items-center bg-votosPink" >
            <span className="h-5/6 w-10/12 flex flex-col md:flex-row justify-evenly items-center bg-votosRed rounded-[2rem] md:rounded-[5rem]" >
            <div className='mr-[2rem] overflow-hidden' >
                <h1 className='text-4xl lg:text-6xl text-votosPink lg:leading-[4rem] ' >NOSSOS<br />CERIMONIAIS</h1>
                <p className='text-white lg:text-2xl mt-4 lg:mt-8' >Informações sobre os<br /> Cerimoniais da Votos.</p>
            </div>
            <div className="w-[90%] md:w-[30%]" >
                <Tabs value={activeTab}>
                    <TabsHeader
                        className="rounded-none bg-transparent outline-none p-0 "
                        indicatorProps={{
                            className:
                                "bg-transparent  border-votosPink shadow-none rounded-none",
                        }}
                    >
                        {data.map(({ label, value }) => (
                            <Tab
                                key={value}
                                value={value}
                                onClick={() => setActiveTab(value)}
                                className={activeTab === value ? "bg-votosRed rounded-[1rem] border-2 border-votosPink" : ""}
                            >
                                <span className="text-white" >{label }</span>
                            </Tab>
                        ))}
                    </TabsHeader>
                    <TabsBody className="mt-2" >
                        {data.map(({ value, desc }) => (
                            <TabPanel key={value} value={value} className="rounded-[1rem] bg-white text-votosBlack " >
                                {desc}
                            </TabPanel>
                        ))}
                    </TabsBody>
                </Tabs>
            </div>
            </span>
        </main>
    );
}
>>>>>>> 2ae9d4e ()
