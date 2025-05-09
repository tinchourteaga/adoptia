import { NavItem, TeamMember, Testimonial, Value, BlogPost } from '../types';

export const navItems: NavItem[] = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '#contact' },
];

export const companyValues: Value[] = [
  {
    title: 'Innovation',
    description: 'We leverage AI technology to create perfect matches between pets and their forever homes.',
    icon: 'sparkles',
  },
  {
    title: 'Compassion',
    description: 'Every animal deserves love and care. We approach each adoption with heart and understanding.',
    icon: 'heart',
  },
  {
    title: 'Integrity',
    description: 'We maintain transparent relationships with shelters and adopters, ensuring trust in every step.',
    icon: 'shield',
  },
  {
    title: 'Community',
    description: 'We build strong networks connecting shelters, adopters, and animal welfare advocates.',
    icon: 'users',
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    bio: 'A former shelter volunteer, Sarah founded Adoptia to revolutionize pet adoption through AI-powered matching.',
    imageUrl: 'src/assets/cat.jpeg',
  },
  {
    name: 'Michael Chen',
    role: 'Chief Technology Officer',
    bio: 'Michael leads our AI initiatives, developing innovative solutions to match pets with their perfect families.',
    imageUrl: 'src/assets/beaver.jpeg',
  },
  {
    name: 'Aisha Patel',
    role: 'Director of Shelter Relations',
    bio: 'Aisha\'s background in animal welfare drives her passion for connecting shelters with potential adopters.',
    imageUrl: 'src/assets/rabbit.jpeg',
  },
  {
    name: 'David Rodriguez',
    role: 'Head of Partnerships',
    bio: 'David builds relationships with shelters and veterinary clinics to expand our network and help more pets find homes.',
    imageUrl: 'src/assets/bear.jpeg',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Thanks to Adoptia's AI matching, we found our perfect companion. The platform made it easy to find a pet that fits our lifestyle perfectly.",
    author: "May and Ringo",
    company: "California",
    imageUrl: "src/assets/kid_with_dog.png"
  },
  {
    id: 2,
    quote: "As shelter volunteers, Adoptia has transformed how we connect our animals with loving homes. Their AI technology is revolutionary.",
    author: "Emily Thornton",
    company: "Happy Tails Shelter",
    imageUrl: "src/assets/group_with_dogs.png"
  },
  {
    id: 3,
    quote: "The AI-powered matching system helped us find our senior cat Max. We couldn't be happier with how perfect he is for our family.",
    author: "Mary and Max",
    company: "Texas",
    imageUrl: "src/assets/elder_with_dog.png"
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 'adoptia-story',
    title: 'The Story of Adoptia: Revolutionizing Pet Adoption Through AI',
    excerpt: 'How a simple vision transformed into a revolutionary platform connecting shelter pets with their perfect forever homes.',
    date: 'March 15, 2024',
    imageUrl: 'src/assets/robot.jpeg',
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