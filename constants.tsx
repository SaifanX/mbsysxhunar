import { Project, Service, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { name: 'About Us', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'The Obsidian Villa',
    category: 'Residential',
    location: 'London, UK',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    description: 'A radical reimagining of urban luxury, focusing on architectural light and raw material honesty. This project showcases the height of our structural precision.'
  },
  {
    id: '2',
    title: 'MBSYS Headquarters',
    category: 'Corporate',
    location: 'Dubai, UAE',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
    description: 'Engineering excellence meets modern workspace aesthetics in this multi-story corporate hub.'
  },
  {
    id: '3',
    title: 'Azure Coastal Resort',
    category: 'Hospitality',
    location: 'Santorini, Greece',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1200',
    description: 'A seamless blend of structural integrity and Mediterranean elegance.'
  },
  {
    id: '4',
    title: 'Penthouse at Marina',
    category: 'Luxury Interiors',
    location: 'Dubai, UAE',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
    description: 'Ultra-modern interior design with smart automation and custom finishes.'
  }
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    index: '01',
    title: 'Interior Design',
    description: 'Bespoke spatial planning and aesthetic curation tailored to your lifestyle and architectural requirements.',
    icon: 'home_work',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 's2',
    index: '02',
    title: 'Civil & Carpentry',
    description: 'Structural integrity meets custom fine woodwork. We handle everything from masonry to bespoke furniture.',
    icon: 'architecture',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 's3',
    index: '03',
    title: 'Turnkey Projects',
    description: 'End-to-end management from concept to completion. We deliver your vision flawlessly.',
    icon: 'verified',
    image: 'https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=800'
  }
];