import { NavItem, TeamMember, Testimonial, Value, BlogPost } from '../types';
import robotImage from '../assets/robot.jpeg'
import beaverImage from '../assets/beaver.jpeg'
import catImage from '../assets/cat.jpeg'
import rabbitImage from '../assets/rabbit.jpeg'
import bearImage from '../assets/bear.jpeg'
import kidImage from '../assets/kid_with_dog.png'
import groupImage from '../assets/group_with_dogs.png'
import elderImage from '../assets/elder_with_dog.png'



export const navItems: NavItem[] = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '#contact' },
];

export const companyValues: Value[] = [
  {
    title: 'mission.values.innovation.title',
    description: 'mission.values.innovation.description',
    icon: 'sparkles',
  },
  {
    title: 'mission.values.compassion.title',
    description: 'mission.values.compassion.description',
    icon: 'heart',
  },
  {
    title: 'mission.values.integrity.title',
    description: 'mission.values.integrity.description',
    icon: 'shield',
  },
  {
    title: 'mission.values.community.title',
    description: 'mission.values.community.description',
    icon: 'users',
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: 'Sarah Johnson',
    role: 'team.members.sarah.role',
    bio: 'team.members.sarah.bio',
    imageUrl: catImage,
  },
  {
    name: 'Michael Chen',
    role: 'team.members.michael.role',
    bio: 'team.members.michael.bio',
    imageUrl: beaverImage,
  },
  {
    name: 'Aisha Patel',
    role: 'team.members.aisha.role',
    bio: 'team.members.aisha.bio',
    imageUrl: rabbitImage,
  },
  {
    name: 'David Rodriguez',
    role: 'team.members.david.role',
    bio: 'team.members.david.bio',
    imageUrl: bearImage,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: 'testimonials.testimonial1',
    author: "Carla & Ringo",
    company: "Sevilla, España",
    imageUrl: kidImage
  },
  {
    id: 2,
    quote: 'testimonials.testimonial2',
    author: "Emilia Bregman",
    company: "Rio Negro, Argentina",
    imageUrl: groupImage
  },
  {
    id: 3,
    quote: 'testimonials.testimonial3',
    author: "Maria & Pipo",
    company: "Buenos Aires, Argentina",
    imageUrl: elderImage
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 'adoptia-story',
    title: 'blog.posts.post1.title',
    excerpt: 'blog.posts.post1.excerpt',
    date: 'blog.posts.post1.date',
    imageUrl: robotImage,
    author: 'Sarah Johnson',
    contentKeys: {
      paragraphs: [
        'blog.posts.post1.paragraph1',
        'blog.posts.post1.paragraph2',
        'blog.posts.post1.paragraph3',
        'blog.posts.post1.paragraph4',
      ],
      bullets: [
        'blog.posts.post1.bullet1',
        'blog.posts.post1.bullet2',
        'blog.posts.post1.bullet3',
        'blog.posts.post1.bullet4',
      ]
    },
  },
  {
    id: 'ai-matching',
    title: 'blog.posts.post2.title',
    excerpt: 'blog.posts.post2.excerpt',
    date: 'blog.posts.post2.date',
    imageUrl: 'https://images.pexels.com/photos/4587998/pexels-photo-4587998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    author: 'Michael Chen',
    contentKeys: {
      paragraphs: [
        'blog.posts.post2.paragraph1',
        'blog.posts.post2.paragraph2',
        'blog.posts.post2.paragraph3',
        'blog.posts.post2.paragraph4',
      ],
      bullets: [

      ]
    }
  },
  {
    id: 'shelter-success',
    title: 'blog.posts.post3.title',
    excerpt: 'blog.posts.post3.excerpt',
    date: 'blog.posts.post3.date',
    imageUrl: 'https://images.pexels.com/photos/1350593/pexels-photo-1350593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    author: 'Aisha Patel',
    contentKeys: {
      paragraphs: [
        'blog.posts.post3.paragraph1',
        'blog.posts.post3.paragraph2',
        'blog.posts.post3.paragraph3',
        'blog.posts.post3.paragraph4',
      ],
      bullets: [

      ]
    }
  },
];