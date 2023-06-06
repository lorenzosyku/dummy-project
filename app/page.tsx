import First from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";
import Fourth from "./components/Fourth";
import Navbar from "./components/Navbar";
import { getImagesFromFolder } from "./lib/getImagesFromFolder";

export default function Home() {
  const images = getImagesFromFolder("public/images");
  return (
    <div className="">
      <Navbar />
      <First />
      <Second />
      <Third />
      <Fourth images={images}  />
    </div>
  );
}
