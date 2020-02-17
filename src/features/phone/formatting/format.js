const format = phone => {
    phone = phone.replace(/[^0-9]+/g, "")
    if (phone.length > 0) {
        phone = phone.substring(-1, 0) + "(" + phone.substring(0)
    }
    if (phone.length > 3) {
        phone = phone.substring(0, 3) + ")" + phone.substring(3)
    }
    if (phone.length == 12) {
        phone = phone.substring(0, 8) + "-" + phone.substring(8)
    } else if (phone.length >= 13) {
        phone = phone.substring(0, 9) + "-" + phone.substring(9, 13)
    }
    return phone
}

export default format