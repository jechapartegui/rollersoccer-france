import { Component } from '@angular/core';

interface CategoryCard {
  name: string;
  years: string;
  duration: string;
  description: string;
}

interface HonourSeason {
  season: string;
  results: { label: string; club: string }[];
}

interface MediaChannel {
  name: string;
  detail: string;
  url: string;
  tag: string;
}

interface ClubSpot {
  name: string;
  city: string;
  department: string;
  offer: string;
  short: string;
  x: number;
  y: number;
  url?: string;
}

interface TimelineEntry {
  year: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './v2.component.css']
})
export class AppComponent {
  mobileMenuOpen = false;

  readonly categories: CategoryCard[] = [
    {
      name: 'U11',
      years: '2017 et plus jeunes',
      duration: '2 × 15 min',
      description: 'Découvrir le jeu collectif, prendre confiance en roller et commencer à jouer avec le ballon.'
    },
    {
      name: 'U15',
      years: '2013 — 2016',
      duration: '2 × 20 min',
      description: 'Une vraie étape de progression : technique, lecture du jeu, vitesse et premiers projets compétitifs.'
    },
    {
      name: 'U19',
      years: '2009 — 2012',
      duration: '2 × 20 min',
      description: 'Le jeu accélère. Les collectifs se structurent et se rapprochent du rythme des catégories adultes.'
    },
    {
      name: 'Adultes',
      years: 'Catégorie senior',
      duration: '2 × 25 min',
      description: 'Loisir, Nationale 1 ou Élite : plusieurs portes d’entrée pour jouer à son niveau et progresser.'
    }
  ];

  readonly clubs: ClubSpot[] = [
    {
      name: 'R2R Roller de Rien',
      city: 'Argenteuil',
      department: '95 · Val-d’Oise',
      offer: 'Adultes · jeunes selon saison',
      short: 'ARG',
      x: 272,
      y: 164
    },
    {
      name: 'US Ivry Roller',
      city: 'Ivry-sur-Seine',
      department: '94 · Val-de-Marne',
      offer: 'U11 · U15 · U19 · Adultes · Élite',
      short: 'IVR',
      x: 302,
      y: 191,
      url: 'https://www.usivryroller.fr/'
    },
    {
      name: 'UMS Easy Riders',
      city: 'Pontault-Combault',
      department: '77 · Seine-et-Marne',
      offer: 'Jeunes · adultes · compétition',
      short: 'PON',
      x: 349,
      y: 177,
      url: 'https://umseasyriders.wixsite.com/umseasyriders'
    },
    {
      name: 'Savigny Roller Soccer Club 91',
      city: 'Savigny-sur-Orge',
      department: '91 · Essonne',
      offer: 'Jeunes · adultes · loisir · Élite',
      short: 'SAV',
      x: 317,
      y: 218,
      url: 'https://www.savignyrollersoccerclub.com/'
    },
    {
      name: 'Educ Sports 13',
      city: 'Cabriès',
      department: '13 · Bouches-du-Rhône',
      offer: 'Jeunes · glisse · RollerSoccer',
      short: 'CAB',
      x: 369,
      y: 493,
      url: 'https://educsports13.fr/'
    }
  ];

  readonly timeline: TimelineEntry[] = [
    {
      year: '2022–2023',
      title: 'Le championnat FFRS prend forme',
      description: 'Une saison fédérale structurée démarre avec des compétitions nationales jeunes et adultes.'
    },
    {
      year: '2024–2025',
      title: 'Une Nationale 1 pour ouvrir la compétition',
      description: 'La N1 adulte crée une marche intermédiaire entre découverte du championnat et niveau Élite.'
    },
    {
      year: '2025–2026',
      title: 'Les clubs existants continuent de grandir',
      description: 'Les effectifs progressent, les matchs sont davantage filmés et le besoin de nouveaux clubs devient le prochain enjeu.'
    },
    {
      year: '2026–2027',
      title: 'U11, U15, U19, Adultes',
      description: 'La filière jeune est affinée pour proposer des groupes d’âge plus homogènes et faciliter l’entrée dans le jeu.'
    }
  ];

  readonly honours: HonourSeason[] = [
    {
      season: '2025 — 2026',
      results: [
        { label: 'Élite adultes', club: 'Savigny-sur-Orge' },
        { label: 'Nationale 1', club: 'Pontault-Combault' },
        { label: 'U19', club: 'Savigny-sur-Orge' },
        { label: 'U14', club: 'US Ivry Roller' }
      ]
    },
    {
      season: '2024 — 2025',
      results: [
        { label: 'Élite adultes', club: 'Savigny-sur-Orge' },
        { label: 'Nationale 1', club: 'R2R Argenteuil' },
        { label: 'U19', club: 'Savigny-sur-Orge' },
        { label: 'U14', club: 'RER Argenteuil' }
      ]
    }
  ];

  readonly mediaChannels: MediaChannel[] = [
    {
      name: 'UMS Easy Riders',
      detail: 'Pontault-Combault · matchs et compétitions',
      url: 'https://www.youtube.com/@umseasy-riders7746',
      tag: 'YouTube'
    },
    {
      name: 'Gino Roller Soccer',
      detail: 'Matchs français et belges, caméra au plus près du jeu',
      url: 'https://www.youtube.com/@Gino_Roller_Soccer',
      tag: 'YouTube'
    },
    {
      name: 'Savigny Roller Soccer',
      detail: 'Pumas · championnat de France et vie du club',
      url: 'https://www.youtube.com/@Savigny_Roller_Soccer_Club_91',
      tag: 'YouTube'
    },
    {
      name: 'Diffusion RollerSoccer',
      detail: 'Des rencontres pour découvrir la discipline en conditions réelles',
      url: 'https://www.youtube.com/@DiffusionRollerSoccer',
      tag: 'YouTube'
    }
  ];

  toggleMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMenu(): void {
    this.mobileMenuOpen = false;
  }
}
