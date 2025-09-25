import React from "react";
import { Layout, Typography } from "antd";
import { Link } from "react-router-dom";
import { InfoCircleOutlined, PhoneOutlined } from "@ant-design/icons";

const { Footer: AntFooter } = Layout;
const { Text } = Typography;

const Footer = () => {
  return (
    <AntFooter className="bg-[#0B1A2D] text-white py-5 px-10 font-vazir">
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4">
        <Text className="text-xs text-slate-500 font-vazir">
          © ۲۰۲۵ تمامی حقوق محفوظ است - فروشگاه من
        </Text>

        <div className="flex items-center gap-6">
          <Link
            to="/about"
            className="flex items-center gap-1 font-medium hover:text-gray-300 transition-colors font-vazir"
          >
            درباره ما
            <InfoCircleOutlined />
          </Link>

          <Link
            to="/contact"
            className="flex items-center gap-1 font-medium hover:text-gray-300 transition-colors font-vazir"
          >
            تماس با ما
            <PhoneOutlined />
          </Link>
        </div>
      </div>
    </AntFooter>
  );
};

export default Footer;