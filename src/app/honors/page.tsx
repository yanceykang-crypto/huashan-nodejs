"use client";
import React, { useState, useEffect, useCallback } from "react";
import { Button, Image } from "@heroui/react";
import { ArrowLeft, ArrowRight, ZoomIn, X, ChevronRight } from "lucide-react";
import { honors } from "../config/honors";
// 定义荣誉资质数据

const HonorsPage: React.FC = () => {
  // 预览状态管理
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [animationCompleted, setAnimationCompleted] = useState(false);

  // 打开预览
  const openPreview = (image: string, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    setIsModalOpen(true);
    // 等待模态框动画完成后显示内容
    setTimeout(() => setAnimationCompleted(true), 300);
  };

  // 关闭预览
  const closePreview = () => {
    setAnimationCompleted(false);
    // 等待淡出动画完成后隐藏模态框
    setTimeout(() => {
      setIsModalOpen(false);
      setSelectedImage(null);
    }, 300);
  };

  // 上一张
  const prevImage = useCallback(() => {
    const newIndex = currentIndex === 0 ? honors.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(honors[newIndex].image);
  }, [currentIndex]);

  // 下一张
  const nextImage = useCallback(() => {
    const newIndex = currentIndex === honors.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedImage(honors[newIndex].image);
  }, [currentIndex]);

  // 键盘导航
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;

      if (e.key === "Escape") closePreview();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, nextImage, prevImage]);

  return (
    <div className="min-h-screen  font-sans bg-gray-100">
      {/* Banner区域 */}
      <div className="relative h-72 md:h-96 overflow-hidden bg-blue-900 group">
        {/* 背景图和叠加效果 */}
        <div className="absolute inset-0 bg-[url('/images/about_bg.png')] bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity"></div>
        <div className="absolute inset-0"></div>

        {/* 内容 */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4 md:px-8 z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight transform transition-transform duration-500 group-hover:scale-105">
            资质证书
          </h1>
          <p className="text-xl md:text-2xl text-blue-50 max-w-2xl mx-auto opacity-90 font-light leading-relaxed">
            展示公司获得的各类荣誉和资质认证，见证我们的专业与实力
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* 说明文字 */}
        <div className="text-center mb-12">
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            公司自成立以来，始终坚持高标准、严要求，获得了多项行业资质和荣誉认证，这是对我们专业能力和服务质量的肯定。
          </p>
        </div>

        {/* 荣誉资质网格 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {honors.map((honor, index) => (
            <div
              key={honor.id}
              className="bg-white rounded-xl  overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
              onClick={() => openPreview(honor.image, index)}
            >
              {/* 图片容器 */}
              <div className="relative aspect-[4/3] bg-gray-50 overflow-hidden">
                <Image
                  src={honor.image}
                  alt={honor.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  classNames={{
                    wrapper: "!max-w-full h-full ",
                    img: "w-full h-full object-contain",
                  }}
                />
                {/* 悬停效果 */}
                <div className="absolute inset-0 group-hover:bg-gray-100/50  group-hover:bg-opacity-20 transition-opacity duration-300 flex items-center justify-center z-10">
                  <div className="bg-gray-500 bg-opacity-0 group-hover:bg-opacity-80 rounded-full p-3 transform scale-0 group-hover:scale-100 transition-all duration-300">
                    <ZoomIn size={24} className="text-white" />
                  </div>
                </div>
              </div>

              {/* 内容区域 */}
              <div className="p-6 text-center border-t border-gray-100">
                <h3 className="text-base font-semibold text-gray-800 mb-2">
                  {honor.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 图片预览模态框 */}
      {isModalOpen && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${
            animationCompleted ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* 背景 */}
          <div
            className="absolute inset-0 bg-black bg-opacity-90"
            onClick={closePreview}
          ></div>

          {/* 关闭按钮 */}
          <Button
            className="absolute top-6 right-6 text-white z-11"
            onPress={closePreview}
            isIconOnly
            color="primary"
          >
            <X size={24} />
          </Button>

          {/* 上一张按钮 */}
          <Button
            isIconOnly
            color="primary"
            className="absolute left-6 top-1/2 -translate-y-1/2  text-white  z-11"
            onPress={() => {
              prevImage();
            }}
          >
            <ArrowLeft size={24} />
          </Button>

          {/* 图片预览 */}
          <div
            className={`transition-opacity duration-300 ${
              animationCompleted
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95"
            }`}
          >
            <Image
              src={selectedImage!}
              alt="荣誉资质预览"
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg  shadow-2xl"
              classNames={{ wrapper: "flex justify-center items-center" }}
            />
          </div>

          {/* 下一张按钮 */}
          <Button
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white z-11"
            isIconOnly
            color="primary"
            variant="solid"
            onPress={() => {
              nextImage();
            }}
          >
            <ArrowRight size={24} />
          </Button>

          {/* 底部信息 */}
          <div className="absolute bottom-6 left-0 right-0 text-center text-white z-10 bg-gradient-to-t from-black to-transparent py-4">
            <p className="text-lg font-medium mb-1">
              {honors[currentIndex].title}
            </p>
            <p className="text-sm opacity-80">
              {currentIndex + 1} / {honors.length}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HonorsPage;
