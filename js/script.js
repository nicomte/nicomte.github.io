const villagerToGuess = {};
let villagersData = [];
const guessQuality = { bezeichnung: 0, species: 0, gender: 0, personality: 0 };
let gameStatus = 0;

const villagerList = [{ "Name": "Ace", "Species": "Bird", "Gender": "Male", "Personality": "Jock" },
{ "Name": "Admiral", "Species": "Bird", "Gender": "Male", "Personality": "Cranky" },
{ "Name": "Agent S", "Species": "Squirrel", "Gender": "Female", "Personality": "Peppy" },
{ "Name": "Agnes", "Species": "Pig", "Gender": "Female", "Personality": "Big sister" },
{ "Name": "Al", "Species": "Gorilla", "Gender": "Male", "Personality": "Lazy" },
{ "Name": "Alfonso", "Species": "Alligator", "Gender": "Male", "Personality": "Lazy" },
{ "Name": "Alice", "Species": "Koala", "Gender": "Female", "Personality": "Normal" },
{ "Name": "Alli", "Species": "Alligator", "Gender": "Female", "Personality": "Snooty" },
{ "Name": "Amelia", "Species": "Eagle", "Gender": "Female", "Personality": "Snooty" },
{ "Name": "Anabelle", "Species": "Anteater", "Gender": "Female", "Personality": "Peppy" },
{ "Name": "Anchovy", "Species": "Bird", "Gender": "Male", "Personality": "Lazy" },
{ "Name": "Angus", "Species": "Bull", "Gender": "Male", "Personality": "Cranky" },
{ "Name": "Anicotti", "Species": "Mouse", "Gender": "Female", "Personality": "Peppy" },
{ "Name": "Ankha", "Species": "Cat", "Gender": "Female", "Personality": "Snooty" },
{ "Name": "Annalisa", "Species": "Anteater", "Gender": "Female", "Personality": "Normal" },
{ "Name": "Annalise", "Species": "Horse", "Gender": "Female", "Personality": "Snooty" },
{ "Name": "Antonio", "Species": "Anteater", "Gender": "Male", "Personality": "Jock" },
{ "Name": "Apollo", "Species": "Eagle", "Gender": "Male", "Personality": "Cranky" },
{ "Name": "Apple", "Species": "Hamster", "Gender": "Female", "Personality": "Peppy" },
{ "Name": "Astrid", "Species": "Kangaroo", "Gender": "Female", "Personality": "Snooty" },
{ "Name": "Audie", "Species": "Wolf", "Gender": "Female", "Personality": "Peppy" },
{ "Name": "Aurora", "Species": "Penguin", "Gender": "Female", "Personality": "Normal" },
{ "Name": "Ava", "Species": "Chicken", "Gender": "Female", "Personality": "Normal" },
{ "Name": "Avery", "Species": "Eagle", "Gender": "Male", "Personality": "Cranky" },
{ "Name": "Axel", "Species": "Elephant", "Gender": "Male", "Personality": "Jock" },
{ "Name": "Azalea", "Species": "Rhinoceros", "Gender": "Female", "Personality": "Snooty" },
{ "Name": "Baabara", "Species": "Sheep", "Gender": "Female", "Personality": "Snooty" },
{ "Name": "Bam", "Species": "Deer", "Gender": "Male", "Personality": "Jock" },
{ "Name": "Bangle", "Species": "Tiger", "Gender": "Female", "Personality": "Peppy" },
{ "Name": "Barold", "Species": "Bear cub", "Gender": "Male", "Personality": "Lazy" },
{ "Name": "Bea", "Species": "Dog", "Gender": "Female", "Personality": "Normal" },
{ "Name": "Beardo", "Species": "Bear", "Gender": "Male", "Personality": "Smug" },
{ "Name": "Beau", "Species": "Deer", "Gender": "Male", "Personality": "Lazy" },
{ "Name": "Becky", "Species": "Chicken", "Gender": "Female", "Personality": "Snooty" },
{ "Name": "Bella", "Species": "Mouse", "Gender": "Female", "Personality": "Peppy" },
{ "Name": "Benedict", "Species": "Chicken", "Gender": "Male", "Personality": "Lazy" },
{ "Name": "Benjamin", "Species": "Dog", "Gender": "Male", "Personality": "Lazy" },
{ "Name": "Bertha", "Species": "Hippo", "Gender": "Female", "Personality": "Normal" },
{ "Name": "Bettina", "Species": "Mouse", "Gender": "Female", "Personality": "Normal" },
{ "Name": "Bianca", "Species": "Tiger", "Gender": "Female", "Personality": "Peppy" },
{ "Name": "Biff", "Species": "Hippo", "Gender": "Male", "Personality": "Jock" },
{ "Name": "Big Top", "Species": "Elephant", "Gender": "Male", "Personality": "Lazy" },
{ "Name": "Bill", "Species": "Duck", "Gender": "Male", "Personality": "Jock" },
{ "Name": "Billy", "Species": "Goat", "Gender": "Male", "Personality": "Jock" },
{ "Name": "Biskit", "Species": "Dog", "Gender": "Male", "Personality": "Lazy" },
{ "Name": "Bitty", "Species": "Hippo", "Gender": "Female", "Personality": "Snooty" },
{ "Name": "Blaire", "Species": "Squirrel", "Gender": "Female", "Personality": "Snooty" },
{ "Name": "Blanche", "Species": "Ostrich", "Gender": "Female", "Personality": "Snooty" },
{ "Name": "Bluebear", "Species": "Bear cub", "Gender": "Female", "Personality": "Peppy" },
{ "Name": "Bob", "Species": "Cat", "Gender": "Male", "Personality": "Lazy" },
{ "Name": "Bonbon", "Species": "Rabbit", "Gender": "Female", "Personality": "Peppy" },
{ "Name": "Bones", "Species": "Dog", "Gender": "Male", "Personality": "Lazy" },
{ "Name": "Boomer", "Species": "Penguin", "Gender": "Male", "Personality": "Lazy" },
{ "Name": "Boone", "Species": "Gorilla", "Gender": "Male", "Personality": "Jock" },
{ "Name": "Boots", "Species": "Alligator", "Gender": "Male", "Personality": "Jock" },
{ "Name": "Boris", "Species": "Pig", "Gender": "Male", "Personality": "Cranky" },
{ "Name": "Boyd", "Species": "Gorilla", "Gender": "Male", "Personality": "Cranky" },
{ "Name": "Bree", "Species": "Mouse", "Gender": "Female", "Personality": "Snooty" },
{ "Name": "Broccolo", "Species": "Mouse", "Gender": "Male", "Personality": "Lazy" },
{ "Name": "Broffina", "Species": "Chicken", "Gender": "Female", "Personality": "Snooty" },
{ "Name": "Bruce", "Species": "Deer", "Gender": "Male", "Personality": "Cranky" },
{ "Name": "Bubbles", "Species": "Hippo", "Gender": "Female", "Personality": "Peppy" },
{ "Name": "Buck", "Species": "Horse", "Gender": "Male", "Personality": "Jock" },
{ "Name": "Bud", "Species": "Lion", "Gender": "Male", "Personality": "Jock" },
{ "Name": "Bunnie", "Species": "Rabbit", "Gender": "Female", "Personality": "Peppy" },
{ "Name": "Butch", "Species": "Dog", "Gender": "Male", "Personality": "Cranky" },
{ "Name": "Buzz", "Species": "Eagle", "Gender": "Male", "Personality": "Cranky" },
{ "Name": "Cally", "Species": "Squirrel", "Gender": "Female", "Personality": "Normal" },
{ "Name": "Camofrog", "Species": "Frog", "Gender": "Male", "Personality": "Cranky" },
{ "Name": "Canberra", "Species": "Koala", "Gender": "Female", "Personality": "Big sister" },
{ "Name": "Candi", "Species": "Mouse", "Gender": "Female", "Personality": "Peppy" },
{ "Name": "Carmen", "Species": "Rabbit", "Gender": "Female", "Personality": "Peppy" },
{ "Name": "Caroline", "Species": "Squirrel", "Gender": "Female", "Personality": "Normal" },
{ "Name": "Carrie", "Species": "Kangaroo", "Gender": "Female", "Personality": "Normal" },
{ "Name": "Cashmere", "Species": "Sheep", "Gender": "Female", "Personality": "Snooty" },
{ "Name": "Celia", "Species": "Eagle", "Gender": "Female", "Personality": "Normal" },
{ "Name": "Cephalobot", "Species": "Octopus", "Gender": "Male", "Personality": "Smug" },
{ "Name": "Cesar", "Species": "Gorilla", "Gender": "Male", "Personality": "Cranky" },
{ "Name": "Chabwick", "Species": "Penguin", "Gender": "Male", "Personality": "Lazy" },
{ "Name": "Chadder", "Species": "Mouse", "Gender": "Male", "Personality": "Smug" },
{ "Name": "Chai", "Species": "Elephant", "Gender": "Female", "Personality": "Peppy" },
{ "Name": "Charlise", "Species": "Bear", "Gender": "Female", "Personality": "Big sister " },
{ "Name": "Chelsea", "Species": "Deer", "Gender": "Female", "Personality": "Normal" },
{ "Name": "Cheri", "Species": "Bear cub", "Gender": "Female", "Personality": "Peppy" },
{ "Name": "Cherry", "Species": "Dog", "Gender": "Female", "Personality": "Big sister" },
{ "Name": "Chester", "Species": "Bear cub", "Gender": "Male", "Personality": "Lazy" },
{ "Name": "Chevre", "Species": "Goat", "Gender": "Female", "Personality": "Normal" },
{ "Name": "Chief", "Species": "Wolf", "Gender": "Male", "Personality": "Cranky" },
{ "Name": "Chops", "Species": "Pig", "Gender": "Male", "Personality": "Smug" },
{ "Name": "Chow", "Species": "Bear", "Gender": "Male", "Personality": "Cranky" },
{ "Name": "Chrissy", "Species": "Rabbit", "Gender": "Female", "Personality": "Peppy" },
{ "Name": "Claude", "Species": "Rabbit", "Gender": "Male", "Personality": "Lazy" },
{ "Name": "Claudia", "Species": "Tiger", "Gender": "Female", "Personality": "Snooty" },
{ "Name": "Clay", "Species": "Hamster", "Gender": "Male", "Personality": "Lazy" },
{ "Name": "Cleo", "Species": "Horse", "Gender": "Female", "Personality": "Snooty" },
{ "Name": "Clyde", "Species": "Horse", "Gender": "Male", "Personality": "Lazy" },
{ "Name": "Coach", "Species": "Bull", "Gender": "Male", "Personality": "Jock" },
{ "Name": "Cobb", "Species": "Pig", "Gender": "Male", "Personality": "Jock" },
{ "Name": "Coco", "Species": "Rabbit", "Gender": "Female", "Personality": "Normal" },
{ "Name": "Cole", "Species": "Rabbit", "Gender": "Male", "Personality": "Lazy" },
{ "Name": "Colton", "Species": "Horse", "Gender": "Male", "Personality": "Smug" },
{ "Name": "Cookie", "Species": "Dog", "Gender": "Female", "Personality": "Peppy" },
{ "Name": "Cousteau", "Species": "Frog", "Gender": "Male", "Personality": "Jock" },
{ "Name": "Cranston", "Species": "Ostrich", "Gender": "Male", "Personality": "Lazy" },
{ "Name": "Croque", "Species": "Frog", "Gender": "Male", "Personality": "Cranky" },
{ "Name": "Cube", "Species": "Penguin", "Gender": "Male", "Personality": "Lazy" },
{ "Name": "Curlos", "Species": "Sheep", "Gender": "Male", "Personality": "Smug " },
{ "Name": "Curly", "Species": "Pig", "Gender": "Male", "Personality": "Jock" },
{ "Name": "Curt", "Species": "Bear", "Gender": "Male", "Personality": "Cranky" },
{ "Name": "Cyd", "Species": "Elephant", "Gender": "Male", "Personality": "Cranky" },
{ "Name": "Cyrano", "Species": "Anteater", "Gender": "Male", "Personality": "Cranky" },
{ "Name": "Daisy", "Species": "Dog", "Gender": "Female", "Personality": "Normal" },
{ "Name": "Deena", "Species": "Duck", "Gender": "Female", "Personality": "Normal" },
{ "Name": "Deirdre", "Species": "Deer", "Gender": "Female", "Personality": "Big sister" },
{ "Name": "Del", "Species": "Alligator", "Gender": "Male", "Personality": "Cranky" },
{ "Name": "Deli", "Species": "Monkey", "Gender": "Male", "Personality": "Lazy" },
{ "Name": "Derwin", "Species": "Duck", "Gender": "Male", "Personality": "Lazy" },
{ "Name": "Diana", "Species": "Deer", "Gender": "Female", "Personality": "Snooty" },
{ "Name": "Diva", "Species": "Frog", "Gender": "Female", "Personality": "Big sister" },
{ "Name": "Dizzy", "Species": "Elephant", "Gender": "Male", "Personality": "Lazy" },
{ "Name": "Dobie", "Species": "Wolf", "Gender": "Male", "Personality": "Cranky " },
{ "Name": "Doc", "Species": "Rabbit", "Gender": "Male", "Personality": "Lazy" },
{ "Name": "Dom", "Species": "Sheep", "Gender": "Male", "Personality": "Jock" },
{ "Name": "Dora", "Species": "Mouse", "Gender": "Female", "Personality": "Normal" },
{ "Name": "Dotty", "Species": "Rabbit", "Gender": "Female", "Personality": "Peppy" },
{ "Name": "Drago", "Species": "Alligator", "Gender": "Male", "Personality": "Lazy" },
{ "Name": "Drake", "Species": "Duck", "Gender": "Male", "Personality": "Lazy" },
{ "Name": "Drift", "Species": "Frog", "Gender": "Male", "Personality": "Jock" },
{ "Name": "Ed", "Species": "Horse", "Gender": "Male", "Personality": "Smug " },
{ "Name": "Egbert", "Species": "Chicken", "Gender": "Male", "Personality": "Lazy" },
{ "Name": "Elise", "Species": "Monkey", "Gender": "Female", "Personality": "Snooty" },
{ "Name": "Ellie", "Species": "Elephant", "Gender": "Female", "Personality": "Normal" },
{ "Name": "Elmer", "Species": "Horse", "Gender": "Male", "Personality": "Lazy" },
{ "Name": "Eloise", "Species": "Elephant", "Gender": "Female", "Personality": "Snooty" },
{ "Name": "Elvis", "Species": "Lion", "Gender": "Male", "Personality": "Cranky" },
{ "Name": "Erik", "Species": "Deer", "Gender": "Male", "Personality": "Lazy" },
{ "Name": "Étoile", "Species": "Sheep", "Gender": "Female", "Personality": "Normal" },
{ "Name": "Eugene", "Species": "Koala", "Gender": "Male", "Personality": "Smug" },
{ "Name": "Eunice", "Species": "Sheep", "Gender": "Female", "Personality": "Normal" },
{ "Name": "Faith", "Species": "Koala", "Gender": "Female", "Personality": "Big sister " },
{ "Name": "Fang", "Species": "Wolf", "Gender": "Male", "Personality": "Cranky" },
{ "Name": "Fauna", "Species": "Deer", "Gender": "Female", "Personality": "Normal" },
{ "Name": "Felicity", "Species": "Cat", "Gender": "Female", "Personality": "Peppy" },
{ "Name": "Filbert", "Species": "Squirrel", "Gender": "Male", "Personality": "Lazy" },
{ "Name": "Flip", "Species": "Monkey", "Gender": "Male", "Personality": "Jock" },
{ "Name": "Flo", "Species": "Penguin", "Gender": "Female", "Personality": "Big sister" },
{ "Name": "Flora", "Species": "Ostrich", "Gender": "Female", "Personality": "Peppy" },
{ "Name": "Flurry", "Species": "Hamster", "Gender": "Female", "Personality": "Normal" },
{ "Name": "Francine", "Species": "Rabbit", "Gender": "Female", "Personality": "Snooty" },
{ "Name": "Frank", "Species": "Eagle", "Gender": "Male", "Personality": "Cranky" },
{ "Name": "Freckles", "Species": "Duck", "Gender": "Female", "Personality": "Peppy" },
{ "Name": "Frett", "Species": "Dog", "Gender": "Male", "Personality": "Cranky" },
{ "Name": "Freya", "Species": "Wolf", "Gender": "Female", "Personality": "Snooty" },
{ "Name": "Friga", "Species": "Penguin", "Gender": "Female", "Personality": "Snooty" },
{ "Name": "Frita", "Species": "Sheep", "Gender": "Female", "Personality": "Big sister" },
{ "Name": "Frobert", "Species": "Frog", "Gender": "Male", "Personality": "Jock" },
{ "Name": "Fuchsia", "Species": "Deer", "Gender": "Female", "Personality": "Big sister" },
{ "Name": "Gabi", "Species": "Rabbit", "Gender": "Female", "Personality": "Peppy" },
{ "Name": "Gala", "Species": "Pig", "Gender": "Female", "Personality": "Normal" },
{ "Name": "Gaston", "Species": "Rabbit", "Gender": "Male", "Personality": "Cranky" },
{ "Name": "Gayle", "Species": "Alligator", "Gender": "Female", "Personality": "Normal" },
{ "Name": "Genji", "Species": "Rabbit", "Gender": "Male", "Personality": "Jock" },
{ "Name": "Gigi", "Species": "Frog", "Gender": "Female", "Personality": "Snooty" },
{ "Name": "Gladys", "Species": "Ostrich", "Gender": "Female", "Personality": "Normal" },
{ "Name": "Gloria", "Species": "Duck", "Gender": "Female", "Personality": "Snooty" },
{ "Name": "Goldie", "Species": "Dog", "Gender": "Female", "Personality": "Normal" },
{ "Name": "Gonzo", "Species": "Koala", "Gender": "Male", "Personality": "Cranky" },
{ "Name": "Goose", "Species": "Chicken", "Gender": "Male", "Personality": "Jock" },
{ "Name": "Graham", "Species": "Hamster", "Gender": "Male", "Personality": "Smug" },
{ "Name": "Greta", "Species": "Mouse", "Gender": "Female", "Personality": "Snooty" },
{ "Name": "Grizzly", "Species": "Bear", "Gender": "Male", "Personality": "Cranky" },
{ "Name": "Groucho", "Species": "Bear", "Gender": "Male", "Personality": "Cranky" },
{ "Name": "Gruff", "Species": "Goat", "Gender": "Male", "Personality": "Cranky" },
{ "Name": "Gwen", "Species": "Penguin", "Gender": "Female", "Personality": "Snooty" },
{ "Name": "Hamlet", "Species": "Hamster", "Gender": "Male", "Personality": "Jock" },
{ "Name": "Hamphrey", "Species": "Hamster", "Gender": "Male", "Personality": "Cranky" },
{ "Name": "Hans", "Species": "Gorilla", "Gender": "Male", "Personality": "Smug" },
{ "Name": "Harry", "Species": "Hippo", "Gender": "Male", "Personality": "Cranky " },
{ "Name": "Hazel", "Species": "Squirrel", "Gender": "Female", "Personality": "Big sister" },
{ "Name": "Henry", "Species": "Frog", "Gender": "Male", "Personality": "Smug" },
{ "Name": "Hippeux", "Species": "Hippo", "Gender": "Male", "Personality": "Smug" },
{ "Name": "Hopkins", "Species": "Rabbit", "Gender": "Male", "Personality": "Lazy" },
{ "Name": "Hopper", "Species": "Penguin", "Gender": "Male", "Personality": "Cranky" },
{ "Name": "Hornsby", "Species": "Rhinoceros", "Gender": "Male", "Personality": "Lazy" },
{ "Name": "Huck", "Species": "Frog", "Gender": "Male", "Personality": "Smug " },
{ "Name": "Hugh", "Species": "Pig", "Gender": "Male", "Personality": "Lazy" },
{ "Name": "Iggly", "Species": "Penguin", "Gender": "Male", "Personality": "Jock" },
{ "Name": "Ike", "Species": "Bear", "Gender": "Male", "Personality": "Cranky" },
{ "Name": "Ione", "Species": "Squirrel", "Gender": "Female", "Personality": "Normal" },
{ "Name": "Jacob", "Species": "Bird", "Gender": "Male", "Personality": "Lazy" },
{ "Name": "Jacques", "Species": "Bird", "Gender": "Male", "Personality": "Smug" },
{ "Name": "Jambette", "Species": "Frog", "Gender": "Female", "Personality": "Normal" },
{ "Name": "Jay", "Species": "Bird", "Gender": "Male", "Personality": "Jock" },
{ "Name": "Jeremiah", "Species": "Frog", "Gender": "Male", "Personality": "Lazy" },
{ "Name": "Jitters", "Species": "Bird", "Gender": "Male", "Personality": "Jock" },
{ "Name": "Joey", "Species": "Duck", "Gender": "Male", "Personality": "Lazy" },
{ "Name": "Judy", "Species": "Bear cub", "Gender": "Female", "Personality": "Snooty" },
{ "Name": "Julia", "Species": "Ostrich", "Gender": "Female", "Personality": "Snooty" },
{ "Name": "Julian", "Species": "Horse", "Gender": "Male", "Personality": "Smug" },
{ "Name": "June", "Species": "Bear cub", "Gender": "Female", "Personality": "Normal" },
{ "Name": "Kabuki", "Species": "Cat", "Gender": "Male", "Personality": "Cranky" },
{ "Name": "Katt", "Species": "Cat", "Gender": "Female", "Personality": "Big sister" },
{ "Name": "Keaton", "Species": "Eagle", "Gender": "Male", "Personality": "Smug" },
{ "Name": "Ken", "Species": "Chicken", "Gender": "Male", "Personality": "Smug" },
{ "Name": "Ketchup", "Species": "Duck", "Gender": "Female", "Personality": "Peppy" },
{ "Name": "Kevin", "Species": "Pig", "Gender": "Male", "Personality": "Jock" },
{ "Name": "Kid Cat", "Species": "Cat", "Gender": "Male", "Personality": "Jock" },
{ "Name": "Kidd", "Species": "Goat", "Gender": "Male", "Personality": "Smug " },
{ "Name": "Kiki", "Species": "Cat", "Gender": "Female", "Personality": "Normal" },
{ "Name": "Kitt", "Species": "Kangaroo", "Gender": "Female", "Personality": "Normal" },
{ "Name": "Kitty", "Species": "Cat", "Gender": "Female", "Personality": "Snooty" },
{ "Name": "Klaus", "Species": "Bear", "Gender": "Male", "Personality": "Smug" },
{ "Name": "Knox", "Species": "Chicken", "Gender": "Male", "Personality": "Cranky" },
{ "Name": "Kody", "Species": "Bear cub", "Gender": "Male", "Personality": "Jock" },
{ "Name": "Kyle", "Species": "Wolf", "Gender": "Male", "Personality": "Smug" },
{ "Name": "Leonardo", "Species": "Tiger", "Gender": "Male", "Personality": "Jock" },
{ "Name": "Leopold", "Species": "Lion", "Gender": "Male", "Personality": "Smug " },
{ "Name": "Lily", "Species": "Frog", "Gender": "Female", "Personality": "Normal" },
{ "Name": "Limberg", "Species": "Mouse", "Gender": "Male", "Personality": "Cranky" },
{ "Name": "Lionel", "Species": "Lion", "Gender": "Male", "Personality": "Smug" },
{ "Name": "Lobo", "Species": "Wolf", "Gender": "Male", "Personality": "Cranky" },
{ "Name": "Lolly", "Species": "Cat", "Gender": "Female", "Personality": "Normal" },
{ "Name": "Lopez", "Species": "Deer", "Gender": "Male", "Personality": "Smug" },
{ "Name": "Louie", "Species": "Gorilla", "Gender": "Male", "Personality": "Jock" },
{ "Name": "Lucha", "Species": "Bird", "Gender": "Male", "Personality": "Smug" },
{ "Name": "Lucky", "Species": "Dog", "Gender": "Male", "Personality": "Lazy" },
{ "Name": "Lucy", "Species": "Pig", "Gender": "Female", "Personality": "Normal" },
{ "Name": "Lyman", "Species": "Koala", "Gender": "Male", "Personality": "Jock" },
{ "Name": "Mac", "Species": "Dog", "Gender": "Male", "Personality": "Jock" },
{ "Name": "Maddie", "Species": "Dog", "Gender": "Female", "Personality": "Peppy" },
{ "Name": "Maelle", "Species": "Duck", "Gender": "Female", "Personality": "Snooty" },
{ "Name": "Maggie", "Species": "Pig", "Gender": "Female", "Personality": "Normal" },
{ "Name": "Mallary", "Species": "Duck", "Gender": "Female", "Personality": "Snooty" },
{ "Name": "Maple", "Species": "Bear cub", "Gender": "Female", "Personality": "Normal" },
{ "Name": "Marcel", "Species": "Dog", "Gender": "Male", "Personality": "Lazy" },
{ "Name": "Marcie", "Species": "Kangaroo", "Gender": "Female", "Personality": "Normal" },
{ "Name": "Margie", "Species": "Elephant", "Gender": "Female", "Personality": "Normal" },
{ "Name": "Marina", "Species": "Octopus", "Gender": "Female", "Personality": "Normal" },
{ "Name": "Marlo", "Species": "Hamster", "Gender": "Male", "Personality": "Cranky" },
{ "Name": "Marshal", "Species": "Squirrel", "Gender": "Male", "Personality": "Smug" },
{ "Name": "Marty", "Species": "Bear cub", "Gender": "Male", "Personality": "Lazy" },
{ "Name": "Mathilda", "Species": "Kangaroo", "Gender": "Female", "Personality": "Snooty" },
{ "Name": "Megan", "Species": "Bear", "Gender": "Female", "Personality": "Normal" },
{ "Name": "Melba", "Species": "Koala", "Gender": "Female", "Personality": "Normal" },
{ "Name": "Merengue", "Species": "Rhinoceros", "Gender": "Female", "Personality": "Normal" },
{ "Name": "Merry", "Species": "Cat", "Gender": "Female", "Personality": "Peppy" },
{ "Name": "Midge", "Species": "Bird", "Gender": "Female", "Personality": "Normal" },
{ "Name": "Mint", "Species": "Squirrel", "Gender": "Female", "Personality": "Snooty" },
{ "Name": "Mira", "Species": "Rabbit", "Gender": "Female", "Personality": "Big sister" },
{ "Name": "Miranda", "Species": "Duck", "Gender": "Female", "Personality": "Snooty" },
{ "Name": "Mitzi", "Species": "Cat", "Gender": "Female", "Personality": "Normal" },
{ "Name": "Moe", "Species": "Cat", "Gender": "Male", "Personality": "Lazy" },
{ "Name": "Molly", "Species": "Duck", "Gender": "Female", "Personality": "Normal" },
{ "Name": "Monique", "Species": "Cat", "Gender": "Female", "Personality": "Snooty" },
{ "Name": "Monty", "Species": "Monkey", "Gender": "Male", "Personality": "Cranky" },
{ "Name": "Moose", "Species": "Mouse", "Gender": "Male", "Personality": "Jock" },
{ "Name": "Mott", "Species": "Lion", "Gender": "Male", "Personality": "Jock" },
{ "Name": "Muffy", "Species": "Sheep", "Gender": "Female", "Personality": "Big sister" },
{ "Name": "Murphy", "Species": "Bear cub", "Gender": "Male", "Personality": "Cranky" },
{ "Name": "Nan", "Species": "Goat", "Gender": "Female", "Personality": "Normal" },
{ "Name": "Nana", "Species": "Monkey", "Gender": "Female", "Personality": "Normal" },
{ "Name": "Naomi", "Species": "Cow", "Gender": "Female", "Personality": "Snooty" },
{ "Name": "Nate", "Species": "Bear", "Gender": "Male", "Personality": "Lazy" },
{ "Name": "Nibbles", "Species": "Squirrel", "Gender": "Female", "Personality": "Peppy" },
{ "Name": "Norma", "Species": "Cow", "Gender": "Female", "Personality": "Normal" },
{ "Name": "Octavian", "Species": "Octopus", "Gender": "Male", "Personality": "Cranky" },
{ "Name": "O'Hare", "Species": "Rabbit", "Gender": "Male", "Personality": "Smug " },
{ "Name": "Olaf", "Species": "Anteater", "Gender": "Male", "Personality": "Smug" },
{ "Name": "Olive", "Species": "Bear cub", "Gender": "Female", "Personality": "Normal" },
{ "Name": "Olivia", "Species": "Cat", "Gender": "Female", "Personality": "Snooty" },
{ "Name": "Opal", "Species": "Elephant", "Gender": "Female", "Personality": "Snooty" },
{ "Name": "Ozzie", "Species": "Koala", "Gender": "Male", "Personality": "Lazy" },
{ "Name": "Pancetti", "Species": "Pig", "Gender": "Female", "Personality": "Snooty" },
{ "Name": "Pango", "Species": "Anteater", "Gender": "Female", "Personality": "Peppy" },
{ "Name": "Paolo", "Species": "Elephant", "Gender": "Male", "Personality": "Lazy" },
{ "Name": "Papi", "Species": "Horse", "Gender": "Male", "Personality": "Lazy" },
{ "Name": "Pashmina", "Species": "Goat", "Gender": "Female", "Personality": "Big sister" },
{ "Name": "Pate", "Species": "Duck", "Gender": "Female", "Personality": "Peppy" },
{ "Name": "Patty", "Species": "Cow", "Gender": "Female", "Personality": "Peppy" },
{ "Name": "Paula", "Species": "Bear", "Gender": "Female", "Personality": "Big sister " },
{ "Name": "Peaches", "Species": "Horse", "Gender": "Female", "Personality": "Normal" },
{ "Name": "Peanut", "Species": "Squirrel", "Gender": "Female", "Personality": "Peppy" },
{ "Name": "Pecan", "Species": "Squirrel", "Gender": "Female", "Personality": "Snooty" },
{ "Name": "Peck", "Species": "Bird", "Gender": "Male", "Personality": "Jock" },
{ "Name": "Peewee", "Species": "Gorilla", "Gender": "Male", "Personality": "Cranky" },
{ "Name": "Peggy", "Species": "Pig", "Gender": "Female", "Personality": "Peppy" },
{ "Name": "Pekoe", "Species": "Bear cub", "Gender": "Female", "Personality": "Normal" },
{ "Name": "Penelope", "Species": "Mouse", "Gender": "Female", "Personality": "Peppy" },
{ "Name": "Petri", "Species": "Mouse", "Gender": "Female", "Personality": "Snooty" },
{ "Name": "Phil", "Species": "Ostrich", "Gender": "Male", "Personality": "Smug" },
{ "Name": "Phoebe", "Species": "Ostrich", "Gender": "Female", "Personality": "Big sister" },
{ "Name": "Pierce", "Species": "Eagle", "Gender": "Male", "Personality": "Jock" },
{ "Name": "Pietro", "Species": "Sheep", "Gender": "Male", "Personality": "Smug" },
{ "Name": "Pinky", "Species": "Bear", "Gender": "Female", "Personality": "Peppy" },
{ "Name": "Piper", "Species": "Bird", "Gender": "Female", "Personality": "Peppy" },
{ "Name": "Pippy", "Species": "Rabbit", "Gender": "Female", "Personality": "Peppy" },
{ "Name": "Plucky", "Species": "Chicken", "Gender": "Female", "Personality": "Big sister " },
{ "Name": "Pompom", "Species": "Duck", "Gender": "Female", "Personality": "Peppy" },
{ "Name": "Poncho", "Species": "Bear cub", "Gender": "Male", "Personality": "Jock" },
{ "Name": "Poppy", "Species": "Squirrel", "Gender": "Female", "Personality": "Normal" },
{ "Name": "Portia", "Species": "Dog", "Gender": "Female", "Personality": "Snooty" },
{ "Name": "Prince", "Species": "Frog", "Gender": "Male", "Personality": "Lazy" },
{ "Name": "Puck", "Species": "Penguin", "Gender": "Male", "Personality": "Lazy" },
{ "Name": "Puddles", "Species": "Frog", "Gender": "Female", "Personality": "Peppy" },
{ "Name": "Pudge", "Species": "Bear cub", "Gender": "Male", "Personality": "Lazy" },
{ "Name": "Punchy", "Species": "Cat", "Gender": "Male", "Personality": "Lazy" },
{ "Name": "Purrl", "Species": "Cat", "Gender": "Female", "Personality": "Snooty" },
{ "Name": "Queenie", "Species": "Ostrich", "Gender": "Female", "Personality": "Snooty" },
{ "Name": "Quillson", "Species": "Duck", "Gender": "Male", "Personality": "Smug" },
{ "Name": "Quinn", "Species": "Eagle", "Gender": "Female", "Personality": "Big sister" },
{ "Name": "Raddle", "Species": "Frog", "Gender": "Male", "Personality": "Lazy" },
{ "Name": "Rasher", "Species": "Pig", "Gender": "Male", "Personality": "Cranky" },
{ "Name": "Raymond", "Species": "Cat", "Gender": "Male", "Personality": "Smug" },
{ "Name": "Renée", "Species": "Rhinoceros", "Gender": "Female", "Personality": "Big sister" },
{ "Name": "Reneigh", "Species": "Horse", "Gender": "Female", "Personality": "Big sister" },
{ "Name": "Rex", "Species": "Lion", "Gender": "Male", "Personality": "Lazy" },
{ "Name": "Rhonda", "Species": "Rhinoceros", "Gender": "Female", "Personality": "Normal" },
{ "Name": "Ribbot", "Species": "Frog", "Gender": "Male", "Personality": "Jock" },
{ "Name": "Ricky", "Species": "Squirrel", "Gender": "Male", "Personality": "Cranky" },
{ "Name": "Rilla", "Species": "Gorilla", "Gender": "Female", "Personality": "Peppy" },
{ "Name": "Rio", "Species": "Ostrich", "Gender": "Female", "Personality": "Peppy" },
{ "Name": "Rizzo", "Species": "Mouse", "Gender": "Male", "Personality": "Cranky" },
{ "Name": "Roald", "Species": "Penguin", "Gender": "Male", "Personality": "Jock" },
{ "Name": "Robin", "Species": "Bird", "Gender": "Female", "Personality": "Snooty" },
{ "Name": "Rocco", "Species": "Hippo", "Gender": "Male", "Personality": "Cranky" },
{ "Name": "Rocket", "Species": "Gorilla", "Gender": "Female", "Personality": "Big sister" },
{ "Name": "Rod", "Species": "Mouse", "Gender": "Male", "Personality": "Jock" },
{ "Name": "Rodeo", "Species": "Bull", "Gender": "Male", "Personality": "Lazy" },
{ "Name": "Rodney", "Species": "Hamster", "Gender": "Male", "Personality": "Smug" },
{ "Name": "Rolf", "Species": "Tiger", "Gender": "Male", "Personality": "Cranky" },
{ "Name": "Rooney", "Species": "Kangaroo", "Gender": "Male", "Personality": "Cranky" },
{ "Name": "Rory", "Species": "Lion", "Gender": "Male", "Personality": "Jock" },
{ "Name": "Roscoe", "Species": "Horse", "Gender": "Male", "Personality": "Cranky" },
{ "Name": "Rosie", "Species": "Cat", "Gender": "Female", "Personality": "Peppy" },
{ "Name": "Roswell", "Species": "Alligator", "Gender": "Male", "Personality": "Smug " },
{ "Name": "Rowan", "Species": "Tiger", "Gender": "Male", "Personality": "Jock " },
{ "Name": "Ruby", "Species": "Rabbit", "Gender": "Female", "Personality": "Peppy" },
{ "Name": "Rudy", "Species": "Cat", "Gender": "Male", "Personality": "Jock" },
{ "Name": "Sally", "Species": "Squirrel", "Gender": "Female", "Personality": "Normal" },
{ "Name": "Samson", "Species": "Mouse", "Gender": "Male", "Personality": "Jock" },
{ "Name": "Sandy", "Species": "Ostrich", "Gender": "Female", "Personality": "Normal" },
{ "Name": "Sasha", "Species": "Rabbit", "Gender": "Male", "Personality": "Lazy" },
{ "Name": "Savannah", "Species": "Horse", "Gender": "Female", "Personality": "Normal" },
{ "Name": "Scoot", "Species": "Duck", "Gender": "Male", "Personality": "Jock" },
{ "Name": "Shari", "Species": "Monkey", "Gender": "Female", "Personality": "Big sister" },
{ "Name": "Sheldon", "Species": "Squirrel", "Gender": "Male", "Personality": "Jock" },
{ "Name": "Shep", "Species": "Dog", "Gender": "Male", "Personality": "Smug" },
{ "Name": "Sherb", "Species": "Goat", "Gender": "Male", "Personality": "Lazy" },
{ "Name": "Shino", "Species": "Deer", "Gender": "Female", "Personality": "Peppy" },
{ "Name": "Simon", "Species": "Monkey", "Gender": "Male", "Personality": "Lazy" },
{ "Name": "Skye", "Species": "Wolf", "Gender": "Female", "Personality": "Normal" },
{ "Name": "Sly", "Species": "Alligator", "Gender": "Male", "Personality": "Jock" },
{ "Name": "Snake", "Species": "Rabbit", "Gender": "Male", "Personality": "Jock" },
{ "Name": "Snooty", "Species": "Anteater", "Gender": "Female", "Personality": "Snooty" },
{ "Name": "Soleil", "Species": "Hamster", "Gender": "Female", "Personality": "Snooty" },
{ "Name": "Sparro", "Species": "Bird", "Gender": "Male", "Personality": "Jock" },
{ "Name": "Spike", "Species": "Rhinoceros", "Gender": "Male", "Personality": "Cranky" },
{ "Name": "Spork", "Species": "Pig", "Gender": "Male", "Personality": "Lazy" },
{ "Name": "Sprinkle", "Species": "Penguin", "Gender": "Female", "Personality": "Peppy" },
{ "Name": "Sprocket", "Species": "Ostrich", "Gender": "Male", "Personality": "Jock" },
{ "Name": "Static", "Species": "Squirrel", "Gender": "Male", "Personality": "Cranky" },
{ "Name": "Stella", "Species": "Sheep", "Gender": "Female", "Personality": "Normal" },
{ "Name": "Sterling", "Species": "Eagle", "Gender": "Male", "Personality": "Jock" },
{ "Name": "Stinky", "Species": "Cat", "Gender": "Male", "Personality": "Jock" },
{ "Name": "Stitches", "Species": "Bear cub", "Gender": "Male", "Personality": "Lazy" },
{ "Name": "Stu", "Species": "Bull", "Gender": "Male", "Personality": "Lazy" },
{ "Name": "Sydney", "Species": "Koala", "Gender": "Female", "Personality": "Normal" },
{ "Name": "Sylvana", "Species": "Squirrel", "Gender": "Female", "Personality": "Normal" },
{ "Name": "Sylvia", "Species": "Kangaroo", "Gender": "Female", "Personality": "Big sister " },
{ "Name": "T-Bone", "Species": "Bull", "Gender": "Male", "Personality": "Cranky " },
{ "Name": "Tabby", "Species": "Cat", "Gender": "Female", "Personality": "Peppy" },
{ "Name": "Tad", "Species": "Frog", "Gender": "Male", "Personality": "Jock" },
{ "Name": "Tammi", "Species": "Monkey", "Gender": "Female", "Personality": "Peppy" },
{ "Name": "Tammy", "Species": "Bear cub", "Gender": "Female", "Personality": "Big sister" },
{ "Name": "Tangy", "Species": "Cat", "Gender": "Female", "Personality": "Peppy" },
{ "Name": "Tank", "Species": "Rhinoceros", "Gender": "Male", "Personality": "Jock" },
{ "Name": "Tasha", "Species": "Squirrel", "Gender": "Female", "Personality": "Snooty" },
{ "Name": "Teddy", "Species": "Bear", "Gender": "Male", "Personality": "Jock" },
{ "Name": "Tex", "Species": "Penguin", "Gender": "Male", "Personality": "Smug" },
{ "Name": "Tia", "Species": "Elephant", "Gender": "Female", "Personality": "Normal" },
{ "Name": "Tiansheng", "Species": "Monkey", "Gender": "Male", "Personality": "Jock" },
{ "Name": "Tiffany", "Species": "Rabbit", "Gender": "Female", "Personality": "Snooty" },
{ "Name": "Timbra", "Species": "Sheep", "Gender": "Female", "Personality": "Snooty" },
{ "Name": "Tipper", "Species": "Cow", "Gender": "Female", "Personality": "Snooty" },
{ "Name": "Toby", "Species": "Rabbit", "Gender": "Male", "Personality": "Smug" },
{ "Name": "Tom", "Species": "Cat", "Gender": "Male", "Personality": "Cranky" },
{ "Name": "Truffles", "Species": "Pig", "Gender": "Female", "Personality": "Peppy" },
{ "Name": "Tucker", "Species": "Elephant", "Gender": "Male", "Personality": "Lazy" },
{ "Name": "Tutu", "Species": "Bear", "Gender": "Female", "Personality": "Peppy" },
{ "Name": "Twiggy", "Species": "Bird", "Gender": "Female", "Personality": "Peppy" },
{ "Name": "Tybalt", "Species": "Tiger", "Gender": "Male", "Personality": "Jock" },
{ "Name": "Ursala", "Species": "Bear", "Gender": "Female", "Personality": "Big sister " },
{ "Name": "Velma", "Species": "Goat", "Gender": "Female", "Personality": "Snooty" },
{ "Name": "Vesta", "Species": "Sheep", "Gender": "Female", "Personality": "Normal" },
{ "Name": "Vic", "Species": "Bull", "Gender": "Male", "Personality": "Cranky" },
{ "Name": "Victoria", "Species": "Horse", "Gender": "Female", "Personality": "Peppy" },
{ "Name": "Violet", "Species": "Gorilla", "Gender": "Female", "Personality": "Snooty " },
{ "Name": "Vivian", "Species": "Wolf", "Gender": "Female", "Personality": "Snooty" },
{ "Name": "Vladimir", "Species": "Bear cub", "Gender": "Male", "Personality": "Cranky" },
{ "Name": "Wade", "Species": "Penguin", "Gender": "Male", "Personality": "Lazy" },
{ "Name": "Walker", "Species": "Dog", "Gender": "Male", "Personality": "Lazy" },
{ "Name": "Walt", "Species": "Kangaroo", "Gender": "Male", "Personality": "Cranky" },
{ "Name": "Wart Jr.", "Species": "Frog", "Gender": "Male", "Personality": "Cranky" },
{ "Name": "Weber", "Species": "Duck", "Gender": "Male", "Personality": "Lazy" },
{ "Name": "Wendy", "Species": "Sheep", "Gender": "Female", "Personality": "Peppy" },
{ "Name": "Whitney", "Species": "Wolf", "Gender": "Female", "Personality": "Snooty" },
{ "Name": "Willow", "Species": "Sheep", "Gender": "Female", "Personality": "Snooty" },
{ "Name": "Winnie", "Species": "Horse", "Gender": "Female", "Personality": "Peppy" },
{ "Name": "Wolfgang", "Species": "Wolf", "Gender": "Male", "Personality": "Cranky" },
{ "Name": "Yuka", "Species": "Koala", "Gender": "Female", "Personality": "Snooty" },
{ "Name": "Zell", "Species": "Deer", "Gender": "Male", "Personality": "Smug" },
{ "Name": "Zoe", "Species": "Anteater", "Gender": "Female", "Personality": "Normal" },
{ "Name": "Zucker", "Species": "Octopus", "Gender": "Male", "Personality": "Lazy" }

];

document.addEventListener('DOMContentLoaded', function () {
    const guessInput = document.getElementById('guessInput');
    
    if (guessInput) {
        guessInput.addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
                event.preventDefault(); // Prevent the default form submission behavior
                
                // Get the topmost villagerPreview div
                const topmostPreviewDiv = document.querySelector('.villagerPreviewBox .villagerPreview');
                
                if (topmostPreviewDiv) {
                    // Assuming the villager's name is stored as text content or in an attribute
                    const villagerName = topmostPreviewDiv.textContent.trim(); // Or use another method to extract the name

                    // Call checkGuess with the villager's name
                    checkGuess(villagerName);
                } else {
                    console.log("No villager preview available.");
                }
            }
        });
    }
});

function parseJsonHelper(text) {
    try {
        return JSON.parse(text);
    } catch (e) {
        return null;
    }
}

function resetGameStatus() {
    gameStatus = 0;
}

function setGameStatus() {
    let gameStatusMessage = document.getElementById('gameStatus');

    if (gameStatus == 0) { gameStatusMessage.innerText = "Game has not been started" }
    else {
        if (gameStatus == 1) { gameStatusMessage.innerText = "Game started" }
        else { gameStatusMessage.innerText = "Game won" }
    }
}

function clearGuesses() {
    let guessesSection = document.getElementById('guesses');
    guessesSection.innerHTML = "";
}

function clearErrorMessages() {
    let errorGuess = document.getElementById('errorGuess');
    errorGuess.innerText = "";
}

function validateGuess(guess) {
    let errorGuess = document.getElementById('errorGuess');

    errorGuess.innerText = "";

    if (gameStatus == 0) {
        errorGuess.innerText = "Please click on start";
        return false;
    } else {
        if (guess == "") {
            errorGuess.innerText = "Please choose a villager";
            return false;
        } else {
            if (gameStatus == 2) {
                errorGuess.innerText = "You won! Click on Start to begin a new game";
                return false;
            } else { return true; }
        }
    }
}

function toggleMessage(status) {
    let message = document.getElementById('message');



    if (status == "on") {
        setTimeout(() => {
            message.style.display = "flex";
        }, 1500)
    } else if (status == "off") {
        message.style.display = "none";
    };
}

function checkGuess() {
    let name = document.getElementById('guessInput').value;

    document.getElementById('guessInput').value = "";
    document.querySelector('.villagerPreviewBox').innerHTML = "";

    if (validateGuess(name)) {


        let response = villagerList.find(response =>
            response.Name.toLowerCase() === name.toLowerCase()
        );

        /*
        console.log("ResponseRaw: " + xhr.responseText);
        console.log("Status: " + xhr.status);
        console.dir(response[0]);
        */

        console.dir(response);
        compareGuess(response);
        addGuess(response.Name, response.Species, response.Gender, response.Personality);
        if (guessQuality.bezeichnung == 1 && guessQuality.species == 1 && guessQuality.gender == 1 && guessQuality.personality == 1) {
            gameStatus = 2;
            toggleMessage("on");
            setGameStatus();
        }

    } else { console.log("Beachte Fehlermeldung :')"); }

}


function compareGuess(guess) {
    if (villagerToGuess.Name == guess.Name) { guessQuality.bezeichnung = 1 } else { guessQuality.bezeichnung = 0 };
    if (villagerToGuess.Species == guess.Species) { guessQuality.species = 1 } else { guessQuality.species = 0 };
    if (villagerToGuess.Gender == guess.Gender) { guessQuality.gender = 1 } else { guessQuality.gender = 0 };
    if (villagerToGuess.Personality == guess.Personality) { guessQuality.personality = 1 } else { guessQuality.personality = 0 };

}

function addGuess(name, species, gender, personality) {
    // Create a new div with the class guess
    const newGuess = document.createElement('div');
    newGuess.className = 'guess';

    // Helper function to create parameter divs
    function createParameterDiv(text, quality) {
        const div = document.createElement('div');
        div.className = quality === 0 ? 'parameterWrong' : 'parameterCorrect';
        div.textContent = text;
        return div;
    }

    // Create and append the parameter divs
    newGuess.appendChild(createParameterDiv(name, guessQuality.bezeichnung));
    newGuess.appendChild(createParameterDiv(species, guessQuality.species));
    newGuess.appendChild(createParameterDiv(gender, guessQuality.gender));
    newGuess.appendChild(createParameterDiv(personality, guessQuality.personality));

    // Prepend the new guess div to the section with id guesses
    const guessesSection = document.getElementById('guesses');
    guessesSection.insertBefore(newGuess, guessesSection.firstChild);
}

function startGame() {
    gameStatus = 1;

    toggleMessage("off");
    clearErrorMessages();
    clearGuesses();

    Object.assign(villagerToGuess, selectRandomVillager());
}

function selectRandomVillager() {
    let min = 0;
    let max = villagerList.length - 1;
    let randomNr = Math.floor(Math.random() * (max - min + 1)) + min;

    return villagerList[randomNr];

}

function showPreview() {
    const input = document.getElementById('guessInput').value.toLowerCase();
    const previewBox = document.querySelector('.villagerPreviewBox');

    // Clear previous previews
    previewBox.innerHTML = '';

    if (input === '') {
        return;
    }

    // Filter the villager list by name
    const matches = villagerList.filter(villager =>
        villager.Name.toLowerCase().includes(input)
    );

    // Add matching villagers to the preview box
    matches.forEach(villager => {
        const previewDiv = document.createElement('div');
        previewDiv.className = 'villagerPreview';

        const img = document.createElement('img');

        const villagerData = villagersData.find(v => v.name === villager.Name);

        if (villagerData) {
            img.src = villagerData.imageUrl;
        } else {
            img.src = 'img/default';
        }

        img.alt = `Character from Nintendos Animal Crossing game series named ${villager.Name}`;

        const nameLink = document.createElement('a');
        nameLink.textContent = villager.Name;

        previewDiv.addEventListener('click', function () {
            // Set the villager name to the input field
            document.getElementById('guessInput').value = villager.Name;

            // Call the checkGuess function
            checkGuess();
        });

        previewDiv.appendChild(img);
        previewDiv.appendChild(nameLink);

        previewBox.appendChild(previewDiv);
    });
}
function toggleInfo(show) {
    const infoBox = document.getElementById('infoBox');
    if (show) {
        infoBox.style.display = "flex"; // Show the info box
    } else {
        infoBox.style.display = "none"; // Hide the info box
    }
}

async function fetchVillagerPNGs() {
    try {
        // Fetch data from the API
        const response = await fetch('https://api.nookipedia.com/villagers', {
            headers: {
                'Content-Type': 'application/json',
                'X-API-KEY': '6b31486c-85d4-4a05-8dae-de2ebaec3fee'
            }
        });

        // Parse the JSON response
        const villagers = await response.json();

        // Create an array to store the extracted data
        villagersData = villagers.map(villager => {
            return {
                name: villager.name,
                imageUrl: villager.image_url
            };
        });

        // Output the data to the console or use it in your application
        // console.log(villagersData);

        // You can now use villagersData for whatever you need (e.g., rendering on your website)
        return villagersData;

    } catch (error) {
        console.error('Error fetching villagers:', error);
    }
}
