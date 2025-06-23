import Image from "next/image";
import styles from "./page.module.css";

// 假设图片存放在 public/images 目录下
const images = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg"
];

export default function Home() {
  return (
    <div className="p-4">
      {/* 轮播图 */}
      <div className="relative" style={{ height: '20vh' }}>
        {images.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            fill
            className="object-cover"
          />
        ))}
      </div>

      {/* 分类 div */}
      <div className="flex mt-4 space-x-4">
        <div className="flex-1 bg-gray-200 p-4 text-center">分类1</div>
        <div className="flex-1 bg-gray-200 p-4 text-center">分类2</div>
        <div className="flex-1 bg-gray-200 p-4 text-center">分类3</div>
        <div className="flex-1 bg-gray-200 p-4 text-center">分类4</div>
      </div>
    </div>
  );
}
