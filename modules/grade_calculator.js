exports.calc = (itpmGrade, itpGrade) => {
    var result = 0.75 * itpGrade + 0.25 * itpmGrade;
    return parseFloat(result.toFixed(1));
}