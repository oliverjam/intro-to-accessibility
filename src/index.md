# Accessibility
[@_oliverjam](https://twitter.com/_oliverjam)
[oliverjam.es](http://oliverjam.es)

---

## The web rules

The web is special. It's incredible. Sometimes I'm reminded of how things used to be, before the web, and it blows my mind.

---

![The teacher from Stranger Things](assets/img/stranger-things.jpg)

---

>The web has everything we know on it, and you can read it all. **Nothing's stopping you**. Maybe the fact that that still blows my mind marks me as an old fogey, but honestly, how can that not blow your mind?

—<cite>[@seldo](http://seldo.com/weblog/2013/09/04/why_i_am_a_web_developer), npm <abbr>CTO</abbr></cite>

Something *is* stopping lots of people.

---

Accessibility shouldn't be a special effort. It's about building a product that as many people as possible can use.

HTML is (generally) accessible by default. Accessibility means ensuring you don't put up barriers by "improving" your product.

---

User-experience is everything for the products you build. Accessibility is just another part of this—designing for all the different ways people are going to use it.

Think of it not as designing for specific disabilities but designing for a diverse set of use-cases.

---

## Accessibility is for everyone

It benefits more people than you might think.

---

### Permanent impairment

- 10m people in the UK are disabled (~17% of the population)
- Half of these are over state pension age
- 4.5% of the population are colour-blind (double that for men)

---

### Temporary or situational impairment

Literally anyone can benefit from good accessible design. People get injured temporarily, or are in situations that limit the way they can interact with your product.

---

### Examples

---

Somebody with poor-vision will appreciate your high-contrast interface, but so will I if I'm struggling to read in bright sunlight.

---

Captioning your videos means blind people can still experience them, but it also means someone bored at work can watch it under the desk.

---

Ensuring your mobile navigation is all within easy thumb-reach obviously benefits somebody with one hand, but it also helps a user holding a baby (or drinking a beer).

---

## Don't make assumptions

It's easy to assume that the majority of your users will be like you or people that you know.

This is unlikely, and untrue for most people at different times in their lives.

---

Not everyone _always_ has great eyesight.

Not everyone _always_ has a powerful modern device.

Not everyone _always_ chooses the browser they use.

**Design for everyone.**

---

## User personas

---

### Visual

---

#### Colour-blind

I am colour-blind and struggle to perceive the difference between certain colours.

I need an interface that does not rely solely on colour to communicate information (or that provides an option to change the colours so I can tell them apart).

---

![](assets/img/football.png)

---

#### Low-vision

I have low-vision and need to increase the text-size in my browser.

I need an interface that does not stop me from increasing text-size, and that scales proportionally when I do so (rather than completely breaking).

---

![](assets/img/nytimes.png)

---

#### Low-vision

I have very low-vision and need to use a screen-magnifier.

I need an interface that shows things in context so I don't have to go searching the page. It also helps to have a logical content-flow as I can only see one thing at a time.

---

#### Blind

I am blind and need to use a screenreader.

I need an interface that does not present information solely visually. I need the content to be accessible programmatically so my screenreader software can access it and correctly describe the page to me.

---

### Hearing

---

#### Hard-of-hearing

I am hard-of-hearing and struggle to hear most things.

I need content that is provided in a text as well as audio form, so I can read it rather than struggling to listen. This includes transcripts and/or subtitles for video/audio content.

---

#### Deaf

I am deaf and cannot hear anything.

British Sign Language is my first language, so I struggle to read and write English. Subtitles are difficult for me to follow so I prefer signed content.

---

### Motor

---

#### Mild motor-impairment

I have mild motor-impairment and struggle to use a mouse or touchscreen with fine control.

I need an interface that doesn't require me to exactly hit small targets to complete tasks. UI elements with lots of padding help me click them without frustration.

---

#### Medium motor-impairment

I have medium motor-impairment and have to use a keyboard instead of a mouse.

I need an interface that clearly shows the elements I am focusing with the keyboard, and doesn't assume all users are able to click on things. A logical document flow also helps so my focus doesn't jump around the page as I navigate.

---

#### Severe motor-impairment

I have severe motor-impairment and use voice-input instead of a mouse or keyboard.

I need an interface that works with my custom speech-recognition software and has logical labels so I can describe what I want to interact with.

---

### Cognitive

---

#### Dyslexia

I have dyslexia and struggle to process written text or spell.

I need inputs that don't require exact spelling to figure out what I meant. I also prefer content written in simple English that has clear subheadings dividing up sections.

---

#### Autism

I am on the autistic spectrum and struggle to process information.

I need an interface that is clear and descriptive without using idioms or figures of speech. I also prefer plain language and simple colours.

---

#### ADHD

I have attention deficit hyperactivity disorder and find it hard to concentrate.

I need an interface that doesn't distract me with unrelated pop-ups or information whilst I'm trying to focus on a task.

---

#### Memory

I have a poor memory and get easily confused.

I need apps not to require me to memorise information from previous steps. I'd also rather not have a time-limit to complete a task.

---

## How do we design accessibly?

---

### WCAG

The Web Content Accessibility Guidelines are a set of best practices.
To meet guidelines sites should be:

- Perceivable
- Operable
- Understandable
- Robust

---

### Cheatsheet

The guidelines can be quite dry and hard to follow, so take a look at this amazing cheatsheet:
[bitsofco.de/the-accessibility-cheatsheet](https://bitsofco.de/the-accessibility-cheatsheet/)

---

#### Perceivable

Information and user interface components must be presented to users in ways they can perceive.

---

##### Text content

Text should be legible, with adequate size, contrast, line-length and line-height.

---

##### Colour

Information should not solely be communicated by colour. Use icons or text labels to make colour meanings clear. Alternatively provide colour-blind modes that change UI colours.

---

##### Alternative content

Use alt text for images that are relevant to content. Purely decorative images should have empty `alt=""`. Make sure videos have captions or transcripts.

---

##### Dynamic content

Ensure screenreaders have access to content you dynamically add to the page.

---

#### Operable

Can all users operate the UI components and navigation?

---

##### Keyboard accessible

Ensure all functionality is able to be accessed using only the keyboard.

---

##### Time-limits

Don't enforce arbitrary time-limits. Ensure all users have enough time to complete their task.

---

##### Links

Ensure link texts tells users where they're going to be taken (rather than multiple links of "click here").

---

##### Headings

Ensure headings usefully subdivide content, and are hierarchical. They should describe the structure of the page.

---

##### Page titles

Use unique and descriptive titles for each page, rather than the same one for every page on the site. This is the first thing a screenreader user hears.

---

#### Operable

Can all your users understand the content and how to use the interface?

---

##### Plain English

Use plain English, with short, simple and clear content. Even highly-educated users prefer reading simple content.

---

##### Language

Use the `lang` attribute to set the language of elements. This usually goes on the `<html>` element, but if you change languages inside the page make sure you update this.

---

##### Labels

Always label form fields with `<label for"input-id">`. Some screenreaders do not read out placeholder text.

---

##### Errors

Provide helpful error messages in context. Don't show all input validation at the bottom of a form for example.

---

#### Robust

Content should be robust enough to be interpreted by a wide range of user-agents, including assistive technologies.

---

##### Semantic HTML

Use appropriate <abbr>HTML</abbr> elements to communicate meaning to screenreaders. This includes <abbr>HTML5</abbr> block-level elements like `<nav>` and `<footer>`.

---

##### WAI-ARIA

Use <abbr>ARIA</abbr> attributes to communicate semantics when <abbr>HTML</abbr> fails you.

---

##### Automated testing

Run your site through automated testing tools to catch obvious mistakes.

---

##### Manual testing

Automated testing can only go so far. Make sure you manually test with assistive technologies.

---

## WAI-ARIA

Stands for *Web Accessibility Initiative – Accessible Rich Internet Applications*...

A spec for assigning meaning to otherwise meaningless chunks of markup.

---

It's usually used in web-applications where functionality is added with JavaScript, which goes beyond the capabilities of semantic <abbr>HTML</abbr>. It can turn div-soup into something a screenreader can understand.

---

### Labels

If your content is visually obvious, but would be incomprehensible when read out by a screenreader you probably need to label it.

`aria-label` lets you provide an extra description of an element: `<button aria-label="menu button">☰</button>`

---

### Roles

If you are replicating native browser functionality with JavaScript, roles can add screenreader functionality.

For example a custom `<select>` using divs could use `role="listbox"` to communicate its purpose.

---

### Live regions

Screenreaders don't usually read out content that gets dynamically added to the page. `aria-live` marks a region to be watched and read out whenever the content changes.

Two values: "polite" or "assertive". Polite will be read once the current task is complete, but assertive will interrupt.

---

![](assets/img/aria-live.png)

---

## Resources

- [Mozilla's introduction to <abbr>ARIA<abbr/>](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/WAI-ARIA_basics)
- [Tutorials for building real components](https://inclusive-components.design/)
- [An overview of <abbr>WCAG</abbr>](https://bitsofco.de/the-accessibility-cheatsheet/)
- [Goverment Digital Services' accessibility blog](https://accessibility.blog.gov.uk/)
- [Microsoft's inclusive design guidelines](https://www.microsoft.com/en-us/design/inclusive)

---

# Thanks 🔥
[@_oliverjam](https://twitter.com/_oliverjam)
[oliverjam.es](http://oliverjam.es)
