
export default function ImageGallery() {
  const images = [
    "/images/vestidofundo.png",
    "/images/vestido2.png",
    "/images/vestido3.png",
    "/images/vestido4.png",
    "/images/vestido5.png",
    "/images/vestido6.png",
  ];

  return (
    <div className="grid grid-cols-3 gap-4 gap-y-20 p-4">
      {images.map((src, index) => (
        <div key={index} className="flex justify-center items-center  overflow-hiddenflex justify-center items-center">
          <img
            src={src}
            alt={`Vestido ${index + 1}`}
            width={400}
            height={400}
            className="rounded-lg h-135 w-100 object-cover pb-4 transform transition duration-300 hover:scale-110 "
          />
        </div>
      ))}
    </div>
  );
}