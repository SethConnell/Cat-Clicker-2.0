var model = {
    catscore: [0, 0, 0, 0, 0],
    pic: ["<img src='pic1.jpg' id='catpic1' class='image'></img>", 
          "<img src='pic2.jpg' id='catpic2' class='image'></img>", 
          "<img src='pic3.jpg' id='catpic3' class='image'></img>", 
          "<img src='pic4.jpg' id='catpic4' class='image'></img>", 
          "<img src='pic5.jpg' id='catpic5' class='image'></img>"],
    names: ["Garfield", "Heathcliff", "Grumpy", "Sylvester", "Felix"],
    number: 0
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
    waitforclick: function (num) {
        $("#changestuff").click(function() {
            var name = $("#name").val();
            var url = $("#imgurl").val();
            var score = Number($("#clicks").val());
            view.updateInfo(name, num, url, score);
        })
    },
    checkForClicks: function () {
        var x;
        for (x = 0; x < 5; x++){
            document.getElementById("cat" + x).addEventListener("click", function(e) {
                if ($(this).text() == model.names[0]) {
                    view.refreshBoard(model.pic[0], model.catscore[0]);
                    view.appendName(model.names[0]);
                    model.number = 0;
                    octopus.waitforclick(model.number);
                    $("#catpic1").click(function () {
                        model.catscore[0] = model.catscore[0] + 1;
                        $("#label").text(model.catscore[0]);
                    });
                }
                if ($(this).text() == model.names[1]) {
                    view.refreshBoard(model.pic[1], model.catscore[1]);
                    view.appendName(model.names[1]);
                    model.number = 1;
                    octopus.waitforclick(model.number);
                    $("#catpic2").click(function () {
                        model.catscore[1] = model.catscore[1] + 1;
                        $("#label").text(model.catscore[1]);
                    });
                }
                if ($(this).text() == model.names[2]) {
                    view.refreshBoard(model.pic[2], model.catscore[2]);
                    view.appendName(model.names[2]);
                    model.number = 2;
                    octopus.waitforclick(model.number);
                    $("#catpic3").click(function () {
                        model.catscore[2] = model.catscore[2] + 1;
                        $("#label").text(model.catscore[2]);
                    });
                }
                if ($(this).text() == model.names[3]) {
                    view.refreshBoard(model.pic[3], model.catscore[3]);
                    view.appendName(model.names[3]);
                    model.number = 3;
                    octopus.waitforclick(model.number);
                    $("#catpic4").click(function () {
                        model.catscore[3] = model.catscore[3] + 1;
                        $("#label").text(model.catscore[3]);
                    });
                }
                if ($(this).text() == model.names[4]) {
                    view.refreshBoard(model.pic[4], model.catscore[4]);
                    view.appendName(model.names[4]);
                    model.number = 4;
                    octopus.waitforclick(model.number);
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
    },
    appendName: function (name) {
        $("#stage").append("<h3 id='catname'>" + name +"</h3>");
    },
    changeName: function (name, num) {
        $("#catname").text(name);
        $("#cat" + num).text(name);
    },
    changeURL: function (url) {
        $("img").attr("src", url);
    },
    changeScore: function (num, score) {
        model.catscore[num] = score;
        $("#label").text(score);
    },
    updateInfo: function(name, num, url, score) {
        this.changeName(name, num);
        this.changeURL(url);
        this.changeScore(num, score)
    }
};

$('#adminbutton').click(function(){
    $(".adminstuff").toggleClass("show");
});

octopus.init();
