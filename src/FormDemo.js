import {Button, Paper, Typography} from "@mui/material";
import {useForm} from "react-hook-form";
import {FormInputText} from "./components/form-components/FormInputText";
import {FormInputDropdown} from "./components/form-components/FormInputDropdown";

const defaultValues = {
  person1: "",
  person2: "",
  dropdownValue: "",
};
export const FormDemo = () => {
  const {handleSubmit, reset, control, setValue} = useForm({
    defaultValues: defaultValues,
  });

  const onSubmit = (data) => console.log(data);

  return (
    <Paper
      style={{
        display: "grid",
        gridRowGap: "20px",
        padding: "20px",
        margin: "5px 10px",
      }}
    >
      <Typography variant="h4">Scott's Chatbot</Typography>

      <FormInputText name="person1" control={control} label="Person 1"/>
      <FormInputText name="person2" control={control} label="Person 2"/>

      <FormInputDropdown
        name="dropdownValue"
        control={control}
        label="Dropdown Input"
      />

      <Button onClick={handleSubmit(onSubmit)} variant={"contained"}>
        Submit
      </Button>
      <Button onClick={() => reset()} variant={"outlined"}>
        Reset
      </Button>
    </Paper>
  );
};