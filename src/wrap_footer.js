/* jshint ignore:start */
if (callback) {
    require(["strophe"], function(o){
        callback(o.Strophe,o.$build,o.$msg,o.$iq,o.$pres);
    });
}


})(function (Strophe, build, msg, iq, pres) {
    module.exports = {
        Strophe: Strophe,
        build: build,
        msg: msg,
        iq: iq,
        pres: pres,
    }
});
/* jshint ignore:end */
