import Image from "next/image";

function LogoItem({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex justify-center items-center flex-grow max-w-[20%]">
      <Image
        src={src}
        alt={alt}
        className="h-auto max-h-[60px] w-auto"
        style={{ objectFit: "contain" }}
      />
    </div>
  );
}
