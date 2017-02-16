var model = {
    catscore: [0, 0, 0, 0, 0],
    pic: ["<img src='pic1.jpg' id='catpic1' class='image'></img>", 
          "<img src='pic2.jpg' id='catpic2' class='image'></img>", 
          "<img src='pic3.jpg' id='catpic3' class='image'></img>", 
          "<img src='pic4.jpg' id='catpic4' class='image'></img>", 
          "<img src='pic5.jpg' id='catpic5' class='image'></img>"],
    names: ["KitKat", "Jojo", "Jose", "McQuire", "Rolen"]
};


var octopus = {
    init: function () {
        var i;
        for (i = 0; i < 5; i++) {
            var loc = "cat" + i;
            view.appendListItems(loc, model.names[i]);
            this.checkForClicks();
        }
    },
    checkForClicks: function () {
        var x;
        for (x = 0; x < 5; x++){
            document.getElementById("cat" + x).addEventListener("click", function(e) {
                if ($(this).text() == "KitKat") {
                    view.refreshBoard(model.pic[0], model.catscore[0])
                    $("#catpic1").click(function () {
                        model.catscore[0] = model.catscore[0] + 1;
                        $("#label").text(model.catscore[0]);
                    });
                }
                if ($(this).text() == "Jojo") {
                    view.refreshBoard(model.pic[1], model.catscore[1])
                    $("#catpic2").click(function () {
                        model.catscore[1] = model.catscore[1] + 1;
                        $("#label").text(model.catscore[1]);
                    });
                }
                if ($(this).text() == "Jose") {
                    view.refreshBoard(model.pic[2], model.catscore[2])
                    $("#catpic3").click(function () {
                        model.catscore[2] = model.catscore[2] + 1;
                        $("#label").text(model.catscore[2]);
                    });
                }
                if ($(this).text() == "McQuire") {
                    view.refreshBoard(model.pic[3], model.catscore[3])
                    $("#catpic4").click(function () {
                        model.catscore[3] = model.catscore[3] + 1;
                        $("#label").text(model.catscore[3]);
                    });
                }
                if ($(this).text() == "Rolen") {
                    view.refreshBoard(model.pic[4], model.catscore[4])
                    $("#catpic5").click(function () {
                        model.catscore[4] = model.catscore[4] + 1;
                        $("#label").text(model.catscore[4]);
                    });
                }
            });
        }
    }
};

var view = {
    appendListItems : function (x,y) {
        $("#" + String(x)).append(y);
    },
    appendPhoto : function (picture) {
        $("#stage").append(picture);
    },
    appendScore : function (score) {
        $("#stage").append("<p id='label'>" + score + "</p>");
    },
    clearBoard : function () {
        $("#stage").empty();
    },
    refreshBoard : function (picture, label) {
        this.clearBoard();
        this.appendPhoto(picture);
        this.appendScore(label);
    }
};

octopus.init();