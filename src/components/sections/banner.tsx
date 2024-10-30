import { Button } from "../ui/button";

export const Banner = (section: any, type: any) => {
  const { heading, subtitle } = section.data;
  return (
    <section>
      <div className="bg-gray-200 py-16 px-16 mt-5">
        <div className="lg:w-7/12">
          <h1>{heading}</h1>
          <p className="py-6">{subtitle}</p>
          <Button>Schedule</Button>
        </div>
      </div>
    </section>
  );
};
