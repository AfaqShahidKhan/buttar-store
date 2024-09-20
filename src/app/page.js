import ExclusiveOffer from "@/components/ExclusiveOffer";
import Hero from "@/components/Hero";
import NewCollection from "@/components/NewCollection";
import NewsLetter from "@/components/NewsLetter";
import PopularInWomen from "@/components/PopularInWomen";



export default function Home() {
  return (
    <main className="">
      <Hero/>
      <PopularInWomen/>
      <ExclusiveOffer/>
      <NewCollection/>
      <NewsLetter/>
    </main>
  );
}
