import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "../ui/card";

export const OurStaff = (section: any) => {
  const { heading, subheading, staff } = section.data;
  return (
    <section>
      <h2 className="mb-6">{heading}</h2>
      <p className="mb-20">{subheading}</p>
      <Carousel>
        <CarouselContent>
          {staff.map((staffMember: any) => (
            <CarouselItem className="basis-1/3" key={staffMember.id}>
              <Card {...staffMember} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
