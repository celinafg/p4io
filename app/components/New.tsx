import Image from "next/image";
import React from "react";

type Props = {
  src: string;
  alt: string;
  priority?: string;
};

export default function NewTsx({ src, alt, priority }: Props) {
  const prio = priority ? true : false;

  return (
    <div>
      <Image src={src} alt={alt} width={650} priority={prio}></Image>
    </div>
  );
}
