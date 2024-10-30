import { Button } from "../ui/button";

export const Hero = (section: any) => {
  const { heading, subheading, link } = section.data;
  return (
    <section>
      <div className="bg-gray-200 py-40 px-16 mt-5">
        <div className="lg:w-7/12">
          <h1>{heading}</h1>
          <p className="py-6">{subheading}</p>
          <Button>{link.text}</Button>
        </div>
      </div>
    </section>
  );
};
