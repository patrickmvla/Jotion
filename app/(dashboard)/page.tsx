import { Footer } from "@/components/footer";
import { Heading } from "@/components/heading";
import { Heroes } from "@/components/heroes";

export default function Home() {
  return (
    <div className="min-h-full flex flex-col">
      <div className="flex flex-col items-center text-center justify-center md:justify-start gap-y-8 flex-1 px-6 pb-10">
        <Heading />
        <Heroes/>
      </div>
      <Footer/>
    </div>
  );
}
