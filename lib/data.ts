export const PORTFOLIO_DATA = {
  name: "Kevin Archet",
  title: "Lead Développeur Android Senior | Expert Kotlin & Jetpack Compose",
  subtitle: "10+ ans d'expérience | Spécialiste Clean Architecture & Applications Haut Trafic",
  description: "Lead Développeur Android avec expérience confirmée sur applications à fort trafic (300k utilisateurs/jour). Spécialiste en architectures modernes, migrations technologiques et leadership technique.",
  tagline: "Les meilleurs projets ne s'improvisent pas, ils se confient aux bonnes personnes",
  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kevin-archer-e2zlGYfkKIuVaNAlhLzQb9TReQUheZ.jpg",
  banner: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ban-Kevin-Arche%CC%81-DUngQUvXZD1YtAfRQOtZrDaoGUWRp7.jpg",

  // Contact
  contact: {
    phone: "06 42 58 55 76",
    email: "kevin.archet.pro@gmail.com",
    location: "Paris, France"
  },

  // À propos
  about: {
    summary: "Lead Développeur Android avec expérience confirmée sur applications à fort trafic (300k utilisateurs/jour chez McDonald's). Spécialiste en architectures modernes (Clean Architecture, Modularisation, MVVM) et écosystème Kotlin/Jetpack Compose avec capacité à structurer les projets, fiabiliser le code et automatiser les déploiements (CI/CD). Spécialiste en migration technologique (Jetpack Compose, Material 3, MVI vers Kotlin pur) et maintien de stabilité (crash-free >99.9%). Leadership technique avec code review, mentoring, harmonisation des pratiques et mise en place de standards de qualité.",
    references: ["McDonald's", "BforBank", "Publicis Sapient", "Paylib"],
    keyMetrics: {
      users: "300k+",
      crashFreeRate: ">99.9%",
      testCoverage: "90-100%",
      experience: "10+ ans"
    }
  },

  // Domaines de compétences (organisé par catégorie)
  expertiseDomains: [
    {
      category: "Architecture & Qualité Logicielle",
      description: "Spécialiste en Clean Architecture, Modularisation et MVVM avec maintien de stabilité applicative (crash-free >99.9%). Assainissement d'architectures existantes avec couverture de tests entre 90 et 100% du nouveau code. Co-construction de Clean Architecture et modularisation pour améliorer le travail parallèle des équipes. Mise en place de conventions de code et harmonisation des pratiques entre squads. Prise de décisions architecturales et arbitrage des choix techniques.",
      icon: "Layers"
    },
    {
      category: "Migration Technologique & Jetpack Compose",
      description: "Spécialiste en migrations technologiques : migration continue vers Jetpack Compose, mise en place de design systems en Compose, migration vers Material 3, migration MVI (Uniflow) vers Kotlin pur (coroutines/flows). Leader sur l'introduction de Jetpack Compose avec mise en place de plans de migration UI. Développement from scratch d'applications (Paylib, Voilà) avec première mise en store.",
      icon: "ArrowRight"
    },
    {
      category: "Leadership Technique & CI/CD",
      description: "Leadership opérationnel avec code review, mentoring, pair programming et mise en place d'ateliers pour chantiers techniques transverses. Harmonisation des pratiques de développement. Mise en place et maintien de CI/CD sur Bitrise avec intégration Firebase (tracking, Remote Config, Dynamic Links) et Sonar. Recrutement technique. Méthodes agiles et Feature Teams.",
      icon: "Users"
    }
  ],

  // Compétences techniques détaillées
  expertise: {
    android: {
      title: "Écosystème Android",
      skills: [
        "Jetpack Compose",
        "Kotlin Coroutines/Flow",
        "MVI",
        "MVVM",
        "Clean Architecture",
        "Modularisation",
        "Material 3",
        "AndroidX"
      ]
    },
    networking: {
      title: "Networking & Injection de dépendances",
      skills: [
        "Retrofit",
        "Koin",
        "Hilt",
        "REST APIs",
        "GraphQL"
      ]
    },
    tools: {
      title: "Outils & DevOps",
      skills: [
        "Bitrise",
        "Firebase (Tracking, Remote Config, Dynamic Links)",
        "Jira",
        "Figma",
        "Sonar",
        "Gradle",
        "CI/CD"
      ]
    },
    management: {
      title: "Management & Méthodes",
      skills: [
        "Méthodes agiles (Scrum/Kanban)",
        "Management (People Manager)",
        "Recrutement technique",
        "Code review",
        "Mentoring",
        "Pair programming",
        "Feature Teams"
      ]
    },
    back: {
      title: "Backend & Infrastructure",
      skills: [
        "Java / Spring Boot",
        "Red Hat OpenShift",
        "AWS",
        "SQL",
        "Jenkins"
      ]
    }
  },

  // Expériences professionnelles détaillées
  experiences: [
    {
      company: "McDonald's",
      role: "Lead Développeur Android",
      period: "Janvier 2025 - Aujourd'hui",
      location: "Paris",
      description: "Référent technique principal sur l'application McDo+ à fort trafic (~300k utilisateurs quotidiens) en binôme avec forte autonomie pour garantir la stabilité et la qualité.",
      highlights: [
        "Maintien de la stabilité avec taux de crash-free >99.9%",
        "Assainissement de l'architecture (Clean Architecture et MVVM)",
        "Migration continue vers Jetpack Compose",
        "Mise en place d'un design system entièrement en Compose et migration vers Material 3",
        "Migration d'Uniflow (MVI) vers Kotlin pur (coroutines/flows)",
        "Migration du système de notifications d'Airship vers Braze",
        "Couverture de tests du nouveau code entre 90 et 100%",
        "Développement de features clés : Tickets restaurant, Chèques vacance, Mode invité"
      ],
      technologies: ["Kotlin", "Jetpack Compose", "MVVM", "Clean Architecture", "Coroutines/Flow", "Retrofit", "Koin", "Bitrise", "Firebase", "Jira", "Figma", "Sonar", "Gradle"],
      metrics: {
        users: "300k+",
        crashFree: ">99.9%",
        testCoverage: "90-100%"
      }
    },
    {
      company: "BforBank",
      role: "Développeur Android Senior",
      period: "Octobre 2023 - Janvier 2025",
      location: "Paris La Défense",
      description: "Évolution au sein d'une équipe de 15 développeurs organisée en Feature Teams avec focus sur l'industrialisation du code et l'augmentation des standards de qualité.",
      highlights: [
        "Co-construction de la Clean Architecture et mise en place de la modularisation",
        "Migration vers Material 3",
        "Développement des parcours liés à l'assurance, crédits, assurance vie, bourse (PEA, compte titre)",
        "Mise en place d'ateliers pour lancer des chantiers techniques transverses",
        "Harmonisation des pratiques de développement entre les différentes squads",
        "Mise en place de standards de qualité",
        "Couverture de tests entre 90 et 100% hors UI",
        "Amélioration globale de la navigation"
      ],
      technologies: ["Kotlin", "Jetpack Compose", "Clean Architecture", "Coroutines/Flow", "Retrofit", "Hilt", "Bitrise", "Firebase", "Jira", "Figma", "Sonar", "Gradle"],
      metrics: {
        teamSize: "15",
        testCoverage: "90-100%"
      }
    },
    {
      company: "Publicis Sapient - Xebia",
      role: "Développeur Android",
      period: "Février 2022 - Septembre 2023",
      location: "Paris",
      description: "Développeur sur l'application Android McDo+ (300k utilisateurs/jour) au sein d'une équipe de 3 développeurs en méthodes agiles.",
      highlights: [
        "Mise en place de Jetpack Compose dans l'application (leader sur le sujet)",
        "Mise en place d'un plan de migration de l'UI existante en Jetpack Compose",
        "Application stricte de la Clean Architecture",
        "Augmentation de la couverture de tests",
        "Maintien et amélioration de la CI/CD sur Bitrise",
        "Gestion de Firebase (tracking, Remote Config, Dynamic Links)",
        "Développement des fonctionnalités clés : Click & Ready Parking, Message Center, Commander à nouveau, Réservation d'animations McDonald's"
      ],
      technologies: ["Kotlin", "Jetpack Compose", "MVI", "Clean Architecture", "Coroutines/Flow", "Retrofit", "Koin", "Bitrise", "Firebase", "Jira", "Figma", "Sonar", "Gradle"],
      metrics: {
        users: "300k+",
        teamSize: "3"
      }
    },
    {
      company: "Voilà",
      role: "Développeur Android/Back",
      period: "Décembre 2020 - Février 2022",
      location: "Paris",
      description: "Création d'un prototype d'application mobile permettant d'assister à des conférences de manière hybride (présentiel et distanciel) avec maximum d'interactions pour les participants.",
      highlights: [
        "Développement en Jetpack Compose, MVVM et Clean Architecture",
        "Mise en place de la CI/CD sur Bitrise et d'un Sonar",
        "Mise en place de Firebase",
        "Développement d'un prototype de streaming en direct"
      ],
      technologies: ["Kotlin", "Jetpack Compose", "MVVM", "Coroutines/Flow", "Retrofit", "Hilt", "Bitrise", "Firebase", "Jira", "Figma", "Sonar"]
    },
    {
      company: "Paylib",
      role: "Développeur Android",
      period: "Mai 2019 - Décembre 2020",
      location: "Paris",
      description: "Développeur sur l'application Android Paylib au sein d'une équipe de 2 développeurs Android en méthodes agiles. Création de la première application mobile de la marque Paylib.",
      highlights: [
        "Développement from scratch de l'application Paylib et première mise en store",
        "Tutoriel d'utilisation, Récupération d'argent reçu sans être enrôlé",
        "Facilitation du parcours d'enrôlement et redirection vers la bonne application bancaire",
        "Mise en place de la CI/CD sur Bitrise et d'un Sonar",
        "Mise en place de Firebase (Tracking, Dynamic Links, Remote Config)",
        "Développement de nouvelles fonctionnalités post-lancement : amélioration des parcours, groupes de dépenses (équivalent Tricount)",
        "Développement de nouvelles features dans le Back de Paylib",
        "Ateliers d'architectures sur l'écosystème Paylib"
      ],
      technologies: ["Kotlin", "MVVM", "Coroutines/Flow", "Retrofit", "Koin", "Bitrise", "Firebase", "Jira", "Sonar", "Red Hat OpenShift", "Gradle"],
      metrics: {
        teamSize: "2"
      }
    },
    {
      company: "Artel",
      role: "Développeur Fullstack",
      period: "Janvier 2018 - Mai 2019",
      location: "Paris",
      description: "Développeur fullstack sur les applications de gestion de flottes de véhicules (back office pour configuration des boîtiers, front office pour entreprises et conducteurs).",
      highlights: [
        "Développement de nouvelles fonctionnalités Back et Front des deux portails d'Artel",
        "Evolution et maintenance de l'infrastructure AWS",
        "Prise de décisions architecturales"
      ],
      technologies: ["Java", "Spring Boot", "Hibernate", "Angular", "Webpack", "AWS", "Jenkins", "SQL"]
    },
    {
      company: "Softeam Cadextan pour Amundi",
      role: "Ingénieur en Développement",
      period: "Mars 2016 - Décembre 2017",
      location: "Paris",
      description: "Ingénieur en développement au sein d'une équipe de 40 personnes pour développement de nouvelles fonctionnalités sur produits d'épargne salariale.",
      highlights: [
        "Développement back de nouvelles fonctionnalités sur les divers produits d'épargne salariale",
        "Développement front sur un nouvel outil à destination du client final pour diversifier son épargne en fonction du profil de risque",
        "Migration des outils de build front vers Webpack",
        "Mise en place de bonnes pratiques de développement back"
      ],
      technologies: ["Java", "Spring", "SQL", "Git", "JavaScript", "Redux", "Webpack", "Jira"],
      metrics: {
        teamSize: "40"
      }
    },
    {
      company: "Viveris",
      role: "Ingénieur en Développement",
      period: "Septembre 2014 - Février 2016",
      location: "Paris",
      description: "Création d'une application Android pour Engie et développement fullstack sur applications de gestion pour ministères et entités médicales.",
      highlights: [
        "Création d'une application Android pour Engie offrant un accès aux actualités de l'entreprise à ses collaborateurs",
        "Étude fonctionnelle, Développement de l'application, Maintenance",
        "Développement fullstack d'évolutions sur diverses applications de gestion utilisées par des clients tels que certains ministères et entités médicales"
      ],
      technologies: ["Java", "JEE", "Android", ".Net", "JavaScript", "SVN", "PostgreSQL", "SQL"]
    }
  ],

  // Éducation
  education: [
    {
      institution: "ESIEE Paris",
      degree: "Diplôme d'Ingénieur spécialité Informatique",
      period: "2009 - 2014",
      location: "Paris, France"
    }
  ],

  // Langues
  languages: [
    {
      name: "Français",
      level: "Natif"
    },
    {
      name: "Anglais",
      level: "Professionnel"
    }
  ],

  // Projets phares
  projects: [
    {
      name: "McDonald's McDo+",
      role: "Lead Developer",
      description: "Application de commande et fidélité à fort trafic avec 300k utilisateurs quotidiens. Application stricte de la Clean Architecture et migration vers Jetpack Compose.",
      technologies: ["Kotlin", "Jetpack Compose", "Clean Architecture", "MVVM", "Coroutines/Flow", "Retrofit", "Firebase", "Bitrise"],
      impact: "300k+ utilisateurs/jour, Crash-free >99.9%",
      features: ["Tickets restaurant", "Chèques vacance", "Mode invité", "Click & Ready Parking", "Message Center"]
    },
    {
      name: "BforBank",
      role: "Senior Developer",
      description: "Application bancaire avec équipe de 15 développeurs en Feature Teams. Co-construction de Clean Architecture et modularisation.",
      technologies: ["Kotlin", "Jetpack Compose", "Clean Architecture", "Material 3", "Hilt", "Bitrise"],
      impact: "Industrialisation du code, standards de qualité",
      features: ["Assurance", "Crédits", "Assurance vie", "PEA", "Compte titre"]
    },
    {
      name: "Paylib",
      role: "Développeur",
      description: "Création from scratch de la première application mobile Paylib. Développement complet et mise en store.",
      technologies: ["Kotlin", "MVVM", "Coroutines/Flow", "Retrofit", "Firebase", "Bitrise"],
      impact: "Première application de la marque Paylib",
      features: ["Tutoriel d'utilisation", "Récupération d'argent", "Groupes de dépenses (Tricount like)"]
    },
    {
      name: "Voilà",
      role: "Développeur Android/Back",
      description: "Prototype d'application pour conférences hybrides (présentiel et distanciel) avec interactions en temps réel.",
      technologies: ["Kotlin", "Jetpack Compose", "MVVM", "Clean Architecture", "Bitrise", "Firebase"],
      impact: "Streaming en direct, interactions participantes",
      features: ["Streaming en direct", "Interactions hybrides"]
    }
  ],

  // Réseaux sociaux
  social: [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/kevin-archet/",
      icon: "linkedin"
    },
    {
      name: "GitHub",
      url: "https://github.com/kevin-archet",
      icon: "github"
    }
  ],

  // Calendly
  calendlyUrl: "https://calendly.com/kevin-archet",

  // Raisons de réservation
  bookingReasons: [
    {
      icon: "Layers",
      title: "Audit Technique & Architecture",
      description: "Évaluation complète de votre architecture mobile, analyse de la dette technique et recommandations pour une Clean Architecture scalable."
    },
    {
      icon: "Code2",
      title: "Migration Jetpack Compose",
      description: "Accompagnement dans la migration de votre UI vers Jetpack Compose, mise en place de design systems et migration vers Material 3."
    },
    {
      icon: "Zap",
      title: "Optimisation Performance",
      description: "Amélioration des performances applicatives, réduction des temps de chargement, optimisation de la consommation mémoire et batterie."
    },
    {
      icon: "Users",
      title: "Leadership & Mentoring",
      description: "Mentoring d'équipes, code review, mise en place de standards de qualité et harmonisation des pratiques de développement."
    },
    {
      icon: "Target",
      title: "CI/CD & Industrialisation",
      description: "Mise en place et maintenance de CI/CD (Bitrise), intégration Firebase, Sonar, et automatisation des déploiements."
    },
    {
      icon: "Briefcase",
      title: "Recrutement Technique",
      description: "Participation aux processus de recrutement, évaluation technique des candidats et constitution d'équipes performantes."
    }
  ],

  // Statistiques clés pour le portfolio
  stats: {
    yearsExperience: "10+",
    usersHandled: "300k+",
    crashFreeRate: ">99.9%",
    testCoverage: "90-100%",
    projectsDelivered: "8+",
    teamSizeManaged: "15"
  },

  // Certifications et distinctions
  certifications: [
    {
      name: "Associate Android Developer",
      issuer: "Google",
      year: "2018"
    }
  ]
}