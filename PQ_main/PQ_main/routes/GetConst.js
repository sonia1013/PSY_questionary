﻿
function Get(thing) {
    switch (thing) {
        case "mongoPath":
            return 'mongodb://localhost:27017/';
        case "QQ/EQ":
            return 'https://leon123858.github.io/questionareSystem/UCS/confirm.html';
        default:
            return '';
    }
}


module.exports.Get = Get;