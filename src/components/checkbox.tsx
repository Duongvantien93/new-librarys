import { InputNumber } from "antd";
import { Layout, Typography } from "antd";
import { Controller, Control } from "react-hook-form";
import { Checkbox } from "antd";

export interface IFieldProps {
  control: Control;
  name: string;
}
const CheckBox = ({ name, control }: IFieldProps) => {
  const { Content } = Layout;
  const { Text } = Typography;
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Content>
          <Checkbox {...field} />
          {error && <Text type="danger">{error?.message}</Text>}
        </Content>
      )}
    />
  );
};
export default CheckBox;
