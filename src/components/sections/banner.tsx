export const Banner = (section: any) => {
  const { heading, subtitle, image } = section.data;
  return (
    <section>
      <h2>{heading}</h2>
      <p>{subtitle}</p>
    </section>
  );
};
