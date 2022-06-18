import type { CurriculumType } from '../components/cv/Curriculum.type'

export const gistId = '46a22961ab87aa92f6d6642bec23ca99'
// gist api: https://api.github.com/gists/46a22961ab87aa92f6d6642bec23ca99
// res.files[CurriculumInfo.json].raw_url=https://gist.githubusercontent.com/opensas/46a22961ab87aa92f6d6642bec23ca99/raw/d06f979bd1b6f47cf3842c8741a6798d7a4cd05e/CurriculumInfo.json

export const info: CurriculumType = {
  profile: {
    name: 'Sebastián Scarano',
    title: 'Full Stack Developer',
    img: 'assets/images/profile/sas5.jpg',
    email: 'opensas@gmail.com',
    cell: '+54 9 11 3152 2631',
    social: [
      { icon: 'fa-twitter', url: '//twitter.com/opensas' },
      { icon: 'fa-stack-overflow', url: '//stackoverflow.com/users/47633/opensas', text: '50K+ at stackoverflow.com' },
      { icon: 'fa-github-alt', url: '//github.com/opensas' },
      { icon: 'fa-gitlab', url: '//gitlab.com/opensas' },
      { icon: 'fa-linkedin-in', url: '//linkedin.com/in/opensas' },
    ]
  },
  career: {
    title: 'career summary',
    summary: `
            Full Stack Developer with 15+ years of hands-on experience designing, developing, and implementing applications and solutions using a wide range of technologies and programming languages.
    `
  },
  positions: [
    {
      title: 'Software Architect',
      company: 'National Ministry of Labour of Argentina ',
      time: '2012 - Present',
      text: `
        Designed, developed and implemented software solutions to address complex business issues, providing technical leadership within the IT department.
      `,
      sections: [
        {
          title: 'Responsibilities',
          items: `
            Analysis and definition of the architecture of applications to be developed;
            Definition of development standards;
            Planning of training tasks;
            Evaluate and recommend tools and technologies to achieve results;
            `
        }

      ],
      technologies: 'Node.js;.NET Core;TypeScript;Svelte;SQL Server;Bootstrap;'
    },
    {
      title: 'Project Leader',
      company: 'National Ministry of Labour of Argentina ',
      time: '2005 - 2012',
      text: `
        Managed critical large-scale projects at the Ministry of Labour. 
      `,
      sections: [
        {
          title: 'Responsibilities',
          items: `
            Design, develop and execute software solutions;
            Interpret business requirements to articulate the business needs to be addressed;
            Collaborate with peer organizations and end users to produce software solutions;
            Setting deadlines and ensuring that projects remain on schedule;
          `
        }

      ],
      technologies: '.NET Framework;ASP;JavaScript;Backbone;SQL Server;Bootstrap'
    },
    {
      title: 'Web Software Developer',
      company: 'National Ministry of Labour of Argentina ',
      time: '2000 - 2005',
      text: `
      Worked with sever-side scripting technologies (classic ASP, PHP) and relational databases to develop custom web applications to be used at the Ministry of Labour.
      `,
      sections: [
        {
          title: 'Responsibilities',
          items: `
            Writing and implementing efficient code;
            Training users;
            Working closely with other developers, analysts and users;
          `
        }
      ],
      technologies: 'Visual Basic 5.0/6.0;Classic ASP;PHP;SQL Server;JavaScript;Twitter Bootstrap;jQuery;Bootstrap'
    },
    {
      title: 'Software Developer',
      company: 'RM Consulting ',
      time: '1992..2000',
      text: `
      Development of desktop and client server applications for business management.
      `,
      sections: [
        {
          title: 'Responsibilities',
          items: `
            Writing and implementing efficient code;
            First level support;
            Training users;
          `
        }

      ],
      technologies: 'Visual Basic 4.0;PHP;Clipper;FoxPro;DBase;'
    },

  ],
  skillAreas: [
    {
      title: 'Frontend',
      skills: [
        { title: 'JavaScript/ES6', experience: 100 },
        { title: 'TypeScript', experience: 100 },
        { title: 'Svelte', experience: 90 },
        { title: 'Tailwind', experience: 80 },
        { title: 'Bootstrap', experience: 80 },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { title: 'Node.js', experience: 100 },
        { title: 'Express/NestJS/FoalTS', experience: 90 },
        { title: 'PHP', experience: 80 },
        { title: 'C#/.NET Core', experience: 80 },
        { title: 'Java', experience: 70 },
      ]
    },
    {
      title: 'Databases',
      skills: [
        { title: 'SQL Server', experience: 100 },
        { title: 'MySql', experience: 70 },
        { title: 'PostgreSQL', experience: 70 },
      ]
    },
  ],
  otherSkills: 'git;github/gitlab;VSCode;Postman/curl;jQuery;Twitter Bootstrap;Backbone;Scala;Crystal;Python;MongoDB;ELK stack;REST/SOAP;API design;Swagger/OpenAPI',
  education: [
    {
      degree: 'Information System Engineer',
      organization: 'National Technological University - UTN Argentina',
      time: '1994 - 2000',
    },
    {
      degree: 'Functional Programming Principles in Scala',
      organization: 'Dictated by Martin Odersky via Coursera',
      time: 'nov 2011',
    },
  ],
  awards: [
    {
      title: 'First price at the national hackaton of public data', time: 'aug 2015',
      description: `Visualization of tourist destinations and hotel occupancy [link](https://nardoz.com/HotelViz)`
    },
    {
      title: 'Second price at Buenos Aires mobile apps development hackaton', time: 'jun 2012',
      description: `Social collaborative platform for citizen discussion developed in Play! 2.0, with Scala, Akka and MySql.`
    },
  ],
  extras: [
    {
      title: 'Language',
      items: [
        { title: 'Spanish', comment: '(native)', text: '' },
        { title: 'English', comment: '(professional)', text: 'Good writing and speaking skills' },
        { title: 'Portuguese', text: 'Reading skills' },
        { title: 'French', text: 'Reading skills' },
      ]
    },
    {
      title: 'Other Interests',
      items: [
        { title: 'Piano', comment: 'Jazz player wannabe', text: '' },
        { title: 'Literature/Linguistics', comment: 'I studied three years of the Bachelor of Arts ', text: '' },
      ]
    },
  ],
  projects: [
    {
      title: 'Revamping of transfers service company website',
      company: '[89transfers](https://89transfers.vercel.app/)',
      time: '2021.02',
      text: `
Website for booking transfer services to/from the airport.
`,
      images: [
        {
          src: 'assets/images/89transfers/89transfers-01.png',
          href: 'https://89transfers.vercel.app',
          title: 'Transfers homepage',
          text: 'Landing page built with SvelteKit and TailwindCSS',
        },
        {
          src: 'assets/images/89transfers/89transfers-02.png',
          href: 'https://89transfers.vercel.app',
          title: 'Responsive design',
          text: 'Fully responsive design',
        },
        {
          src: 'assets/images/89transfers/89transfers-03.png',
          href: 'https://89transfers.vercel.app/blog',
          title: 'Blogs with Sanity.io',
          text: 'Sanity.io backed blog page',
        },
      ],
      sections: [
        {
          title: 'Features',
          items: `
High performance web site built with SvelteKit and TypeScript;
Fully responsive design with TailwindCSS;
Blog system powered by Sanity.io;
Live deploys with Vercel;
Pixel perfect layout from Figma design to TailwindCSS code;
Demo version available at [89transfers.vercel.app](https://89transfers.vercel.app/)
`
        },
      ],
      technologies: 'SvelteKit;TypeScript;TailwindCSS;Figma;Storybook;Sanity.io;Vercel'
    },
    {
      title: 'Commercial management system Backoffice',
      company: '[AutoCiudad](https://www.autociudad.com.ar/)',
      time: '2019.03',
      text: `
Commercial management backoffice for online auto-parts sale.
`,
      images: [
        {
          src: 'assets/images/autociudad/autociudad-04.jpeg',
          href: 'https://www.autociudad.com.ar',
          title: 'Autociudad Backoffice',
          text: 'Rich web graphics & statistics in action',
        },
        {
          src: 'assets/images/autociudad/autociudad-02.jpeg',
          title: 'Autociudad Backoffice',
          text: 'Sales & cashflow live console',
        },
      ],
      sections: [
        {
          title: 'Features',
          items: `
Social authentication with [Google](https://developers.google.com/identity) / [MercadoLibre](https://developers.mercadolibre.com.ar/es_ar/autenticacion-y-autorizacion);
Automatic synchronization with Google Sheets using [API v4](https://developers.google.com/sheets/api);
Sales & cashflow live console with updated from Google Sheets and [MercadoLibre](https://developers.mercadolibre.com.ar/es_ar/gestiona-ventas);
Rich web graphics & statistics;
Fully responsive;
Automatic invoice generation using [AFIP API](https://www.afip.gob.ar/ws/) (Federal Administration of Public Revenue)
`
        },
      ],
      technologies: 'Svelte;.NET Core;SQL Server;MercadoLibre API;AFIP api;AdminLTE 3;OIDC/OAuth 2.0'
    },
    {
      title: 'Svelte tutorials series for Mozilla Developer Network',
      company: '[Mozilla](//www.mozilla.org/)',
      time: '2019.03..2019.07',
      text: `
A series of eight tutorials developed specifically for Mozilla, covering most aspects of Svelte framework. The material starts with a basic introduction to Svelte and ends up developing a complete web application and covering advanced subjects, such as TypeScript support and deployment options. The work has been supervised by Chris Mills ([@chrisdavidmills](https://twitter.com/chrisdavidmills)), who has been in charge of MDN for the last ten years.
`,
      images: [
        {
          src: 'assets/images/mdn/mdn-todo-01.png',
          href: 'https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks#Svelte_tutorials',
          title: 'MDN todo-list application',
          text: 'The application we build in the tutorial',
        },
      ],
      sections: [
        {
          title: 'Contents',
          items: `
[Intro to Svelte](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started);
[Setup the template](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_Todo_list_beginning) of todo-list app;
[Working with variables and props](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_variables_props);
[Organizing our app in components](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks#Svelte_tutorials);
[Advanced topics](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_reactivity_lifecycle_accessibility): reactivity, lifecycle, accessibility;
[Centralizing state management](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_stores): all about Svelte stores;
[TypeScript support in Svelte](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_TypeScript);
[Deploying our app](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_deployment_next);
`
        }, {
          title: 'Material available',
          items: `
[Svelte tutorial on MDN](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks#Svelte_tutorials);
[github repo](https://github.com/opensas/mdn-svelte-tutorial) with tutorials and source code;
[Fully working app deployed on vercel](https://mdn-svelte-todo.vercel.app/);
[Application running on Svelte REPL](https://svelte.dev/repl/378dd79e0dfe4486a8f10823f3813190?version=3.23.2) for you to mess with the code without installing anything on your computer;
`
        },
      ],
      technologies: 'Svelte;Svelte REPL;JavaScript;TypeScript;accessibility/A11Y;git;gitlab;vercel;CI/CD'
    },
    {
      title: 'Public search engine for law offenders',
      time: '2019.02',
      text: `
Responsive web application to query the public record of law offenders. The application was developed to showcase how simple it is to develop a complete SPA with Svelte by consuming a public API.
`,
      images: [
        {
          src: 'assets/images/spa/spa-demo-01.png',
          // href: 'http://polar-reaches-84762.herokuapp.com',
          title: 'Public search engine for labor law offenders',
          text: 'Building a SPA with Svelte using data from a public API',
        },
      ],
      sections: [
        {
          title: 'Features',
          items: `
Responsive design, optimized for small factor devices;
No need for a web server, the whole app is just static HTML/CSS/JavaScript files;
All data is retrieved directly from the client from a public REST web service;
Server has been mocked with Node.js and deployed to [heroku](https://www.heroku.com/) for testing/showcasing;
`
        }
      ],
      technologies: 'Svelte;JavaScript;Bootstrap;heroku;Node.js;Express'
    },
    {
      title: 'Twitter-cloud demo app',
      company: '[MediaParty](//www.mediaparty.info/english)',
      time: '2019.08.29',
      text: `
Application for the workshop given at the MediaParty 2019, entitled **Svelte: a web framework for developers created by journalists**. We gave a short introduction to Svelte and showed how to use it to create rich and compelling interactive visualizations. The project uses a backend-for-frontend built with node.js to query twitter's API and retrieve the latests tweets from the specified users. Then it builds a D3-powered word-cloud and displays it on screen.
`,
      images: [
        {
          src: 'assets/images/twitter-app/twitter-app.png',
          href: 'https://twitter-cloud.opensas.now.sh/?users=realDonaldTrump,JoeBiden&interval=3&width=500&height=400&wordCount=40',
          title: 'Public search engine for labor law offenders',
          text: `Creating stunning visualizations with Svelte and twitter's API`,
        },
      ],
      sections: [
        {
          title: 'Features',
          items: `
Dynamically queries twitter's API to create word-clouds of the tweets of the specified users;
Parameters can be passed vía url: users, interval, width, height, number of words to retrieve, etc.;
Showcases how to integrate Svelte with 3rd parties libraries (in this case [D3's word cloud plugin](http://bl.ocks.org/joews/9697914));
Custom backend coded in Node.js to query twitter API. Source code available in [https://gitlab.com/opensas/twitter-rest](https://gitlab.com/opensas/twitter-rest);
Svelte application is up and running on vercel. **You can try it right now** with tweets from [@RealDonaldTrump](https://twitter.com/realDonaldTrump) and [@JoeBiden](https://twitter.com/JoeBiden) clicking [here](https://twitter-cloud.opensas.now.sh/?users=realDonaldTrump,JoeBiden&interval=3&width=400&height=400&wordCount=40)! (go ahead and play with the url params);
Svelte component queries the backend in parallel to speed up results;
Wanna have a look behind the curtains? Click [here](https://mediaparty-api.herokuapp.com/twitter/user_timeline_words?user=realdonaldtrump&count=40) to have a look at the backend response;
`
        }
      ],
      technologies: 'Svelte;JavaScript;Node.js;D3;vercel;heroku;Node.js;Polka;Twitter API;API rest'
    },
    {
      title: 'Todo app for Svelte Workshop',
      time: '2019..2020',
      text: `
I created this classic todo-application to get acquainted with Svelte framework and then used it to do live-coding workshops. In little more than an hour I code the entire application, showing how to setup a development environment, work with props and components, communicating between child and parent components, explaining how to work with stores and finally deploying to vercel.
`,
      images: [
        {
          src: 'assets/images/svelte-todo-app/svelte-todo-app.png',
          href: 'https://todo.opensas.now.sh/',
          title: 'Svelte todo app',
          text: `Svelte todo-app used to do live coding workshops introducing Svelte`,
        },
      ],
      sections: [
        {
          title: 'Features',
          items: `
Classic todo-application to showcase Svelte developer experience;
SPA application available on vercel [here](https://todo.opensas.now.sh/);
Built with [Tailwind css](https://tailwindcss.com/);
Slides of the presentation available [here](https://gitpitch.com/opensas/svelte-todo?grs=gitlab&p=en#/1);
`
        }
      ],
      technologies: 'Svelte;JavaScript;Tailwind CSS;vercel;live-coding'
    },
    {
      title: 'Observatory of the National Public Administration Budget',
      company: '[ASAP](https://www.asap.org.ar/) (Argentine association of budget and public administration)',
      time: '2017',
      text: `
This BUDGET OBSERVATORY available to the public brings a simplified visualization of the National Public Administration Budget. Its structure and content aims to provide a broad audience with the basic references that allow us to understand **who** are responsible for applying the resources that we all contribute, **how they allocate** them and **for what purpose**.
The data is obtained from public sources and also with a custom scraper developed in python.
`,
      images: [
        {
          src: 'assets/images/budget/budget-01.png',
          href: 'http://opensas.github.io/presu/#/',
          title: 'Budget observatory homepage',
          text: 'Budget observatory homepage',
        },
        {
          src: 'assets/images/budget/budget-02.png',
          href: 'http://opensas.github.io/presu/#/quien',
          title: 'Budget observatory: who spends?, summary view',
          text: 'Budget observatory: who spends?, summary view',
        },
        {
          src: 'assets/images/budget/budget-03.png',
          href: 'http://opensas.github.io/presu/#/paraque?t=bubble',
          title: 'Budget observatory: for what purpose? bubble view',
          text: 'Budget observatory: for what purpose? bubble view',
        },
        {
          src: 'assets/images/budget/budget-04.png',
          href: 'http://opensas.github.io/presu/#/paraque?t=treemap',
          title: 'Budget observatory: for what purpose? area view',
          text: 'Budget observatory: for what purpose? area view',
        },
      ],
      sections: [
        {
          title: 'Features',
          items: `
Responsive design using twitter bootstrap.;
Provides several graphics types: summary, bubbles, areas and bars.;
Processes data from custom scrapper developed with Python and public sites.;
A demo version is available [here](http://opensas.github.io/presu/#/).;
`
        }
      ],
      technologies: 'AngularJS;JavaScript;D3;Twitter Bootstrap;Python;github pages'
    },
    {
      title: 'Atlas of the Buenos Aires suburbs',
      company: '[PEC](http://www.atlasconurbano.info/pagina.php?id=52) (suburban study program)',
      time: '2016',
      text: `
This Atlas proposes a current vision of Buenos Aires suburbs, built from existing, but dispersed, information from official bodies and data provided by local governments and national universities based in the territory of the agglomerate.
It uses several client-side technologies like [LeafLet](https://leafletjs.com/), [OpenStreetMap](https://www.openstreetmap.org/#map=4/-40.44/-63.59), [Mapbox](https://www.mapbox.com/), Google Maps and jQuery Twitter Bootstrap;to provide an interactive and snappy experience when browsing the Buenos Aires suburbs cartography.
      `,
      images: [
        {
          src: 'assets/images/atlas-conurbano/atlas-conurbano-01.png',
          href: 'http://www.atlasconurbano.info/index.php',
          title: 'Atlas of the Buenos Aires suburbs',
          text: 'Atlas of the Buenos Aires suburbs',
        },
        {
          src: 'assets/images/atlas-conurbano/atlas-conurbano-02.png',
          href: 'http://www.atlasconurbano.info/pagina.php?id=260',
          title: 'Atlas of the Buenos Aires suburbs',
          text: 'Atlas of the Buenos Aires suburbs',
        },
      ],
      technologies: 'JavaScript;LeafLet;Mapbox;Google maps;OpenStreetMap;Twitter Bootstrap;jQuery;PHP'
    },
    {
      title: 'HotelViz - visualizing public tourist information',
      company: 'Public data portal of Argentina',
      time: '2015.08',
      text: `
This visualization won the first prize at the national hackaton organized by the **Public data portal of Argentina**. It is based on public data, processed, cleansed and enriched using [OpenRefine](https://openrefine.org/). The visualization was built using several client-side JavaScript libraries like [knockout.js](https://knockoutjs.com/), [underscore.js](https://underscorejs.org/), [TopoJSON](https://github.com/topojson/topojson), [D3](https://d3js.org/) and [NVD3](https://nvd3.org/).
The visualization shows different items like hotels, travellers, available and occupied rooms and their distribution throughout the Argentinean map. It can also animate the graphic to show how it varies according to the season of the year.
The visualization is available online [here](https://nardoz.com/HotelViz/)
`,
      images: [
        {
          src: 'assets/images/hotelviz/hotelviz.png',
          href: 'https://nardoz.com/HotelViz/',
          title: 'HotelViz, a visualization of tourist destinations and hotel occupancy',
          text: 'HotelViz, a visualization of tourist destinations and hotel occupancy',
        },
      ],
      technologies: 'JavaScript;TopoJSON;underscore.js;D#;NVD3;knockout.js;jQuery;Twitter Bootstrap;OpenRefine;github pages'
    },
    {
      title: 'BackboneBootstrap - full featured application crud generator',
      time: '2014',
      text: `
Open source framework based con [Backbone.js](https://backbonejs.org/) and [Twitter Bootstrap](https://getbootstrap.com/) to automatically generate simple and master-detail crud forms in a declarative manner.
`,
      images: [
        {
          src: 'assets/images/backbonebootstrap/backbonebootstrap.jpg',
          href: 'https://github.com/opensas/BackboneBootstrap',
          title: 'BackboneBootstrap: rad framework based on backbone.js and twitter bootstrap',
          text: 'BackboneBootstrap: rad framework based on backbone.js and twitter bootstrap',
        },
      ],
      technologies: 'JavaScript;Backbone.js;underscore.js;Twitter Bootstrap;github'
    },
  ],
}