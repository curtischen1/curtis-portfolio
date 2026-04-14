import type { CSSProperties } from 'react';

export interface ArticleSection {
  id?: string;
  heading?: string;
  body?: string[];
  bullets?: string[];
  body2?: string[];
  image?: { src: string; alt: string; caption?: string };
  body3?: string[];
}

export interface TocItem {
  id: string;
  label: string;
}

export interface Article {
  id: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  coverImage?: string;
  coverImageStyle?: CSSProperties;
  toc?: TocItem[];
  content: ArticleSection[];
}

export const articles: Article[] = [
  {
    id: 'apm-recruiting-101',
    title: 'APM Recruiting from a Non Target School',
    description: "Reflecting on apm recruiting and how i'd do it again",
    date: 'February 25th, 2026',
    readTime: '8 min read',
    coverImage: '/assets/curtis_blocks.png',
    toc: [
      { id: 'my-experience', label: 'My Experience' },
      { id: 'recruiting', label: 'Recruiting' },
      { id: 'product-casing', label: 'Product Casing' },
      { id: 'how-to-stand-out', label: 'How to Stand Out' },
    ],
    content: [
      {
        body: [
          "Hi, my name is Curtis! I am a 4th year CS + Psych double major at UC Davis, and an incoming APM at Salesforce. A lot of APMs you'll find at top programs come from schools with established product communities and large CS pipelines. I unfortunately didn't have that. I wanted to reflect on my recruiting experience and provide some insights on what worked for me and what I wish I would've done more of, coming from a school without that built-in advantage.",
        ],
      },
      {
        id: 'my-experience',
        heading: 'My Experience',
        body: [
          "Before discovering product, I joined my school's student government because I wanted to be in a role where I could solve problems at scale. Through my connections and work in student government, I was able to join and become a leader in the AI Collective, a global organization dedicated to learning and applying AI.",
          "When I discovered product, I did my school's Product Case Competition and ended as a finalist despite not having traditional product experience. This sparked my interest in product, and by leveraging my unconventional experiences and transferrable skills, I was able to secure my first 2 internships in product at AI startups. Although I was brand new to the space, my work there shaped a lot of my product knowledge and made me excited to share this career path with students at UC Davis.",
          "After seeing the gap in education for product at Davis, I became founding VP at my school's chapter of Product Space. We wanted to craft a pathway for students with no experience to learn and hone the fundamentals of product. I was also able to leverage my startup and leadership experience to land my program manager Internship at Amazon. I worked with my manager to make my intern project more product-related, and I ended up building an internal AI tool for labor pptimization, along with owning product responsibilities like talking to customers and writing PRDs.",
          "By the time I was applying for APM roles, my resume looked like this:",
        ],
        bullets: [
          'Amazon Program Manager Internship - AI Supply Chain',
          'KnoWhiz Product Manager Internship - AI Edtech',
          'Telos Product Manager Internship - AI HealthTech',
          'AISC President - AI Club',
          'Product Space Vice President - PM Club',
          'Notion Campus Leader - framed as Growth GTM experience',
          'Nomad - Hackathon Project, 2nd place overall',
        ],
        body2: [
          "I added the Hackathon and Campus Leader position to fill the weak points in my resume, specifically growth marketing and technical experience. And here are my results:",
        ],
        image: {
          src: '/assets/SeniorYear_Recruiting.png',
          alt: 'Sankey diagram of senior year recruiting results: 22 applied, 10 no response, 10 rejected, 4 first round, 2 final round, 2 offers, 1 accepted',
          caption: 'APM Recruiting Stats',
        },
        body3: [
          "I wanted to provide an honest overview of my experiences and recruiting journey to show what realistic results look like. I had to be very scrappy earlier in my career. I wasn't getting a lot of interviews and most of the experiences on my resume were unpaid. I know there is a big push for students not to take unpaid opportunities but I am of the belief that any experience is good experience, and you should be willing to take any opportunities you can get, especially starting out in your career.",
          "Caveat: I recognize my privilege when I say that students should take unpaid opportunities. I know people sometimes can't afford to work for free because they need to pay bills and support themselves. If you are able though, I think being open to every opportunity that comes your way truly does snowball into better opportunities.",
        ],
      },
      {
        id: 'recruiting',
        heading: 'The Recruiting Experience',
        body: [
          "As you saw in the graphic above, I only applied to 22 positions, mostly APM programs and New Grad Product Manager roles. I also took my fall quarter off to focus solely on recruiting, so every day I would just be casing and doing company research.",
          "One thing I want to highlight is referrals. Everyone talks about whether it's more important to apply fast or apply with a referral. I believe you should do both. Especially for APM programs, you know roughly when they open every year, so you should be trying to get your referrals before the application even opens. Every first round interview I got, I had a referral for. Google's APM program receives 10,000+ applicants. You need to do whatever it takes to ensure your application gets seen. For Meta specifically, I prewrote my essays based on previous RPM essay prompts so I could apply as early as possible. Unlike other new grad roles, APM programs are very predictable. Use that to your advantage and be as prepared as possible.",
        ],
      },
      {
        id: 'product-casing',
        heading: 'Product Casing',
        body: [
          "Something I want to make clear is that Product Management and Product Recruiting are very different things. Getting good at product doesn't necessarily mean you will be great at product casing because they use fundamentally different muscles. PM experience may help you develop your product sense but learning the frameworks is essential for doing well in your interviews.",
          "I have a lot of regret about how I approached product casing. Since discovering product, I read a lot of books and sought out a lot of tips trying to find the \"secret\" to cracking the interview. Despite years of searching, a PM at Meta told me he also spent years searching and thousands of dollars only to find there is no secret. You just have to do the work and practice.",
          "I didn't start mocking seriously until I started recruiting for APM roles, and in the 2 months I spent seriously mocking with real people, I improved more than in the 2 years I spent reading and looking for tips. If I were to do it again, I would've spent a month learning how product casing questions work across the main types: Product Design, Analytical, Estimation, and Product Strategy. Then I would've scheduled a mock interview at least once a week to build the muscle. I attended a Q&A with a Google APM who said he mocked for 8 months before his interview and felt he needed all that time to get sharp. I'll link resources at the bottom for the best places to learn about question types and what a good answer looks like. You never know when you'll get the interview. So when you do, you don't want to screw it up.",
          "One thing people often overlook is Behavioral prep. Behaviorals are super important and are often asked before you even reach the casing rounds. Make sure you have stories prepared for common prompts like leading a team, handling conflict, and managing competing deadlines. I won't go deep on the STAR framework since most people know it, but one thing I added for APM recruiting was a Learn section at the end of each story, where I talked about what I took away and how I'd apply it going forward or approach the situation differently.",
        ],
      },
      {
        id: 'how-to-stand-out',
        heading: 'How to Stand Out',
        body: [
          "I think people focus on how to stand out before focusing on being a competitive applicant. Get your fundamentals down first. After that, the most important thing you can do is craft your story. Make sure your \"Tell me about yourself\" and \"Why product\" answers are compelling and specific to you. In a sea of qualified applicants, your unique journey is your biggest differentiator. For me, that was framing my background in public policy and student government into a genuine desire to solve problems at scale with technical solutions.",
          "I hope this gave you something useful, whether you're just starting out or deep in the process.",
        ],
      },
    ],
  },
  {
    id: 'why-i-started-writing',
    title: 'Why I started writing',
    description: 'Trying new things, keeping old skills',
    date: 'February 25th, 2026',
    readTime: '2 min read',
    coverImage: '/assets/Curtis_computer.png',
    coverImageStyle: { width: '130%', height: '130%', objectFit: 'contain', display: 'block', margin: '0 auto', marginTop: '40px' },
    content: [
      {
        body: [
          "In the age of AI, where LLMs are writing our PRDs and agents are designing and building full products, I didn't want to lose my voice in the process.", 
          "I actively use these tools because they make me more productive and help me build faster. But the more I rely on them, the more I notice my voice and visual identity quietly fading. So this year, I made it my mission to be more creative. I started dabbling in design, built some apps, and designed this website. Now I want to take it a step further and start writing." ,
          "This will be intentionally unfocused. Expect anything from product case studies, human behavior, the business landscape of the toy market, to whatever else is on my mind.",
         "This site is meant to be a time capsule of my beliefs and my little corner of the internet. I hope you enjoy!"
        ],
      },
    ],
  },
];
