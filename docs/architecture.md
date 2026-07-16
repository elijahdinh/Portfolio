# Portfolio Project Architecture

This document describes the structure and component architecture of the portfolio website. 

> [!IMPORTANT]
> **Component Modularity Rule:** To keep the codebase clean, maintainable, and easy to edit, **each section must be implemented as a separate file/component** (e.g., in a React project, as individual TSX files within the components or sections directory).

---

## Component Layout & Sections

The page is composed of the following 10 component files, loaded sequentially:

### 1. Navigation Bar (`Navbar.tsx`)
* **Purpose**: Page header providing navigation links to scroll to different sections of the page.
* **Details**: Sticky/fixed positioning at the top of the viewport.

### 2. Hero (`Hero.tsx`)
* **Purpose**: First visual area presented to the user.
* **Content**: 
  * Main Heading: Elijah Dinh (Name)
  * Subheading: `"Welcome to Greatness"`

### 3. About Me (`AboutMe.tsx`)
* **Purpose**: Introduction and background story of who I am.

### 4. Work Experience (`Work.tsx`)
* **Purpose**: Overview of professional and teaching experience.
* **Content**: 
  * **CrossRoads Tutoring**
  * **Santaluz Camp Counselor**

### 5. School (`School.tsx`)
* **Purpose**: Academic background and course load details.
* **Content**: 
  * **Del Norte Highschool**
  * **Advanced Placement (AP) Courses**:
    * AP Calculus AB
    * AP Biology
    * AP Chinese

### 6. Extracurriculars (`Extracurriculars.tsx`)
* **Purpose**: Leadership and volunteer engagements outside of classes.
* **Content**:
  * **MasterSports Basketball Coach**
  * **Peer Counseling**
  * **Leukemia & Lymphoma Society**
  * **Associated Student Body (ASB)**
  * **Second Chance Society**

### 7. Sports (`Sports.tsx`)
* **Purpose**: Athletic background and active team sports.
* **Content**:
  * **Basketball**
  * **Lacrosse**
  * **Football**

### 8. Hobbies (`Hobbies.tsx`)
* **Purpose**: Personal interests and lifestyle.
* **Content**:
  * **Lifting**
  * **Traveling**
  * **Food / Culinary exploration**

### 9. Contact & Socials (`Contact.tsx`)
* **Purpose**: Call to action for users to connect.
* **Content**:
  * **Instagram**: [https://www.instagram.com/elijahdinh/](https://www.instagram.com/elijahdinh/)
  * **Email**: [elijahsdinh@gmail.com](mailto:elijahsdinh@gmail.com)

### 10. Footer (`Footer.tsx`)
* **Purpose**: Standard bottom section of the website.
* **Details**: Copyright information and links.
