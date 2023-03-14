import Banner from '../components/Banner/Banner';
import BannerOptions from '../components/Banner/BannerOptions';
import BannerPreview from '../components/Banner/BannerPreview.png';
import Footer from '../components/Footer/Footer';
import FooterOptions from '../components/Footer/FooterOptions';
import FooterPreview from '../components/Footer/FooterPreview.png';
import NavbarComponent from '../components/NavbarComponent/NavbarComponent';
import NavbarComponentOptions from '../components/NavbarComponent/NavbarComponentOptions';
import NavbarComponentPreview from '../components/NavbarComponent/NavbarComponentPreview.png';
import Component from '../models/Component';
import { Gradients } from './utils';

export const registeredComponents = new Map([
  [
    'Banner',
    new Component('Banner', Banner, BannerOptions, BannerPreview, {
      words: 'Design,Develop,Discover',
      gradient: Gradients.default,
    }),
  ],
  [
    'Footer',
    new Component('Footer', Footer, FooterOptions, FooterPreview, {
      userName: 'Kartik Bansal',
      home: 'URL1',
      aboutUs: 'URL2',
      contact: 'URL3',
      linkedIn: 'URL4',
      twitter: 'URL5',
      instagram: 'URL6',
    }),
  ],

  [
    'Navbar',
    new Component(
      'Navbar',
      NavbarComponent,
      NavbarComponentOptions,
      NavbarComponentPreview,
      {
        home: 'URL1',
        services: 'URL2',
        projects: 'URL3',
        about: 'URL4',
        blog: 'URL5',
        letsTalk: 'URL6',
      }
    ),
  ],
]);
