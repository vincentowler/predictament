import React from "react";
import SelectInput from "./SelectInput";
import TextInput from "./TextInput";

const SelectWithOther = props => (
  <div>
    <SelectInput {...props} />
    {props.value === "Other" && <TextInput />}
  </div>
);

export default SelectWithOther;
