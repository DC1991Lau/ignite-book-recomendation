"use client";

import { Book, Rating, User } from "@prisma/client";
import { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ChevronRight, Star } from "lucide-react";
import Image from "next/image";

import userAvatar from "../../assets/github-logo.png";
import bookCover from "../../assets/Book.png";
import Link from "next/link";

interface UserLastAvaliationCardProps {
  rating?: Rating;
}

const UserLastAvaliationCard: FC<UserLastAvaliationCardProps> = ({
  rating,
}) => {
  const session = true;

  if (!session) {
    return null;
  }

  return (
    <div className="mb-10">
      <div className="flex justify-between items-center  mb-4 text-sm">
        <h4 className="">Sua última leitura</h4>
        <Link href="/book/1">
          <div className="flex gap-3 items-center text-purple-100">
            <span>Ver todas</span>
            <ChevronRight size={16} />
          </div>
        </Link>
      </div>
      <div className="flex flex-col gap-3">
        <Card className="h-70">
          <CardHeader className="items-center justify-between">
            <div className="flex gap-4 items-center">
              <div className="w-10 h-10 ">
                <Image
                  src={userAvatar}
                  alt="user"
                  className="relative object-fit"
                />
              </div>
              <div>
                <div>Jaxson Dias</div>
                <p className="text-sm text-grayscale-400">Hoje</p>
              </div>
            </div>
            <div className="flex gap-1 items-center">
              <Star size={16} />
              <Star size={16} />
              <Star size={16} />
              <Star size={16} />
            </div>
          </CardHeader>
          <CardContent className="flex gap-5 h-[152px] overflow-hidden">
            <div className=" flex-shrink-0 ">
              <Image src={bookCover} alt="book-cover" />
            </div>
            <div>
              <h1 className="font-bold">O Hobbit</h1>
              <p className="text-grayscale-400">J.R.R Tolkien</p>

              <div className="overflow-hidden overflow-ellipsis">
                Semper et sapien proin vitae nisi. Feugiat neque integer donec
                et aenean posuere amet ultrices. Cras fermentum id pulvinar
                varius leo a in. Amet libero pharetra nunc elementum fringilla
                velit ipsum. Sed vulputate massa velit nibh
                <span>ver mais</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserLastAvaliationCard;
