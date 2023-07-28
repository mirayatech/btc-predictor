import { Banner } from "./Banner";
import { Demo } from "./Demo/Demo";
import { Footer } from "./Footer";
import { LeaderBoard } from "./LeaderBoard/LeaderBoard";

export default function Home() {
  return (
    <div className="bg-white">
      <Banner />
      <div className="px-5">
        <Demo />
        <LeaderBoard />
      </div>
      <Footer />
    </div>
  );
}
