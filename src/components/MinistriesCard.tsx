import Link from "next/link";

interface MinistriesCardProps {
  bgImage: string;
  children: React.ReactNode;
  name: string;
  color: string;
  link: string;
}

export default function MinistriesCard({
  bgImage,
  children,
  name,
  color,
  link,
}: MinistriesCardProps) {
  return (
    <div className="w-full text-center flex items-center justify-center flex-col gap-4 lg:mb-0 mb-4">
      <div className="relative w-full flex h-[25rem] flex-col justify-center overflow-hidden ">
        <div
          style={{ backgroundImage: `url(${bgImage})` }}
          className={`group w-full h-full relative overflow-hidden bg-cover bg-center px-2 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:px-10`}
        >
          <span
            className={`absolute top-10 z-0 h-20 w-20 rounded-full group-hover:bg-${color} transition-all duration-300 group-hover:scale-[15]`}
          ></span>
          <div className="relative z-10 mx-auto w-full">
            <span
              className={`grid h-20 w-20 place-items-center rounded-full bg-${color} transition-all duration-300 group-hover:bg-white/25`}
            >
              {children}
            </span>
            <div className="bg-transparent py-4 text-base leading-7 text-gray-400/40 transition-all duration-300 group-hover:text-white/90">
              <p className="text-4xl font-semibold">{name.toUpperCase()}</p>
            </div>
            <div className="pt-5 text-base font-semibold leading-7">
              <p>
                <Link
                  href={`${link}`}
                  className={`text-${color} transition-all duration-300 group-hover:text-white`}
                >
                  Read more &rarr;
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <h3 className="text-2xl font-semibold capitalize">
        {name.toLowerCase()}
      </h3>
    </div>
  );
}
