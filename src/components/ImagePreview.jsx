// src/components/ImagePreview.jsx
import React from 'react';

function ImagePreview({ image, subtitles, fontSize, fontColor, bgColor }) {
  const lineHeight = parseInt(fontSize) + 20;

  return (
    <div className="preview-container">
      {image ? (
        <div className="relative rounded-xl overflow-hidden bg-black">
          <img 
            src={image} 
            alt="Preview" 
            className="w-full h-auto max-h-[600px] object-contain"
          />
          <div className="absolute bottom-0 left-0 right-0">
            {subtitles.split('\n').map((line, index) => (
              <div
                key={index}
                className="w-full backdrop-blur-sm"
                style={{ 
                  backgroundColor: `${bgColor}99`,
                  borderTop: index > 0 ? '1px solid rgba(255, 255, 255, 0.2)' : 'none',
                  height: `${lineHeight}px`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <span
                  style={{ 
                    fontSize: `${fontSize}px`,
                    color: fontColor,
                    lineHeight: 1.2,
                    fontFamily: 'SF Pro Display, -apple-system, sans-serif'
                  }}
                >
                  {line}
                </span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="rounded-xl bg-[#f5f5f7] border-2 border-dashed border-[#86868b] aspect-video flex items-center justify-center">
          <p className="text-[#86868b] text-lg">
            Herhangi Bir Resim Yükleyin
          </p>
        </div>
      )}
    </div>
  );
}

export default ImagePreview;