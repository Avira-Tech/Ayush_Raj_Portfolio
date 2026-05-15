import brochure1 from '../assets/Brochures/Generative AI & Agentic AI Career Program.pdf';
import brochure2 from '../assets/Brochures/Old Broucher Stellar Institute of Technology.pdf';
import brochure3 from '../assets/Brochures/Skillected Placement Magazine (1).pdf';

import meta1 from '../assets/Meta Ads Creatives/GenAI meta ads HRZ.jpg';
import meta2 from '../assets/Meta Ads Creatives/GenAI meta ads SQR.jpg';
import meta3 from '../assets/Meta Ads Creatives/GenAI meta ads VRT.jpg';
import meta4 from '../assets/Meta Ads Creatives/Image 6 HRZ.jpg';
import meta5 from '../assets/Meta Ads Creatives/Image 6 SQR.jpg';
import meta6 from '../assets/Meta Ads Creatives/Image 6 VRT.jpg';
import meta7 from '../assets/Meta Ads Creatives/Springboot Bootcamp (17 March).jpg';
import meta8 from '../assets/Meta Ads Creatives/Springboot Bootcamp Thumbnail (17 March).jpg';

import presentation1 from '../assets/Presentation/FSD Pitch.pdf';
import presentation2 from '../assets/Presentation/Stellar Bootcamp.pptx.pdf';
import presentation3 from '../assets/Presentation/Version 2 (1).pdf';

import social1 from '../assets/Social Media Creatives/1st Year Anniversary (Yashwant Sir) (1).jpg';
import social2 from '../assets/Social Media Creatives/For LinkedIn.jpg';
import social3 from '../assets/Social Media Creatives/Mahavir Jayanti.jpg';
import social4 from '../assets/Social Media Creatives/Mother\'s Day.jpg';
import social5 from '../assets/Social Media Creatives/National Technology Day.jpg';
import social6 from '../assets/Social Media Creatives/Pankaj Sir Birthday Post.jpg';
import social7 from '../assets/Social Media Creatives/Post No. 01.jpg';
import social8 from '../assets/Social Media Creatives/Pulwama Attack Post (1).jpg';
import social9 from '../assets/Social Media Creatives/Republic day.jpg';
import social10 from '../assets/Social Media Creatives/_Shivaji Jayanti Story.jpg';
import social11 from '../assets/Social Media Creatives/Super 40.jpg';

import thumb1 from '../assets/Thumbnails/Claude Internship.jpg';
import thumb2 from '../assets/Thumbnails/Don\'t Clap at the Same Time.jpg';
import thumb3 from '../assets/Thumbnails/fix 5 things in claude.jpg';
import thumb4 from '../assets/Thumbnails/Happy Labour\'s Day.jpg';
import thumb5 from '../assets/Thumbnails/RAG (AI & Machine Learning).png';
import thumb6 from '../assets/Thumbnails/Secrete Claude Hack.jpg';
import thumb7 from '../assets/Thumbnails/Top 10 old companies in India.png';
import thumb8 from '../assets/Thumbnails/Types of Python Libraries YT.jpg';
import thumb9 from '../assets/Thumbnails/Unemployed Toppers.jpg';
import thumb10 from '../assets/Thumbnails/YT Thumbnail.png';

export interface Project {
  id: string;
  title: string;
  category: 'Brochures' | 'Meta Ads' | 'Social Media' | 'Thumbnails' | 'Presentations';
  type: 'image' | 'pdf';
  file: string;
  thumbnail?: string;
}

export const projects: Project[] = [
  // Brochures
  { id: 'b1', title: 'Generative AI & Agentic AI Career Program', category: 'Brochures', type: 'pdf', file: brochure1 },
  { id: 'b2', title: 'Stellar Institute Brochure', category: 'Brochures', type: 'pdf', file: brochure2 },
  { id: 'b3', title: 'Skillected Placement Magazine', category: 'Brochures', type: 'pdf', file: brochure3 },

  // Meta Ads
  { id: 'm1', title: 'GenAI Meta Ad (Horizontal)', category: 'Meta Ads', type: 'image', file: meta1 },
  { id: 'm2', title: 'GenAI Meta Ad (Square)', category: 'Meta Ads', type: 'image', file: meta2 },
  { id: 'm3', title: 'GenAI Meta Ad (Vertical)', category: 'Meta Ads', type: 'image', file: meta3 },
  { id: 'm4', title: 'Creative Image 6 (Horizontal)', category: 'Meta Ads', type: 'image', file: meta4 },
  { id: 'm5', title: 'Creative Image 6 (Square)', category: 'Meta Ads', type: 'image', file: meta5 },
  { id: 'm6', title: 'Creative Image 6 (Vertical)', category: 'Meta Ads', type: 'image', file: meta6 },
  { id: 'm7', title: 'Springboot Bootcamp Ad', category: 'Meta Ads', type: 'image', file: meta7 },
  { id: 'm8', title: 'Springboot Bootcamp Thumbnail', category: 'Meta Ads', type: 'image', file: meta8 },

  // Presentations
  { id: 'p1', title: 'FSD Pitch Presentation', category: 'Presentations', type: 'pdf', file: presentation1 },
  { id: 'p2', title: 'Stellar Bootcamp Presentation', category: 'Presentations', type: 'pdf', file: presentation2 },
  { id: 'p3', title: 'Portfolio Version 2', category: 'Presentations', type: 'pdf', file: presentation3 },

  // Social Media
  { id: 's1', title: '1st Year Anniversary Post', category: 'Social Media', type: 'image', file: social1 },
  { id: 's2', title: 'LinkedIn Special Post', category: 'Social Media', type: 'image', file: social2 },
  { id: 's3', title: 'Mahavir Jayanti Greeting', category: 'Social Media', type: 'image', file: social3 },
  { id: 's4', title: "Mother's Day Special", category: 'Social Media', type: 'image', file: social4 },
  { id: 's5', title: 'National Technology Day', category: 'Social Media', type: 'image', file: social5 },
  { id: 's6', title: 'Pankaj Sir Birthday Post', category: 'Social Media', type: 'image', file: social6 },
  { id: 's7', title: 'Social Media Post #01', category: 'Social Media', type: 'image', file: social7 },
  { id: 's8', title: 'Pulwama Attack Tribute', category: 'Social Media', type: 'image', file: social8 },
  { id: 's9', title: 'Republic Day Greeting', category: 'Social Media', type: 'image', file: social9 },
  { id: 's10', title: 'Shivaji Jayanti Story', category: 'Social Media', type: 'image', file: social10 },
  { id: 's11', title: 'Super 40 Program', category: 'Social Media', type: 'image', file: social11 },

  // Thumbnails
  { id: 't1', title: 'Claude Internship Thumbnail', category: 'Thumbnails', type: 'image', file: thumb1 },
  { id: 't2', title: "Don't Clap Thumbnail", category: 'Thumbnails', type: 'image', file: thumb2 },
  { id: 't3', title: 'Fix 5 Things in Claude', category: 'Thumbnails', type: 'image', file: thumb3 },
  { id: 't4', title: "Happy Labour's Day", category: 'Thumbnails', type: 'image', file: thumb4 },
  { id: 't5', title: 'RAG (AI & ML) Thumbnail', category: 'Thumbnails', type: 'image', file: thumb5 },
  { id: 't6', title: 'Secret Claude Hack', category: 'Thumbnails', type: 'image', file: thumb6 },
  { id: 't7', title: 'Top 10 Old Companies', category: 'Thumbnails', type: 'image', file: thumb7 },
  { id: 't8', title: 'Python Libraries YT', category: 'Thumbnails', type: 'image', file: thumb8 },
  { id: 't9', title: 'Unemployed Toppers', category: 'Thumbnails', type: 'image', file: thumb9 },
  { id: 't10', title: 'YouTube Main Thumbnail', category: 'Thumbnails', type: 'image', file: thumb10 },
];
