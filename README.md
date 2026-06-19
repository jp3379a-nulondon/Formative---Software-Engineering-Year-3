# Formative---Software-Engineering- NCHNAP688

Code & Documentation for Software Engineering Formative - NCHNAP688: Special Name Display Application. Created by Joe Petzold.



<details>

<summary>Introduction</summary>

### Purpose

The purpose of this project is to design and develop a basic web application that allows a user to enter their name and generate a more colourful, fun, and visually engaging version of it.

The business requirement is to provide a simple and interactive user experience that demonstrates basic web application functionality, including user input, processing, and dynamic output display.

</details>



<details>

<summary>Feasibility</summary>

### Feasibility

This project is suitable for a waterfall-style development approach because the requirements are simple, clearly defined, and unlikely to change significantly during development. If the application becomes popular or requires additional features in the future, it could be adapted into an agile project with continuous improvement and regular updates.

The project’s feasibility was assessed using the TELOS framework, which considers technical, economic, operational, legal/compliance, and schedule factors (Putri, Chumaidiyah and Sriwana, 2025). The project is feasible because it uses simple web technologies such as HTML, CSS, and JavaScript, requires minimal cost and resources. The project is feasible as it meets the basic user requirement of generating a styled name output, has low legal risk because no sensitive data or third-party services are used. It can realistically be completed within the planned three-week development period.
 
</details>



<details>
<summary>Design and Prototyping</summary>

### Requirements

The web application is designed as a simple one page application. The user enters their name into an input box, and the application displays the name in a more colourful and decorative style using emojis and visual effects.

#### Functional Requirements

1. The application must allow the user to enter their name into an input field.
2. The application must validate that the input field is not empty before submitting.
3. The application must display the entered name on the page after submission.
4. The displayed name must include decorative styling, such as colour, emojis, or visual effects.
5. The application must provide a reset option to clear the input and return the page to its original state.

#### Non-Functional Requirements

1. The application should be simple and easy to use.
2. The design should be visually clear and suitable for the intended purpose.
3. The page should respond quickly when the user submits or resets their name.
4. The application should work correctly in a modern web browser.
5. The code should be structured clearly so it can be maintained or improved in the future.

---

### Figma Design

A Figma prototype was created to show the planned design and user flow for the web application.

[Click here for Figma Prototype](https://www.figma.com/proto/78K9Uwt0qW2bn8YnjpyLGU/Untitled?node-id=0-1&t=edW5kpMw7hRm3UPV-1)

Figma was used to create an interactive prototype of the minimum viable product (MVP). This helped define the layout, visual style, and basic functionality before development began. It provides a clear example of how the user would interact with the application (Figma, n.d.).


<img width="940" height="683" alt="image" src="https://github.com/user-attachments/assets/a3fdeaf9-33a0-4ff8-a7d0-1941800ab6d0" />

**Figure 1 -** *Shows the homepage of the application, where the user can enter their name into the input box.*

<img width="940" height="684" alt="image" src="https://github.com/user-attachments/assets/0ef260b6-2996-45e4-8f28-9636da36b27c" />

**Figure 2 -** *Shows the results view, where the user’s entered name is displayed with decorative styling.*  


The prototype can be used to gather user feedback on the layout, usability, and overall appearance of the application before the final version is completed.

</details>




<details>

<summary>User requirements</summary>

### Requirements

Users need the app to be simple, clear, and easy to use without instructions. They should be able to enter their name, receive an immediate decorated result, and reset the page to try again. The app should also provide feedback if no name is entered, use fun visual styling such as colours and emojis, and work smoothly across modern browsers and different screen sizes.

### User Persona

<img width="940" height="533" alt="image" src="https://github.com/user-attachments/assets/7e7b7beb-dc7a-43bd-a72d-452fcafd660b" />

**Figure 3** – *Proto-persona card of a likely user.* 

</details>



<details>

<summary>User Documentation</summary>

### Features

This web application allows the user to enter their name and generate a decorated version of it. The output displays the name in a colourful and visually engaging style using emojis, animation, and text effects.

The app includes:
- A name input box
- An enter button to generate the decorated name
- A reset button to clear the result
- A display area for the image or generated name

### How to Use the App

1. Open the application homepage.
2. Type a name into the input box.
3. Click the **ENTER** button.
4. The entered name will appear on the page with decorative styling.
5. To try again, either enter a new name or click the **RESET** button to return the page to its original state.

</details>

<details>

<summary>Technical Documentation</summary>

### Tech Stack and Deployment

The application was built using basic front-end web technologies:

- **HTML** for the page structure
- **CSS** for styling, layout, colours, and animations
- **JavaScript** for user input, validation, and displaying the decorated name
- **Figma** for creating the design prototype
- **GitHub** for version control and project management

### System Requirements

To develop, test, and deploy the application, the following are required:

- Access to the internet
- A modern web browser
- A GitHub account
- Access to the GitHub repository and GitHub Projects board
- A code editor, such as Visual Studio Code
- Access to Figma for viewing or editing the prototype

</details>

<details>

<summary>Project Management</summary>

### Project Board

The project was managed using GitHub Projects as a Kanban-style board, allowing tasks to be created as issues and moved through stages such as **To Do**, **In Progress**, **In Review**, and **Done**. Linking issues to pull requests helped connect tasks to code changes, support review by others, and automatically update or close work when completed.

<img width="940" height="624" alt="image" src="https://github.com/user-attachments/assets/32a7394e-d9f3-4e28-a9b7-c7d12b0f7e4e" />

**Figure 4** - *Figure shows a mid-development screenshot of the GitHub project board.*

</details>




<details>

<summary>Testing</summary>

### Manual Tests
The application was tested manually by checking that:

- The homepage loads correctly.
- The CSS styling and images display as expected.
- The user can enter a name into the input box.
- The **ENTER** button displays the decorated name.
- Empty input is handled correctly.
- The **RESET** button clears the result and restores the original page view.
- The application works correctly after deployment to GitHub Pages.

### Google Lighthouse - Accessibility testing
Google Lighthouse enables accessibility testing to be conducted directly within the web browser, allowing developers to assess the accessibility quality of a web page, identify common issues such as missing labels or insufficient colour contrast, and use the generated report to support evidence-based improvements before deployment (Google Lighthouse, n.d.).


[Click here for the full Google Lighthouse Report](https://github.com/user-attachments/files/29138957/google_lighthouse_report.pdf)


<img width="940" height="581" alt="image" src="https://github.com/user-attachments/assets/2566a3c2-2b95-4ed7-88d1-6c960dcfa817" />

 
**Figure 5** - *Google lighthouse report showing overall high scores, but accessibility needs to be improved.*

</details>




<details>

<summary>Evaluation</summary>

### Future Development

The application could be further developed by expanding it beyond a single-page design and introducing additional features. For example, future versions could generate different emoji combinations for each name, include a name generator that allows users to create random names before decorating them, or add a name rating feature that scores the generated name out of ten.

These improvements would increase the level of interactivity within the application and may improve user engagement. Research suggests that better functionality which is well-designed, can positively influence user satisfaction, trust, and continued usage intention (Kim and Yum, 2024).

### Conclusion

The project was successful in meeting its main objective of creating a simple interactive web application. The development process was manageable due to the limited scope of the application and the use of basic web technologies such as HTML, CSS, and JavaScript.

There were some challenges experienced when using GitHub Projects. In particular, linking project tickets to pull requests occasionally caused confusion, as pull requests would be a separate entity which made the project board appear busy. Despite this, the linked issues with the pull requests entities still provided useful documentation of the tasks completed and helped track the development process. This demonstrated the value of using version control and project management tools, while also highlighting the importance of keeping project boards clear and well organised.

</details>




<details>

<summary> References </summary>

- Kim, J., and Yum, K. (2024) “Enhancing Continuous Usage Intention in E-Commerce Marketplace Platforms: The Effects of Service Quality, Customer Satisfaction, and Trust”, Applied Sciences, 14(17), Article 7617. [online] Available at: https://doi.org/10.3390/app14177617 (Accessed: 19 June 2026).

- Putri, S., Chumaidiyah, E. and Sriwana, I. (2025) “TELOS Feasibility Analysis for Application Development Project using System Dynamics Approach”, Journal Teknik Industri: Jurnal Hasil Penelitian dan Karya Ilmiah dalam Bidang Teknik Industri, 11(1), pp. 89-100 [online] Available at: https://doi.org/10.24014/jti.v11i1.37009. (Accessed: 19 June 2026).
  
- Figma (n.d.) Figma [online]. Available at: https://figma.com/ (Accessed: 19 June 2026).
  
- Google Lighthouse (n.d.) Lighthouse [online]. Available at: https://developer.chrome.com/docs/lighthouse (Accessed: 19 June 2026).
  
- GitHub (n.d.) GitHub [online]. Available at: https://https://github.com/ (Accessed: 19 June 2026).

</details>
