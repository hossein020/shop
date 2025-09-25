import React, { useState } from "react";
import { Form, Input, Button, Typography, message, Card } from "antd";

const { Title } = Typography;

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    setTimeout(() => {
      message.success("پیام شما با موفقیت ارسال شد!");
      setLoading(false);
    }, 1500);
  };

  return (
    <div
      dir="rtl"
      className="min-h-screen flex items-center justify-center bg-gray-50 p-6"
      style={{ animation: "fadeIn 0.8s ease" }}
    >
      <Card
        bordered={false}
        className="w-full max-w-md shadow-lg rounded-3xl p-8 bg-white"
        style={{ boxShadow: "0 8px 20px rgba(0,0,0,0.12)" }}
      >
        <Title
          level={2}
          style={{ textAlign: "right", color: "#1E40AF", marginBottom: 24 }}
        >
          تماس با ما
        </Title>

        <Form layout="vertical" onFinish={onFinish} requiredMark={false}>
          <Form.Item
            label="نام و نام خانوادگی"
            name="name"
            rules={[{ required: true, message: "لطفاً نام خود را وارد کنید" }]}
          >
            <Input
              size="large"
              placeholder="نام و نام خانوادگی"
              style={{ borderRadius: 10 }}
            />
          </Form.Item>

          <Form.Item
            label="ایمیل"
            name="email"
            rules={[
              { required: true, message: "لطفاً ایمیل خود را وارد کنید" },
              { type: "email", message: "ایمیل معتبر وارد کنید" },
            ]}
          >
            <Input
              size="large"
              placeholder="email@example.com"
              style={{ borderRadius: 10 }}
            />
          </Form.Item>

          <Form.Item
            label="پیام"
            name="message"
            rules={[{ required: true, message: "لطفاً پیام خود را وارد کنید" }]}
          >
            <Input.TextArea
              rows={5}
              placeholder="متن پیام"
              style={{ borderRadius: 10 }}
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              block
              size="large"
              style={{
                borderRadius: 12,
                background:
                  "linear-gradient(90deg, #3b82f6 0%, #2563eb 100%)",
                fontWeight: "bold",
                fontSize: 16,
                boxShadow: "0 6px 12px rgba(59, 130, 246, 0.4)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 8px 24px rgba(59, 130, 246, 0.6)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 6px 12px rgba(59, 130, 246, 0.4)")
              }
            >
              ارسال
            </Button>
          </Form.Item>
        </Form>
      </Card>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;