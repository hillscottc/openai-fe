import {Button, Paper, Typography} from "@mui/material";
import {useForm} from "react-hook-form";
import {FormInputText} from "./components/form-components/FormInputText";
import {FormInputMultiCheckbox} from "./components/form-components/FormInputMultiCheckbox";
import {FormInputDropdown} from "./components/form-components/FormInputDropdown";
import {FormInputSlider} from "./components/form-components/FormInputSlider";
import {FormInputRadio} from "./components/form-components/FormInputRadio";

interface IFormInput {
    textValue: string;
    radioValue: string;
    checkboxValue: string[];
    dateValue: Date;
    dropdownValue: string;
    sliderValue: number;
}

const defaultValues = {
    textValue: "",
    radioValue: "",
    checkboxValue: [],
    dateValue: new Date(),
    dropdownValue: "",
    sliderValue: 0,
};
export const FormDemo = () => {
    const {handleSubmit, reset, control, setValue} = useForm<IFormInput>({
        defaultValues: defaultValues,
    });

    const onSubmit = (data: IFormInput) => console.log(data);

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
            <FormInputMultiCheckbox
                control={control}
                setValue={setValue}
                name={"checkboxValue"}
                label={"Checkbox Input"}
            />
            <FormInputSlider
                name={"sliderValue"}
                control={control}
                setValue={setValue}
                label={"Slider Input"}
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

export default FormDemo;
