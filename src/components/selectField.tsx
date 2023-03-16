import { Select } from "antd";
import { useController, UseControllerProps } from "react-hook-form";
import { Layout, Typography } from "antd";

interface IOptionSelectField {
  value: string;
  label: string;
}

const SelectField = (props: UseControllerProps) => {
  const {
    field,
    fieldState: { error },
  } = useController(props);
  const { Content } = Layout;
  const { Text } = Typography;
  return (
    <Content>
      <Select
        {...field}
        showSearch
        placeholder="Select a person"
        optionFilterProp="children"
        options={[] as IOptionSelectField[]}
      />
      {error && <Text type="danger">{error?.message}</Text>}
    </Content>
  );
};
export default SelectField;
