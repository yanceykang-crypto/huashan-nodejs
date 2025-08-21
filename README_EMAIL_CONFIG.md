# 邮件服务配置说明

## 概述

本项目使用 `nodemailer` 库实现邮件发送功能。为了使联系表单能够正常发送邮件，您需要配置正确的邮件服务器信息。

## 配置步骤

### 1. 编辑环境变量文件

项目根目录下已创建了 `.env.local` 文件，您需要使用实际的邮件服务器信息替换其中的占位符：

```env
# SMTP服务器主机名
EMAIL_HOST=smtp.your-email-provider.com
# SMTP服务器端口
EMAIL_PORT=587
# 是否使用SSL/TLS
EMAIL_SECURE=false
# 发送邮件的邮箱地址
EMAIL_USER=your-email@example.com
# 发送邮件的邮箱密码或授权码
EMAIL_PASS=your-email-password-or-app-password

# 接收联系表单邮件的邮箱地址
CONTACT_EMAIL=contact@example.com
```

### 2. 重要说明

- 对于 Gmail、Outlook 等服务提供商，可能需要启用"允许不安全应用访问"或生成专用的"应用密码"。
- `.env.local` 文件包含敏感信息，请勿将其提交到版本控制系统。
- 确保您的邮件服务器允许从您的服务器IP地址发送邮件。

## 测试邮件功能

1. 确保开发服务器正在运行：
   ```bash
   npm run dev
   ```

2. 访问联系页面：`http://localhost:3000/contact`

3. 填写并提交联系表单

4. 检查您的接收邮箱是否收到了测试邮件

## 常见问题排查

- 如果邮件发送失败，请检查 `.env.local` 中的配置是否正确
- 确认您的邮件服务器设置允许外部应用程序发送邮件
- 检查服务器防火墙设置，确保出站连接到邮件服务器端口是允许的
- 查看控制台日志以获取更详细的错误信息

## 安全提示

- 生产环境中，考虑使用专门的邮件服务提供商（如 SendGrid、Mailgun、Brevo 等）以获得更好的可靠性和可扩展性
- 定期更新您的邮件密码和授权码
- 实施速率限制以防止滥用联系表单

## 部署注意事项

在部署到生产环境时，请确保：

1. 在您的托管平台（如 Vercel、Netlify、AWS 等）中配置相应的环境变量
2. 检查托管平台的出站邮件策略
3. 考虑实现额外的安全措施，如 CAPTCHA 以防止垃圾邮件