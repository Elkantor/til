---
title: Create module in c as const struct
tags: [C]
author: Victor Gallet (Elkantor)
url_author: https://twitter.com/TheElkantor
date: 2019-08-11
description: How to create simple module in C as struct?
---

###


In C, it can become tricky, as your project grows, to keep having an organize architecture of the code.
In fact, the modern way of writing modules, bringing by languages like JS with NodeJS (even if we like it or not), is one way of splitting your code.
How to do that in C, where, for example, you have no namespace?

You can simulate that by creating a module as a constant struct, which embed functions and variables.


<figure>
<figcaption class='-title'>test.h</figcaption>

```c
	int increment(const int in_integer){
        return in_integer + 1;
    }

    const struct test {
        const int var;
        int (*const increment)(int);
    } test = {
        // var is equal to 25
        .var = 25,
        // increment const function pointer to the increment function
        .increment = increment   
    };

```

</figure>


And now, by including this file, we can simply use it like that:

<figure>
<figcaption class='-title'>main.c</figcaption>

```c
	#include <stdio.h>
    #include "test.h"

	int main(int argc, char** argv){
        printf("test : %d\n", test.increment(test.var));
		return 0;
	}
```

</figure>

Which gives:

```sh
test : 26
```

You might think it's a little too complex, and we can do everything without having that, and it's absolutely true. However, the neat part with this way of creating module in C, is that you can compile the module as a dynamic library, and just load it as a pointer to the structure. No worries to create pointer for each functions inside the module. You can retrieve all of them from the structure pointer.
