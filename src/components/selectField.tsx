import { Select } from "antd";

interface IOptionSelectField {
  value: string;
  label: string;
}
const SelectField = () => {
  return (
    <Select
      showSearch
      placeholder="Select a person"
      optionFilterProp="children"
      // filterOption={(input, option) =>
      //   (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
      // }
      options={[] as IOptionSelectField[]}
    />
  );
};
export default SelectField;
