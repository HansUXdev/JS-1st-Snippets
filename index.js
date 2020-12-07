var jsonConcat = require("json-concat");

jsonConcat({
    src: [
        "snippets/types/algorithms.json",
        "snippets/types/browser.json",
        "snippets/types/express.json",
        "snippets/types/javascript.json",
        "snippets/types/mongo.json",
        "snippets/types/node.json",
        "snippets/types/react.json",
        "snippets/types/testing.json",
        "snippets/types/docker.json"
    ],
    dest: "snippets/test.json"
}, function (json) {
    console.log(json);
});

// "snippets/types/utility.json",
// "snippets/types/templates.json"