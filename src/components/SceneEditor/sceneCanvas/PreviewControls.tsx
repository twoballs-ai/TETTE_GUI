import React from 'react';

interface PreviewControlsProps {
  onStartPreview: () => void;
  onStopPreview: () => void;
}

const PreviewControls: React.FC<PreviewControlsProps> = ({
  onStartPreview,
  onStopPreview,
}) => {
  return (
    <div>
      <button
        onClick={onStartPreview}
        style={{ position: 'absolute', top: 10, left: 10 }}
      >
        Start Preview
      </button>
      <button
        onClick={onStopPreview}
        style={{ position: 'absolute', top: 10, left: 120 }}
      >
        Stop Preview
      </button>
    </div>
  );
};

export default PreviewControls;