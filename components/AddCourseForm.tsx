import {
  Alert,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";

interface DataProp {
  title: string;
  subtitle: string;
  description: string;
  prerequisites: string;
  fees: string;
}

interface FormDisplayMethodProp {
  formDisplayHandle: () => void;
}

const AddCourseForm: React.FC<FormDisplayMethodProp> = ({
  formDisplayHandle,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<DataProp>({
    defaultValues: {
      title: "",
      subtitle: "",
      description: "",
      prerequisites: "",
      fees: "",
    },
  });

  const onSubmit = async (data: DataProp) => {
    Keyboard.dismiss();
    // console.log(data);
    const formData = data;
    try {
      const res = await axios.post(
        "http://localhost:5002/courses/add",
        formData
      );
      console.log(res.data);
      //   Alert.alert("Success! course was added");
    } catch (error) {
      console.error(error);
    } finally {
      formDisplayHandle();
    }
  };
  return (
    <>
      <TouchableOpacity style={styles.cancel_btn} onPress={formDisplayHandle}>
        <Text style={styles.cancel_btn_txt}>X</Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 20, fontWeight: "600", marginBottom: 15 }}>
        Add a course
      </Text>
      <View style={[styles.rn_form_wrapper, { marginBottom: 50 }]}>
        {errors.title && (
          <Text style={styles.error_txt}>This is required.</Text>
        )}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Title"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={styles.text_input}
            />
          )}
          name="title"
        />

        {errors.subtitle && (
          <Text style={styles.error_txt}>This is required.</Text>
        )}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Sub Title"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={styles.text_input}
            />
          )}
          name="subtitle"
        />
        {errors.description && (
          <Text style={styles.error_txt}>This is required.</Text>
        )}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              multiline
              numberOfLines={4}
              maxLength={40}
              placeholder="Description"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={styles.text_area}
            />
          )}
          name="description"
        />
        {errors.prerequisites && (
          <Text style={styles.error_txt}>This is required.</Text>
        )}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              multiline
              numberOfLines={4}
              maxLength={40}
              placeholder="Prerequisites"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={styles.text_area}
            />
          )}
          name="prerequisites"
        />
        {errors.fees && <Text style={styles.error_txt}>This is required.</Text>}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Fees"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={styles.text_input}
              keyboardType="numeric"
            />
          )}
          name="fees"
        />

        <TouchableOpacity
          style={styles.rn_form_btn}
          onPress={handleSubmit(onSubmit)}
        >
          <Text style={styles.rn_frmBtn_txt}>Submit</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default AddCourseForm;

const styles = StyleSheet.create({
  rn_form_wrapper: {
    width: "100%",
    paddingHorizontal: 15,
    justifyContent: "center",
    alignContent: "center",
  },
  cancel_btn: {
    backgroundColor: "#dfe6e9",
    height: 36,
    width: 36,
    borderRadius: 50,
    alignSelf: "flex-start",
    justifyContent: "center",
    alignContent: "center",
  },
  cancel_btn_txt: {
    color: "#ff4757",
    fontSize: 20,
    fontWeight: "500",
    alignSelf: "center",
  },
  input_label: {
    fontSize: 18,
    fontWeight: "500",
    alignSelf: "flex-start",
  },
  error_txt: {
    color: "red",
    marginBottom: 3,
  },
  text_input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
  },
  text_area: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
  },
  rn_form_btn: {
    width: "auto",
    backgroundColor: "#00cec9",
    padding: 8,
    marginTop: 5,
  },
  rn_frmBtn_txt: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "500",
    alignSelf: "center",
  },
});
