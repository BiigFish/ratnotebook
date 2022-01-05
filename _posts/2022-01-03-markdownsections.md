---
categories: non-fiction blog
layout: blog
tags: Jekyll RatNotebook
title: Markdown Sections Problem
description: Today's annoyance with dealing with markdown and multiple sections
order: [ 4, 1, 3 ]
comment-demon: Wow you're dumb
comment-goose: what is this??
comment-willis: What are you talking about?
---

## Markdown and sections

So the food recipes has a block of text, a bunch of html divs, and then another block of text. Easy and simple. The problem is that Markdown doesn't do text with html in between.

On Jekyll you can create a layout that has the html layout of stuff, and then {content} that will be the markdown text. But it can only do one {content}. And I want two.

## Solution

The solution is sketchy. Doing capture seems to do the trick.

    capture section1
    text
    endcapture

repeat.

It works but the problem is that jekyll automatically gets rid of the line breaks so everything ends up being one line. So to counter that I added a filter when it calls that captured section

    newline_to_br

It gets the job done but I don't like it one bit. First it gives a warning that the markdown file is getting rid of the line breaks. Second, it doesn't let me use any of the markdown stuff like headers or bolded text. Annoying.

I want to find a better solution, but I don't want to use any plugins cause I'm weird. Also I'm annoyed by how difficult and messy it is to create new recipes. I wish the system was more streamlined so it was less daunting to create new ones.

All this struggle cause I just want some HTML between text.