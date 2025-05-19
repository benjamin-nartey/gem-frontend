import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="lg:px-32 px-4 py-16 w-full mt-[8rem] lg:mt-auto animate-slide-up"
    >
      <div className="flex flex-col lg:flex-row justify-center lg:items-start items-center w-full gap-8 lg:h-[35rem] h-auto">
        <div className="relative w-full shadow-lg lg:order-first order-last lg:h-full h-[30rem]">
          <Image
            src={`/pastor5.JPG`}
            alt="pastor"
            className="h-full w-full object-cover object-center"
            fill
            priority
            quality={90}
            sizes="100"
            placeholder="blur"
          />
        </div>

        <div className="w-full bg-white text-black text-center">
          <h2 className="text-4xl text-black font-bold text-center lg:mb-4">
            About Us
          </h2>
          <p className="mb-4 whitespace-break-spaces">
            Welcome to <b>GEM!</b> We are a community of believers passionate
            about growing in faith, serving others, and spreading the love of
            Jesus Christ. Our church is a place where everyone—regardless of
            background, age, or stage in life—can experience God’s grace, build
            meaningful connections, and find purpose. At GEM, we believe that
            faith is a journey meant to be shared.
          </p>

          <p className="mb-4 whitespace-break-spaces">
            Our mission is to lead people to a deeper relationship with Christ,
            empower them to serve, and make a positive impact on our community.
            Every week, we come together for worship, prayer, and fellowship,
            and we are committed to providing an inclusive environment where all
            are welcomed and valued.{" "}
          </p>

          <div className="text-left mb-4">
            <span className="font-bold text-xl">Our Mission</span>
            <p className="lg:max-w-[25rem]">
              To know Christ and make Him known through worship, discipleship,
              and service. Our Vision:
            </p>
          </div>

          <div className="text-left">
            <span className="font-bold text-xl">Our Vision</span>
            <p>
              A community transformed by the love of Christ, shining His light
              in every corner of the world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
