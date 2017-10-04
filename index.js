const validateEmail = email => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)

const validateCPF = (strCPF) => {
  let sum = 0
  let modulus = 0

  if (strCPF == '00000000000') { return false }
  for (let i = 1; i <= 9; i++) { sum += parseInt(strCPF.substring(i - 1, i)) * (11 - i) }
  modulus = (sum * 10) % 11
  if ((modulus == 10) || (modulus == 11)) { modulus = 0 }
  if (modulus != parseInt(strCPF.substring(9, 10))) { return false }
  sum = 0
  for (let i = 1; i <= 10; i++) { sum += parseInt(strCPF.substring(i - 1, i)) * (12 - i) }
  modulus = (sum * 10) % 11
  if ((modulus == 10) || (modulus == 11)) { modulus = 0 }
  if (modulus != parseInt(strCPF.substring(10, 11))) { return false }
  return true
}

validateCNPJ = (CNPJ) => {
  cnpj = cnpj.replace(/[^\d]+/g, '');

  if (cnpj == '') return false;

  if (cnpj.length != 14)
    return false;

  // Elimina CNPJs invalidos conhecidos
  if (cnpj == "00000000000000" ||
    cnpj == "11111111111111" ||
    cnpj == "22222222222222" ||
    cnpj == "33333333333333" ||
    cnpj == "44444444444444" ||
    cnpj == "55555555555555" ||
    cnpj == "66666666666666" ||
    cnpj == "77777777777777" ||
    cnpj == "88888888888888" ||
    cnpj == "99999999999999")
    return false;

  // Valida DVs
  tamanho = cnpj.length - 2
  numeros = cnpj.substring(0, tamanho);
  digitos = cnpj.substring(tamanho);
  soma = 0
  pos = tamanho - 7;
  for (i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--
    if (pos < 2)
      pos = 9
  }
  resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
  if (resultado != digitos.charAt(0))
    return false

  tamanho = tamanho + 1
  numeros = cnpj.substring(0, tamanho)
  soma = 0
  pos = tamanho - 7
  for (i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--
    if (pos < 2)
      pos = 9
  }
  resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
  if (resultado != digitos.charAt(1))
    return false

  return true
}

exports.validations = {
  validateEmail,
  validateCPF,
  validateCNPJ
}