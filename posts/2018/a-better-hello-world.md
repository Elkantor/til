---
title: A Better Hello World Program
date: '2017-09-19'
# description: "Hello world programs aren't as useful today as they were before. Here's what I propose..."
tags: [Development]
---

The "Hello world" program is usually the first introduction to any programming language. It demonstrates the minimum amount you need to write a C program. It looks like this in the C programming language:

###

<!-- {.-captioned-style} -->

```c
/* hello.c */
#import <stdio.h>

int main(int argc, char *argv[]) {
  printf("Hello, world!");
  return 0;
}
```

> **A Hello World program in C.** It demonstrates the minimum amount you need to write a C program.

<next-block title="What's wrong with that?"></next-block>

## A modern "Hello world"

In more modern languages however, this example isn't as useful anymore. Here's the same example in Python. Notice how it doesn't teach anything other than `print`.

###

<!-- {.-captioned-style} -->

```py
print "Hello, world!"
```

> **A Hello World program in Python.** There's barely anything in it!

<next-block title="Let's improve on this."></next-block>

## Improving "Hello world"

### "Hello world" in JavaScript

In today's world of more succint programming languages, we need a different "hello world" to demonstrate language features better. Here's what I propose:

###

<!-- {.-captioned-style} -->

```js
function getGreeting(name) {
  return `Hello, ${name}!`
}

const message = getGreeting('world')
console.log(message)
```

> **A "better" Hello World program in JavaScript,** showing more basic functionality than just printing lines.

### How is this better?

This simple example demonstrates a few more things than printing strings, such as:

###

<!-- {.-captioned-style} -->

```js
function getGreeting(name) {
  return /*...*/
}
```

> **Functions:** How to write a function with an argument, and returning values from functions. Also shows the naming convention for functions (`camelCase`).

###

<!-- {.-captioned-style} -->

```js
const message = /*...*/
```

> **Variables:** How to assign variables.

###

<!-- {.-captioned-style} -->

```js
;`Hello, ${name}!`
```

> **Strings:** Dealing with basic string functions.

<next-block title="Let's look at some more examples."></next-block>

## Example: Go version

I've started writing these kinds of programs for languages that I'm learning. Here's how it'd look like in Go, which I've added to my [Go cheatsheet](https://ricostacruz.com/cheatsheets/go):

```go
// hello.go
package main

import "fmt"

func main() {
  message := getGreeting("world")
  fmt.Println(message)
}

func getGreeting(name string) (string) {
  return "Hello, " + name + "!"
}
```

## Example: Elixir version

Here's an Elixir version, also at the [Elixir cheatsheet](https://ricostacruz.com/cheatsheets/elixir):

```elixir
# hello.exs
defmodule Greeter do
  def get_greeting(name) do
    "Hello, " <> name <> "!"
  end
end

message = Greeter.get_greeting("world")
IO.puts message
```