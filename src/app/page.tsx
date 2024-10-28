import {
  Hero,
  AboutUs,
  OurStaff,
  Benefits,
  Banner,
} from "@/components/sections";
import { buildStrapiSingleTypeUrl } from "@/utils/strapi";

async function getStrapiData() {
  const baseUrl = "http://localhost:1337/api/home-page";
  const strapiUrl = buildStrapiSingleTypeUrl(baseUrl, {
    populate: [
      "blocks.image",
      "blocks.link",
      "blocks.staff",
      "blocks.name",
      "blocks.summary",
      "blocks.benefits",
    ],
    filters: { title: "Home Page" },
  });
  try {
    const response = await fetch(strapiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default async function Home() {
  const strapiData = await getStrapiData();
  const { title, description, blocks } = strapiData.data;
  console.dir(strapiData);
  return (
    <main>
      <Hero data={blocks[0]} />
      <OurStaff data={blocks[1]} />
      <AboutUs data={blocks[2]} />
      <Benefits data={blocks[3]} />
      <Banner data={blocks[4]} />
    </main>
  );
}
