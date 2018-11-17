
var interpreter = (function(){
    var codeObject = $("#code");
    var textInObject = "";
    var codeLines = [];
    var splitUpLines = [];
    var commands = {
        "shift": {
            "##STR##" : {
                "##INT##" : {

                }
            }
        }
    };

    init();

    return {

    };

    function init(){
        codeObject.on("keyup", function codeObjectModified(){
            parseContentOfCodeObject();
            splitUpLines = sanitizeLines();
        });
    }

    function parseContentOfCodeObject(){
        textInObject = codeObject[0].value;
        codeLines = codeObject[0].value.split(/\r?\n/);
    }

    function sanitizeLines(){
        var lines = [];
        codeLines.forEach(function (item) {
            var lineSplitBySpaces = item.split(" ");
            var sanitizedLine = lineSplitBySpaces.filter(function getRidOfEmptyStrings(item){
                return (item !== "" && item !== " ");
            });

            lines.push(sanitizedLine);
        });

        return lines;
    }

    function interpretLines(){
        splitUpLines.forEach(function (item) {

        });
    }

    function executeLine(lineToExecute){

    }
})();