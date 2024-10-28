export const Benefits = (section: any) => {
  const { heading, benefits } = section.data;
  return (
    <section>
      <h3>{heading}</h3>
      {benefits.map((benefit: any) => (
        <div key={benefit.id}>
          <h5>{benefit.heading}</h5>
          <p>{benefit.subtitle}</p>
        </div>
      ))}
    </section>
  );
};
