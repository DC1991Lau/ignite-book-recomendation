import Image from "next/image";

import loginImage from "@/assets/loginImage.png";
import googleLogo from "@/assets/google-logo.png";
import githubLogo from "@/assets/github-logo.png";
import guestLogo from "@/assets/guest-logo.png";

import { Button } from "@/components/ui/button";

export default function Login() {
  return (
    <div className="flex p-4">
      <div className="overflow-hidden relative w-[598px]">
        <Image
          src={loginImage}
          alt="logo"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        <div className="space-y-10">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold">Boas vindas!</h1>
            <p className="">Faça o seu login ou acesse como visitante.</p>
          </div>
          <div className="flex flex-col space-y-4">
            <Button className="space-x-5">
              <Image
                src={googleLogo}
                alt="google-logo"
                height={32}
                width={32}
              />
              <span>Entrar com Google</span>
            </Button>
            <Button className="space-x-5">
              <Image
                src={githubLogo}
                alt="google-logo"
                height={32}
                width={32}
              />
              <span>Entrar com Github</span>
            </Button>
            <Button className="space-x-5">
              <Image src={guestLogo} alt="google-logo" height={32} width={32} />
              <span>Entrar como visitante</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
