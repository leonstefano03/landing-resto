import Article from '@/components/Article';
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import Section from '@/components/Section';
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Nav from "@/components/Nav";

import Section from "@/components/Section";

export default function Home() {
  return (
    <>
      <Nav />
      <Grid />      <Article foodBack={'/owner.png'} />
      <Section position={'justify-end bg-center'} foodBack={'/food.png'} />
      <Section position={'justify-start'} foodBack={'/vip.jpg'} />
      <Footer />
    </>
  );
}
