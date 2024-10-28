export const AboutUs = (section: any) => {
  const { heading, description, image } = section.data;
  return (
    <section>
      <h3>{heading}</h3>
      <p>{description}</p>
    </section>
  );
};
