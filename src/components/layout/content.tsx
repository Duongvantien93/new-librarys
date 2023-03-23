import { Layout } from "antd";

const ContentBox = ({ children }: { children: React.ReactNode }) => {
  const { Content } = Layout;
  return <Content>{children}</Content>;
};
export default ContentBox;
