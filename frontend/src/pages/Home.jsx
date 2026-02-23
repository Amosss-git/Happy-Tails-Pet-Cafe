import HeroSlider from "../components/HeroSlider";

function Home({ onOrderClick }) {
  return (
    <HeroSlider onOrderClick={onOrderClick} />
  );
}

export default Home;