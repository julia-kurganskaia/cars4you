//@ts-check

exports.seed = function (knex) {
    return knex("description").del()
        .then(function() {
            return knex("description").insert([
                { id: 1, about: "This is a 2006 Mitsubishi VRX Outlander that has travelled 105000 kms. Powered by a 2.4 MIVEC engine with tiptronic automatic transmission, it gives you excellent fuel economy from a 4 cylinder engine, and on going assistance with the CVT transmission. Standard is the split tail gate giving you full rear access. And the clincher is the price. Call now for a test drive." },
                { id: 2, about: "Toyota Corolla Axio is a small-sized passenger car. It is convenient and easy to handle. Super economical. It's got enough space, and it is so quiet." },
                { id: 3, about: "In Excellent original condition. Holden Owner’s manual and documentation in original wallet. This example has had an older restoration and presents very well, painted in green metallic over vagabond green upholstery with all the premier luxuries for the 1960’s era, powered by a 138.0 cubic inches inline six-cylinder engine, producing 75 brake horsepower (56 kW) and Hydra-matic 3-speed automatic transmission as standard equipment." },
            ])
        })
};
