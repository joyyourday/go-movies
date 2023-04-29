import ImageSlider from "../components/ImageSlider";

const images = [
    {
      id: 1,
      src: "/the-night-manager-2023.webp",
      alt: "Image 1",
      width: 800,
      height: 600,
      caption: "Caption for image 1",
      url: "https://example.com/image1",
    },
    {
      id: 2,
      src: "/farzi-2023.webp",
      alt: "Image 2",
      width: 800,
      height: 600,
      caption: "Caption for image 2",
      url: "https://example.com/image2",
    },
    {
      id: 3,
      src: "/shehzada-2023.webp",
      alt: "Image 3",
      width: 800,
      height: 600,
      caption: "Caption for image 3",
      url: "https://example.com/image3",
    },
  ];
function Most() {
    return (
<div>
<ImageSlider images={images} />
</div>

    )
}

export default Most;