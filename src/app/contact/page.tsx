"use client";
import React, { useState, useEffect } from "react";
import { telNumber, email, address } from "@/app/config/common";
import { MapPin, Phone, Mail, RefreshCw } from "lucide-react";
import { Button, Input, Textarea } from "@heroui/react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    captcha: "",
  });
  const [captchaText, setCaptchaText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{
    success?: boolean;
    message?: string;
    errors?: { [key: string]: string };
  }>({});

  // 生成随机验证码
  const generateCaptcha = () => {
    // 在实际应用中，这里应该通过API获取验证码图片和文本
    // 为了演示，我们使用简单的随机字符串
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";
    let captcha = "";
    for (let i = 0; i < 6; i++) {
      captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaText(captcha);
  };

  // 刷新验证码
  const refreshCaptcha = () => {
    generateCaptcha();
  };

  // 组件挂载时生成验证码
  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 重置之前的状态
    setStatus({});

    // 验证验证码
    if (!formData.captcha.trim()) {
      setStatus({
        success: false,
        message: "请输入验证码",
        errors: { captcha: "请输入验证码" },
      });
      return;
    }

    if (formData.captcha.toLowerCase() !== captchaText.toLowerCase()) {
      setStatus({
        success: false,
        message: "验证码错误，请重新输入",
        errors: { captcha: "验证码错误，请重新输入" },
      });
      // 刷新验证码
      refreshCaptcha();
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        // 提交成功
        setStatus({ success: true, message: data.message });
        // 重置表单
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          captcha: "",
        });
      } else {
        // 提交失败
        setStatus({
          success: false,
          message: data.message,
          errors: data.errors,
        });
      }
    } catch (error) {
      setStatus({ success: false, message: "网络错误，请稍后重试" });
      console.error("提交表单时出错:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="font-sans min-h-screen flex flex-col bg-gray-50">
      {/* 页面标题区域 */}
      <div className="bg-gradient-to-r relative overflow-hidden h-72 md:h-96 from-blue-600 to-purple-600 py-16 px-4 md:px-0 group">
        <div className="absolute inset-0 bg-[url('/images/about_bg.png')] bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity"></div>
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4 md:px-8 z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight transform transition-transform duration-500 group-hover:scale-105">
            联系我们
          </h1>
          <p className="text-xl md:text-2xl text-blue-50 max-w-2xl mx-auto opacity-90 font-light leading-relaxed">
            无论您有任何问题或需求，我们都将竭诚为您服务
          </p>
        </div>
      </div>

      {/* 主要内容区域 */}
      <main className="flex-grow w-full py-12 px-4 md:px-0">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 联系信息 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                联系方式
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-700 mb-1">
                      公司地址
                    </h3>
                    <p className="text-gray-600">{address}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-700 mb-1">
                      联系电话
                    </h3>
                    <p className="text-gray-600">{telNumber}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-700 mb-1">
                      电子邮箱
                    </h3>
                    <p className="text-gray-600">{email}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 联系表单 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                发送消息
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Input
                    fullWidth
                    label="姓名"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    fullWidth
                    label="邮箱"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Input
                  fullWidth
                  label="主题"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
                <Textarea
                  fullWidth
                  label="消息"
                  name="message"
                  type="textarea"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />

                {/* 验证码输入区域 */}
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    fullWidth
                    label="验证码"
                    name="captcha"
                    value={formData.captcha}
                    onChange={handleChange}
                    required
                  />
                  <div className="flex items-center">
                    <div className="relative h-12 flex-grow">
                      <div 
                        className="h-full flex items-center justify-center bg-gray-100 cursor-pointer rounded-md px-3"
                        onClick={refreshCaptcha}
                        style={{ maxHeight: "38px" }}
                      >
                        <span className="text-xl font-mono text-gray-800 tracking-wider">
                          {captchaText}
                        </span>
                      </div>
                    </div>
                    <Button
                      onClick={refreshCaptcha}
                      className="ml-2 p-2"
                      color="default"
                    >
                      <RefreshCw size={16} />
                    </Button>
                  </div>
                </div>

                <Button
                  type="submit"
                  color="primary"
                  className="text-white w-full"
                  disabled={isLoading}
                >
                  {isLoading ? "发送中..." : "发送消息"}
                </Button>
              </form>

              {/* 状态消息显示 */}
              {status.message && (
                <div
                  className={`mt-4 p-4 rounded-md ${
                    status.success
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  <p>{status.message}</p>

                  {/* 显示表单验证错误 */}
                  {status.errors && Object.keys(status.errors).length > 0 && (
                    <ul className="mt-2 list-disc list-inside text-sm">
                      {Object.values(status.errors).map((error, index) => (
                        <li key={index}>{error}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
