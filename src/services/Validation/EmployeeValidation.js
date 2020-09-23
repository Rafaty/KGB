import * as yup from "yup";

const employeeSchema = yup.object().shape({
  nome: yup.string().required("Entre com o nome"),
  cpf: yup
    .string()
    .length(11, "CPF deve ter 11 digitos")
    .required("Entre com o cpf"),
});

export default employeeSchema;
