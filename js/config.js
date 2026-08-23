/**
 * =============================================================================
 * CLIENT CONFIG — Metrópolis Oral Care
 * =============================================================================
 * Edit THIS FILE ONLY when customizing content for this practice.
 * Empty strings / empty arrays hide the related UI automatically.
 *
 * IMAGE ASSETS — drop files under /assets/images/ (see TODO comments below).
 * =============================================================================
 */

const config = {
  // ---------------------------------------------------------------------------
  // SITE DEFAULTS
  // ---------------------------------------------------------------------------
  defaultLanguage: "es",

  // OPTIONAL — overrides auto-generated meta description (used in <meta> + SEO)
  metadata: {
    es: "Metrópolis Oral Care: clínica dental especializada en Tegucigalpa. Endodoncia, implantes, ortodoncia y estética dental con tecnología de vanguardia. ¡Agenda tu cita hoy!",
    en: "Metrópolis Oral Care: specialized dental clinic in Tegucigalpa. Endodontics, implants, orthodontics, and cosmetic dentistry with cutting-edge technology. Book your appointment today!",
  },

  // ---------------------------------------------------------------------------
  // PRACTICE INFO
  // ---------------------------------------------------------------------------
  practice: {
    name: "Metrópolis Oral Care",

    tagline: {
      en: "Comprehensive Dentistry, Endodontics, Aesthetics and Oral Rehabilitation Clinic.",
      es: "Clínica de Odontología Integral, Endodoncia, Estética y Rehabilitación Oral.",
    },

    phone: "+504 8823-7678",
    phoneTel: "50488237678",

    address: {
      label: { en: "Tegucigalpa", es: "Tegucigalpa" },
      street: "Torre Metrópolis #2, Blvd. Suyapa",
      city: "Tegucigalpa",
      state: "Honduras",
      zip: "",
      mapsLink: "https://maps.app.goo.gl/UbzAtzG2LjZLF6Qt6",
      mapsQuery: "Torre Metrópolis #2, Blvd. Suyapa, Tegucigalpa, Honduras",
    },

    // OPTIONAL — extra offices shown in Visítanos (each entry supports the same address fields as `address`)
    additionalLocations: [
      {
        label: { en: "Santa Rosa de Copán", es: "Santa Rosa de Copán" },
        city: "Santa Rosa de Copán",
        state: "Copán, Honduras",
        mapsQuery: "Santa Rosa de Copán, Copán, Honduras",
      },
      {
        label: { en: "Mexico City", es: "Ciudad de México" },
        city: "Ciudad de México",
        state: "México",
        mapsQuery: "Ciudad de México, México",
      },
    ],

    hours: {
      mon: "7:00 AM – 9:00 PM",
      tue: "7:00 AM – 9:00 PM",
      wed: "7:00 AM – 9:00 PM",
      thu: "7:00 AM – 9:00 PM",
      fri: "7:00 AM – 9:00 PM",
      sat: "7:00 AM – 9:00 PM",
      sun: "7:00 AM – 9:00 PM",
    },

    email: "metropolisoralcare@gmail.com",

    // OPTIONAL — leave blank to hide trust-bar stats (entire bar hidden when all empty)
    yearsInPractice: "",
    patientRating: "",
  },

  // ---------------------------------------------------------------------------
  // BRANDING
  // ---------------------------------------------------------------------------
  branding: {
    primaryColor: "#101C33",
    accentColor: "#9AA4B2",
    primaryDark: "",
    softBg: "",
    logoUrl: "assets/images/logo.jpeg",
    heroImageUrl: "assets/images/hero.jpeg",
  },

  // ---------------------------------------------------------------------------
  // UI COPY (labels, nav, section headers, buttons) — per language
  // ---------------------------------------------------------------------------
  ui: {
    en: {
      nav: {
        home: "Home",
        services: "Services",
        dentists: "Our Team",
        gallery: "Gallery",
        testimonials: "Reviews",
        financing: "Financing",
        location: "Location",
        book: "Book Appointment",
        openMenu: "Open menu",
        closeMenu: "Close menu",
      },
      hero: {
        badge: "New Patients Welcome",
        cta: "Book Appointment",
      },
      trust: {
        years: "Years in practice",
        rating: "Patient rating",
        licensed: "Licensed & certified",
      },
      sections: {
        services: "Our Services",
        servicesLead: "Comprehensive care with advanced technology and a personalized approach.",
        dentists: "Meet Our Team",
        dentistsLead: "Expert care backed by specialized training and experience.",
        gallery: "Smile Gallery",
        galleryLead: "Real results from patients like you.",
        testimonials: "What Patients Say",
        testimonialsLead: "Trusted by families in our community.",
        financing: "Financing",
        financingLead: "Flexible payment options to fit your budget.",
        location: "Visit Us",
        locationLead: "Tegucigalpa, Santa Rosa de Copán, and Mexico City — we look forward to seeing you.",
      },
      services: {
        expand: "Learn more",
        collapse: "Show less",
      },
      location: {
        hours: "Hours",
        call: "Call Us",
        directions: "Get Directions",
        mapInteract: "Tap to interact with the map",
        closed: "Closed",
        previous: "Previous location",
        next: "Next location",
        days: {
          mon: "Monday",
          tue: "Tuesday",
          wed: "Wednesday",
          thu: "Thursday",
          fri: "Friday",
          sat: "Saturday",
          sun: "Sunday",
        },
      },
      stickyBar: {
        cta: "Book Appointment",
      },
      footer: {
        contact: "Contact",
        hours: "Hours",
        follow: "Follow Us",
        rights: "All rights reserved.",
        developedBy: "Developed by",
      },
      langToggle: {
        label: "Language",
        en: "EN",
        es: "ES",
      },
      gallery: {
        viewImage: "View image",
        close: "Close preview",
        previous: "Previous image",
        next: "Next image",
        preview: "Image preview",
      },
    },
    es: {
      nav: {
        home: "Inicio",
        services: "Servicios",
        dentists: "Nuestro Equipo",
        gallery: "Galería",
        testimonials: "Opiniones",
        financing: "Financiamiento",
        location: "Ubicación",
        book: "Agendar Cita",
        openMenu: "Abrir menú",
        closeMenu: "Cerrar menú",
      },
      hero: {
        badge: "Nuevos Pacientes Bienvenidos",
        cta: "Agendar Cita",
      },
      trust: {
        years: "Años de experiencia",
        rating: "Calificación de pacientes",
        licensed: "Licenciados y certificados",
      },
      sections: {
        services: "Nuestros Servicios",
        servicesLead: "Atención integral con tecnología de vanguardia y un enfoque personalizado.",
        dentists: "Conoce a Nuestro Equipo",
        dentistsLead: "Atención experta respaldada por formación especializada y experiencia.",
        gallery: "Galería de Sonrisas",
        galleryLead: "Resultados reales de pacientes como tú.",
        testimonials: "Lo Que Dicen Nuestros Pacientes",
        testimonialsLead: "La confianza de familias de nuestra comunidad.",
        financing: "Financiamiento",
        financingLead: "Opciones de pago flexibles que se adaptan a tu presupuesto.",
        location: "Visítanos",
        locationLead: "Tegucigalpa, Santa Rosa de Copán y Ciudad de México — te esperamos con gusto.",
      },
      services: {
        expand: "Ver más",
        collapse: "Ver menos",
      },
      location: {
        hours: "Horario",
        call: "Llámanos",
        directions: "Cómo Llegar",
        mapInteract: "Toca para interactuar con el mapa",
        closed: "Cerrado",
        days: {
          mon: "Lunes",
          tue: "Martes",
          wed: "Miércoles",
          thu: "Jueves",
          fri: "Viernes",
          sat: "Sábado",
          sun: "Domingo",
        },
      },
      stickyBar: {
        cta: "Agendar Cita",
      },
      footer: {
        contact: "Contacto",
        hours: "Horario",
        follow: "Síguenos",
        rights: "Todos los derechos reservados.",
        developedBy: "Desarrollado por",
      },
      langToggle: {
        label: "Idioma",
        en: "EN",
        es: "ES",
      },
      gallery: {
        viewImage: "Ver imagen",
        close: "Cerrar vista previa",
        previous: "Imagen anterior",
        next: "Imagen siguiente",
        preview: "Vista previa de imagen",
      },
    },
  },

  // ---------------------------------------------------------------------------
  // DENTISTS
  // ---------------------------------------------------------------------------
  dentists: [
    {
      name: "Dr. Marco Josué Pérez",
      title: {
        en: "Dental Surgeon · Endodontics Specialist",
        es: "Cirujano Dentista, Especialista en Endodoncia",
      },
      bio: {
        en: "Doctor of Dental Surgery from UNAH (Honduras) with a specialty in Endodontics from IYK (Mexico). He practices in Tegucigalpa, Santa Rosa de Copán, and Mexico City, combining cutting-edge technology with a personalized approach for every patient.",
        es: "Doctor en Cirugía Dental por la UNAH (Honduras) con especialidad en Endodoncia por el IYK (México). Atiende en Tegucigalpa, Santa Rosa de Copán y Ciudad de México, combinando tecnología de vanguardia con un enfoque personalizado para cada paciente.",
      },
      photoUrl: "assets/images/Dentist.jpeg",
    },
  ],

  // ---------------------------------------------------------------------------
  // SERVICES
  // ---------------------------------------------------------------------------
  services: [
    {
      name: { en: "Endodontics", es: "Endodoncia" },
      description: {
        en: "Root canal therapy and pulp treatments to save infected teeth, relieve pain, and preserve your natural smile.",
        es: "Tratamientos de conducto y terapia pulpar para salvar dientes infectados, aliviar el dolor y preservar tu sonrisa natural.",
      },
      icon: "cleaning",
    },
    {
      name: { en: "Oral Surgery", es: "Cirugía Oral" },
      description: {
        en: "Extractions, surgical procedures, and oral rehabilitation performed with precision and personalized care.",
        es: "Extracciones, procedimientos quirúrgicos y rehabilitación oral con precisión y atención personalizada.",
      },
      icon: "implants",
    },
    {
      name: { en: "Dental Implants", es: "Implantes Dentales" },
      description: {
        en: "Restore missing teeth with durable, natural-looking implants planned for comfort and long-term function.",
        es: "Recupera dientes perdidos con implantes duraderos y de aspecto natural, pensados para comodidad y función a largo plazo.",
      },
      icon: "implants",
    },
    {
      name: { en: "Orthodontics", es: "Ortodoncia" },
      description: {
        en: "Braces and aligners to straighten teeth and correct bite issues with tailored treatment plans.",
        es: "Brackets y alineadores para enderezar dientes y corregir la mordida con planes de tratamiento personalizados.",
      },
      icon: "aligners",
    },
    {
      name: { en: "General Dentistry", es: "Odontología General" },
      description: {
        en: "Preventive exams, cleanings, fillings, and everyday care to keep your smile healthy.",
        es: "Exámenes preventivos, limpiezas, resinas y cuidado diario para mantener tu sonrisa sana.",
      },
      icon: "general",
    },
    {
      name: { en: "Cosmetic Dentistry", es: "Odontología Cosmética" },
      description: {
        en: "Aesthetic and restorative treatments designed for a natural, confident smile.",
        es: "Tratamientos estéticos y de rehabilitación diseñados para una sonrisa natural y segura.",
      },
      icon: "cosmetic",
    },
  ],

  // ---------------------------------------------------------------------------
  // TESTIMONIALS — empty array hides the section
  // ---------------------------------------------------------------------------
  testimonials: [],

  // ---------------------------------------------------------------------------
  // FINANCING IMAGES
  // ---------------------------------------------------------------------------
  financingImages: [
    {
      src: "assets/images/financing/Bac.png",
      alt: {
        en: "BAC Credomatic financing",
        es: "Financiamiento BAC Credomatic",
      },
    },
    {
      src: "assets/images/financing/Ficohsa.png",
      alt: {
        en: "Ficohsa financing",
        es: "Financiamiento Ficohsa",
      },
    },
  ],

  // ---------------------------------------------------------------------------
  // SMILE GALLERY — empty array hides the section
  // ---------------------------------------------------------------------------
  gallery: [],

  // ---------------------------------------------------------------------------
  // SOCIAL LINKS — leave blank to hide that icon
  // ---------------------------------------------------------------------------
  socials: {
    instagram: "https://www.instagram.com/metropolis.oral_care",
    facebook: "https://www.facebook.com/p/Metropolis-Oral-Care-61578791364701",
  },
};

// Expose globally for app.js (no bundler / no modules required)
window.SITE_CONFIG = config;
