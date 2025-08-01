---
author: Max Mancini
date: '2025-06-10'
title: Make a Website for Free
description: Notes about web design and deployment
topics:
    - "Notes"
meta: true
math: false
draft: false
---

The best reason to write online is to share your ideas, experiences, and lessons with others.

Here, I've outlined all the resources I used to build this website. I'll keep this page updated as I add more content and tools.

---

## Resources

1. Static Site Generator (SSG): <a href="https://gohugo.io/" target="_blank">Hugo</a>

An SSG is a perfect solution for a static, blog-focused website primarily composed of just text. They're lightweight and fast, easy to deploy and maintain, and offer great customizability in web design and features. I like Hugo for its simple organizational structure and clear documentation.

SSGs are also a great starting point because they have many themes to choose from and build upon. The theme I used is based on the Edward Tufte CSS: simple, with well-set typography, extensive sidenotes, and tight integration of graphics and charts.
{{< marginnote >}}Links to <a href="https://github.com/loikein/hugo-tufte" target="_blank">Hugo theme</a> and original <a href="https://github.com/edwardtufte/tufte-css" target="_blank">Tufte CSS</a><br><a href="https://gohugo.io/getting-started/quick-start/" target="_blank">Hugo: quick start doc</a> {{< /marginnote >}}

2. Code Editor: <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>

I use VS Code to edit the files (html, css) for the design of this site, along with writing the posts in markdown. The tree file system is easy to navigate and the color coding of text in files helps with staying organized while editing/writing.

3. Web Hosting: <a href="https://github.com/" target="_blank">GitHub Pages</a>

In addition to being the repository for the site code, GitHub can be used to host static websites, completely for free. Serving as an all-in-one solution, GitHub's integration makes updating and deploying the site seamless.
{{< marginnote >}}Link to <a href="https://github.com/maxcini/maxcini.github.io" target="_blank">code for this site</a><br><a href="https://gohugo.io/host-and-deploy/host-on-github-pages/" target="_blank">Hugo: host on GitHub Pages doc</a> {{< /marginnote >}}

4. Domain Name Registration: <a href="https://porkbun.com/" target="_blank">Porkbun</a>

OK, I spoke too soon. There is one thing that's not free, and that's the domain name (maxcini.com). It only costs $10/yr, which I think is worth it for having an aesthetic, personalized URL. But it is completely optional, and the default `github.io` URL works fine. 
{{< marginnote >}} <a href="https://kb.porkbun.com/article/64-how-to-connect-your-domain-to-github-pages" target="_blank">Porkbun: connect domain to GitHub Pages doc</a> {{< /marginnote >}}

5. Web Design/Tools

In addition to the default Tufte CSS styling, some additional design decisions help drive how the site looks and functions: 

- <a href="https://practicaltypography.com/typography-in-ten-minutes.html" target="_blank">Butterick's Practical Typography</a>
- Interactive Visuals:  
    - <a href="https://www.microsoft.com/en-us/power-platform/products/power-bi" target="_blank">Power BI</a> for highly customizable, data-focused reports
    - <a href="https://www.chartjs.org/" target="_blank">Chart.js</a> for simple, stylish, and lightweight charts
<!-- - Optimize Images: <a href="https://tinypng.com/" target="_blank">TinyPNG</a> -->
<!-- - Favicon Generator: <a href="https://tools.w3cub.com/favicon-converter" target="_blank">W3cubTools</a> -->

6. Phone a Friend(s): <a href="https://www.youtube.com/" target="_blank">YouTube</a> and <a href="https://gemini.google.com/" target="_blank">Gemini</a>

Whether it was watching a video walkthrough tutorial on how to set up the website, or using AI to help debug the code, these tools were (and still are) essential in developing, launching, and maintaining the site. 
{{< marginnote >}}For example, see <a href="https://www.youtube.com/watch?v=0RKpf3rK57I" target="_blank">Hugo in 100 Seconds</a>, or search for more specific tasks {{< /marginnote >}}

*Final note: Things will break and it'll be frustrating at times. But with a little bit of patience and perseverance, it will all be worth it in the end. Good luck, have fun!
