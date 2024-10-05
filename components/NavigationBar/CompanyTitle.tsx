import Image from "next/image";
import Link from "next/link";

export default function CompanyTitle() {
  return (
    <Link href="/">
      <Image
        src="/title.png"
        alt="Company Title"
        width={100}
        height={100}
        className="object-contain"
      />
    </Link>
  );
}
