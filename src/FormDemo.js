import {Button, Paper, Typography} from "@mui/material";
import {useForm} from "react-hook-form";
import {FormInputText} from "./components/form-components/FormInputText";
import {FormInputDropdown} from "./components/form-components/FormInputDropdown";
import {FormInputRadio} from "./components/form-components/FormInputRadio";

const defaultValues = {
  textValue: "",
  radioValue: "",
  checkboxValue: [],
  dropdownValue: "",
  sliderValue: 0,
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
        margin: "10px 300px",
      }}
    >
      <Typography variant="h4"> Form Demo</Typography>

      <FormInputText name="textValue" control={control} label="Text Input"/>
      <FormInputRadio
        name={"radioValue"}
        control={control}
        label={"Radio Input"}
      />
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