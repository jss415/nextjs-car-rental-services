import Image from "next/image";

type UserInfoProps = {
  user: {
    profileImage: string;
    firstName: string;
  };
};

function UserInfo({ user: { profileImage, firstName } }: UserInfoProps) {
  return (
    <article className="grid grid-cols-[auto,1fr] gap-4 mt-12 mb-12">
      <Image
        src={profileImage}
        alt={firstName}
        width={50}
        height={50}
        className="rounded-md w-12 h-12 object-cover"
      />
      <div>
        <p>
          Hosted by
          <span className="font-bold"> {firstName}</span>
        </p>
        <p className="text-muted-foreground font-light">
          Superhost &middot; 2 years hosting
        </p>
      </div>
    </article>
  );
}
export default UserInfo;
