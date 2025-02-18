import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <>
      <div className="w-full h-[400px] bg-[rgb(26,33,49)] absolute top-0 z-[-1] transform rotate-[-2deg] scale-x-[10] scale-y-[2] origin-bottom" />
      <div>
        <div className="layout h-[350px] flex">
          <div className="flex-1 flex items-center">
            <div>
              <h1 className="text-white">Header</h1>
              <p className="text-white pt-2 pb-8">I am some description.</p>
              <div className="flex gap-4 items-center">
                <Link className="button-primary-light" href="/">Get started</Link>
                <Link className="text-white flex items-center gap-3" href="/">
                  <svg
                    fill="#fff"
                    width="10px"
                    height="10px"
                    viewBox="-64 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M365.52 209.85L59.22 67.01c-16.06-7.49-35.15-.54-42.64 15.52L3.01 111.61c-7.49 16.06-.54 35.15 15.52 42.64L236.96 256.1 18.49 357.99C2.47 365.46-4.46 384.5 3.01 400.52l13.52 29C24 445.54 43.04 452.47 59.06 445l306.47-142.91a32.003 32.003 0 0 0 18.48-29v-34.23c-.01-12.45-7.21-23.76-18.49-29.01z" />
                  </svg>
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="flex overflow-hidden rounded-[16px] shadow-md justify-center">
              <Image
                src="/temp-photo.jpg"
                alt="Thumbnail preview"
                width={300}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
