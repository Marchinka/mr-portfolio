
## Introduction

### Project background


The objective of this project is to <span class="u agile">re-engineer the main document platform</span> used by a major <span class="u design">Italian oil & gas company</span>, with a focus on improving the user experience for the technical and scientific department. The goal is to create a platform that is user-friendly, efficient, and provides a digital signature feature and improved profile management. The platform should also be able to integrate with at least 10 company applications to ingest data and user information. The platform will have over <span class="u design">3,000 users</span>, making it important to design a platform that is scalable and efficient for a large user base. 

The project involved as well the migration of <span class="u software">600k documents</span> and <span class="u software">25 Tb</span> of physical files from the previous infrastructure.

### Target Audience

The target audience for this platform includes technical and scientific employees of the Italian oil & gas company (<span class="u design">geologyst</span>, <span class="u design">reservoir experts</span>, <span class="u design">drilling specialists...</span>), who work with documents on a daily basis and need a platform that is easy to use and provides the necessary functionality. The platform should be accessible and efficient for individuals who work in 12 professional areas of expertise within the company.

## Project Management

### Team

The team for this project was composed of 
- 1 Scrum master (<span class="u agile">me</span>)
- 2 Solution Architects - *Luca Di Biagio. Fabrizio Zanette. Microsoft*
- 1 Azure cloud expert - *Stefano Campanella. Techedge*
- 1 Senior Dev Lead  - *Francesco Cardin. Microsoft*
- 2 UX designers - *Andrea Caporale. Francesco Villa. Microsoft*
- 5 Software developers / heroes - *Emanuele Serrao, Giuseppe Campanella, Davide Ferri, Andrea Pasquali, stefano Ruga. Techedge.*



### Project Governance

The governance of the team was focused on collaboration, continuous improvement, and delivering value. As the Scrum master, I was responsible for facilitating the whole process and ensuring that the team adheres to Agile principles. The Solution Architect and Azure cloud expert were responsible for technical decisions and ensuring that the solution is scalable, reliable, and meets the requirements. The Senior Dev Lead and software developers were responsible for the development process, ensuring code quality, and delivering features on time. The product backload included items for the UX team as well, and it was responsible for the user experience and ensuring that the solution is user-centric. 

- Complete <span class="u agile">Agile Scrum</span> cycle (planning, review, daily, retrospective). 3 week sprints. Daily meetings with the project team and the customer. Product backload management on Azure DevOps.
- <span class="u software">Architectural review board</span>: an architectural review board (ARB) is a group of technical experts and stakeholders responsible for assessing proposed changes to a software system's architecture. The board evaluates the proposed changes based on established design principles and guidelines, to ensure that the architecture aligns with the system's functional requirements, scalability, security, maintainability, and other relevant non-functional requirements. The ARB aims to maintain the overall coherence and consistency of the system's architecture and to prevent architectural deterioration or divergence over time. Our ARB was frequently about microservices on **Azure AKS** and implementing features based on **Azure Cognitive Search** PaaS service.
- <span class="u design">Design Reviews</span>: our design reviews included our team UX specialists, developers, and project stakeholders who provided feedback on the design based on established UX design principles, such as usability, accessibility, and visual design. The design review aimed to ensure that the design meets the needs of the target users, is user-friendly, and aligned with the overall product strategy. The board's feedback helped to optimize the design and improve the user experience while iterating both on prototypes and the final product. Among our team members, these meetings helped us to implement correctly **Atomic Design** adopting Microsoft **Fluent UI** design system.
- **Prendere ispirazione dal ciclo LEAN UX + SCRUM**
- **Come era gestite le attività di Design?**
- **Spiegare ARB and Accessibility**







### Timeline
<span style="background: yellow">Timeline</span>
### Product evolution

## User Research

### User needs & goals

- Easy to use interface with intuitive navigation
- Improved profile management to streamline the process of accessing and using the platform
- Digital signature capabilities to facilitate secure and efficient document management
- Integration with at least 10 company applications to ingest data and user information. The user experience between all of these applicaions must fill the same for the user.
- Ability to categorize and organize documents according to the 12 professional areas of expertise within the company
- Robust search capabilities to quickly find relevant documents
- Integration with Microsoft Teams, allowing users to choose files from their Teams channels and access the platform as a Teams app

### User personas

<span style="background: yellow">Present the user personas that were created based on the research, including demographics, motivations, and behaviors.</span>

DIRE CHE ERANO ROLE BASED PERSONAS

Document platform admin
Library Users
Geoscience
Admin
Author
Reader
Drilling
Admin
Author
Reader
Exploration
Admin
Author
Reader

How were the interviews conducted?
Iterazione sui mockup prodtti dai designer
Use of analytics for tracking user habits


### User journeys

<span style="background: yellow">Show the user journeys that were mapped out to understand the user experience, including pain points and opportunities for improvement.</span>


### User research materials

<span style="background: yellow">Present the user research materials, such as surveys, interview transcripts, and persona profiles.</span>

User research script:

General
- How would you describe the software objective in just one phrase?
- Tell me about the last time you used the document platform
- When was it?
- Why did you use it?
- Was it easy/fun/difficult/etc. to use the product?
- Were there any problems?
- What kind of files do you upload on the platform?
- How often do you use the product?
- What devices do you normally use?
- Can you show me the typical user flows you follow in your workday using the product? 

Positive experiences
- Can you describe the last time you had a positive experience with the product?
- What are the current product features you like? 

Problems
- Tell me of a moment you felt frustrated using the application.
- What are the current product features that are not working properly?
- What features are missing?

After performing this kind of research, we recollected all the users responses, iterated over them, and produced the problem statements that will correspond to the first users stories of the project. The “definition of done” we are working on for this kind of user stories will always require an user-validated prototype of the functionality before the developers could start their work.

<span style="background: yellow">AGGIUNGERE I CULTURAL PROBES AI METODI DI RICERCA</span>



### User feedback & insights

<span style="background: yellow">Summarize the user feedback and insights that were gathered from the research, and how they informed the design process.</span>


<div class="highlight">It's very difficult to find documents that I am not looking for. - Document Platform key user</div>

## Solution Design





### Problem definition

<span style="background: yellow">Clearly state the problem that the project aims to solve, and why it is important to address.</span>

### Design objectives

<span style="background: yellow">Outline the design objectives that were established based on the user research, including the goals and outcomes that the design should achieve.</span>


- User-centered design approach to prioritize the needs of the target audience
- Intuitive navigation to make it easy for users to find what they need
- Clean and modern design to improve the overall user experience
- Responsive design to ensure the platform is accessible on different devices and screen sizes
- Integration with existing company applications and Microsoft Teams to streamline the user experience
- A design system foundation that can be leveraged by the entire company


### Design deliverables


- Wireframes for the new document platform
- High-fidelity mockups for key screens
- User testing plan to gather feedback from the target audience
- Final design specifications and guidelines for development
- A design system foundation for the entire company


### Strategy & Solution

<span style="background: yellow">Present the design strategy and solution that was developed to address the problem, including the design concepts, wireframes, and prototypes.</span>


### Technical Architecture

<span style="background: yellow">Architecture</span>


<span style="background: yellow">Show how the design evolved over time based on user feedback and iteration, and explain how the final solution was reached.<7span>

## User Testing

### Methodology

<span style="background: yellow">Explain the user testing methodology that was used, including the participants, tasks, and evaluation criteria.</span>

### Results & feedback

<span style="background: yellow">Present the results and feedback from the user testing, including any insights or recommendations that were generated.</span>

### Recommendations

<span style="background: yellow">Outline the recommendations for improvement based on the user testing results, and explain how they were incorporated into the final design.</span>

## Conclusion

### Outcomes & achievements

<span style="background: yellow">Summarize the key outcomes and achievements of the project, including how it met the user needs and goals, and any impact it had on the target audience.</span>

### Lessons learned

<span style="background: yellow">Reflect on the lessons learned during the project, including any challenges and opportunities for improvement.</span>

fare collaborare meglio i dev e i desgin attraverso le design reviews


### Future improvements

<span style="background: yellow">Suggest future improvements that could be made to the design, based on the lessons learned and the potential for future evolution.</span>


## Appendices

### Project artifacts

<span style="background: yellow">Include any relevant project artifacts, such as design sketches, wireframes, prototypes, and user testing materials.</span>
