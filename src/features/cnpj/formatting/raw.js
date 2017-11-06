const raw = cnpj => cnpj.replace(/[^\d]+/g, '')

export default raw