# Shopify Front End Developer Intern Challenge - Fall 2022

## <a href = "https://shopify-openai.netlify.app/">View Deployed Site </a>

Geography Trivia is an application built with React which allows users to enter a geography-related question/prompt and receive an answer using GPT-3 a powerful AI model created by OpenAI (https://openai.com/api/). It can process plain text prompts and produce outputs that are hard to distinguish from human writing. This application was built as part of Shopify's 2022 Fall front-end development intern challenge.

![Website Image](https://github.com/rosemaryku/shopify-challenge-fall-2022/blob/main/public/app_screenshot.png)

This simple-to-use interface includes the following:

- A form for entering text prompts
- Submitting the form sends the prompt to the OpenAI API
- Results are displayed in a list, sorted from newest to oldest. Each result should include the original prompt and a response from the API.

## Tech Stack

- React.js
- HTML
- SCSS
- OpenAI API(https://openai.com/api/)

## Technical Requirements

- Results should come from OpenAI’s completions API.
- Each result should include at least the original prompt you entered and the response from the API.
- Responses should be stored in order of newest to oldest.
- The HTML that ends up being served client-side should be accessible and semantic.

## Extras

- Save responses if the user leaves or reloads the page
- Let the user choose the AI engine from a select box
- Make the app more specific to a single purpose
