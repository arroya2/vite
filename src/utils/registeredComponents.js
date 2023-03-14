import Banner from '../components/Banner/Banner';
import BannerOptions from '../components/Banner/BannerOptions';
import BannerPreview from '../components/Banner/BannerPreview.png';
import Footer from '../components/Footer/Footer';
import FooterOptions from '../components/Footer/FooterOptions';
import FooterPreview from '../components/Footer/FooterPreview.png';
import NavbarComponent from '../components/NavbarComponent/NavbarComponent';
import NavbarComponentOptions from '../components/NavbarComponent/NavbarComponentOptions';
import NavbarComponentPreview from '../components/NavbarComponent/NavbarComponentPreview.png';
/*
import EducationWorkExperience from '../components/EducationAndWork/EducationAndWork';
import EducationWorkExperienceOptions from '../components/EducationAndWork/EducationAndWorkOptions';
import EducationWorkExperiencePreview from '../components/EducationAndWork/EducationAndWorkDark.png';
*/
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
  /*
  [
    'Education and Work',
    new Component(
      'Education and Work',
      EducationWorkExperience,
      EducationWorkExperienceOptions,
      EducationWorkExperiencePreview,
      {
        school1: 'School 1; Degree; Date',
        school2: 'School 2; Degree; Date',
        school3: 'School 3; Degree; Date',
        job1: 'Company 1; Title; Date',
        job2: 'Company 2; Title; Date',
        job3: 'Company 3; Title; Date',
        gradient: Gradients.default,
      }
    ),
  ],
*/
]);
