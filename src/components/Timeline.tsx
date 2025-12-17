export function Timeline() {
  const timelineData = [
    {
      year: '2025',
      items: [
        {
          role: 'currently building',
          company: 'substack',
          description: 'Product at TIKTOK — built AI generative models and unsupervised prompt engineering research',
          color: 'red'
        }
      ]
    },
    {
      year: '2024',
      items: [
        {
          role: 'AI Product Analyst at',
          company: 'Remade',
          description: '— edtech unicorn, designed user experiences and AI usability',
          color: 'blue'
        },
        {
          role: 'Won Man + Global Hackathon',
          company: '',
          description: 'Top 1 of 850+ created a social media algorithm to reduce addiction',
          color: 'yellow'
        },
        {
          role: 'Built a web-app to',
          company: '',
          description: 'simulate ai campaigns with AI agents, recognized by execs @ Meta, Neural, and more',
          color: 'green'
        }
      ]
    },
    {
      year: '2023',
      items: [
        {
          role: 'Product at',
          company: 'Interv. Kickback',
          description: '— helped Barry Seahunt figure out what to build lol',
          color: 'purple'
        },
        {
          role: 'PM Intern at',
          company: 'Stripe',
          description: '— own launch strategy < finished pm ot training too',
          color: 'red'
        },
        {
          role: 'Business Development Intern at',
          company: 'RAND',
          description: '— grown marketing strategies + exceeded 60k+ clients',
          color: 'blue'
        },
        {
          role: 'Taught a computer aided design course to',
          company: '',
          description: '25+ elementary students, formed complex topics into bite-sized analogies',
          color: 'yellow'
        }
      ]
    }
  ];

  const colorMap = {
    red: { bg: '#E74C3C', border: '#C0392B', stud: '#C0392B' },
    blue: { bg: '#3498DB', border: '#2980B9', stud: '#2980B9' },
    yellow: { bg: '#F39C12', border: '#D68910', stud: '#D68910' },
    green: { bg: '#1ABC9C', border: '#16A085', stud: '#16A085' },
    purple: { bg: '#9b59b6', border: '#8e44ad', stud: '#8e44ad' }
  };

  let brickCount = 0;

  return (
    <section className="py-12">
      <div className="text-center mb-16">
        <h2 className="text-gray-900 mb-2">Building My Stack</h2>
        <p className="text-gray-600">Each brick represents a chapter in my journey</p>
      </div>
      
      <div className="flex flex-col items-center gap-0 max-w-4xl mx-auto">
        {timelineData.map((yearData, yearIndex) => (
          <div key={yearData.year} className="flex flex-col items-center gap-0 w-full">
            {yearData.items.map((item, itemIndex) => {
              const currentBrickIndex = brickCount++;
              const isEven = currentBrickIndex % 2 === 0;
              const colors = colorMap[item.color as keyof typeof colorMap];
              const isLastItem = yearIndex === timelineData.length - 1 && itemIndex === yearData.items.length - 1;
              const hasConnectorBelow = !isLastItem;
              
              // Calculate which pegs are covered based on brick position
              // Grey brick stays centered (250px wide, covers center of container)
              // If brick is left (isEven), the RIGHT side pegs (5,6,7,8) are over the grey brick
              // If brick is right (!isEven), the LEFT side pegs (1,2,3,4) are over the grey brick
              const pegsToHide = isEven ? [5, 6, 7, 8] : [1, 2, 3, 4];
              
              return (
                <div key={itemIndex} className="flex flex-col items-center gap-0 w-full relative">
                  {/* Main LEGO Brick */}
                  <div 
                    className={`relative w-full transition-all duration-300 hover:-translate-y-1 cursor-pointer`}
                    style={{ 
                      maxWidth: '600px',
                      marginLeft: isEven ? '0' : 'auto',
                      marginRight: isEven ? 'auto' : '0',
                      animationDelay: `${currentBrickIndex * 0.1}s`,
                      opacity: 0,
                      animation: 'fadeInUp 0.6s ease forwards',
                      animationFillMode: 'forwards',
                      transform: isEven ? 'translateX(50px)' : 'translateX(175px)'
                    }}
                  >
                    {/* LEGO Studs on top - 8 pegs */}
                    <div className="flex justify-evenly px-8 mb-0 relative z-10">
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((stud) => {
                        // IF peg is touching grey brick, THEN hide it
                        const isTouchingGreyBrick = hasConnectorBelow && pegsToHide.includes(stud);
                        const showPeg = !isTouchingGreyBrick;
                        
                        return (
                          <div
                            key={stud}
                            className="relative"
                            style={{
                              width: '28px',
                              height: showPeg ? '16px' : '0px',
                              backgroundColor: colors.bg,
                              border: showPeg ? `3px solid ${colors.border}` : 'none',
                              borderBottom: 'none',
                              borderRadius: '4px 4px 0 0',
                              opacity: showPeg ? 1 : 0,
                              transition: 'all 0.3s ease'
                            }}
                          >
                            {showPeg && (
                              <div
                                className="absolute inset-x-0 top-0 h-1"
                                style={{ backgroundColor: colors.stud }}
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
                        backgroundColor: colors.bg,
                        border: `4px solid ${colors.border}`,
                        borderTop: `3px solid ${colors.border}`,
                        boxShadow: '8px 8px 0 rgba(0, 0, 0, 0.2)'
                      }}
                    >
                      <div className="relative z-10 text-white">
                        <div className="text-xs font-bold uppercase tracking-wider mb-2 opacity-90">
                          {yearData.year}
                        </div>
                        <div className="leading-relaxed">
                          <span className="font-medium">{item.role} </span>
                          {item.company && (
                            <span className="font-bold bg-white/20 px-2 py-1 rounded">
                              @ {item.company}
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
                        style={{ backgroundColor: colors.stud }}
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
                          backgroundColor: '#95A5A6',
                          border: '3px solid #7F8C8D',
                          boxShadow: '4px 4px 0 rgba(0, 0, 0, 0.15)'
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