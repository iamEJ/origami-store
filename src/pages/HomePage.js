import {
  FeaturedProducts,
  HomeHero,
  Newsletter,
  Services,
} from "./../components/index";

function HomePage() {
  return (
    <div>
      <HomeHero />
      <FeaturedProducts />
      <Services />
      <Newsletter />
    </div>
  );
}

export default HomePage;
