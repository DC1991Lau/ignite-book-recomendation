import AvaliationCard from "@/components/Card/AvaliationCard";
import BookCard from "@/components/Card/BookCard";
import UserLastAvaliationCard from "@/components/Card/UserLastAvaliationCard";
import { ChevronRight, LineChart } from "lucide-react";

export default function Home() {
  return (
    <div>
      <div className="flex space-x-3 items-center mb-10">
        <LineChart size={32} className="text-green-100" />
        <h1 className="font-bold text-2xl">Início</h1>
      </div>
      <div className="w-full grid grid-cols-1 xl:grid-cols-3 gap-16">
        <div className="col-span-2">
          <UserLastAvaliationCard />
          <h4 className="text-sm mb-4">Avaliações mais recentes</h4>
          <div className="flex flex-col gap-3">
            <AvaliationCard />
            <AvaliationCard />
            <AvaliationCard />
            <AvaliationCard />
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex justify-between text-sm mb-4 ">
            <h4>Livros populares</h4>
            <div className="flex justify-between items-center text-purple-100">
              <span>Ver Todos</span>
              <ChevronRight size={16} />
            </div>
          </div>
          <div className="flex 2xl:flex-col gap-3 flex-wrap">
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
          </div>
        </div>
      </div>
    </div>
  );
}
