---
categories: non-fiction blog
layout: blog
tags: Jekyll RatNotebook Canvas
title: Solutions!
description: Oh yeah, it's been good
order: [ 4, 1, 3 ]
comment-demon: Wow you're dumb
comment-goose: what is this??
comment-willis: What are you talking about?
---

## Markdown and sections fixed!

Ok so previously I was having trouble with the food posts. I wanted markdown text, the html coded recipe, and then markdown text again after that. The problem was that you can't really create multiple sections of markdown. 

The Solution: use the include feature in between the markdown. It seems so simple and obvious and yet I didn't think you could put any include tags into markdown. Anyways it's all good now. Yess!

## Canvas

So I've dabbled into canvas element in html. Probably the most wasteful thing I could do with my time. An old technique that is kind of useless. But I like it! It can create graphics with just javascript. Right now I've been drawing very simple images for the covers of all my posts. But now I could do this in canvas and it literally be the size of a few bytes. Super small and should be fast.

The only problem is that it's kind of a pain to learn and draw. First drawing is all coordinates. Sounds simple until you want to draw an equilateral triangle that is rotated slightly. LIterally have to break out highschool geometry and calculate that shit. There's probably easier ways to do this, and I bet there's a way to draw and convert into coordinates. 

The other struggle is that I want the canvas to be scalable. Typically if you make the canvas bigger it just increases the frame but all the lines and stuff remain the same. So, the even bigger pain is to make all the coordinates relative to each other. How large to make the line x? x = width * 0.1. But then I have to make the connecting line relative to that. It's a mess. I'll probably find a better simple.

## Integrating canvas into the site

Finally, I had to create some if statements for where the canvas/images are supposed to go. Took more work than it should have. Specifically to learn how to make canvas with being resized. Basically made the canvas width = 100% within their js file, then I change the size depending on the div that they're in. 

## What next?

Learn more about canvas. Learn how to draw better. Must be better methods. Either that or I'll get really good at geometry. 