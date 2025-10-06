
// import Image from "next/image";

// export default function TemplateLogos() {
//   const logos = [
//     {
//       name: "Eir Logo",
//       dark: "/assets/homepage/light-logos/eir@2x.png",
//       light: "/assets/homepage/dark-logos/eir@2x.png",
//     },
//     {
//       name: "Europcar Logo",
//       dark: "/assets/homepage/light-logos/europcar@2x.png",
//       light: "/assets/homepage/dark-logos/europcar@2x.png",
//     },
//     {
//       name: "Costa Coffee Logo",
//       dark: "/assets/homepage/light-logos/costa-coffee@2x.png",
//       light: "/assets/homepage/dark-logos/costa-coffee@2x.png",
//     },
//     {
//       name: "Lisney Logo",
//       dark: "/assets/homepage/light-logos/lisney@2x.png",
//       light: "/assets/homepage/dark-logos/lisney@2x.png",
//     },
//     {
//       name: "Evo Logo",
//       dark: "/assets/homepage/light-logos/evo@2x.png",
//       light: "/assets/homepage/dark-logos/evo@2x.png",
//     },
//   ];

//   return (
//     <div className="mt-10 mb-10 py-8 px-6 lg:px-8">
//       <div className="mx-auto max-w-4xl">
//         <div className="flex justify-around gap-4">
//           {logos.map((logo, index) => (
//             <div key={index} className="flex justify-center items-center flex-grow max-w-[20%]">
//               <Image
//                 src={logo.light}
//                 alt={logo.name}
//                 className="h-auto max-h-[60px] w-auto dark:hidden"
//                 width={120}
//                 height={60}
//               />
//               <Image
//                 src={logo.dark}
//                 alt={logo.name}
//                 className="h-auto max-h-[60px] w-auto hidden dark:block"
//                 width={120}
//                 height={60}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


import Image from "next/image";

interface TemplateLogosProps {
  isLightMode: boolean;
}

export default function TemplateLogos({ isLightMode }: TemplateLogosProps) {
  const logos = [
    {
      name: "Eir Logo",
      dark: "/assets/homepage/light-logos/eir@2x.png",
      light: "/assets/homepage/dark-logos/eir@2x.png",
    },
    {
      name: "Europcar Logo",
      dark: "/assets/homepage/light-logos/europcar@2x.png",
      light: "/assets/homepage/dark-logos/europcar@2x.png",
    },
    {
      name: "Costa Coffee Logo",
      dark: "/assets/homepage/light-logos/costa-coffee@2x.png",
      light: "/assets/homepage/dark-logos/costa-coffee@2x.png",
    },
    {
      name: "Lisney Logo",
      dark: "/assets/homepage/light-logos/lisney@2x.png",
      light: "/assets/homepage/dark-logos/lisney@2x.png",
    },
    {
      name: "Evo Logo",
      dark: "/assets/homepage/light-logos/evo@2x.png",
      light: "/assets/homepage/dark-logos/evo@2x.png",
    },
  ];

  return (
    <div className="mt-10 mb-10 py-8 px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="flex justify-around gap-4">
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center items-center flex-grow max-w-[20%]">
              <Image
                src={isLightMode ? logo.light : logo.dark}
                alt={logo.name}
                className="h-auto max-h-[60px] w-auto"
                width={120}
                height={60}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
