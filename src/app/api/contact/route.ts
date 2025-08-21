import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { siteName, email } from "@/app/config/common";

// 从环境变量中读取邮件配置
const EMAIL_CONFIG = {
  host: process.env.EMAIL_HOST || "smtp.example.com", // 邮件服务器主机名
  port: parseInt(process.env.EMAIL_PORT || "587"), // 邮件服务器端口
  secure: process.env.EMAIL_SECURE === "true", // 是否使用SSL/TLS
  auth: {
    user: process.env.EMAIL_USER || "your-email@example.com", // 发送邮件的邮箱地址
    pass: process.env.EMAIL_PASS || "your-email-password", // 发送邮件的邮箱密码或授权码
  },
};

// 从环境变量中读取接收邮件的邮箱地址
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || email;

// 定义联系表单数据接口
interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  captcha: string;
}

// 验证请求数据
function validateContactForm(data: unknown) {
  const errors: { [key: string]: string } = {};
  const formData = data as ContactFormData;

  if (!formData.name?.trim()) errors.name = "姓名不能为空";
  if (!formData.email?.trim()) {
    errors.email = "邮箱不能为空";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = "请输入有效的邮箱地址";
  }
  if (!formData.subject?.trim()) errors.subject = "主题不能为空";
  if (!formData.message?.trim()) errors.message = "消息内容不能为空";
  // 在实际生产环境中，这里应该验证从客户端发送的验证码
  // 通常的做法是将生成的验证码存储在服务器端（如会话或Redis），然后在这里进行比对
  // 由于我们在前端生成了验证码，这里简化处理

  return { isValid: Object.keys(errors).length === 0, errors };
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();

    // 验证表单数据
    const { isValid, errors } = validateContactForm(formData);
    if (!isValid) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    // 创建邮件传输器
    const transporter = nodemailer.createTransport(EMAIL_CONFIG);
    console.log(transporter);
    // 构建邮件内容
    const mailOptions = {
      from: `"${siteName}" <${EMAIL_CONFIG.auth.user}>`,
      to: CONTACT_EMAIL, // 接收邮件的邮箱地址，从环境变量或配置中获取
      subject: `[${siteName} 联系表单] ${formData.subject}`,
      text: `
        您收到了来自 ${siteName} 联系表单的新消息：
        
        姓名: ${formData.name}
        邮箱: ${formData.email}
        主题: ${formData.subject}
        消息: ${formData.message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color: #333;">您收到了来自 ${siteName} 联系表单的新消息</h2>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 15px 0;">
            <p><strong>姓名:</strong> ${formData.name}</p>
            <p><strong>邮箱:</strong> ${formData.email}</p>
            <p><strong>主题:</strong> ${formData.subject}</p>
            <p><strong>消息:</strong></p>
            <p>${formData.message.replace(/\n/g, "<br>")}</p>
          </div>
        </div>
      `,
    };

    // 发送邮件
    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "邮件发送成功，我们会尽快与您联系",
    });
  } catch (error) {
    console.error("邮件发送失败:", error);
    return NextResponse.json(
      {
        success: false,
        message: "邮件发送失败，请稍后重试",
        error: error instanceof Error ? error.message : "未知错误",
      },
      { status: 500 }
    );
  }
}
