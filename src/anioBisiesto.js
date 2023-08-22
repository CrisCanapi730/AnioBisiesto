function esBisiesto(año) {
    if (año % 400 === 0) {
        return true;
    } else if (año % 100 === 0 && año % 400 != 0) {
        return false;
    } else if (año % 4 === 0 && año % 100 != 0) {
        return true;
    }
}

export default esBisiesto;
