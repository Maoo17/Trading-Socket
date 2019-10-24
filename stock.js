var stock = {
    randomAroundZero: function () {
        return Math.random() > 0.5 ? 1 : -1;
    },

    getStockPrice: function (input) {
        let start = input.startingPrice;
        let rate = input.rate;
        let variance = input.variance;

        return Math.round(start * rate + variance * stock.randomAroundZero());
    }
};

module.exports = stock;
