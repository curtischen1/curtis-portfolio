import type { CSSProperties } from 'react';

export interface ArticleSection {
  heading?: string;
  body?: string[];
  bullets?: string[];
  body2?: string[];
}

export interface Article {
  id: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  coverImage?: string;
  coverImageStyle?: CSSProperties;
  content: ArticleSection[];
}

export const articles: Article[] = [
  {
    id: 'apm-recruiting-101',
    title: 'APM Recruiting 101',
    description: "Reflecting on apm recruiting and how i'd do it again",
    date: 'February 25th, 2026',
    readTime: '15 min read',
    coverImage: '/assets/curtis_blocks.png',
    content: [
      {
        heading: 'My Experience',
        body: [
          "I applied to 20 jobs, got 4 interviews, and received 2 APM offers.",
          "I am not the most qualified APM applicant. I am here because I only applied for APM roles. Don't do this.",
          "Now I want to share the career moves I made that I showcased on my resume.",
          "My freshman year, I only joined one club/team in Student Government and I joined Student Government/Academic and STEM Affairs. At this point, I did not know what I wanted to do. I took a product design class at UC Davis Design and I discovered the design space. I was unsure on the path to get there so I decided to just start trying things. I was interested in AI. I joined the AI Student Collective (in the External Affairs team because I took a philosophy class on Artificial Intelligence and wanted to learn more). I joined Student Government because I wanted to be in a space where I could help others.",
          "My sophomore year, I won my school's election for Student Government and I moved up in ASG as the Director of Strategic Partnerships. I discovered product because someone from Telos reached out to me through LinkedIn knowing my Senator background. It was around that time that being a Senator taught me about product before I knew what product was. I really loved the work I was doing in Student Government: finding campus problems, talking to students, working with different teams to create solutions, and marketing and iterating on the solutions. As you can see, that deeply represents the product lifecycle. At this point, I knew product was for me. I cold-emailed a lot of startups and was finally accepted for a Telos internship. It was like a lightbulb turned on in my head. My first real experience with product was at HireGro, let's call it. Better product management experience on campus and my Telos internship, which was an early stage startup with experience in design and marketing. Despite our team not having any traditional product experience, we moved from 5 to 9 startups in the competition. This experiment validated my desire and ability to go into product.",
          "At ProdCon, I networked with someone who was running a bootcamp program. I applied and got in, and matched with my first Product Management internship. It was a remote unpaid internship at a AI HealthTech startup. Despite this, I loved the work I was able to do and the ownership I had over the product roadmap.",
          "Side Note: take advantage of club opportunities, you never know where they could take you.",
          "My junior year was the busiest, most impactful, and most stressful year of my college career. I became the President of AISC, and I also became Vice President of the Product Space chapter at UCD, and I was able to network my way into another unpaid remote PM internship, this time with Telos2. I also did a lot of other things on top of this (STEM lead at ASUCD, Ambassador for Notion, Strategy Consulting Externship at PwC, resume peer review at Perplexity, etc.) These things did not make it on my resume when APM recruiting. Juggling all these while also APM recruiting was hard. I started a Product Manager internship at Amazon in October so I was somewhat relieved. I did spend the rest of my junior year in hopes of landing a PM internship at big tech (spoiler alert: I did not). To sum it up, I spent my whole junior year overworking myself in hopes of landing a senior-level internship. The hard part is, everything I did my junior year didn't even help me land Amazon. I applied around June with only my HealthTech internship and Senate on my resume.",
          "I spent my sophomore year learning about product and my junior year learning about APM recruiting. Note that these are two different things that use two different muscles.",
          "On a personal note, I spent almost every free hour I had on recruiting and figuring out ways to optimize my 'profile' and apps. This was to the detriment of my clubs and friendships, my physical health, and my mental health too. Would not recommend.",
          "At Amazon, I was able to reshape my intern project into something more product focused, building an internal AI product to optimize labor planning. This is very lucky because I realized full time Product Manager interns whose final deliverables were strategy documents or playbooks. I got very lucky that my team accepted my product proposal and allowed me to pursue it.",
          "At this point, I was still very unconfident in my APM Candidate profile so I was actively looking for new APM internships and applying to PM internships concurrently with APM applications. I interviewed at Big Tech and Startups but nothing materialized. Note: I did land more product internships after Amazon after slapping my Junior Year Experiences so it was not for nothing.",
          "For Senior year, I decided to go all in on recruiting. I took no classes, only Career Center and stepped back from all extracurriculars. Everyday I was either interviewing or prepping for an interview up until I got both my offers in early November.",
        ],
      },
      {
        heading: 'The Recruiting Process Itself',
        body: [
          "As I mentioned previously, Product Management and Recruiting for PM are very different things. They use different muscles. A lot of the times, the skills you gain from recruiting don't really help on the job. First, I want to go over what I did it.",
          "Sophomore year, I bought and read a lot of books on recruiting. I started reading/Cracking the PM Interview, PM Interview by Lewis C Lin.",
          "I also spent the summer figuring out how to optimize my resume and networking with people to try and get advice. I started applying early in February but nothing materialized.",
          "Junior year, I was relatively very busy. I also discovered and used some AI mock interview tools (a lot of them are paywalled now unfortunately). I applied to jobs almost every cycle.",
          "Senior year, I spent all my time casing pretty much. I started mocking with real people (both friends and strangers) and did deep dives in pretty much every company I was interviewing at. I knew there were roughly 30 programs I wanted to apply to so rather than applying relentlessly cold, I was more methodical. I got my referral contacts very early in the season for everywhere I could (June/July), found out roughly when each program would open based on previous years and monitoring recruiter announcements on LinkedIn, and made sure to apply both early and with the referral. A lot of discussion about whether you should apply early or should you apply with a referral. For APM, given how slim the chances are, do your best to maximize your chances.",
          "When it comes to how I approached casing and mocking, do NOT do what I did. I had a lot of anxiety and insecurity when it came to casing so I was scared to mock with someone or ask people to review my resume. In my personal experience, my resume got significantly better when I compared it with other product managers versus when I spent hours on google trying to find 'the best PM resumes' and modeled mine after them.",
          "For casing, I spent a year doing solo casing before my first real mock. Despite the experience, my first mock was truly bad. It was a wake up call that I needed to do more reps. After that, I almost exclusively mocked with real people. I learned exponentially faster in the three months mocking with real people than the year casing individually. I also think there's immense value in seeing how other people answer the questions.",
          "If I could go back in time, I would spend a couple weeks learning the types of questions and frameworks I need to know for product and then practice with an AI mock interviewer so you have a general understanding of the process. Then I would try to schedule at least one mock a week to stay sharp. I watched a video that said to start prepping for the google apm interview 6 months before the process starts. Truly the earlier the better. For APM interviews, you can be asked any of these types of questions:",
        ],
        bullets: [
          'Product Design',
          'Logical',
          'Estimation',
          'Behavioral',
          'Strategy',
        ],
      },
      {
        heading: "What Makes a Good APM Candidate and How I'd do it again",
        body: [
          "Truthfully, there is no 'perfect' candidate. However, I've seen a lot of different APM profiles and I observed some patterns:",
        ],
        bullets: [
          'PM at both big tech and startups',
          'Technical experience',
          'Leadership',
        ],
        body2: [
          "I would prioritize Product Design and Behavioral questions as they are asked the most frequently.",
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
