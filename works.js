const projects = [
    {
      number: "01",
      category: "WEB / DEVELOPMENT",
      title: "Project One",
      description: "A website I made to practice HTML, CSS and JavaScript.",
      technologies: "HTML · CSS · JavaScript",
      year: "2026",
      image: "images/project-01.jpg",
      repository: "https://github.com/yourusername/project-one"
    },
    {
      number: "02",
      category: "WEB / DEVELOPMENT",
      title: "Project Two",
      description: "A small project where I experimented with different layouts and animations.",
      technologies: "HTML · CSS · JavaScript",
      year: "2026",
      image: "images/project-02.jpg",
      repository: "https://github.com/yourusername/project-two"
    },
    {
      number: "03",
      category: "FULL STACK",
      title: "Project Three",
      description: "A project where I started learning how the front end and back end work together.",
      technologies: "JavaScript · Node · API",
      year: "2026",
      image: "images/project-03.jpg",
      repository: "https://github.com/yourusername/project-three"
    },
    {
      number: "04",
      category: "EXPERIMENT",
      title: "Project Four",
      description: "A small experiment I made to try out animations and interactions.",
      technologies: "HTML · CSS · JavaScript",
      year: "2026",
      image: "images/project-04.jpg",
      repository: "https://github.com/yourusername/project-four"
    },
    {
        number: "01",
        category: "WEB / DEVELOPMENT",
        title: "Project One",
        description: "A website I made to practice HTML, CSS and JavaScript.",
        technologies: "HTML · CSS · JavaScript",
        year: "2026",
        image: "images/project-01.jpg",
        repository: "https://github.com/yourusername/project-one"
      },
      {
        number: "02",
        category: "WEB / DEVELOPMENT",
        title: "Project Two",
        description: "A small project where I experimented with different layouts and animations.",
        technologies: "HTML · CSS · JavaScript",
        year: "2026",
        image: "images/project-02.jpg",
        repository: "https://github.com/yourusername/project-two"
      },
      {
        number: "03",
        category: "FULL STACK",
        title: "Project Three",
        description: "A project where I started learning how the front end and back end work together.",
        technologies: "JavaScript · Node · API",
        year: "2026",
        image: "images/project-03.jpg",
        repository: "https://github.com/yourusername/project-three"
      },
      {
        number: "04",
        category: "EXPERIMENT",
        title: "Project Four",
        description: "A small experiment I made to try out animations and interactions.",
        technologies: "HTML · CSS · JavaScript",
        year: "2026",
        image: "images/project-04.jpg",
        repository: "https://github.com/yourusername/project-four"
      }
  ];
  
  let currentIndex = 0;
  
  const image = document.getElementById("projectImage");
  const number = document.getElementById("projectNumber");
  const category = document.getElementById("projectCategory");
  const title = document.getElementById("projectTitle");
  const description = document.getElementById("projectDescription");
  const technologies = document.getElementById("projectTech");
  const year = document.getElementById("projectYear");
  const repository = document.getElementById("projectRepository");
  
  const currentProject = document.getElementById("currentProject");
  const totalProjects = document.getElementById("totalProjects");
  
  const nextButton = document.querySelector(".album__next");
  const prevButton = document.querySelector(".album__prev");
  
  const page = document.querySelector(".album__page--current");
  
  
  // Show project
  function showProject() {
  
    let project = projects[currentIndex];
  
    image.src = project.image;
    image.alt = project.title;
  
    number.textContent = project.number;
    category.textContent = project.category;
    title.textContent = project.title;
    description.textContent = project.description;
    technologies.textContent = project.technologies;
    year.textContent = project.year;
  
    repository.href = project.repository;
  
    currentProject.textContent = currentIndex + 1;
    totalProjects.textContent = projects.length;
  }
  
  
// Next project

nextButton.addEventListener("click", function() {

    page.classList.remove("turn-prev");
    page.classList.add("turn-next");
  
    setTimeout(function() {
  
      currentIndex++;
  
      if (currentIndex >= projects.length) {
        currentIndex = 0;
      }
  
      showProject();
  
      page.classList.remove("turn-next");
  
    }, 1100);
  
  });
  
  
  prevButton.addEventListener("click", function() {
  
    page.classList.remove("turn-next");
    page.classList.add("turn-prev");
  
    setTimeout(function() {
  
      currentIndex--;
  
      if (currentIndex < 0) {
        currentIndex = projects.length - 1;
      }
  
      showProject();
  
      page.classList.remove("turn-prev");
  
    }, 1100);
  
  });
  
  // Fpor arrows on keyboard
  document.addEventListener("keydown", function(event) {
  
    if (event.key === "ArrowRight") {
      nextButton.click();
    }
  
    if (event.key === "ArrowLeft") {
      prevButton.click();
    }
  
  });
  
  showProject();