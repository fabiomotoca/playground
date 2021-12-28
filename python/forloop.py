# a simple dict
movie = {
    "title": "Avengers: Endgame",
    "directors": ["Anthony Russo", "Joe Russo"],
    "year": 2019,
    "runtime": 181
}

# for attribute in movie:
#     print(attribute)

# for key in movie:
#     print(movie[key])

# for value in movie.values():
#     print(value)

for attr, value in movie.items():
    print(f'{attr} => {value}')

print('--')

# iterating over a list of dicts
prog_languages = [
    {"name": "Python"},
    {"name": "Javascript"},
    {"name": "Java"},
    {"name": "C/C++"}
]

for lang in prog_languages:
    print(lang["name"])
