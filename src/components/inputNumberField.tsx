import { InputNumber } from "antd";
import { Layout, Typography } from "antd";
import { Controller, Control } from "react-hook-form";

export interface IFieldProps {
  control: Control;
  name: string;
}
const InputNumberField = ({ name, control }: IFieldProps) => {
  const { Content } = Layout;
  const { Text } = Typography;
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Content>
          <InputNumber {...field} status={error ? "error" : ""} />
          {error && <Text type="danger">{error?.message}</Text>}
        </Content>
      )}
    />
  );
};
export default InputNumberField;
