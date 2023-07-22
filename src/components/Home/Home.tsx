import { Banner } from "./Banner";
import Demo from "./Demo";
import Footer from "./Footer";
import LeaderBoard from "./LeaderBoard";

export default function Home() {
  return (
    <div className="bg-white">
      <Banner />
      <Demo />
      <LeaderBoard />
      <Footer />
    </div>
  );
}
