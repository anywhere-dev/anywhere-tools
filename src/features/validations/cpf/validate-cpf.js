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

export default validateCPF