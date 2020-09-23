import * as yup from "yup";

const employeeSchema = yup.object().shape({
  name: yup.string().required('Entre com o nome'),
  cpf: yup.string('Cpf deve ter 14 digitos').required('Entre com o cpf'),
});

export default employeeSchema;
