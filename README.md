# Bitwise Portfolio Website Template

This repository contains the source code for the Bitwise portfolio website template, designed to be hosted on GitHub Pages.

## Project Goal

To create a professional, responsive, single-page portfolio website for the company "Bitwise" based on the provided requirements. The website will showcase the company's vision, experience, services, projects, and client testimonials.

## Design & Layout

The website follows a clean, modern, single-page layout with smooth scrolling navigation. Key design considerations include:

- **Header:** A fixed header containing the Bitwise logo on the left and navigation links (Home, Vision, Experience, Projects, Reviews, Contact) on the right. This ensures easy navigation from anywhere on the page.
- **Hero Section:** A full-width section at the top with a welcoming headline and a brief tagline for Bitwise.
- **Vision & Experience Section:** A dedicated section combining the company's vision, mission, and experience details in a clear text format.
- **What We Are Doing Section:** Outlines the services offered by Bitwise. This might use a simple list or potentially small cards with icons for better visual separation.
- **Projects Section:** Features a horizontal slider/carousel (powered by Swiper.js) showcasing project cards. Each card will include a project title, a small preview image, and a short description.
- **Clients' Reviews Section:** Another horizontal slider/carousel (powered by Swiper.js) displaying client testimonials. Each slide will contain the review text, client name, and optionally their avatar.
- **Footer:** A simple footer containing contact information (e.g., email address) and a link to the company's GitHub profile.
- **Responsiveness:** The layout will be fully responsive, adapting seamlessly to various screen sizes (desktops, tablets, and mobiles) using CSS Flexbox/Grid and media queries.
- **Styling:** Vanilla CSS3 will be used for styling, keeping the codebase straightforward and easy to modify. Utility classes might be used for common styles (like containers, buttons) but it won't rely on a full framework like TailwindCSS initially, to maintain simplicity. Swiper.js CSS will be included for the sliders.
- **Interactivity:** Smooth scrolling for navigation links and interactive sliders for projects and reviews.

## Technology Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Swiper.js (for sliders)
- GitHub Pages (for hosting)

## Folder Structure

```
/bitwise-portfolio
│
├── index.html             # Main HTML file
├── style.css              # Main CSS file
├── script.js              # Main JavaScript file
├── /assets
│   ├── /images
│   │   └── bitwise-logo.png # Placeholder for logo
│   ├── /projects          # Placeholder images for projects
│   │   └── project1.png
│   │   └── project2.png
│   └── /reviews           # Placeholder images for avatars
│       └── avatar1.png
└── README.md              # This file
```

## Next Steps

1.  Implement the basic HTML structure (`index.html`).
2.  Apply CSS styling (`style.css`) based on the design.
3.  Add JavaScript (`script.js`) for smooth scrolling and slider initialization (Swiper.js).
4.  Create a placeholder logo.
5.  Add placeholder content for all sections.
6.  Prepare deployment instructions for GitHub Pages.



## Deployment to GitHub Pages

Follow these steps to deploy this website template to GitHub Pages:

1.  **Create a GitHub Repository:**
    *   Go to your GitHub account.
    *   Create a new **public** repository. Name it something relevant, like `bitwise-portfolio` or `your-company-name-portfolio`.

2.  **Upload Project Files:**
    *   Upload all the files and folders from the `bitwise-portfolio` directory (which includes `index.html`, `style.css`, `script.js`, `README.md`, and the `assets` folder) to the root of your new GitHub repository.
    *   You can do this using the GitHub web interface (Upload files button) or using Git commands (`git add .`, `git commit -m "Initial commit"`, `git push origin main`).

3.  **Enable GitHub Pages:**
    *   In your repository on GitHub, go to the **Settings** tab.
    *   In the left sidebar, click on **Pages**.
    *   Under the "Build and deployment" section, select the source as **Deploy from a branch**.
    *   Choose the branch you uploaded your files to (usually `main` or `master`).
    *   Select the folder as `/ (root)`.
    *   Click **Save**.

4.  **Access Your Live Website:**
    *   GitHub Pages will build and deploy your site. This might take a minute or two.
    *   Once deployed, GitHub will display the public URL for your website at the top of the Pages settings section. It will look something like: `https://yourusername.github.io/your-repository-name/`
    *   Visit the provided URL to see your live portfolio website.

5.  **Update Content:**
    *   Edit the `index.html` file directly on GitHub or locally and push the changes.
    *   Replace all the `[Placeholder...]` text with your actual company information (Vision, Experience, Services, Project details, Client Reviews).
    *   Replace the placeholder images in the `assets/images`, `assets/projects`, and `assets/reviews` folders with your actual logo, project screenshots, and client avatars. Ensure the filenames match those used in `index.html` or update the `src` attributes in `index.html` accordingly.

## Custom Domain (Optional)

If you have a custom domain name (e.g., `www.bitwise.com`), you can configure it to point to your GitHub Pages site. Follow the official GitHub documentation for setting up a custom domain.
