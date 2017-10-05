const denormalizeCNPJ = cnpj => cnpj.replace(/[^\d]+/g, '')

export default denormalizeCNPJ