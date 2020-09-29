---
title: Create defer feature with gcc/tcc
tags: [C, GCC, TCC]
author: Victor Gallet (Elkantor)
url_author: https://twitter.com/TheElkantor
date: 2020-09-29
description: How to create a defer macro keywork with gcc/tcc
---

###


If you ever looked at GO programming language, it has an interesting keyword: "defer".
What defer does? It simply execute the code at the end of the scope.
In C, that can be super usefull, for example, to never forget to free after calling malloc, if you don't need the variable anymore at the end of your current scope
(so for example, if you want a heap variable which you'll use like a stack variable, but you can't initialize it on the stack because it's too heavy).

So let's create this macro!

<figure>
<figcaption class='-title'>main.c</figcaption>

```c
	#define defer _d0(__COUNTER__)
	#define _d0(X) _d1(X)
	#define _d1(X) _d2(s##X,f##X)
	#define _d2(S,F) auto void F(void*);int S __attribute__((cleanup(F)));void F(void*_)
```

</figure>

So, we will use the cleanup function, which is provided by gcc/tcc. This function is automaticly call by the compiler at the end of the scope.

So now, if we write this little program:

<figure>
<figcaption class='-title'>main.c</figcaption>

```c
	int puts(const char* _string);

	#define defer _d0(__COUNTER__)
	#define _d0(X) _d1(X)
	#define _d1(X) _d2(s##X,f##X)
	#define _d2(S,F) auto void F(void*);int S __attribute__((cleanup(F)));void F(void*_)

	void test()
	{
		defer { puts("this should be printed after"); }
		puts("this should bed printed before");
	}

	int main()
	{
		test();
	}
```

</figure>

And we compile it (file named main.c here) to get the output C code after the preprocessor with:

```sh
gcc main.c -E -o main.output
```

We get:

<figure>
<figcaption class='-title'>main.output</figcaption>
	
```c
	int puts(const char* _string);

	void test()
	{
		auto void f0(void*);int s0 __attribute__((cleanup(f0)));void f0(void*_) { puts("this should be printed after"); }
		puts("this should bed printed before");
	}

	int main()
	{
		test();
	}
```
</figure>

And if we compile and execute our little program:
```sh
gcc main.c -o main && ./main
```

Which gives:
```sh
this should bed printed before
this should be printed after
```
