export const OurStaff = (section: any) => {
  const { heading, subheading, staff } = section.data;
  return (
    <section>
      <h2>{heading}</h2>
      <p>{subheading}</p>
      <ul>
        {staff.map((staffMember: any) => (
          <li key={staffMember.id}>
            <p className="large">{staffMember.name}</p>
            <p>{staffMember.position}</p>
            <p>{staffMember.summary}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
