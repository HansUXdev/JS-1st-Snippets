# JS-1st README

This extension contains code snippets for JavaScript in the latest ES standards syntax for Vs Code and [vscodium](https://vscodium.com/), the open source alternitive  (supports both JavaScript and TypeScript).

Although this extension supports various frameworks, it aims to eventually replace some of them in favor of better vanillia code standards based on community feed back.

This extension will be primarily published and maintained on [open-vsx](https://open-vsx.org/) and all updates will be intentionally delayed on vs marketplace. 

<!-- Eventually it may be removed from the microsoft's pseudo-open source marketplace so download it while you can. -->




## Features

Describe specific features of your extension including screenshots of your extension in action. Image paths are relative to this README file.

\!\[feature X\]\(images/feature-x.png\)

> Tip: Many popular extensions utilize animations. This is an excellent way to show off your extension! We recommend short, focused animations that are easy to follow.




## Requirements

If you have any requirements or dependencies, add a section describing those and how to install and configure them.

## Snippets
The following snippets falling to the following catagories:
1. JavaScript Methods
2. Node Methods
3. Test Driven Development
4. Browser Methods
5. Dockerfile
6. React Methods

## JavaScript methods

### Variable Declaration


## DOM


### [ac] appendChild

```javascript
${1:document}.appendChild(${2:elem});
```

### [rc] removeChild

```javascript
${1:document}.removeChild(${2:elem});
```

### [cel] createElement

```javascript
${1:document}.createElement(${2:elem});
```

### [cdf] createDocumentFragment

```javascript
${1:document}.createDocumentFragment();
```

### [ca] classList.add

```javascript
${1:document}.classList.add('${2:class}');
```

### [ct] classList.toggle

```javascript
${1:document}.classList.toggle('${2:class}');
```

### [cr] classList.remove

```javascript
${1:document}.classList.remove('${2:class}');
```

### [gi] getElementById

```javascript
${1:document}.getElementById('${2:id}');
```

### [gc] getElementsByClassName

```javascript
${1:document}.getElementsByClassName('${2:class}');
```

### [gt] getElementsByTagName

```javascript
${1:document}.getElementsByTagName('${2:tag}');
```

### [ga] getAttribute

```javascript
${1:document}.getAttribute('${2:attr}');
```

### [sa] setAttribute

```javascript
${1:document}.setAttribute('${2:attr}', ${3:value});
```

### [ra] removeAttribute

```javascript
${1:document}.removeAttribute('${2:attr}');
```

### [ih] innerHTML

```javascript
${1:document}.innerHTML = '${2:elem}';
```

### [tc] textContent

```javascript
${1:document}.textContent = '${2:content}';
```

### [qs] querySelector

```javascript
${1:document}.querySelector('${2:selector}');
```

### [qsa] querySelectorAll

```javascript
${1:document}.querySelectorAll('${2:selector}');
```


## Known Issues

Calling out known issues can help limit users opening duplicate issues against your extension.

## Release Notes

Users appreciate release notes as you update your extension.

### 1.0.0

Initial release will contain core JavaScript language features and a select few for Node, Express, React and Docker (N.E.R.D. Stack).


## Roadmap

### 1.5.0

Will have close to double the ammount of features.

### 2.0.0

Will a have much more ambitious features 😜.


## Why you should consider supporting the developer
If you use this a lot or want to see it improve consider giving it a star or  becoming a [githup sponsor](https://github.com/sponsors/HansUXdev/). 

I author does **a lot more** than just publishing a json file for snippets.

Here are just a few things he's working on, while taking care of his 👶 as a full-time single father, job hunting & competing in hackathons...

### Educational Repos
Trigger | Description & Info
--- | ---
[JavaScript-First](https://github.com/HansUXdev/JavaScript-First) | An Open Source Book that teaches anyone how to code with JavaScript using the node.js runtime environment rather than a browser and by the end, you will build a server and a website using JavaScript..
[Learn Mongo GitPod](https://github.com/HansUXdev/LearnMongoGitPod)| A repo designed to teach mongoDB to people with zero experiance and zero config, meaning you can learn on virtually any device that has a browser that GitPod can run on! This 🤞may🤞 become part of Free Code Camp [[1](https://forum.freecodecamp.org/t/how-is-new-content-created-at-fcc/416191/3)], [[2](https://github.com/freeCodeCamp/CurriculumExpansion/issues/103)].

### Future Snippets & Extensions
Name | Description
--- | ---
Code Slides | A snippet extension for creating educational slides with [vscode-reveal](https://marketplace.visualstudio.com/items?itemName=evilz.vscode-reveal) and a custom theme. (not public yet)
Foundation 6 Snippets| This will start as a snippets for [sites](https://get.foundation/sites/docs/) and then be updated for [email](https://get.foundation/emails). If sponsored, I will extend this to eventually replace the [CLI](https://github.com/foundation/foundation-cli) and [building blocks](https://get.foundation/building-blocks/) by implementing a custom feature that writes install kits in a similar way the [web boilerplate](https://marketplace.visualstudio.com/items?itemName=jamesqquick.web-boilerplate) writes an html, css, and js file.  (not started yet)

### Social Entrepreneurship: Open Source Non-Profit
I'm in the process of founding a non-profit dedicated to promoting open source by doing the following and can only commit to the first two without proper sponsorship:
Name | Description
--- | ---
Creating open source curriculum | Getting open source curriculum into the hands for high school students.
CTE Coding Students | Bringing industry professionals into the class room to inspire them (via zoom). I already did this as a teacher by bringing people from Riot Games / Carvana, Choice Hotels, Auth0, and many others into my classroom. Now I want to streamline this for more schools.
Free Coding Classes on Twitch | I stream open source classes for an introductory javaScript class every week to test the open source curriculum I write. Think of it as a free bootcamp online. I also despritely need a better computer that doesn't require iced gel packs to be able to stream 😅.... 
Lobbying for Open Source Certification | When I taught in a public CTE high school, I couldn't believe that a multiple choice test like th MTA certifications were approved by the state over test-driven and open source certifications such as Free Code Camp's. I know enough school board members and a few house members to help get the ball rolling but, it's a lot of leg work and I don't want to commit to this without funding...
Laptop | Donating 4G latops/tablets to students struggling with remote academic life. Having taught a few students with bad internet, etc, this is especially important to me but I don't have the resources to address this without funding.

