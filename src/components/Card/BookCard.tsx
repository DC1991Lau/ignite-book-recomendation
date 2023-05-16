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
import { Star } from "lucide-react";
import Image from "next/image";

import userAvatar from "../../assets/github-logo.png";
import bookCover from "../../assets/Book.png";

interface BookCardProps {
  user?: User;
  rating?: Rating;
  book?: Book;
}

const BookCard: FC<BookCardProps> = ({ user, book, rating }) => {
  return (
    <Card className="h-[130px] pl-5 py-[18px] ">
      <CardContent className="flex gap-5 ">
        <div className="overflow-hidden relative object-cover">
          <Image src={bookCover} alt="book-cover" className="h-[94px]" />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="font-bold">O Hobbit</h1>
            <p className="text-grayscale-400">J.R.R Tolkien</p>
          </div>
          <div className="flex gap-1 items-center">
            <Star size={16} />
            <Star size={16} />
            <Star size={16} />
            <Star size={16} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookCard;
