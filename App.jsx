// src/App.jsx
import React, { useState } from 'react';
import ImagePreview from './components/ImagePreview';
import SubtitleControls from './components/SubtitleControls';

function App() {
  const [image, setImage] = useState(null);
  const [subtitles, setSubtitles] = useState('');
  const [fontSize, setFontSize] = useState(40);
  const [fontColor, setFontColor] = useState('#ffffff');
  const [bgColor, setBgColor] = useState('#000000');
  //OTOMATİK ALTYAZI OLUŞTURMA ARACI
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const generateImage = () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      
      ctx.drawImage(img, 0, 0);
      
      const lineHeight = parseInt(fontSize) + 20;
      const lines = subtitles.split('\n');
      const totalHeight = lines.length * lineHeight;
      const startY = canvas.height - totalHeight;
      
      lines.forEach((line, index) => {
        const y = startY + (index * lineHeight);
        
        ctx.fillStyle = `${bgColor}99`;
        ctx.fillRect(0, y, canvas.width, lineHeight);
        
        if (index > 0) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(canvas.width, y);
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
          ctx.stroke();
        }
        
        ctx.fillStyle = fontColor;
        ctx.font = `${fontSize}px SF Pro Display, -apple-system, sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(line, canvas.width / 2, y + lineHeight / 2);
      });
      
      const link = document.createElement('a');
      link.download = 'subtitled-image.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    };
    
    img.src = image;
  };

  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      <div className="max-w-[1200px] mx-auto p-8">
        <h1 className="text-4xl font-medium text-[#1d1d1f] text-center mb-12">
        Otomatik Altyazı Oluşturucu
        </h1>
        
        <div className="grid grid-cols-2 gap-8 bg-white rounded-2xl shadow-subtle p-8">
          <ImagePreview
            image={image}
            subtitles={subtitles}
            fontSize={fontSize}
            fontColor={fontColor}
            bgColor={bgColor}
          />
          
          <div className="flex flex-col">
            <div className="mb-6">
              <label className="apple-input-label">
                Resim Yükle
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="apple-file-input"
                />
              </label>
            </div>
            
            <SubtitleControls
              subtitles={subtitles}
              setSubtitles={setSubtitles}
              fontSize={fontSize}
              setFontSize={setFontSize}
              fontColor={fontColor}
              setFontColor={setFontColor}
              bgColor={bgColor}
              setBgColor={setBgColor}
            />
            
            <button
              onClick={generateImage}
              disabled={!image || !subtitles}
              className="apple-button mt-auto"
            >
              Altyazılı Resmi Oluştur
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;