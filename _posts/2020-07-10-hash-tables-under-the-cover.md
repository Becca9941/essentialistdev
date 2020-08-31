---
layout: post
---

### What is a hash table?

A hash tabel is a list of paired values (key and value), like the following.

```jsx
kittens = { "Haribo" => "Champagne", "Berry" => "White", "Granger" => "White and fluffy", "Diamond" => "Tabby", "Mistique" => "Faded dark gray and ginger" }
```

We can look up a kitten's (key) colour (value) using this syntax:

```jsx
kittens["haribo"]
```

### How to hash with hash functions?

Hashing is where yuo take characters and convert them into numbers. The code that is used to convert those letters into particular numbers is called a hash function.

Hashing:

```jsx
chars = {
  "a" => 1,
  "b" => 2,
  "c" => 3
}
```

Hash function:

```jsx
function sum(char1, char2, char3) {
  return chars[char] + chars[char2] + chars[char3];
}

sum("a", "b", "c"); //6

```

### How to build a thesaurus?

Representing a thesaurus with a hash table:

```jsx
thesaurus = {}
```

Adding first entry to the hash:

```jsx
thesaurus["cab" = "taxi"]
thesaurus["ace" = "star"]
```

Thesaurus now looks like this:

```jsx
thesaurus = {
  "cab" => "taxi",
  "ace" => "star"
}
```

How the hash table stores this data:

1. The computer applies a hash function to the key: cab = 3 + 2 + 1 = 7.
2. The computer stores the value "taxi" into cell 7.
3. The computer applies a hash function to the key: star = 19 + 20 + 1 + 19 = 59.
4. The computer stores the value "star" in cell 59.

We look up a value associated with the key of "cab":

```jsx
thesaurus["cab"]
```

1. The computer hashes the key we're looking up: cab = 3 + 2 + 1 = 7.
2. The result is 7, so the computer looks inside the cell 7 and returns the value that is stored there: "taxi".

### How to deal with collisions?

If the hash function produces the same hash value (cell number) as another key that has been hashed, it'll store the value in a sub-array inside of that cell. It'll look at all the 0 indexs of the sub-arrays until it finds the key it's looking for, then will return the value stored at index 1 of the correct sub-array.

### What is the great balancing act?

A good hash table strikes a balance between avoiding collisions while not consuming memory. E.g. Storing 5 bits of data across 100 cells wastes memory, whilst storing 100 bits of data in 5 cells causes too much collision.

A good rule of thumb: For every 7 data elements stored in a hash table, it should have 10 cells, which is known as the ideal load factor (7 elements / 10 cells).

If you initially stored 7 pieces of data in a hash, the computer might allocate a hash with 10 cells. When you begin to add more data, the computer will expand the hash by adding more cells and changing the hash function so that the new data will be distributed evenly across the new cells.

Most languages handle this for you.

### What are the practical examples?

Hash tables are perfect for any situation where we want to keep track of which values exist in a dataset (can replace the inner loop of a nested loop in some cases).

If we wanted to tally how many votes a candidate got in a campaign, we can store the tally as a value paired with the candidates name as a key.
