var movieList = [
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.67nzDntKrObLrCOBGMvSqwHaLH%26pid%3DApi&f=1&ipt=bed76e6ad7a9acc5fcb18b7ecc8467ed8bbd8fb3559acc7f6fb29e9fb9f15576&ipo=images",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.gej05TpKc_Iw6lvPWtPRRgHaLj%26pid%3DApi&f=1&ipt=46d610273e02206879dccf8b4331ea2b8b053a70921ae07cfe117f5c1638face&ipo=images",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.6WES5nhdyXVDPrxHG0vCvgHaKz%26pid%3DApi&f=1&ipt=3d829c43417a2815e505cb9e802e440153471f1ecb1f9f1132da78b653737db6&ipo=images",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.8OXO8RoijKG9Ta4KBQ5A0gHaLH%26pid%3DApi&f=1&ipt=e975e827333e09f00e3419ee0ab40f44967c4d0d63dbdce8e0342869fd27f3af&ipo=images",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.O8Eflx2BrWtbcrXNc-CpVQHaLH%26pid%3DApi&f=1&ipt=075130f0852e30742e3840f195b3eed4f8258a95bfd95765ec46e8fabc60306c&ipo=images",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.4U3yUm8yiaD4LDAN4DBiCwHaK-%26pid%3DApi&f=1&ipt=58818f2cee254cd2a82463019ebf73ee0e55fb88521533826352e9467d3b090b&ipo=images"
];


for (var i = 0 ; i < movieList.length ; i++) {
    document.write("<img src=" + movieList[i] + ">");
} 

document.write("<hr>");

var total = movieList.length;
console.log(total)
while (total > 0) {
    document.write("<img src=" + movieList[total-1] + ">");
    total--;
}
