// src/components/SubtitleControls.jsx
import React from 'react';

function SubtitleControls({
  subtitles,
  setSubtitles,
  fontSize,
  setFontSize,
  fontColor,
  setFontColor,
  bgColor,
  setBgColor
}) {
  return (
    <div className="space-y-6">
      <div>
        <label className="apple-input-label">
          Altyazı Metni
          <textarea
            value={subtitles}
            onChange={(e) => setSubtitles(e.target.value)}
            className="apple-textarea"
            placeholder="Altyazıları Girin (Herhangi Bir Sorunda Github Profilimden Ulaşabilirsiniz)"
          />
        </label>
      </div>

      <div>
        <label className="apple-input-label">
          Yazı Boyutu
          <div className="flex items-center space-x-4">
            <input
              type="range"
              value={fontSize}
              onChange={(e) => setFontSize(e.target.value)}
              min="12"
              max="72"
              className="apple-range flex-grow"
            />
            <input
              type="number"
              value={fontSize}
              onChange={(e) => setFontSize(e.target.value)}
              min="12"
              max="72"
              className="apple-number-input w-20"
            />
          </div>
        </label>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="apple-input-label">
            Yazı Renk Ayar
            <div className="apple-color-wrapper">
              <input
                type="color"
                value={fontColor}
                onChange={(e) => setFontColor(e.target.value)}
                className="apple-color-input"
              />
            </div>
          </label>
        </div>

        <div>
          <label className="apple-input-label">
            Arka Plan Renk Ayar
            <div className="apple-color-wrapper">
              <input
                type="color"
                value={bgColor}
                onChange={(e) => setBgColor(e.target.value)}
                className="apple-color-input"
              />
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}

export default SubtitleControls;