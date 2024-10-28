import { Button } from "../ui/button";

export const Hero = (section: any) => {
  const { heading, subheading, link } = section.data;
  return (
    <section className="bg-gray-200 py-28 px-10 mt-5">
      <div className="lg:w-1/2">
        <h1>{heading}</h1>
        <p className="py-4">{subheading}</p>
        <Button>{link.text}</Button>
      </div>
    </section>
  );
};
