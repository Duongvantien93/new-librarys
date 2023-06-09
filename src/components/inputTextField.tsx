import { Input } from "antd";
import { Layout, Typography } from "antd";
import { Controller } from "react-hook-form";
import { IFieldProps } from "./inputNumberField";

const InputTextField = ({ name, control }: IFieldProps) => {
  const { Content } = Layout;
  const { Text } = Typography;
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Content>
          <Input {...field} status={error ? "error" : ""} />
          {error && <Text type="danger">{error?.message}</Text>}
        </Content>
      )}
    />
  );
};
export default InputTextField;
