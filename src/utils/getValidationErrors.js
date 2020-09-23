
export default function getValidationErrors(err) {
  let listOfErros =[]

  err.inner.forEach(error => {
    listOfErros.push(error.message)
  });

  return listOfErros;
}