import React, { useState } from "react";
import checkIcon from "../assets/nhantuong/header-icon-check.png";
import thumbnailFace from "../assets/nhantuong/header-thumbnail-face.png";
import { nhantuongTabs, heroFeatures } from "../data/nhantuongData";

const NhanTuong = () => {
  const [activeTab, setActiveTab] = useState("eye");

  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      {/* Hero Section */}
      <section className="relative pt-[12%] pb-[5%] px-[10%] lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="space-y-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-gray-800 leading-tight">
                Khám phá{" "}
                <span className="italic bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  vận mệnh
                </span>{" "}
                qua từng <br className="hidden sm:block" /> đường nét khuôn mặt{" "}
                <span className="italic">với</span> See Bói
              </h1>

              <div className="space-y-6">
                {heroFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="shrink-0 mt-1">
                      <img src={checkIcon} alt="check" className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-sm font-bold text-gray-900 uppercase mb-2">
                        {feature.title}
                      </h2>
                      <p className="text-xs text-gray-600 leading-relaxed uppercase">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pl-10 flex justify-center items-center">
              <div className="pt-20 lg:w-3/4">
                <img
                  src={thumbnailFace}
                  alt="Face Analysis"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upload image Section*/}
      <section className="py-16 bg-[#1a1d2e]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
            {/* Left Side - Form */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-light text-white mb-8">
                Tải ảnh của bạn{" "}
                <span className="text-sm text-gray-400">
                  - Để See Bói phân tích và giải mã chuyên sâu tướng mệnh của
                  bạn
                </span>
              </h2>

              {/* Name Input */}
              <div>
                <label className="block text-white text-sm mb-2">
                  Họ và tên <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Nhập họ tên"
                  className="w-full px-4 py-3 bg-[#2a2d3e] text-white border border-gray-600 rounded focus:outline-none focus:border-purple-500"
                />
              </div>

              {/* Gender Selection */}
              <div>
                <label className="block text-white text-sm mb-3">
                  Giới tính <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-6">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      className="w-4 h-4 accent-purple-600"
                    />
                    <span className="ml-2 text-white text-sm">Nữ</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      className="w-4 h-4 accent-purple-600"
                    />
                    <span className="ml-2 text-white text-sm">Nam</span>
                  </label>
                </div>
              </div>

              {/* Birth Date */}
              <div>
                <label className="block text-white text-sm mb-2">
                  Ngày sinh (dương lịch) <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-3 gap-3">
                  <input
                    type="number"
                    placeholder="Ngày"
                    className="px-4 py-3 bg-[#2a2d3e] text-white border border-gray-600 rounded focus:outline-none focus:border-purple-500"
                  />
                  <input
                    type="number"
                    placeholder="Tháng"
                    className="px-4 py-3 bg-[#2a2d3e] text-white border border-gray-600 rounded focus:outline-none focus:border-purple-500"
                  />
                  <input
                    type="number"
                    placeholder="Năm"
                    className="px-4 py-3 bg-[#2a2d3e] text-white border border-gray-600 rounded focus:outline-none focus:border-purple-500"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-white text-sm mb-2">
                  Địa chỉ Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="email-cua-ban@gmail.com"
                  className="w-full px-4 py-3 bg-[#2a2d3e] text-white border border-gray-600 rounded focus:outline-none focus:border-purple-500"
                />
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  aria-label="Đồng ý điều khoản và chính sách bảo mật"
                  className="w-4 h-4 mt-1 accent-purple-600"
                />
                <label
                  htmlFor="terms"
                  className="text-xs text-gray-400 leading-relaxed"
                >
                  Tôi đồng ý cho phép xử lý dữ liệu cá nhân và đảm bảo ảnh tôi
                  cung cấp cho mục đích phân tích. Tôi hiểu rằng dữ liệu của tôi
                  sẽ được xử lý theo{" "}
                  <a href="#" className="text-purple-400 underline">
                    Chính sách bảo mật
                  </a>
                  .
                </label>
              </div>
            </div>

            {/* Right Side - Image Upload */}
            <div className="space-y-6">
              <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 bg-[#252838] min-h-[400px] flex flex-col items-center justify-center">
                <p className="text-white text-center mb-4">
                  Kéo thả ảnh vào đây, hoặc tải ảnh từ thiết bị lên đây
                </p>
                <button className="px-6 py-2 border border-purple-500 text-purple-400 rounded hover:bg-purple-500 hover:text-white transition-colors">
                  Chọn ảnh từ thiết bị
                </button>
                <div className="mt-4 flex items-center justify-center">
                  <img
                    src={thumbnailFace}
                    alt="preview"
                    className="w-24 h-24 opacity-30"
                  />
                </div>
              </div>

              {/* Analyze Button */}
              <button className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all">
                Xem phân tích
              </button>

              {/* Additional Links */}
              <div className="text-center space-y-2">
                <p className="text-sm text-gray-400">
                  Tôi phải sử dụng ảnh như thế nào?
                </p>
                <button className="text-sm text-purple-400 underline hover:text-purple-300">
                  Xem hướng dẫn sử dụng
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Five Senses Section */}
      <section className="pt-[10%] pb-[10%] bg-[#FFF8F0]">
        <div className="mx-auto px-[12%]">
          {/* Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light italic bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              Ngũ Quan
            </h2>
            <p className="text-gray-700 text-lg">Phân tích 5 bộ vị chủ đạo</p>
          </div>

          {/* Tabs Navigation */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Side - Tab Buttons */}
            <div className="lg:w-1/3 space-y-3">
              {nhantuongTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-4 px-6 py-4 rounded-full border-2 transition-all ${
                    activeTab === tab.id
                      ? "bg-white border-purple-500 shadow-lg"
                      : "bg-white border-gray-200 hover:border-purple-300"
                  }`}
                >
                  <img
                    src={tab.icon}
                    alt={tab.label}
                    className="w-8 h-8 object-contain"
                  />
                  <span
                    className={`text-left text-sm font-medium ${
                      activeTab === tab.id ? "text-purple-600" : "text-gray-700"
                    }`}
                  >
                    {tab.label}
                  </span>
                </button>
              ))}
            </div>

            {/* Right Side - Tab Content */}
            <div className="lg:w-2/3">
              {nhantuongTabs
                .filter((tab) => activeTab === tab.id)
                .map((tab) => (
                  <div
                    key={tab.id}
                    className="grid md:grid-cols-2 gap-8 items-start"
                  >
                    <div className="flex justify-center">
                      <img
                        src={tab.image}
                        alt={tab.title}
                        className="w-full max-w-sm h-auto object-contain"
                      />
                    </div>
                    <div className="text-gray-700 leading-relaxed text-sm">
                      <span className="font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        {tab.title}
                      </span>{" "}
                      {tab.content}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NhanTuong;
