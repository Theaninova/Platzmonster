# Style Guide

This gives a rough idea of do's and dont's for writing
readable code.

## Use Prettier

Prettier is an opinionated formatter. That means it will very aggressively
format your code with very little room for individual customization.

This has the advantage of making your code much easier to read for other
people - and also the other way around.

It just makes it very easy to write well-formatted and readable code.

```shell
npm run format
```

## Name cases

* Svelte Components (files in `/lib/components`) [PascalCase](https://chaseadams.io/posts/most-common-programming-case-types/#pascalcase)
* Svelte Routes (files in `/lib/routes`) [kebab-case](https://chaseadams.io/posts/most-common-programming-case-types/#kebab-case)
* Other JavaScript/Typescript files [kebab-case](https://chaseadams.io/posts/most-common-programming-case-types/#kebab-case)
* JavaScript/TypeScript variables [camelCase](https://chaseadams.io/posts/most-common-programming-case-types/#camelcase)
* JavaScript/TypeScript functions [camelCase](https://chaseadams.io/posts/most-common-programming-case-types/#camelcase)
* JavaScript/TypeScript classes, types & interfaces [PascalCase](https://chaseadams.io/posts/most-common-programming-case-types/#pascalcase)
* JavaScript/TypeScript enums [PascalCase](https://chaseadams.io/posts/most-common-programming-case-types/#pascalcase)
* JavaScript/TypeScript enum members [UPPER_CASE_SNAKE_CASE](https://chaseadams.io/posts/most-common-programming-case-types/#upper_case_snake_case)
* JavaScript/TypeScript constants [UPPER_CASE_SNAKE_CASE](https://chaseadams.io/posts/most-common-programming-case-types/#upper_case_snake_case)

## Do not abbreviate

It's not worth saving a few characters for giving up readability. We are not dealing
with any space constraints. Do not abbreviate, with the exception being some very
commonly used abbreviations like `i` for `index` in loops.

It's better to have a sentence as a variable name than a variable name that doens't
make any sense.

Good function and variable names should be descriptive.

## Do not write useless comments

Good code should not need comments. If you have descriptive function and variable names,
you should not need comments.

## Properly label non-pure functions

The default expectations for functions is that they are pure. That means that they
do not modify any state that is passed in the function.

Usually you don't need non-pure functions, but if you do, you can append something
like `inPlace` to make it clear that it will modify data that is passed in.
