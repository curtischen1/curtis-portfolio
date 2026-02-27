import { useState } from 'react';

const GH = "'Gloria Hallelujah', cursive";

const timelineData = [
  {
    year: '2026',
    company: 'Salesforce',
    role: 'Incoming Associate Product Manager',
    description: 'AI B2B SaaS, excited to learn!',
    image: '/assets/Salesforce Lego.png',
  },
  {
    year: '2025',
    company: 'Amazon',
    role: 'Program Manager',
    description: 'Built internal AI product to optimize labor planning, projected to save millions',
    image: '/assets/Amazon Lego.png',
  },
  {
    year: '2025',
    company: 'AI Student Collective',
    role: 'President',
    description: 'Building the biggest AI community at UC Davis; helping students build and use AI effectively',
    image: '/assets/AISC Lego.png',
  },
  {
    year: '2025',
    company: 'Product Space',
    role: 'Founding Vice President',
    description: 'Teaching students about product and how to break into the industry',
    image: '/assets/PS Lego.png',
  },
  {
    year: '2024',
    company: 'Notion',
    role: 'Campus Leader, Growth',
    description: 'Led growth at UC Davis, helping hundreds of students discover and adopt Notion',
    image: '/assets/Notion Lego.png',
  },
  {
    year: '2024',
    company: 'KnoWhiz',
    role: 'Product Manager',
    description: 'Edtech; shaped product experience and led go-to-market strategy',
    image: '/assets/KnoWhiz Lego.png',
  },
  {
    year: '2024',
    company: 'Telos',
    role: 'Product Manager',
    description: 'Healthtech; improved user experience and built features to drive engagement',
    image: '/assets/Telos Lego.png',
  },
  {
    year: '2023',
    company: 'ASUCD',
    role: 'Senator',
    description: 'Problem discovery, user research, and CX collaboration on initiatives benefiting 31,000+ students',
    image: '/assets/ASUCD Lego.png',
  },
];

export function Timeline() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h2
          style={{
            fontFamily: GH,
            fontSize: '48px',
            textDecoration: 'underline',
            marginBottom: '16px',
          }}
        >
          Timeline
        </h2>
        <p style={{ fontFamily: GH, fontSize: '18px', color: '#555' }}>
          Scroll to watch me build my career!
        </p>
      </div>

      {/* Two-column layout: bricks on left, tooltip on right */}
      <div
        style={{
          display: 'flex',
          gap: '40px',
          alignItems: 'flex-start',
          justifyContent: 'center',
          maxWidth: '900px',
          margin: '0 auto',
        }}
      >
        {/* Brick stack */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
          {timelineData.map((item, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                cursor: 'pointer',
                transform: hoveredIndex === idx ? 'translateY(-4px)' : 'translateY(0)',
                transition: 'transform 0.2s ease',
              }}
            >
              <img
                src={item.image}
                alt={item.company}
                style={{ width: '500px', display: 'block' }}
              />
            </div>
          ))}
        </div>

        {/* Tooltip panel — sticky so it stays visible while scrolling through bricks */}
        <div style={{ width: '220px', position: 'sticky', top: '32px', paddingTop: '8px' }}>
          {hoveredIndex !== null ? (
            <div
              style={{
                border: '2px solid black',
                padding: '16px',
                backgroundColor: '#faf8f3',
              }}
            >
              <div style={{ fontFamily: GH, fontSize: '18px', marginBottom: '8px' }}>
                {timelineData[hoveredIndex].company}
              </div>
              <div style={{ fontFamily: 'sans-serif', fontSize: '13px', color: '#333', marginBottom: '8px' }}>
                {timelineData[hoveredIndex].role}
              </div>
              <div style={{ fontFamily: 'sans-serif', fontSize: '12px', color: '#666' }}>
                {timelineData[hoveredIndex].description}
              </div>
              <div
                style={{
                  fontFamily: GH,
                  fontSize: '11px',
                  marginTop: '10px',
                  opacity: 0.5,
                }}
              >
                {timelineData[hoveredIndex].year}
              </div>
            </div>
          ) : (
            <div style={{ fontFamily: GH, fontSize: '13px', opacity: 0.4, textAlign: 'center' }}>
              hover over a block<br />to learn more
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
