export const CONTACT = {
  phoneLabel: "+1 (407) 541-9423",
  whatsappLink: "https://wa.me/14075419423",
  inscripcionNumber: "14075419423",
  inscripcionLabel: "+1 (407) 541-9423",
  email: "inforlandosc@gmail.com",
  instagram: "@orlandosoccerclub",
  instagramLink: "https://instagram.com/orlandosoccerclub",
};

export const NAV_LINKS = [
  { label: "About", href: "#nosotros" },
  { label: "Stages", href: "#etapas" },
  { label: "Methodology", href: "#metodologia" },
  { label: "Gallery", href: "#galeria" },
  { label: "Contact", href: "#contacto" },
];

export const ETAPAS = [
  {
    numero: "01",
    rango: "Ages 5 to 7",
    titulo: "Motor Development",
    texto:
      "The first stage is play. We develop coordination, balance, body awareness, and ball control so children move with confidence and a genuine love for the game before tactics ever come into it.",
  },
  {
    numero: "02",
    rango: "Ages 8 to 11",
    titulo: "Introduction to Soccer",
    texto:
      "Formal learning begins here: core technical skills such as dribbling, passing, receiving, and finishing, alongside the first concepts of positioning, teamwork, and discipline on the field.",
  },
  {
    numero: "03",
    rango: "Ages 12 to 16",
    titulo: "Development Reengineering",
    texto:
      "A stage of consolidation. Technique is refined, game reading deepens, individual and collective tactics are introduced, and players are supported through their physical and emotional growth.",
  },
  {
    numero: "04",
    rango: "Ages 15 and up",
    titulo: "Introduction to High Performance",
    texto:
      "For players who want to compete: intensity, physical preparation, a competitive mindset, and performance-oriented methodology with individual tracking of every player's progress.",
  },
];

export const EJES = [
  {
    titulo: "Progressive Technical Development",
    texto:
      "Every skill is taught in levels: it is repeated, corrected, and made more complex as the player advances through each stage of the program.",
  },
  {
    titulo: "Psychomotor Development",
    texto:
      "Coordination, balance, and spatial awareness as the foundation of everything else, trained consistently from the earliest ages.",
  },
  {
    titulo: "Capacity and Structure by Group",
    texto:
      "Groups organized by age and level, with training loads and objectives suited to each stage of development.",
  },
  {
    titulo: "Continuous Development",
    texto:
      "A long-term process with progress tracking for every player and ongoing communication with families.",
  },
];

export const SEDES = [
  {
    dia: "Wednesday",
    hora: "5:30 PM",
    lugar: "Passport School",
    direccion: "5221 Curry Ford Rd, Orlando, FL",
    mapa: "https://www.google.com/maps/search/?api=1&query=5221+Curry+Ford+Rd+Orlando+FL",
  },
  {
    dia: "Friday",
    hora: "5:45 PM",
    lugar: "Airport Lakes Park",
    direccion: "7098 Shadowridge Dr, Orlando, FL 32812",
    mapa: "https://www.google.com/maps/search/?api=1&query=7098+Shadowridge+Dr+Orlando+FL+32812",
  },
];

// Training session for a given weekday name ("Wednesday", "Friday").
export const sesionPorDia = (dia) => SEDES.find((s) => s.dia === dia) || null;


export const calcularEdad = (fecha) => {
  if (!fecha) return null;
  const hoy = new Date();
  const nac = new Date(`${fecha}T00:00:00`);
  if (Number.isNaN(nac.getTime()) || nac > hoy) return null;
  let años = hoy.getFullYear() - nac.getFullYear();
  const mes = hoy.getMonth() - nac.getMonth();
  if (mes < 0 || (mes === 0 && hoy.getDate() < nac.getDate())) años -= 1;
  return años;
};

export const etapaPorEdad = (años) => {
  if (años === null || años === undefined) return null;
  if (años < 5) {
    return {
      titulo: "Below the minimum age",
      rango: "Our program starts at age 5",
      nota: "Contact us and we will guide you for next season.",
    };
  }
  if (años <= 7) return { titulo: "Motor Development", rango: "Ages 5 to 7" };
  if (años <= 11) return { titulo: "Introduction to Soccer", rango: "Ages 8 to 11" };
  if (años <= 14) return { titulo: "Development Reengineering", rango: "Ages 12 to 16" };
  return { titulo: "Introduction to High Performance", rango: "Ages 15 and up" };
};