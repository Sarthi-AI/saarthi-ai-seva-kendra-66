
import React from 'react';

interface TranscriptDisplayProps {
  transcript: string;
  isProcessing: boolean;
}

const TranscriptDisplay: React.FC<TranscriptDisplayProps> = ({ transcript, isProcessing }) => {
  return (
    <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-4 mb-6">
      <h3 className="text-sm font-medium text-gray-500 mb-2">You said:</h3>
      
      {transcript ? (
        <p className="text-lg">{transcript}</p>
      ) : (
        <p className="text-lg text-gray-400 italic">
          {isProcessing ? 'Listening...' : 'Press the microphone button and start speaking'}
        </p>
      )}
      
      {isProcessing && (
        <div className="flex space-x-1 mt-2">
          <div className="typing-indicator"></div>
          <div className="typing-indicator"></div>
          <div className="typing-indicator"></div>
        </div>
      )}
    </div>
  );
};

export default TranscriptDisplay;
