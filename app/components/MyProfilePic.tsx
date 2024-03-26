import Image from "next/image";

export default function MyProfilePic() {
  return (
    <section className="w-full mx-auto">
      <Image
        className="mx-auto"
        src="/images/Image.png"
        width={200}
        height={200}
        alt="me"
        priority
      ></Image>
    </section>
  );
}
