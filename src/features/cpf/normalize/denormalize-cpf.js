const denormalizeCPF = cpf => cpf.replace(/[^\d]+/g, '')

export default denormalizeCPF