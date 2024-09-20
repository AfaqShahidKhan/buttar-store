import ExclusiveOffer from "@/components/ExclusiveOffer";
import Hero from "@/components/Hero";
import NewCollection from "@/components/NewCollection";
import PopularInWomen from "@/components/PopularInWomen";

export default function Home() {
  return (
    <main className="">
      <Hero/>
      <PopularInWomen/>
      <ExclusiveOffer/>
      <NewCollection/>
    </main>
  );
}
