import React, { useState } from 'react'

const NAVIGATION_CARDS = [
  { icon: "🔍", title: "DeepFake Detection", url: "https://noumanjavaid-new-space.hf.space" },
  { icon: "📄", title: "Document Analysis", url: "https://noumanjavaid-centurionv2.hf.space" },
  { icon: "🎥", title: "Video Watermarking", url: "https://noumanjavaid-watermark-demo-video.hf.space" },
  { icon: "🔐", title: "Image Authentication", url: "https://noumanjavaid-centii.hf.space" },
  { icon: "🖼️", title: "Image Comparison", url: "https://another-example.com" }
]

function App() {
  const [currentUrl, setCurrentUrl] = useState(NAVIGATION_CARDS[0].url)

  return (
    <div>
      <div className="header">
        <img 
          src="https://raw.githubusercontent.com/noumanjavaid96/ai-as-an-api/refs/heads/master/image%20(39).png" 
          alt="Logo" 
          className="logo" 
        />
        <h2 style={{ margin: 0 }}>Centurion</h2>
      </div>

      <div className="container">
        <div className="iframe-container">
          <iframe
            src={currentUrl}
            title="Centurion Main Platform"
          />
        </div>

        <div className="nav-grid">
          {NAVIGATION_CARDS.map((card, index) => (
            <div
              key={index}
              className="nav-card"
              onClick={() => setCurrentUrl(card.url)}
            >
              <i>{card.icon}</i>
              <span>{card.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
