export function Timeline() {
  const timelineData = [
    {
      year: '2025',
      items: [
        {
          role: 'Incoming Associate Product Manager at',
          company: 'Salesforce',
          description: '— AI B2B SaaS, 2026 Cohort',
          color: 'blue'
        },
        {
          role: 'Program Manager at',
          company: 'Amazon',
          description: '— built internal AI product to optimize labor planning, projected to save millions',
          color: 'yellow'
        },
        {
          role: 'President at',
          company: 'AI Student Collective',
          description: '— building the biggest AI community at UC Davis; helping students build and use AI effectively',
          color: 'red'
        },
        {
          role: 'Founding Vice President at',
          company: 'Product Space',
          description: '— teaching students about product and how to break into the industry',
          color: 'purple'
        }
      ]
    },
    {
      year: '2024',
      items: [
        {
          role: 'Product at',
          company: 'Knowhiz',
          description: '— edtech; shaped product experience and led go-to-market strategy',
          color: 'blue'
        },
        {
          role: 'Product at',
          company: 'Telos',
          description: '— healthtech; improved user experience and built features to drive engagement',
          color: 'green'
        },
        {
          role: 'Campus Leader at',
          company: 'Notion',
          description: '— led growth at UCD, helping hundreds of students discover and adopt my favorite productivity tool through personalized use cases',
          color: 'red'
        }
      ]
    },
    {
      year: '2023',
      items: [
        {
          role: 'Senator at',
          company: 'ASUCD',
          description: '— learned product before knowing what product was; problem discovery, user research, CX collaboration on initiatives benefiting 31,000+ students',
          color: 'yellow'
        }
      ]
    }
  ];

  const colorMap = {
    red: { bg: '#faf8f3', border: '#000000', stud: '#000000' },
    blue: { bg: '#faf8f3', border: '#000000', stud: '#000000' },
    yellow: { bg: '#faf8f3', border: '#000000', stud: '#000000' },
    green: { bg: '#faf8f3', border: '#000000', stud: '#000000' },
    purple: { bg: '#faf8f3', border: '#000000', stud: '#000000' }
  };

  let brickCount = 0;

  return (
    <section className="py-12">
      <div className="text-center mb-16">
        <h2 className="text-gray-900 mb-2">Timeline</h2>
        <p className="text-gray-600">The building blocks of my career</p>
      </div>
      
      <div className="flex flex-col items-center gap-0 max-w-4xl mx-auto">
        {timelineData.map((yearData, yearIndex) => (
          <div key={yearData.year} className="flex flex-col items-center gap-0 w-full">
            {yearData.items.map((item, itemIndex) => {
              const currentBrickIndex = brickCount++;
              const isEven = currentBrickIndex % 2 === 0;
              const colors = colorMap[item.color as keyof typeof colorMap];
              const isLastItem = yearIndex === timelineData.length - 1 && itemIndex === yearData.items.length - 1;
              const isFirstItem = currentBrickIndex === 0;
              // Only show connectors after Salesforce (brick 0) and Product Space (brick 3)
              const hasConnectorBelow = currentBrickIndex === 0 || currentBrickIndex === 3;
              
              // Calculate which pegs are covered based on brick position
              // Grey brick stays centered (250px wide, covers center of container)
              // If brick is left (isEven), the RIGHT side pegs (5,6,7,8) are over the grey brick
              // If brick is right (!isEven), the LEFT side pegs (1,2,3,4) are over the grey brick
              // First brick (red): show all 8 pegs
              // Last brick (yellow): show only 4 pegs (the ones not touching grey)
              // All other bricks: show 4 pegs (the ones not touching grey)
              const pegsToHide = isFirstItem 
                ? []  // First brick shows all 8 pegs
                : (isEven ? [5, 6, 7, 8] : [1, 2, 3, 4]);  // Other bricks hide 4 pegs
              
              const visiblePegs = 8 - pegsToHide.length;
              
              return (
                <div key={itemIndex} className="flex flex-col items-center gap-0 w-full relative">
                  {/* Main LEGO Brick */}
                  <div
                    className={`relative transition-all duration-300 hover:-translate-y-1 cursor-pointer`}
                    style={{
                      width: '500px', // Double the grey block width (250px * 2)
                      animationDelay: `${currentBrickIndex * 0.1}s`,
                      opacity: 0,
                      animation: 'fadeInUp 0.6s ease forwards',
                      animationFillMode: 'forwards',
                      // Add negative margin if previous block doesn't have a connector
                      marginTop: currentBrickIndex > 0 && (currentBrickIndex !== 1 && currentBrickIndex !== 4) ? '-16px' : '0',
                      // Grey block is 250px wide, centered in container
                      // Grey block left edge: calc(50% - 125px)
                      // Grey block right edge: calc(50% + 125px)
                      // For left askew (even): align RIGHT edge of brick with RIGHT edge of grey block
                      // For right askew (odd): align LEFT edge of brick with LEFT edge of grey block
                      marginLeft: isEven 
                        ? 'calc(50% + 125px - 500px)'  // Left askew: right edge aligns with grey block right edge
                        : 'calc(50% - 125px)',          // Right askew: left edge aligns with grey block left edge
                      marginRight: 'auto'
                    }}
                  >
                    {/* LEGO Studs on top - evenly spaced based on visible pegs */}
                    <div 
                      className="relative mb-0 z-10"
                      style={{
                        paddingLeft: '40px',
                        paddingRight: '40px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start'
                      }}
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((stud) => {
                        const showPeg = !pegsToHide.includes(stud);
                        
                        return (
                          <div
                            key={stud}
                            className="relative flex-shrink-0"
                            style={{
                              width: '28px',
                              height: showPeg ? '16px' : '0px',
                              backgroundColor: showPeg ? '#faf8f3' : 'transparent',
                              border: showPeg ? `4px solid #000000` : 'none',
                              borderBottom: 'none',
                              borderRadius: showPeg ? '4px 4px 0 0' : '0',
                              opacity: showPeg ? 1 : 0,
                              transition: 'all 0.3s ease',
                              pointerEvents: showPeg ? 'auto' : 'none'
                            }}
                          >
                            {showPeg && (
                              <div
                                className="absolute inset-x-0 top-0 h-1"
                                style={{ backgroundColor: '#000000' }}
                              ></div>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {/* Main brick body */}
                    <div
                      className="p-8 relative"
                      style={{
                        backgroundColor: '#faf8f3',
                        border: `4px solid #000000`,
                        borderTop: `4px solid #000000`
                      }}
                    >
                      <div className="relative z-10 text-gray-900">
                        <div className="text-xs font-bold uppercase tracking-wider mb-2 opacity-90">
                          {yearData.year}
                        </div>
                        <div className="leading-relaxed">
                          <span className="font-medium">{item.role} </span>
                          {item.company && (
                            <span className="font-bold px-2 py-1 rounded border-2 border-gray-900">
                              {item.company}
                            </span>
                          )}
                          {item.description && (
                            <span className="block mt-2 opacity-90">{item.description}</span>
                          )}
                        </div>
                      </div>

                      {/* Bottom edge highlight */}
                      <div
                        className="absolute bottom-0 left-0 right-0 h-2"
                        style={{ backgroundColor: '#000000' }}
                      ></div>
                    </div>
                  </div>

                  {/* Connector Brick - positioned to align with hidden pegs */}
                  {hasConnectorBelow && (
                    <div 
                      className="relative" 
                      style={{ 
                        width: '250px',
                        marginTop: '-16px',
                        marginBottom: '-16px',
                        // Grey bricks stay in a straight vertical line down the center
                        alignSelf: 'center',
                        zIndex: 20
                      }}
                    >
                      {/* Connector body */}
                      <div
                        style={{
                          width: '100%',
                          height: '50px',
                          backgroundColor: '#faf8f3',
                          border: '4px solid #000000'
                        }}
                      ></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}} />
    </section>
  );
}