---
title: Create module in c as const struct
tags: [C]
author: Victor Gallet (Elkantor)
url_author: https://twitter.com/TheElkantor
date: 2019-08-11
description: How to create simple module in C as struct?
---

###

<!-- {.-literate-style} -->

In C, it can become tricky, as your project grows, to keep having an organize architecture of the code.
In fact, even if we like it or not, the modern way of writing modules, bringing by languages like JS with NodeJS, is one way of splitting your code.
How to do that in C, where, for example, you have no namespace?

You can simulate that by creating a module as a constant struct, which embed functions and variables.

<figure>
<figcaption class='-title'>TLDR</figcaption>

```c
	int increment(int out_integer){
        return ++out_integer;
    }

    // Creating a const struct, and add the default const values
    // for the variables and the functions pointers
    const struct test {
        // constant variable
        const int var;

        // constant function pointer
        int (*const increment)(int);
    } test = {
        25,         // var is equal to 25
        increment   // increment function pointer points to the increment function
    };

```

</figure>

And now, by including this file, we can simply use it like that:

<figure>
<figcaption class='-title'>TLDR</figcaption>

```c
	#include <stdio.h>
    #include "test.h"

	int main(int argc, char** argv){
        printf("test : %d\n", test.increment(test.var));
		return 0;
	}
```

</figure>

You might think it's a little too complex, and we can do everything without having that, and it's absolutely true. However, the neat part with this way of creating module in C, is that you can compile the module as a dynamic library, and just load it as a pointer to the structure. No worries to create pointer for each functions inside the module. You can retrieve all of them from the structure pointer.
