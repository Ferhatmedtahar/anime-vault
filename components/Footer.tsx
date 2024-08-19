import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="sm:px-16 py-4 px-8 flex justify-between items-center gap-2 flex-wrap bg-[#161921]">
      <Link href="https://github.com/Ferhatmedtahar/anime-vault">
        <Image
          src="./github.svg"
          alt="logo"
          width={47}
          height={44}
          className="object-contain hover:bg-blue-800 rounded-full duration-200 transition-all cursor-pointer"
        />
      </Link>

      <Image
        src="./logo.svg"
        alt="logo"
        width={47}
        height={44}
        className="object-contain"
      />
    </footer>
  );
}

export default Footer;
