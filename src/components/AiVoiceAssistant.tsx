import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Play, Pause, RotateCcw, X, Sparkles, ChevronDown, ChevronUp, ArrowRight, Radio } from 'lucide-react';

interface AiVoiceAssistantProps {
  onExploreWorld?: () => void;
}

const SHORT_INTRO_TEXT = "Hi! Welcome to Haseeb Gilani's portfolio. I'm your AI guide. Explore his B2B lead generation systems, strategic outreach, and digital growth track record. Let's create real business opportunities together!";

const INTRO_SEGMENTS = [
  "Hi! Welcome to Haseeb Gilani's portfolio.",
  "I'm your AI guide.",
  "Explore his B2B lead generation systems, strategic outreach, and digital growth track record.",
  "Let's create real business opportunities together!"
];

export const AiVoiceAssistant: React.FC<AiVoiceAssistantProps> = ({ onExploreWorld }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [activeSegmentIndex, setActiveSegmentIndex] = useState<number>(-1);
  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  const [hasAutoPrompted, setHasAutoPrompted] = useState<boolean>(false);
  const [femaleVoice, setFemaleVoice] = useState<SpeechSynthesisVoice | null>(null);

  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize pure female English voice
  useEffect(() => {
    const findFemaleVoice = () => {
      if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
      const voices = window.speechSynthesis.getVoices();
      if (!voices || voices.length === 0) return;

      // Priority list for pure, natural English female voices
      const preferredNames = [
        'Samantha',
        'Victoria',
        'Karen',
        'Moira',
        'Tessa',
        'Fiona',
        'Microsoft Zira',
        'Zira',
        'Jenny',
        'Google UK English Female',
        'Google US English',
        'en-US-Neural2-F',
        'en-US-Standard-C',
        'en-US-Standard-E',
      ];

      // Exclude obvious male voices
      const isMale = (name: string) => {
        const lower = name.toLowerCase();
        return lower.includes('david') || lower.includes('daniel') || lower.includes('mark') || 
               lower.includes('george') || lower.includes('guy') || lower.includes('male') && !lower.includes('female');
      };

      let selected: SpeechSynthesisVoice | null = null;

      // 1. Try exact preferred names
      for (const name of preferredNames) {
        const match = voices.find(v => v.name.includes(name) && !isMale(v.name));
        if (match) {
          selected = match;
          break;
        }
      }

      // 2. Try any voice with 'female' in name or lang en
      if (!selected) {
        selected = voices.find(v => v.lang.startsWith('en') && v.name.toLowerCase().includes('female')) || null;
      }

      // 3. Fallback to first non-male en voice
      if (!selected) {
        selected = voices.find(v => v.lang.startsWith('en') && !isMale(v.name)) || voices[0];
      }

      setFemaleVoice(selected);
    };

    findFemaleVoice();
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.onvoiceschanged = findFemaleVoice;
    }
  }, []);

  // Play audio speech segment by segment
  const playSpeech = (startIndex: number = 0) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

    window.speechSynthesis.cancel();

    if (startIndex >= INTRO_SEGMENTS.length) {
      setIsPlaying(false);
      setIsPaused(false);
      setActiveSegmentIndex(-1);
      return;
    }

    setActiveSegmentIndex(startIndex);
    setIsPlaying(true);
    setIsPaused(false);

    if (isMuted) {
      // Simulate progress visually if muted
      const duration = INTRO_SEGMENTS[startIndex].length * 55 + 500;
      setTimeout(() => {
        playSpeech(startIndex + 1);
      }, duration);
      return;
    }

    const text = INTRO_SEGMENTS[startIndex];
    const utterance = new SpeechSynthesisUtterance(text);
    utteranceRef.current = utterance;

    if (femaleVoice) {
      utterance.voice = femaleVoice;
    }

    // Pure, clear, bright female pitch and comfortable speed
    utterance.pitch = 1.08;
    utterance.rate = 1.02;

    utterance.onend = () => {
      setTimeout(() => {
        playSpeech(startIndex + 1);
      }, 200);
    };

    utterance.onerror = () => {
      setIsPlaying(false);
      setActiveSegmentIndex(-1);
    };

    window.speechSynthesis.speak(utterance);
  };

  const handleTogglePlay = () => {
    if (isPlaying) {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.pause();
      }
      setIsPaused(true);
      setIsPlaying(false);
    } else if (isPaused) {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.resume();
      }
      setIsPaused(false);
      setIsPlaying(true);
    } else {
      playSpeech(0);
    }
  };

  const handleReplay = () => {
    playSpeech(0);
  };

  const handleToggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (nextMuted && typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    } else if (!nextMuted && isPlaying) {
      playSpeech(activeSegmentIndex >= 0 ? activeSegmentIndex : 0);
    }
  };

  const handleExplore = () => {
    if (onExploreWorld) {
      onExploreWorld();
    } else {
      const el = document.getElementById('about');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start select-none max-w-[340px] sm:max-w-[380px]">
      
      {/* 1. SPEECH BUBBLE & HUD TERMINAL (Appears above the Avatar) */}
      {!isMinimized && (
        <div className="mb-3 w-full p-4 rounded-2xl glass-panel-elevated border border-[#929DA7]/25 shadow-2xl animate-in slide-in-from-bottom-3 duration-200 relative overflow-hidden">
          
          {/* Subtle Cyber Corner Ticks */}
          <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#FF4B32]" />
          <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#FF4B32]" />
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#FF4B32]" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#FF4B32]" />

          {/* Header Bar */}
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#929DA7]/15 text-[10px] font-mono tracking-wider">
            <div className="flex items-center gap-2 text-[#FF4B32]">
              <div className="w-5 h-5 rounded-full overflow-hidden border border-[#FF4B32]/70 shrink-0">
                <img
                  src="/assets/aistudio/Gemini_Generated_Image_ppyvtvppyvtvppyv_5b4c8ceb.jpg"
                  alt="AI Guide"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF4B32] animate-ping" />
              <span className="font-bold uppercase">AI GUIDE // ONLINE</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#929DA7]/70 hidden sm:inline">FEMALE SYNTH</span>
              <button
                onClick={() => setIsMinimized(true)}
                className="text-[#929DA7] hover:text-[#F4F4F2] p-0.5 rounded transition-colors"
                title="Minimize assistant"
                aria-label="Minimize"
              >
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Interactive Spoken Text with Word Highlighting */}
          <div className="text-xs leading-relaxed text-[#929DA7] mb-3">
            {INTRO_SEGMENTS.map((seg, idx) => (
              <span
                key={idx}
                className={`transition-colors duration-200 mr-1 ${
                  activeSegmentIndex === idx
                    ? 'text-[#F4F4F2] font-semibold bg-[#FF4B32]/15 px-1 py-0.5 rounded border-b border-[#FF4B32]'
                    : activeSegmentIndex > idx
                    ? 'text-[#F4F4F2]/90'
                    : 'text-[#929DA7]'
                }`}
              >
                {seg}{' '}
              </span>
            ))}
          </div>

          {/* Live Waveform Equalizer Bar */}
          <div className="flex items-center justify-between h-4 px-2 py-1 bg-black/30 rounded-lg mb-3">
            <div className="flex items-center gap-1 h-full w-full">
              {[40, 75, 20, 90, 60, 30, 85, 45, 100, 35, 70, 50, 80, 25, 65, 40].map((h, i) => (
                <div
                  key={i}
                  style={{ height: isPlaying ? `${Math.max(20, (h * (i % 2 === 0 ? 1 : 0.7)))}%` : '15%' }}
                  className={`flex-1 rounded-full transition-all duration-150 ${
                    isPlaying ? 'bg-[#FF4B32]' : 'bg-[#929DA7]/30'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Action Row & Audio Controls */}
          <div className="flex items-center justify-between pt-1 text-xs">
            {/* Play / Pause / Replay Buttons */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={handleTogglePlay}
                className="px-3 py-1.5 rounded-lg bg-[#FF4B32] hover:bg-[#e03a22] text-white font-bold text-[11px] tracking-wider uppercase transition-all shadow-md shadow-[#FF4B32]/25 flex items-center gap-1.5 cursor-pointer"
              >
                {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3 fill-current" />}
                <span>{isPlaying ? 'Pause' : isPaused ? 'Resume' : 'Play Intro'}</span>
              </button>

              <button
                onClick={handleReplay}
                className="p-1.5 rounded-lg bg-[#1F2328] hover:bg-[#2A2E35] border border-[#929DA7]/20 text-[#929DA7] hover:text-[#F4F4F2] transition-colors"
                title="Replay intro"
                aria-label="Replay intro"
              >
                <RotateCcw className="w-3 h-3" />
              </button>

              <button
                onClick={handleToggleMute}
                className={`p-1.5 rounded-lg border transition-colors ${
                  isMuted
                    ? 'bg-[#FF4B32]/20 border-[#FF4B32] text-[#FF4B32]'
                    : 'bg-[#1F2328] hover:bg-[#2A2E35] border-[#929DA7]/20 text-[#929DA7] hover:text-[#F4F4F2]'
                }`}
                title={isMuted ? 'Unmute' : 'Mute Voice'}
                aria-label="Toggle mute"
              >
                {isMuted ? <VolumeX className="w-3 h-3" /> : <Volume2 className="w-3 h-3" />}
              </button>
            </div>

            {/* Explore Button */}
            <button
              onClick={handleExplore}
              className="text-[11px] font-semibold text-[#F4F4F2] hover:text-[#FF4B32] flex items-center gap-1 transition-colors"
            >
              <span>Explore</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

        </div>
      )}

      {/* 2. HOLOGRAPHIC SPEAKING FEMALE AI AVATAR DOCK */}
      <div className="flex items-center gap-3">
        {/* Main Avatar Button */}
        <button
          onClick={() => {
            if (isMinimized) {
              setIsMinimized(false);
            } else {
              handleTogglePlay();
            }
          }}
          className={`relative group p-1 rounded-full glass-panel-elevated border-2 transition-all duration-300 shadow-2xl shadow-black/80 flex items-center justify-center cursor-pointer ${
            isPlaying ? 'border-[#FF4B32] shadow-[0_0_20px_rgba(255,75,50,0.5)]' : 'border-[#929DA7]/40 hover:border-[#FF4B32]'
          }`}
          aria-label="AI Voice Guide Avatar"
        >
          {/* Animated Hologram Halo Rings when speaking */}
          <div
            className={`absolute -inset-2 rounded-full border border-[#FF4B32]/50 transition-all duration-500 pointer-events-none ${
              isPlaying
                ? 'scale-120 opacity-100 animate-spin [animation-duration:8s]'
                : 'opacity-0 scale-95 group-hover:opacity-40'
            }`}
          />
          {isPlaying && (
            <div className="absolute -inset-3 rounded-full border border-[#FF4B32]/30 animate-ping opacity-60 pointer-events-none" />
          )}

          {/* Avatar Face Container with uploaded character image */}
          <div className="relative w-15 h-15 sm:w-16 sm:h-16 rounded-full overflow-hidden bg-gradient-to-b from-[#2A2E35] to-[#121417] flex items-center justify-center border border-[#929DA7]/30 shadow-inner">
            <img
              src="/assets/aistudio/Gemini_Generated_Image_ppyvtvppyvtvppyv_5b4c8ceb.jpg"
              alt="AI Voice Guide - Haseeb Gilani Portfolio Assistant"
              className={`w-full h-full object-cover object-center transition-transform duration-500 ${
                isPlaying ? 'scale-108' : 'group-hover:scale-105'
              }`}
            />

            {/* Subtle Futuristic Scanline */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FF4B32]/15 to-transparent animate-scanline pointer-events-none" />

            {/* Speaking Audio Ripple Overlay */}
            {isPlaying && (
              <div className="absolute inset-0 bg-[#FF4B32]/10 mix-blend-screen pointer-events-none animate-pulse" />
            )}

            {/* Live Speaking Indicator Overlay Icon in bottom-right corner */}
            <div className={`absolute bottom-0 inset-x-0 py-0.5 bg-black/75 backdrop-blur-xs flex items-center justify-center gap-0.5 transition-opacity ${
              isPlaying ? 'opacity-100' : 'opacity-0 group-hover:opacity-80'
            }`}>
              <span className={`w-1 rounded-full bg-[#FF4B32] transition-all ${isPlaying ? 'h-2 animate-bounce' : 'h-1'}`} />
              <span className={`w-1 rounded-full bg-[#FF4B32] transition-all ${isPlaying ? 'h-3 animate-bounce [animation-delay:100ms]' : 'h-1'}`} />
              <span className={`w-1 rounded-full bg-[#FF4B32] transition-all ${isPlaying ? 'h-1.5 animate-bounce [animation-delay:200ms]' : 'h-1'}`} />
            </div>
          </div>

          {/* Online Active Status Tag */}
          <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isPlaying ? 'bg-[#FF4B32]' : 'bg-emerald-400'} opacity-75`} />
            <span className={`relative inline-flex rounded-full h-3.5 w-3.5 ${isPlaying ? 'bg-[#FF4B32]' : 'bg-emerald-500'} border-2 border-[#17191C]`} />
          </span>
        </button>

        {/* Minimized Quick Bar */}
        {isMinimized && (
          <div className="flex items-center gap-2 p-1.5 px-3 rounded-full glass-panel-elevated border border-[#929DA7]/25 shadow-xl animate-in fade-in">
            <button
              onClick={() => setIsMinimized(false)}
              className="text-xs font-mono font-bold text-[#F4F4F2] hover:text-[#FF4B32] transition-colors flex items-center gap-1.5"
            >
              <span>AI Guide</span>
              <ChevronUp className="w-3.5 h-3.5 text-[#FF4B32]" />
            </button>
            <span className="text-[#929DA7]">·</span>
            <button
              onClick={handleTogglePlay}
              className="p-1 rounded-full text-[#FF4B32] hover:scale-110 transition-transform"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
            </button>
          </div>
        )}
      </div>

    </div>
  );
};
