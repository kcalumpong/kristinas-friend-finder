var tableArray = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(tableArray);
        console.log(tableArray);
    });

    app.post('/api/friends', function (req, res) {
        var userInput = req.body;
        var userScores = userInput.scores;
        var totalDiff = 100;
        var bestmatch = {
            score: "",
            name: "",
            photo: "",
            diff: 100
        }

        for (var i = 0; i < tableArray.length; i++) {
            var currentFriend = tableArray[i]
            var diff = 0
            for (var j = 0; j < currentFriend.scores.length; j++) {
                diff += Math.abs(parseInt(currentFriend.scores[j] - parseInt(userScores[j])));

            }
            if (diff < bestmatch.diff) {
                bestmatch.name = currentFriend.name;
                bestmatch.photo = currentFriend.photo;
                bestmatch.diff = diff;
            } 

        }
        tableArray.push(userInput);
        res.json(bestmatch);
    });
};

