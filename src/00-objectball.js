function gameObject() {
    return {
        'home' : {
            'teamName' : 'Brooklyn Nets',
            'colors' : ['Black', 'White'],
            'players' : {
                'Alan Anderson' : {
                    number : '0',
                    shoe : '16',
                    points : '22',
                    rebounds : '12',
                    assists : '12',
                    steals : '3',
                    blocks : '1',
                    slamDunks : '1'
                },
                'Reggie Evans' : {
                    number : '30',
                    shoe : '14',
                    points : '12',
                    rebounds : '12',
                    assists : '12',
                    steals : '12',
                    blocks : '12',
                    slamDunks : '7'
                },
                'Brook Lopez' : {
                    number : '11',
                    shoe : '17',
                    points : '17',
                    rebounds : '19',
                    assists : '10',
                    steals : '3',
                    blocks : '1',
                    slamDunks : '15'
                },
                'Mason Plumlee' : {
                    number : '1',
                    shoe : '19',
                    points : '26',
                    rebounds : '12',
                    assists : '6',
                    steals : '3',
                    blocks : '8',
                    slamDunks : '5'
                },
                'Jason Terry' : {
                    number : '31',
                    shoe : '15',
                    points : '19',
                    rebounds : '2',
                    assists : '2',
                    steals : '4',
                    blocks : '11',
                    slamDunks : '1'
                }
            }
        },
        'away' : {
            teamName : 'Charlotte Hornets',
            colors : ['Turquoise', 'Purple'],
            players : {
                'Jeff Adrien' : {
                    number : '4',
                    shoe : '18',
                    points : '10',
                    rebounds : '1',
                    assists : '1',
                    steals : '2',
                    blocks : '7',
                    slamDunks : '2'
                },
                'Bismak Biyombo' : {
                    number : '0',
                    shoe : '16',
                    points : '12',
                    rebounds : '4',
                    assists : '7',
                    steals : '7',
                    blocks : '15',
                    slamDunks : '10'
                },
                'DeSagna Diop' : {
                    number : '2',
                    shoe : '14',
                    points : '24',
                    rebounds : '12',
                    assists : '12',
                    steals : '4',
                    blocks : '5',
                    slamDunks : '5'
                },
                'Ben Gordon' : {
                    number : '8',
                    shoe : '15',
                    points : '33',
                    rebounds : '3',
                    assists : '2',
                    steals : '1',
                    blocks : '1',
                    slamDunks : '0'
                },
                'Brendan Haywood' : {
                    number : '33',
                    shoe : '15',
                    points : '6',
                    rebounds : '12',
                    assists : '12',
                    steals : '22',
                    blocks : '5',
                    slamDunks : '12'
                }
            }
        }
    }
};

function numPointsScored(playerName) {
  let game = gameObject();
  for (let team in game) {
    //console.log(team)
      let players = game[team].players
        //console.log(players)
          if (playerName in players) {
              return players[playerName].points
          } else continue
  }
};

function shoeSize (playerName) {
  let game = gameObject();
  for (let team in game) {
    //console.log(team)
      let players = game[team].players
        //console.log(players)
          if (playerName in players) {
              return players[playerName].shoe
          } else continue
  }
};

function teamColors(teamName) {
  let game = gameObject();
  for (let team in game) {
    //console.log(team)
    let teams = game[team]["teamName"]
    //console.log(teams)
    if (teamName === teams) {
      return game[team]["colors"]
    } else continue
  }
};

function teamNames(teamName){
  let game = gameObject();
  for (let team in game) {
    let teams = game[team]["teamName"]
    if (teamName === teams) {
      let playerNames = []
      for (let name in game[team]["players"])
        playerNames.push(name);
      return playerNames
    } else continue
  }
};

function playerNumbers(teamName){
  let game = gameObject();
  for (let team in game) {
    let teams = game[team]["teamName"]
    if (teamName === teams) {
      let plNums = []
      for (let player in game[team]["players"])
        let player
        for (let num in player[number])
          console.log(player[number])
        //console.log(game[team]["players"])
        plNums.push();
      //return plNums
    } else continue
  }
};


console.log(playerNumbers("Charlotte Hornets"));
//console.log(teamNames("Charlotte Hornets"));
//console.log(numPointsScored("Brendan Haywood"));
//console.log(shoeSize("Brendan Haywood"));
//console.log(teamColors("Charlotte Hornets"));
