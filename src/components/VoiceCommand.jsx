import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const VoiceCommand = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      console.error('Speech recognition is not supported in this browser');
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event) => {
      const command = event.results[0][0].transcript.toLowerCase().trim();
      setTranscript(command);
      
      // Handle navigation commands
      if (command.includes('go to home') || command.includes('homepage')) {
        navigate('/');
      } else if (command.includes('go to about')) {
        navigate('/about');
      } else if (command.includes('go to contact')) {
        navigate('/contact');
      } else if (command.includes('go to service')) {
        navigate('/service');
      } else if (command.includes('go to blog')) {
        navigate('/blog');
      } else if (command.includes('go to gallery')) {
        navigate('/gallery');
      }
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.onerror = (event) => {
      console.error('Speech recognition error', event.error);
      setIsListening(false);
    };

    // Start and stop recognition based on isListening state
    if (isListening) {
      recognition.start();
    } else {
      recognition.stop();
    }

    return () => {
      recognition.stop();
    };
  }, [isListening, navigate]);

  const toggleListening = () => {
    setIsListening(!isListening);
  };

  return (
    <div className="voice-command">
      <button 
        onClick={toggleListening}
        className={`voice-btn ${isListening ? 'listening' : ''}`}
      >
        {isListening ? 'Listening...' : 'Voice Command'}
      </button>
      {transcript && (
        <div className="transcript">
          <p>Command: {transcript}</p>
        </div>
      )}
    </div>
  );
};

export default VoiceCommand; 