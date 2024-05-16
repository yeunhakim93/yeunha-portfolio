// will be fetched from DB

export const fetchInfo = {
  skills: [
    [
      {
        name: "Java",
        logo: "",
      },
      {
        name: "JavaScript",
        logo: "",
      },
      {
        name: "TypeScript",
        logo: "",
      },
      {
        name: "Python",
        logo: "",
      },
    ],
    [
      {
        name: "React",
        logo: "fa-brands fa-react",
      },
      {
        name: "Redux",
        logo: "",
      },
    ],
    [
      {
        name: "Docker",
        logo: "",
      },
      {
        name: "CI/CD",
        logo: "",
      },
    ],
  ],
  projects: [
    //     {
    //       title: "Forever Flash Cards",
    //       year: "2024",

    //       thumbnail: "",
    //       description: `This app lets you add flash cards, and uses workers(microservice) to updated DB to update if something needs to be reviewed
    // Function: Interfaces with the ChatGPT API for generating and answering flashcards.
    // Technologies: Python, FastAPI.
    // `,
    //       stacks: [
    //         "Python",
    //         "Django",
    //         "Azure SQL",
    //         "ChatGPT API",
    //         "OAuth2",
    //         "Kubernetes", // (Google Kubernetes Engine (GKE))
    //         "React",
    //         "Redux",
    //         "React-DnD",
    //         "Axios",
    //         "TanStack Query",
    //       ],
    //       blog: "blog",
    //       github: "url",
    //       demo: "url",
    //     },
    //     {
    //       title: "Kam Pets",
    //       year: "2024",
    //       thumbnail: "",
    //       description: "App Description",
    //       stacks: [
    //         "Java",
    //         "Spring",
    //         "MySQL",
    //         "OAuth2",
    //         "React",
    //         "Redux",
    //         "React-DnD",
    //         "Axios",
    //         "TanStack Query",
    //       ],
    //       blog: "blog",
    //       github: "url",
    //       demo: "url",
    //     },
    //     {
    //       title: "Web Scraper",
    //       year: "2024",

    //       thumbnail: "",
    //       description: "App Description",
    //       stacks: ["Go"],
    //       blog: "blog",
    //       github: "url",
    //       demo: "url",
    //     },
    //     {
    //       title: "Daily TODO App Chrome Extension",
    //       year: "2024",

    //       thumbnail: "",
    //       description: "App Description",
    //       stacks: ["React", "Redux", "React-DnD"],
    //       blog: "blog",
    //       github: "url",
    //       demo: "url",
    //     },
    //     {
    //       title: "Golden Cohort",
    //       year: "2022",

    //       thumbnail: "",
    //       description: "App Description",
    //       stacks: ["React", "Redux"],
    //       blog: "blog",
    //       github: "https://github.com/yeunhakim93/golden-cohort",
    //     },
    {
      title: "Solid Tic-Tac-Toe",
      year: "2022",
      thumbnail:
        "https://lh3.googleusercontent.com/pw/AP1GczMVLDrFwjznttE33kD4d0VNhtvRZF0JB_kLkC4DvE5I1DjQVnONQm2GK2Qm9P3m50Fn18ToPFPIzWWSbp7K1vKfLiQmcubxUbGVUX8vrhr4ENuLKHwkPugV5VCFhsWQlqA3iofshT0Up4psi85bv3FS=w500-h501-s-no-gm",
      description:
        "Solid Tic-Tac-Toe, built with Solid.js, offers users a classic game experience with a responsive interface. This project was created to explore and showcase the capabilities of the Solid.js framework.",
      stacks: ["Solid.js", "Jest", "Vite"],
      github: "https://github.com/yeunhakim93/solid-tic-tac-toe",
      demo: "https://yeunhakim93.github.io/solid-tic-tac-toe/",
    },
    {
      title: "React Chart App",
      year: "2021",
      thumbnail:
        "https://lh3.googleusercontent.com/pw/AP1GczN7YPI4pLznGMa3zg5AKu5MEtcN0DgV3KBUxhiwWG7nm_kgIMF3m2rODwkW6pMkxkfTKpZgXaRcGkk1x26ZATiZMJZMLLRS8gG2ER7tSmrXe-i1b-jyvDDn_xRsIYNyXDoD7LZuE_0Ui7uMBm1DWBbO=w541-h542-s-no-gm",
      description:
        "The React Chart App is a project built with React and Chart.js to explore data visualization through various chart types like line, bar, pie, and doughnut charts.",
      stacks: ["React", "Chart.js"],
      github: "https://github.com/yeunhakim93/react-chart-app",
      demo: "https://yeunhakim93.github.io/react-chart-app/",
    },
    {
      title: "Drum Kit",
      year: "2021",
      thumbnail:
        "https://lh3.googleusercontent.com/pw/AP1GczM9lV77fd-eSroJ_UusppXWRgivXpkPo_hZN7YkkAKUsrrnttxWSq-dMzKJzrX2SkGwKPE3dIwiDprg2P3sIhgbrIoERc1dg-xgs9vbsCugYKOfcULSGlNsJDEw0mMqVzHX6XUJuaUpF3KQ6ygwYHE_=w100-h101-s-no-gm",
      description:
        "This Drum Kit project, built with vanilla JavaScript, allows users to play drum sounds by clicking buttons or pressing specific keys on their keyboard, with animated visual feedback.",
      stacks: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/yeunhakim93/drum-kit",
      demo: "https://yeunhakim93.github.io/drum-kit/",
    },
    {
      title: "NCT Snake",
      year: "2018",
      thumbnail:
        "https://lh3.googleusercontent.com/pw/AP1GczOdauBqrLz31F_I7HoRLfx8p_Nth5CGmNgRUtXfAfRH0uwes5KufZdn9iuLZ4RNQnJ-5bBYX2HEDSr14KiL0ah1tN1L3yVXRCwPsz-nwqlAxiK4iRkgIh3ioQEw-7MvFyQZXvUMV-Fwpj8r5B-qMKkD=w200-h201-s-no-gm",
      description:
        "A snake game inspired by NCT, utilizing p5.js for interactive visuals and gameplay.",
      stacks: ["p5.js", "JavaScript", "HTML", "CSS"],
      github: "https://github.com/yeunhakim93/NCTSnake",
      demo: "https://yeunhakim93.github.io/NCTSnake/",
    },
  ],
  contact: "yeunhakim93 at gmail dot com",
};
