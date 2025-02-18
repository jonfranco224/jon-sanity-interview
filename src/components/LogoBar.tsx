import Image from "next/image";

export interface LogoBarProps {
  imgs?: string[];
}

export const LogoBar = ({ imgs }: LogoBarProps) => {
  const defaultImgs = Array(6).fill(
    "/sanity-logo.avif"
  );

  return (
    <div className="pt-20">
      <div className="flex gap-4 layout justify-center">
        {(imgs?.length ? imgs : defaultImgs).map((src, index) => (
          <Image
            key={index}
            alt="Logo Preview"
            className="max-w-[100px]"
            src={src}
            width={100}
            height={50}
            priority
          />
        ))}
      </div>
    </div>
  );
};
