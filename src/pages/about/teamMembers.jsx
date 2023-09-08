import { SelimRole } from "./selimRole";
import { KareemRole } from "./kareemRule";
import { ZahranRole } from "./zahranRole";
import i01 from "/images/about/_01.webp";
import i02 from "/images/about/_02.webp";
import i03 from "/images/about/_03.webp";
import i04 from "/images/about/_04.webp";
import i05 from "/images/about/_05.webp";
import i06 from "/images/about/_06.webp";

const aside1 = [i01, i03, i05];
const aside2 = [i02, i04, i06];

const ImagesSide = () => {
  return (
    <div className="basis-1/2 grid grid-cols-2 gap-4">
      <aside className="flex flex-col gap-4">
        {aside1.map((img, i) => (
          <img
            key={i}
            src={img}
            alt="team member"
            className="w-full rounded-lg"
          />
        ))}
      </aside>
      <aside className="flex flex-col gap-4">
        {aside2.map((img, i) => (
          <img
            key={i}
            src={img}
            alt="team member"
            className="w-full rounded-lg"
          />
        ))}
      </aside>
    </div>
  );
};

export const TeamSection = () => {
  return (
    <section className="relative mt-24 select-none before:absolute before:left-0 before:-top-6 before:w-28 before:h-3 before:bg-primary before:rounded-full">
      <h2 className="text-4xl font-bold">Our Team</h2>
      <div className="mt-6 flex w-full">
        <div className="basis-1/2 flex flex-col gap-6">
          <SelimRole />
          <KareemRole/>
          <ZahranRole/>
        </div>
        <ImagesSide />
      </div>
    </section>
  );
};
