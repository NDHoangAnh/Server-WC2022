const express = require('express');
const coachController = require('../controllers/coachController');
const venueController = require('../controllers/venueController');
const teamController = require('../controllers/teamController');
const playerController = require('../controllers/playerController');
const matchController = require('../controllers/matchController');
const groupController = require('../controllers/groupController');
const knockoutController = require('../controllers/knockoutController');
const statisticController = require('../controllers/statisticController');
const postController = require('../controllers/postController');

const route = express.Router();

// coach
route.get('/coaches', coachController.getAllCoach);
route.get('/coaches/:id', coachController.getCoach);
route.get('/coaches/team/:teamId', coachController.getCoachByTeamId);

// venue
route.get('/stadiums', venueController.getAllVenue);
route.get('/stadiums/:id', venueController.getVenue);

// team
route.get('/teams', teamController.getAllTeams);
route.get('/teams/:id', teamController.getTeam);

// player
route.get('/players', playerController.getAllPlayers);
route.get('/players/:id', playerController.getPlayer);
route.get('/players-top50', playerController.getTopPlayer);
route.get('/player/:teamId', playerController.getPlayerByTeam);

// groups
route.get('/group-stage', groupController.getAllGroup);
route.get('/group-stage/:letter', groupController.getGroup);
route.get('/group-stage/team/:idTeam', groupController.getGroupByTeamId);

// matches 
route.get('/matches', matchController.getAllMatches);
route.get('/matches/:id', matchController.getMatch);

// knock-out
route.get('/knockout-stage', knockoutController.getAllKnockoutStage);
route.get('/knockout-stage/:idTeam', knockoutController.getKnockoutStageById);

// statistic
route.get('/statistic', statisticController.getStatistic);

// post 
route.get('/posts', postController.getAllPost);
route.get('/posts/:idTeam', postController.getPostAboutTeam);
route.get('/post/:matchId', postController.getPostAboutMatch);

module.exports = route;
