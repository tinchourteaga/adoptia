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
    title: 'The Story of Adoptia: Revolutionizing Pet Adoption Through AI',
    excerpt: 'How a simple vision transformed into a revolutionary platform connecting shelter pets with their perfect forever homes.',
    date: 'March 15, 2024',
    imageUrl: robotImage,
    author: 'Sarah Johnson',
    content: (
      <div className="space-y-6">
        <p>
          In 2024, Adoptia emerged from a simple yet powerful vision: to transform the way people connect with shelter pets. Our founder, Sarah Johnson, witnessed firsthand the challenges both shelters and potential adopters faced in finding the perfect match.
        </p>
        <p>
          "Too often, I saw wonderful animals waiting months for adoption while loving families struggled to find their ideal pet," Sarah recalls. "I knew technology could bridge this gap."
        </p>
        <p>
          This insight led to the development of our AI-powered matching system, which considers over 50 different factors to create compatible connections between pets and adopters. The results have been remarkable:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>88% successful match rate</li>
          <li>50% reduction in average adoption time</li>
          <li>90% decrease in adoption returns</li>
          <li>Partnerships with over 50 shelters across Spain and South America</li>
        </ul>
        <p>
          But Adoptia is more than just technology. It's about building a community where every adoption story becomes a success story. Our platform provides continuous support, resources, and guidance to ensure both pets and their new families thrive together.
        </p>
      </div>
    ),
  },
  {
    id: 'ai-matching',
    title: 'How AI is Making Pet Adoption More Successful',
    excerpt: 'Discover how our advanced AI algorithms are creating perfect matches between pets and adopters.',
    date: 'March 10, 2024',
    imageUrl: 'https://images.pexels.com/photos/4587998/pexels-photo-4587998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    author: 'Michael Chen',
    content: (
      <div className="space-y-6">
        <p>Coming soon...</p>
      </div>
    ),
  },
  {
    id: 'shelter-success',
    title: 'Transforming Shelter Operations with Technology',
    excerpt: 'Learn how shelters are using Adoptia to streamline their operations and increase adoption rates.',
    date: 'March 5, 2024',
    imageUrl: 'https://images.pexels.com/photos/1350593/pexels-photo-1350593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    author: 'Aisha Patel',
    content: (
      <div className="space-y-6">
        <p>Coming soon...</p>
      </div>
    ),
  },
];