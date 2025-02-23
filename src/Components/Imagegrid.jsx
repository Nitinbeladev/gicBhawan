const ImageGrid = () => {
  return (
    <section className="py-10 grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
      <img src="/image1.png" alt="Event 1" className="rounded shadow-md" />
      <img src="/image2.png" alt="Event 2" className="rounded shadow-md" />
      <img src="/image3.png" alt="Event 3" className="rounded shadow-md" />
    </section>
  );
};

export default ImageGrid;
