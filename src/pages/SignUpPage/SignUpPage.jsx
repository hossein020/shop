import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Typography,
  message,
  Divider,
  Row,
  Col,
  Space,
} from "antd";

const { Title, Text } = Typography;

const mockSignUp = (values) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("User registered:", values);
      resolve();
    }, 1000);
  });
};

const SignUpPage = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      if (values.password !== values.confirm) {
        message.error("رمز عبور و تکرار آن باید یکسان باشند!");
        setLoading(false);
        return;
      }
      await mockSignUp(values);
      message.success("ثبت نام با موفقیت انجام شد!");
      setLoading(false);
    } catch {
      message.error("خطا در ثبت نام!");
      setLoading(false);
    }
  };

  const onSocialClick = (provider) => {
    message.info(`ورود با ${provider} فعلاً فعال نیست.`);
  };

  return (
    <Row
      justify="center"
      align="middle"
      className="bg-gradient-to-br from-blue-50 to-white p-6 font-vazir"
      style={{ direction: "rtl" }}
    >
      <Col
        xs={24}
        sm={18}
        md={12}
        lg={8}
        xl={6}
        style={{ flex: "0 0 46%", maxWidth: "59%" }}
      >
        <div className="bg-gradient-to-br from-white to-gray-400 bg-opacity-50 backdrop-blur-md rounded-3xl p-8 shadow-lg border border-white border-opacity-40">
          <Title level={2} className="text-center mb-6">
            ثبت نام
          </Title>
          <Form
            name="signup"
            layout="vertical"
            onFinish={onFinish}
            autoComplete="off"
            requiredMark={false}
          >
            <Form.Item
              label="نام کاربری"
              name="username"
              rules={[
                {
                  required: true,
                  message: "لطفاً نام کاربری خود را وارد کنید",
                },
                { min: 3, message: "حداقل 3 کاراکتر وارد کنید" },
              ]}
            >
              <Input
                placeholder="نام کاربری"
                size="large"
                dir="rtl"
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
              <Input placeholder="ایمیل" size="large" dir="rtl" />
            </Form.Item>

            <Form.Item
              label="رمز عبور"
              name="password"
              rules={[
                { required: true, message: "لطفاً رمز عبور خود را وارد کنید" },
                { min: 6, message: "رمز عبور حداقل 6 کاراکتر باشد" },
              ]}
              hasFeedback
            >
              <Input.Password placeholder="رمز عبور" size="large" dir="rtl" />
            </Form.Item>

            <Form.Item
              label="تکرار رمز عبور"
              name="confirm"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "لطفاً تکرار رمز عبور را وارد کنید",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("رمز عبور و تکرار آن باید یکسان باشند!")
                    );
                  },
                }),
              ]}
            >
              <Input.Password placeholder="تکرار رمز عبور" size="large" dir="rtl" />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                block
                size="large"
                className="bg-[#585e61]"
                loading={loading}
              >
                ثبت نام
              </Button>
            </Form.Item>
          </Form>

          <Divider>یا ورود با</Divider>

          <Space
            direction="vertical"
            size="middle"
            style={{ width: "100%", textAlign: "center" }}
          >
            <Button
              icon={
                <img
                  src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
                  alt="google"
                  style={{ width: 20, height: 20 }}
                />
              }
              size="large"
              block
              onClick={() => onSocialClick("گوگل")}
              style={{ backgroundColor: "#2b3860", color: "white" }}
            >
              ورود با گوگل
            </Button>
            <Button
              icon={
                <img
                  src="https://img.icons8.com/?size=100&id=efFfwotdkiU5&format=png&color=000000"
                  alt="GitHub"
                  style={{ width: 20, height: 20 }}
                />
              }
              size="large"
              block
              onClick={() => onSocialClick("گیت‌هاب")}
              style={{ backgroundColor: "#3e5277", color: "white" }}
            >
              ورود با گیت‌هاب
            </Button>
          </Space>

          <Text className="block text-center mt-6">
            قبلاً ثبت‌نام کرده‌اید؟{" "}
            <a href="#" className="text-blue-600">
              وارد شوید
            </a>
          </Text>
        </div>
      </Col>
    </Row>
  );
};

export default SignUpPage;