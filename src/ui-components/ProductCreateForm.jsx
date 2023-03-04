/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Product } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ProductCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    description: "",
    ingredients: "",
    bakingDay: "",
    typeOfCooking: "",
    shelfLife: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [ingredients, setIngredients] = React.useState(
    initialValues.ingredients
  );
  const [bakingDay, setBakingDay] = React.useState(initialValues.bakingDay);
  const [typeOfCooking, setTypeOfCooking] = React.useState(
    initialValues.typeOfCooking
  );
  const [shelfLife, setShelfLife] = React.useState(initialValues.shelfLife);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setDescription(initialValues.description);
    setIngredients(initialValues.ingredients);
    setBakingDay(initialValues.bakingDay);
    setTypeOfCooking(initialValues.typeOfCooking);
    setShelfLife(initialValues.shelfLife);
    setErrors({});
  };
  const validations = {
    name: [],
    description: [],
    ingredients: [],
    bakingDay: [],
    typeOfCooking: [],
    shelfLife: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
      ? getDisplayValue(currentValue)
      : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          description,
          ingredients,
          bakingDay,
          typeOfCooking,
          shelfLife,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new Product(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "ProductCreateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              description,
              ingredients,
              bakingDay,
              typeOfCooking,
              shelfLife,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description: value,
              ingredients,
              bakingDay,
              typeOfCooking,
              shelfLife,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Ingredients"
        isRequired={false}
        isReadOnly={false}
        value={ingredients}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              ingredients: value,
              bakingDay,
              typeOfCooking,
              shelfLife,
            };
            const result = onChange(modelFields);
            value = result?.ingredients ?? value;
          }
          if (errors.ingredients?.hasError) {
            runValidationTasks("ingredients", value);
          }
          setIngredients(value);
        }}
        onBlur={() => runValidationTasks("ingredients", ingredients)}
        errorMessage={errors.ingredients?.errorMessage}
        hasError={errors.ingredients?.hasError}
        {...getOverrideProps(overrides, "ingredients")}
      ></TextField>
      <TextField
        label="Baking day"
        isRequired={false}
        isReadOnly={false}
        value={bakingDay}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              ingredients,
              bakingDay: value,
              typeOfCooking,
              shelfLife,
            };
            const result = onChange(modelFields);
            value = result?.bakingDay ?? value;
          }
          if (errors.bakingDay?.hasError) {
            runValidationTasks("bakingDay", value);
          }
          setBakingDay(value);
        }}
        onBlur={() => runValidationTasks("bakingDay", bakingDay)}
        errorMessage={errors.bakingDay?.errorMessage}
        hasError={errors.bakingDay?.hasError}
        {...getOverrideProps(overrides, "bakingDay")}
      ></TextField>
      <TextField
        label="Type of cooking"
        isRequired={false}
        isReadOnly={false}
        value={typeOfCooking}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              ingredients,
              bakingDay,
              typeOfCooking: value,
              shelfLife,
            };
            const result = onChange(modelFields);
            value = result?.typeOfCooking ?? value;
          }
          if (errors.typeOfCooking?.hasError) {
            runValidationTasks("typeOfCooking", value);
          }
          setTypeOfCooking(value);
        }}
        onBlur={() => runValidationTasks("typeOfCooking", typeOfCooking)}
        errorMessage={errors.typeOfCooking?.errorMessage}
        hasError={errors.typeOfCooking?.hasError}
        {...getOverrideProps(overrides, "typeOfCooking")}
      ></TextField>
      <TextField
        label="Shelf life"
        isRequired={false}
        isReadOnly={false}
        value={shelfLife}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              ingredients,
              bakingDay,
              typeOfCooking,
              shelfLife: value,
            };
            const result = onChange(modelFields);
            value = result?.shelfLife ?? value;
          }
          if (errors.shelfLife?.hasError) {
            runValidationTasks("shelfLife", value);
          }
          setShelfLife(value);
        }}
        onBlur={() => runValidationTasks("shelfLife", shelfLife)}
        errorMessage={errors.shelfLife?.errorMessage}
        hasError={errors.shelfLife?.hasError}
        {...getOverrideProps(overrides, "shelfLife")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
