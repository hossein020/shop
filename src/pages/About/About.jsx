import React from "react";
import { Typography, Card, Divider, Space } from "antd";

const { Title, Paragraph, Text } = Typography;

const About = () => {
  return (
    <div className="min-h-screen flex justify-center items-start bg-gray-50 py-12 px-4" dir="rtl">
      <Card
        style={{ maxWidth: 720, width: "100%" }}
        bordered={false}
        className="shadow-lg rounded-2xl"
        bodyStyle={{ padding: "32px" }}
      >
        <Typography>
          <Title level={2} style={{ textAlign: "right", color: "#66CC00" }}>
            درباره ما
          </Title>

          <Divider />

          <Space direction="vertical" size="large" style={{ width: "100%" }}>
            <Paragraph style={{ fontSize: 16, lineHeight: 1.8, textAlign: "right", color: "#374151" }}>
              این یک پروژه نمونه فروشگاه با React و Ant Design است.
              هدف ما ارائه محصولات با کیفیت و بهترین خدمات به مشتریانمان می‌باشد.
            </Paragraph>

            <Paragraph style={{ fontSize: 16, lineHeight: 1.8, textAlign: "right", color: "#374151" }}>
              تیم ما متشکل از توسعه‌دهندگان مجرب است که به بهبود تجربه کاربری و رضایت شما اهمیت می‌دهند.
            </Paragraph>

            <Text
              strong
              style={{
                display: "block",
                textAlign: "right",
                fontSize: 14,
                color: "#6b7280",
              }}
            >
              ممنونیم که با ما هستید!
            </Text>
          </Space>
        </Typography>
      </Card>
    </div>
  );
};

export default About;