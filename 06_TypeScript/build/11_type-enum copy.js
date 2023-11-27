"use strict";
var DesingColos;
(function (DesingColos) {
    DesingColos["white"] = "#fff";
    DesingColos["black"] = "#000";
})(DesingColos || (DesingColos = {}));
// console.log(DesingColos.black)
var StatusPermission;
(function (StatusPermission) {
    StatusPermission[StatusPermission["ADMIN"] = 10] = "ADMIN";
    StatusPermission[StatusPermission["USER"] = 20] = "USER";
    StatusPermission[StatusPermission["SUPPORT"] = 30] = "SUPPORT";
})(StatusPermission || (StatusPermission = {}));
console.log(StatusPermission.ADMIN);
console.log(StatusPermission.USER);
console.log(StatusPermission.SUPPORT);
