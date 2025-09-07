let library = [
    {
        title: "A Game of Thrones",
        tags: ["fantasy", "george r.r. martin"],
    },
    {
        title: "Eloquent JavaScript",
        tags: ["technology", "programming", "marijn haverbeke"],
    },
    {
        title: "The Fellowship of the Ring",
        tags: ["fantasy", "jrr tolkien"],
    },
    {
        title: "The Return of the King",
        tags: ["fantasy", "jrr tolkien"],
    },
    {
        title: "The Anthropocene Reviewed",
        tags: ["nonfiction", "john green"],
    },
    {
        title: "The Left Hand of Darkness",
        tags: ["sci-fi", "ursula le guin"],
    },
];


function search(tag) {
    return library.filter(book => book.tags.includes(tag));
}

//going further stuff

// Return only titles
function searchTitles(tag) {
    return library
        .filter(book => book.tags.includes(tag))
        .map(book => book.title);
}

// search by multiple tags ( include all tags)
function searchByTags(tags) {
    return library
        .filter(book => tags.every(tag => book.tags.includes(tag)))
        .map(book => book.title);
}

// search by tags and by author
function searchByTagsAndAuthor(tags, author) {
    return library
        .filter(book =>
            book.tags.includes(author.toLowerCase()) &&
            tags.every(tag => book.tags.includes(tag))
        )
        .map(book => book.title);
}

// Examples
console.log("Search fantasy:", search("fantasy"));
console.log("Search sci-fi:", search("sci-fi"));
console.log("Search nonfiction:", search("nonfiction"));
console.log("Search technology:", search("technology"));

console.log("Search fantasy titles only:", searchTitles("fantasy"));
console.log("Search multiple tags [fantasy, jrr tolkien]:", searchByTags(["fantasy", "jrr tolkien"]));
console.log(
    "Search by tags + author [fantasy, jrr tolkien]:",
    searchByTagsAndAuthor(["fantasy"], "jrr tolkien")
);

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask the user for a tag to search
rl.question("Enter a tag to search for: ", function(tagInput) {
    const results = searchTitles(tagInput);
    if (results.length > 0) {
        console.log("Books found:", results);
    } else {
        console.log("No books found with that tag.");
    }

    // Extra examples showing multiple tags and author search
    console.log("\nExtra examples:");
    console.log("Multiple tags [fantasy, jrr tolkien]:", searchByTags(["fantasy", "jrr tolkien"]));
    console.log(
        "By tags + author [fantasy, jrr tolkien]:",
        searchByTagsAndAuthor(["fantasy"], "jrr tolkien")
    );

    rl.close();
});