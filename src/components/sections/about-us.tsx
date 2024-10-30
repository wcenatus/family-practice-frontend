export const AboutUs = (section: any) => {
  const { heading, description, image } = section.data;
  return (
    <section>
      <div className="flex items-center ">
        <div className="w-1/2">
          <h3 className="font-bold mb-6">{heading}</h3>
          <p className="medium">{description}</p>
        </div>

        <div className="w-1/2 flex justify-center">
          <div className="w-80 h-80 bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">Image Placeholder</span>
          </div>
        </div>
      </div>
    </section>
  );
};
