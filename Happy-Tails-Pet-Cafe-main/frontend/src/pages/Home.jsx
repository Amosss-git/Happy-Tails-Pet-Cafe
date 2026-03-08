import HeroSlider from "../components/HeroSlider";
import MenuBelt from "../components/MenuBelt";

export default function Home({ onOrderClick }) {
  return (
    <>
      <HeroSlider onOrderClick={onOrderClick} />
      <MenuBelt />
    </>
  );
}