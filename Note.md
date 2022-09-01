
# Storybook React with Typescript

 create react type script component with tsdx

<https://tsdx.io/#quick-start>
TSDX - Its a zero-config CLI that help develop, test and publish typescript component library

- uses to create library(not application) that can be deployed or published to npm

Storybook - is an open-source tool for building UI components and pages in isolation.

It streamlines(organize) UI development, testing and documentation

- its component driven UI development
- its a bottom - up development model

Storybook addons
essential addons comes with tsdx
To add extra addons
added accessibility - npm install @storybook/addon-a11y
add '@storybook/addon-a11y' to main.js addon◊
Actions on storybook tracks the action on the component

stortbook mdx
<https://storybook.js.org/docs/react/writing-docs/mdx>

allow to create stand alone doumentation that is separate from the actual
component

# Project Setup

- npx tsdx create my-components
- Select react with storybook
- provide author name
- run npm start in one terminal 

This builds to `/dist` and runs the project in watch mode so any edits you save inside `src` causes a rebuild to `/dist`.

- run npm run storybook on other terminal

  - create Button.tsx component 
  - create Button.stories.tsx

# Args

  args used to dynamically change props, slots, styles, inputs. 
  It allows storybook and its addons to live edit components. 
  args are like a property for each story 