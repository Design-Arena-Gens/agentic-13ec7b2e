'use client';

import { useEffect, useState } from 'react';
import styles from './page.module.css';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [words, setWords] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const thoughtWords = [
    'musings', 'thoughts', 'ideas', 'reflections', 'ponderings',
    'observations', 'whispers', 'dreams', 'echoes', 'fragments',
    'stories', 'moments', 'wonders', 'visions', 'insights'
  ];

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Generate floating words
    const newWords = thoughtWords.map((word, i) => ({
      id: i,
      text: word,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 15 + Math.random() * 10
    }));
    setWords(newWords);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className={styles.hero}>
      {/* Animated gradient background */}
      <div className={styles.gradientBg}></div>

      {/* Floating particles */}
      <div className={styles.particles}>
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className={styles.particle}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 20}s`
            }}
          />
        ))}
      </div>

      {/* Floating thought words */}
      <div className={styles.floatingWords}>
        {words.map((word) => (
          <div
            key={word.id}
            className={styles.word}
            style={{
              left: `${word.x}%`,
              top: `${word.y}%`,
              animationDelay: `${word.delay}s`,
              animationDuration: `${word.duration}s`
            }}
          >
            {word.text}
          </div>
        ))}
      </div>

      {/* Mouse follower */}
      <div
        className={styles.mouseFollower}
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`
        }}
      />

      {/* Main content */}
      <div className={`${styles.content} ${isLoaded ? styles.loaded : ''}`}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>
            <span className={styles.titleWord} style={{ animationDelay: '0.1s' }}>R</span>
            <span className={styles.titleWord} style={{ animationDelay: '0.2s' }}>a</span>
            <span className={styles.titleWord} style={{ animationDelay: '0.3s' }}>m</span>
            <span className={styles.titleWord} style={{ animationDelay: '0.4s' }}>b</span>
            <span className={styles.titleWord} style={{ animationDelay: '0.5s' }}>l</span>
            <span className={styles.titleWord} style={{ animationDelay: '0.6s' }}>i</span>
            <span className={styles.titleWord} style={{ animationDelay: '0.7s' }}>n</span>
            <span className={styles.titleWord} style={{ animationDelay: '0.8s' }}>g</span>
            <span className={styles.titleWord} style={{ animationDelay: '0.9s' }}>s</span>
          </h1>
          <div className={styles.titleUnderline}></div>
        </div>

        <p className={styles.subtitle}>
          where thoughts wander and words flow freely
        </p>

        <div className={styles.scrollIndicator}>
          <div className={styles.scrollDot}></div>
        </div>
      </div>

      {/* Decorative shapes */}
      <div className={styles.shape1}></div>
      <div className={styles.shape2}></div>
      <div className={styles.shape3}></div>
    </div>
  );
}
