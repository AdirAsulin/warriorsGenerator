const types = ["archer", "axeman", "swordman"];
const warriorsImage = {
    archer: "https://chupacdn.s3.amazonaws.com/catalog/product/cache/1/thumbnail/1280x/17f82f742ffe127f42dca9de82fb58b1/a/r/archer-game-character-sprites-9162_imgs_9162_1.jpg",
    swordman: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQo-eP1hGGtvAmBaGTdDE96SZYNstdkXW_TaJxNUaR1-zGw6Xh6&usqp=CAU",
    axeman: "https://cdnb.artstation.com/p/assets/images/images/002/968/783/large/nikolay-naydenov-axeman1.jpg?1467890079",
};

function warriorGenerator() {
    const level = Math.floor(Math.random() * 10);
    const power = Math.floor(Math.random() * 100);
    const type = types[Math.floor(Math.random() * types.length)]
    const damage = level * power;
    const image = warriorsImage
    return {
        level,
        power,
        damage,
        image,
        type
    }
}

function drawWarrior(numberOfwarriors) {
    const warriorsArray = []
    for (let index = 0; index < numberOfwarriors; index++) {
        warriorsArray.push(warriorGenerator())
    }
    return warriorsArray
}
const createBtn = document.getElementById("createBtn");
createBtn.addEventListener("click", draw)

function draw() {
    const numberOfwarriors = document.getElementById("warriorsInputNumber").value
    const result = drawWarrior(numberOfwarriors)
    console.log(result);
}