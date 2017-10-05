const denormalize = cnpj => cnpj.replace(/[^\d]+/g, '')

export default denormalize