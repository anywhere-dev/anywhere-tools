const denormalize = cpf => cpf.replace(/[^\d]+/g, '')

export default denormalize