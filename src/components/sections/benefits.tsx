export const Benefits = (section: any) => {
  const { heading, benefits } = section.data;
  return (
    <section>
      <div>
        <h3 className="font-bold mb-20 w-2/3">{heading}</h3>
        <div className="flex space-x-12">
          {benefits.map((benefit: any) => (
            <div className="flex-1 text-left">
              <div className="mb-6 flex justify-start">
                <div className="w-10 h-10 bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-500">Icon</span>
                </div>
              </div>
              <h5 className="font-semibold mb-6">{benefit.heading}</h5>
              <p className="regular text-gray-700 mb-8">{benefit.subtitle}</p>
              <a href="#" className="text-blue-500 hover:underline">
                Learn More &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
