import { Phone } from "lucide-react";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

export default function ContactUs() {
  return (
    <section id="contactUs" className="h-screen w-full py-16 px-4 lg:px-16 bg-[linear-gradient(to_right_bottom,rgba(36,0,70,0.9),rgba(102,51,153,0.7)),url('/contactUs-bg.jpg')] bg-cover bg-top bg-no-repeat">
      <div className="w-full h-full grid place-content-center">
        <h2 className="text-4xl text-white font-bold text-center mb-8">
          Contact Us
        </h2>
        <div className="flex lg:flex-row flex-col justify-center items-start lg:gap-8 gap-4">
          <div className="text-white flex flex-col items-start justify-start gap-4">
            <p className="mb-4">
              Feel free to use the form or drop as an email. Old-fashioned phone
              calls work too
            </p>
            <div className="flex justify-start items-start gap-2">
              <Phone className="text-orange-500 " />
              <span>+233 247 450 384</span>
            </div>
            <div className="flex justify-start items-start gap-2">
              <MdEmail className="text-orange-500" />
              <span>graceempire@gmail.org</span>
            </div>
            <div className="flex justify-start items-start gap-2">
              <FaLocationDot className="text-orange-500" />
              <Link
                className="hover:underline"
                href={`https://maps.app.goo.gl/CHbb9vSQLRCN5Lyz8`}
                target="_blank"
              >
                Hatso, Dome-Atomic Road
              </Link>
            </div>
          </div>

          <div>
            <form className="p-4 text-white bg-transparent border-solid border border-white shadow-lg lg:w-[28rem] w-full flex flex-col items-start justify-start gap-4">
              <div className="w-full">
                <Label className="mb-2" htmlFor="name">
                  Name
                </Label>
                <Input
                  placeholder="John Doe"
                  id="name"
                  name="name"
                  type="text"
                />
              </div>

              <div className="w-full">
                <Label className="mb-2" htmlFor="name">
                  Email
                </Label>
                <Input
                  placeholder="@johndoe@mail.com"
                  id="email"
                  name="email"
                  type="email"
                />
              </div>

              <div className="w-full">
                <Label className="mb-2" htmlFor="name">
                  Phone
                </Label>
                <Input
                  placeholder="+233 247 450 384"
                  id="phone"
                  name="phone"
                  type="tel"
                />
              </div>

              <div className="w-full">
                <Label className="mb-2" htmlFor="message">
                  Message
                </Label>
                <Textarea
                  className="bg-white/70 text-black"
                  rows={4}
                  id="message"
                  name="message"
                />
              </div>

              <Button
                className="bg-orange-500 text-white hover:text-black hover:bg-orange-300 w-full"
                type="submit"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
