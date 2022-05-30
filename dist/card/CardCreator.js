"use strict";
exports.__esModule = true;
exports.CardCreator = void 0;
var ManagerCard_1 = require("./ManagerCard");
var AirStripCard_1 = require("./AirStripCard");
var SorterCard_1 = require("./SorterCard");
var TransportCard_1 = require("./TransportCard");
var JanitorCard_1 = require("./JanitorCard");
var CardCreator = /** @class */ (function () {
    function CardCreator() {
    }
    CardCreator.createCard = function (card) {
        if (card.cardType === "manager" && card.cardNo < 100) {
            return new ManagerCard_1.ManagerCard(card.cardNo, card.cardName, card.cardType);
        }
        else if (card.cardType === "airStrip" &&
            card.cardNo >= 100 &&
            card.cardNo < 200) {
            return new AirStripCard_1.AirStripCard(card.cardNo, card.cardName, card.cardType);
        }
        else if (card.cardType === "sorter" &&
            card.cardNo >= 201 &&
            card.cardNo < 500) {
            return new SorterCard_1.SorterCard(card.cardNo, card.cardName, card.cardType);
        }
        else if (card.cardType === "transporter" &&
            card.cardNo >= 501 &&
            card.cardNo < 999) {
            return new TransportCard_1.TransportCard(card.cardNo, card.cardName, card.cardType);
        }
        else if (card.cardType === "janitor" && card.cardNo >= 1000) {
            return new JanitorCard_1.JanitorCard(card.cardNo, card.cardName, card.cardType);
        }
        else {
            throw new Error("card is not valid").message.toUpperCase();
        }
    };
    return CardCreator;
}());
exports.CardCreator = CardCreator;
