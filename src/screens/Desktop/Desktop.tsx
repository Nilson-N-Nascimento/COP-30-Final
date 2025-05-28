import React from "react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";
import { useNavigate } from "react-router-dom";

// Define attraction data for mapping
const attractions = [
  {
    id: 1,
    name: "Point do Açaí",
    image: "/image-8.png",
  },
  {
    id: 2,
    name: "Casa das 11 Janelas",
    image: "/image-15.png",
  },
  {
    id: 3,
    name: "Parque do Utinga",
    image: "/image-16.png",
  },
  {
    id: 4,
    name: "Praça da Rapublica",
    image: "/image-13.png",
  },
  {
    id: 5,
    name: "Estação das Docas",
    image: "/image-3.png",
  },
  {
    id: 6,
    name: "Museu Emilio Goeldi",
    image: "/image-17.png",
  },
  {
    id: 7,
    name: "Mangal das Garças",
    image: "/image-11.png",
  },
  {
    id: 8,
    name: "Portal da Amazônia",
    image: "/image-9.png",
  },
  {
    id: 9,
    name: "Bosque",
    image: "/image-12.png",
  },
];

// Define category filters
const categoryFilters = [
  {
    id: 1,
    name: "Turismo",
    icon: "/image-1-1.png",
  },
  {
    id: 2,
    name: "Eco-friendly",
    icon: "/01-align-center.png",
  },
  {
    id: 3,
    name: "Adaptados P/ PCD",
    icon: "/image-2-1.png",
  },
  {
    id: 4,
    name: "Parques",
    icon: "/image-4-1.png",
  },
  {
    id: 5,
    name: "Restaurantes",
    icon: "/image-5-1.png",
  },
  {
    id: 6,
    name: "Passeios de Barco",
    icon: "/image-9-1.png",
  },
  {
    id: 7,
    name: "Shopping's Center",
    icon: "/shopping-mall-1.png",
  },
];

// Define team members
const teamMembers = [
  "Nilson Negreiros",
  "Pedro Armando Melo da Silva",
  "João Oberlin Lira Martins",
  "Arthur Ferreira Marques",
  "Wandemberg G. S. de Medeiros",
  "Pedro Germano Minami",
];

// Define contact information
const contactInfo = [
  {
    icon: "/color-.png",
    text: "(xx)xxxxx-xxxx",
  },
  {
    icon: "/gmail-svgrepo-com-1.svg",
    text: "suporte.naoca@gmail.com",
  },
  {
    icon: "/pix-svgrepo-com-1.svg",
    text: "dfs3-432fsdf3-234fsdf3",
  },
  {
    icon: "/mastercard-credit-card-svgrepo-com-1.svg",
    text: "xxxx xxxx xxxx xxxx",
    textColor: "text-[#25621f]",
  },
];

export const Desktop = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen w-full">
      <div className="w-full relative">
        {/* Header */}
        <header className="relative h-[111px]">
          <img
            className="w-[125px] h-[99px] absolute top-1.5 left-[43px] object-contain"
            alt="Bright colorful logo"
            src="/bright-colorful-playful-funny-donuts-food-circle-logo-removebg-p-1.png"
          />

          <div className="absolute w-[800px] h-[43px] top-[33px] left-[308px] bg-[#333] rounded-lg flex items-center">
            <span className="ml-3.5 font-bold text-white text-sm">
              Os Melhores Lugares, as melhores refeiçoes
            </span>
            <span className="absolute right-[80px] text-white text-2xl">|</span>
            <img
              className="absolute w-[31px] h-[30px] right-[10px]"
              alt="Search"
              src="/vector.png"
            />
          </div>

          <div className="absolute w-[259px] h-10 top-[33px] left-[1120px] flex space-x-2">
          <Button
            className="w-[126px] h-[39px] bg-[#4A3AFF] hover:bg-[#3929FF] text-white rounded-md"
            variant="default"
            onClick={() => window.location.href = "/login"} // ou use useNavigate() se for SPA
          >
            LOGIN
          </Button>

            <Button
              className="w-[126px] h-[39px] bg-[#4A3AFF] hover:bg-[#3929FF] text-white rounded-md"
              variant="default"
              onClick={() => navigate("/cadastro")}
            >
              CADASTRO
            </Button>
          </div>

          <div className="absolute bottom-0 w-full h-[3px] bg-gray-200" />
        </header>

        {/* Category Filters */}
        <div className="px-12 py-8">
          <div className="flex justify-between items-center w-full">
            {categoryFilters.map((filter) => (
              <Badge
                key={filter.id}
                className="h-10 bg-gray-200 hover:bg-gray-300 text-black flex items-center px-6 gap-3 rounded-full"
                variant="secondary"
              >
                <img
                  className="w-6 h-6"
                  alt={filter.name}
                  src={filter.icon}
                />
                <span>{filter.name}</span>
              </Badge>
            ))}
          </div>
        </div>

        {/* Map Section */}
        <div className="relative mx-auto w-[1216px] h-[359px] bg-cover bg-center" style={{ backgroundImage: "url('/mapa-de-bel-m--2--1.png')" }} />

        {/* Attractions Grid */}
        <div className="px-[100px] py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attractions.map((attraction) => (
              <Card key={attraction.id} className="relative overflow-hidden rounded-lg shadow-lg">
                <CardContent className="p-0">
                  <div className="relative h-[281px]">
                    <img
                      className="w-full h-full object-cover"
                      alt={attraction.name}
                      src={attraction.image}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30" />
                    <div className="absolute top-8 left-4">
                      <h3 className="font-bold text-white text-3xl">
                        {attraction.name}
                      </h3>
                    </div>
                    <div className="absolute bottom-4 left-0 w-full flex justify-center">
                      <Button
                        className="w-[194px] h-[39px] bg-[#4A3AFF] hover:bg-[#3929FF] text-white"
                        variant="default"
                      >
                        VER MAIS
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Footer */}
<footer className="relative w-full">
  <div
    className="w-full bg-[#1a1a1a] bg-opacity-95"
    style={{
      backgroundImage: "url('/image-10.png')",
      backgroundBlendMode: "overlay",
    }}
  >
    <div className="container mx-auto px-8 py-10 text-white">
      <div className="grid grid-cols-12 gap-8">
        {/* Logo Section */}
        <div className="col-span-3">
          <img
            className="w-[231px] h-[175px] object-contain"
            alt="Logo"
            src="/bright-colorful-playful-funny-donuts-food-circle-logo-removebg-p-1.png"
          />
        </div>

        {/* Company Info */}
        <div className="col-span-9">
          <h2 className="font-bold text-3xl mb-4">COP 30 NA OCA LTDA.</h2>
          <p className="text-2xl">CNPJ xx.xxx.xxx/0001-57</p>
          <p className="text-2xl">Rua dos bobos, 1234 - Funcionários</p>
          <p className="text-2xl">CEP xx.xxx-xxx, Belém/PA</p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8 mt-8">
        {/* Team Section */}
        <div className="col-span-8">
          <h3 className="font-bold text-xl mb-4">GRUPO:</h3>
          <div className="grid grid-cols-2 gap-4">
            {teamMembers.map((member, index) => (
              <p key={index} className="font-light text-xl">
                {member}
              </p>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="col-span-4">
          {contactInfo.map((info, index) => (
            <div key={index} className="flex items-center mb-4">
              <img
                className="w-6 h-6 mr-2"
                alt="Contact icon"
                src={info.icon}
              />
              <span
                className={`font-normal text-base ${
                  info.textColor || "text-white"
                }`}
              >
                {info.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</footer>
</div>
    </div>
  );
};