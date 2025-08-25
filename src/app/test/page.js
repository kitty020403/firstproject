'use client';
import { useState } from 'react';

export default function GradientTestPage() {
  const [activeGradient, setActiveGradient] = useState(0);
  
  const gradients = [
    {
      name: "Deep Blue Corporate",
      value: "linear-gradient(135deg, #ffffff 0%, #748ea4ff 50%, #4d6b8cff 100%)",
      textColor: "#ffffff"
    },
    {
      name: "Emerald Professional",
      value: "linear-gradient(135deg, #1e0b36 0%, #3d2352 50%, #5d3a6b 100%)",
      textColor: "#333333"
    },
    {
      name: "Modern Purple",
      value: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
      textColor: "#ffffff"
    },
    {
      name: "Warm Professional",
      value: "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",
      textColor: "#333333"
    }
  ];

  return (
    <div className="min-vh-100 d-flex flex-column" 
         style={{ 
           background: gradients[activeGradient].value,
           transition: 'background 0.5s ease',
           padding: '2rem'
         }}>
      <div className="container my-auto">
        <div className="card shadow-lg mx-auto" style={{ maxWidth: '800px', backgroundColor: 'rgba(255,255,255,0.9)' }}>
          <div className="card-body text-center p-5">
            <h1 className="mb-4" style={{ color: gradients[activeGradient].textColor }}>
              Professional Gradient Tester
            </h1>
            
            <div className="mb-5">
              <h2 style={{ color: gradients[activeGradient].textColor }}>
                {gradients[activeGradient].name}
              </h2>
              <code className="d-block my-3 p-2 bg-dark text-white rounded">
                {gradients[activeGradient].value}
              </code>
            </div>
            
            <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
              {gradients.map((gradient, index) => (
                <button
                  key={index}
                  className="btn btn-lg"
                  style={{ 
                    background: gradient.value,
                    color: gradient.textColor,
                    border: '2px solid white'
                  }}
                  onClick={() => setActiveGradient(index)}
                >
                  {gradient.name}
                </button>
              ))}
            </div>
            
            <div className="mt-4">
              <h4 className="mb-3">How this would look with content:</h4>
              <div className="p-4 rounded" 
                   style={{ 
                     background: 'rgba(255,255,255,0.7)', 
                     borderLeft: `5px solid ${gradients[activeGradient].textColor}`
                   }}>
                <p className="lead">
                  This is sample text showing how content would appear on this background. 
                  Notice the readability and professional feel.
                </p>
                <button className="btn mt-2" 
                        style={{ 
                          background: gradients[activeGradient].value,
                          color: gradients[activeGradient].textColor
                        }}>
                  Call to Action
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="text-center mt-auto py-3" 
              style={{ color: gradients[activeGradient].textColor }}>
        <small>Click buttons above to test different gradients</small>
      </footer>
    </div>
  );
}