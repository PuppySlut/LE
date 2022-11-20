import Image from "react-bootstrap/Image";
export const Img = (pic, desc) => {
  return (
    <div class="text-center">
      <Image src={pic} alt={desc} fluid rounded className="img-fluid" />;
    </div>
  );
};
