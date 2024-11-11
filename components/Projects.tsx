import { useState } from "react";
import { eShop, jobJunction, realEstate } from "@/public/assets";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import CarouselModal from "./CarouselModal";
import { StaticImageData } from "next/image";

// Project Image Imports (organized by projects)
import { p1i1, p1i2, p1i3, p1i4, p1i5, p1i6, p1i7, p1i8, p1i9, p1i10, p1i11 } from "@/public/assets";
import { p2i1, p2i2, p2i3, p2i4, p2i5, p2i6, p2i7, p2i8, p2i9 } from "@/public/assets";
import { p3i1, p3i2, p3i3, p3i4, p3i5, p3i6, p3i7, p3i8 } from "@/public/assets";
import { p4i1, p4i2, p4i3, p4i4, p4i5, p4i6, p4i7, p4i8, p4i9, p4i10, p4i11, p4i12, p4i13, p4i14 } from "@/public/assets";
import { p5i1, p5i2, p5i3, p5i4, p5i5, p5i6, p5i7, p5i8, p5i9, p5i10, p5i11, p5i12, p5i13, p5i14, p5i15, p5i16, p5i17, p5i18 } from "@/public/assets";
import { p6i1, p6i2, p6i3, p6i4, p6i5 } from "@/public/assets";
import { p7i1, p7i2, p7i3, p7i4, p7i5, p7i6, p7i7, p7i8, p7i9, p7i10, p7i11, p7i12, p7i13, p7i14, p7i15 } from "@/public/assets";
import { p8i1, p8i2, p8i3, p8i4, p8i5, p8i6, p8i7, p8i8, p8i9, p8i10, p8i11, p8i12, p8i13, p8i14, p8i15 } from "@/public/assets";


const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [currentImages, setCurrentImages] = useState<string[]>([]);

  // Images Array for each Project
  const projectImages = [
    [p1i11, p1i1, p1i2, p1i3, p1i4, p1i5, p1i6, p1i7, p1i8, p1i9, p1i10],
    [p2i1, p2i2, p2i3, p2i4, p2i5, p2i6, p2i7, p2i8, p2i9],
    [p3i1, p3i2, p3i3, p3i4, p3i5, p3i6, p3i7, p3i8],
    [p4i14, p4i1, p4i2, p4i3, p4i4, p4i5, p4i6, p4i7, p4i8, p4i9, p4i10, p4i11, p4i12, p4i13],
    [p5i18, p5i1, p5i2, p5i3, p5i4, p5i5, p5i6, p5i7, p5i8, p5i9, p5i10, p5i11, p5i12, p5i13, p5i14, p5i15, p5i16, p5i17],
    [p6i5, p6i1, p6i2, p6i3, p6i4],
    [p7i15, p7i1, p7i2, p7i3, p7i4, p7i5, p7i6, p7i7, p7i8, p7i9, p7i10, p7i11, p7i12, p7i13, p7i14],
    [p8i15, p8i1, p8i2, p8i3, p8i4, p8i5, p8i6, p8i7, p8i8, p8i9, p8i10, p8i11, p8i12, p8i13, p8i14]
  ];

  // Titles for each project
  const projectTitles = [
    "Bedroom 1",
    "Bedroom 2",
    "Exibition Stand 1",
    "Bedroom 3",
    "Bedroom 4",
    "Closet 1",
    "Bedroom 5",
    "Bedroom 6"
  ];

  // Handle Image Click
  const handleImageClick = (
    images: (string | StaticImageData)[],
    index: number
  ) => {
    const imageUrls = images.map((image) =>
      typeof image === "string" ? image : image.src
    );
    setCurrentImages(imageUrls);
    setSelectedImageIndex(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
  <section
    id='project'
    className='relative max-w-container mx-auto px-4 md:px-20 py-12 sm:py-24'
  >
    <SectionTitle title='Some Things I Have Designed' titleNo='03' />
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-8'>
      {projectImages.map((images, i) => (
        <div key={i} className='w-full h-auto relative'>
          {/* Project Title */}
          <div className='container-left text-center mb-2'>
            <h3 className='text-lg font-semibold'>{projectTitles[i]}</h3>
          </div>
          {/* Project Image */}
          <div className='cursor-pointer' onClick={() => handleImageClick(images, 0)}>
            <div className='container-right w-full h-64 overflow-hidden rounded-lg relative'>
              <Image
                className='rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl object-cover w-full h-full'
                src={images[0]}
                alt={projectTitles[i]}
                layout='fill'
              />
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Modal */}
    {showModal && (
      <CarouselModal
        images={currentImages}
        initialIndex={selectedImageIndex}
        onClose={closeModal}
      />
    )}
  </section>
);

};

export default Projects;
