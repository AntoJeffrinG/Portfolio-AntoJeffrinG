import { useState } from 'react';
import projectsData from './data/projects.json';
import achievementsData from './data/achievements.json';
import certificationsData from './data/certifications.json';
import eventsData from './data/events.json';
import experienceData from './data/experience.json';
import './App.css';

const GithubIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const MailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const LeetCodeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.303c.467-.467 1.125-.662 1.837-.662s1.357.195 1.824.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a4.994 4.994 0 00-3.443-1.464c-1.312 0-2.573.521-3.541 1.489l-4.32 4.303c-.968.968-1.5 2.228-1.5 3.541s.532 2.573 1.5 3.541l4.332 4.363a5.005 5.005 0 003.541 1.489c1.373 0 2.614-.521 3.541-1.489l2.609-2.636c.514-.515.496-1.366-.039-1.901-.535-.536-1.387-.553-1.901-.039zM15 12.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
  </svg>
);

const BriefcaseIcon = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
  </svg>
);

const AwardIcon = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="7"></circle>
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
  </svg>
);

const CertificateIcon = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <circle cx="12" cy="14" r="3"></circle>
  </svg>
);

const CalendarIcon = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

const ArrowRightIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

function Modal({ item, type, onClose }) {
  const [imgIndex, setImgIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);

  if (!item) return null;

  const images = item.images && item.images.length > 0 ? item.images : (item.image ? [item.image] : []);
  const hasImages = images.length > 0;
  return (
    <>
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <button className="modal-close" onClick={onClose}>&times;</button>
          {hasImages && (
            <div className="modal-img-wrapper" style={{ position: 'relative', cursor: 'zoom-in' }} onClick={() => setIsFullScreen(true)}>
              <img src={images[imgIndex]} alt={item.title} className="modal-img" />
              {images.length > 1 && (
                <>
                  <button className="gallery-btn prev-btn" onClick={(e) => { e.stopPropagation(); setImgIndex(i => i === 0 ? images.length - 1 : i - 1); }}>&#10094;</button>
                  <button className="gallery-btn next-btn" onClick={(e) => { e.stopPropagation(); setImgIndex(i => i === images.length - 1 ? 0 : i + 1); }}>&#10095;</button>
                  <div className="gallery-dots">
                    {images.map((_, idx) => (
                      <span key={idx} className={`g-dot ${idx === imgIndex ? 'active' : ''}`} onClick={(e) => { e.stopPropagation(); setImgIndex(idx); }}></span>
                    ))}
                  </div>
                </>
              )}
            </div>
          )}
          <div className="modal-body">
            <h2 className="modal-title" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--text-primary)', lineHeight: 1.1 }}>{item.title}</h2>
            
            <div className="tech-stack" style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.8rem', fontSize: '1.05rem', opacity: 0.8, textTransform: 'uppercase', letterSpacing: '1px' }}>
                {type === 'certification' ? 'Issuer' : (type === 'experience' ? 'Company' : 'Tech Stack & Details')}
              </h4>
              <div className="card-tags" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {item.tags && item.tags.map(t => <span key={t} className="tag" style={{ background: 'var(--accent)', color: '#fff' }}>{t}</span>)}
                {type === 'certification' && <span className="tag" style={{ background: 'var(--accent)', color: '#fff' }}>{item.issuer}</span>}
                {type === 'experience' && <span className="tag" style={{ background: 'var(--accent)', color: '#fff' }}>{item.company}</span>}
                {(item.date || item.period) && <span className="tag" style={{ border: '1px solid var(--accent)', color: 'var(--accent)', background: 'transparent' }}>{item.date || item.period}</span>}
              </div>
            </div>

            {(item.desc || item.description) && (
              <>
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.8rem', fontSize: '1.05rem', opacity: 0.8, textTransform: 'uppercase', letterSpacing: '1px' }}>Description</h4>
                <p className="modal-desc" style={{ fontSize: '1.15rem', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '2.5rem' }}>{item.desc || item.description}</p>
              </>
            )}
            
            {type === 'project' && (
              <div className="modal-actions" style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
                {item.siteLink ? (
                  <a href={item.siteLink} target="_blank" rel="noopener noreferrer" className="live-demo-btn" style={{ background: 'var(--accent)', color: '#fff', padding: '0.8rem 1.8rem', fontSize: '1.05rem', borderRadius: '6px', textDecoration: 'none' }}>Live Demo</a>
                ) : (
                  <>
                    <button disabled style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.3)', padding: '0.8rem 1.8rem', fontSize: '1.05rem', borderRadius: '6px', cursor: 'not-allowed', border: '1px solid rgba(255,255,255,0.1)' }}>Live Demo (Offline)</button>
                    {item.demoVideo && (
                      <a href={item.demoVideo} target="_blank" rel="noopener noreferrer" style={{ background: 'var(--text-primary)', color: 'var(--bg-color)', padding: '0.8rem 1.8rem', fontSize: '1.05rem', borderRadius: '6px', textDecoration: 'none', fontWeight: 600 }}>▶ Play Demo Video</a>
                    )}
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {isFullScreen && (
        <div className="fullscreen-overlay" onClick={() => setIsFullScreen(false)}>
          <button className="modal-close" onClick={() => setIsFullScreen(false)} style={{ zIndex: 3001 }}>&times;</button>
          <div className="fullscreen-content" onClick={e => e.stopPropagation()} style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
            <img src={images[imgIndex]} alt={item.title} className="fullscreen-img" />
            {images.length > 1 && (
              <>
                <button className="gallery-btn prev-btn" style={{ fontSize: '3rem', left: '2rem' }} onClick={(e) => { e.stopPropagation(); setImgIndex(i => i === 0 ? images.length - 1 : i - 1); }}>&#10094;</button>
                <button className="gallery-btn next-btn" style={{ fontSize: '3rem', right: '2rem' }} onClick={(e) => { e.stopPropagation(); setImgIndex(i => i === images.length - 1 ? 0 : i + 1); }}>&#10095;</button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

function AboutSection({ setActivePage }) {
  return (
    <main className="main-content about-content">
      <div className="left-section">
        <div className="title-wrapper">
          <h1 className="title about-title">
            Anto<br />Jeffrin G.
          </h1>
          <div className="underline"></div>
        </div>
        
        <div className="social-links">
          <a href="https://github.com/AntoJeffrinG" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GithubIcon /></a>
          <a href="https://www.linkedin.com/in/anto-jeffrin-g-90b352287/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedinIcon /></a>
          <a href="https://leetcode.com/u/Anto_Jeffrin_G/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode"><LeetCodeIcon /></a>
          <a href="mailto:antojeffrin007@gmail.com" aria-label="Mail"><MailIcon /></a>
        </div>
      </div>

      <div className="right-section">
        <div className="intro-block">
          <span className="intro-label">- Profile</span>
          <h2 className="intro-title">Software Engineering Undergraduate.</h2>
          <p className="intro-desc">
            I am a software engineering undergraduate passionate about building scalable applications and intelligent machine learning solutions. I enjoy solving complex problems, exploring emerging technologies, and creating impactful digital experiences through innovation and collaboration.
          </p>
          <a href="#" className="story-link" onClick={(e) => { e.preventDefault(); setActivePage('projects'); }} style={{ marginTop: '1rem', display: 'inline-block' }}>
            View my work <ArrowRightIcon />
          </a>
        </div>
      </div>
    </main>
  );
}

function ProjectCard({ item, onSelect }) {
  const coverImage = item.images && item.images.length > 0 ? item.images[0] : item.image;
  return (
    <div className="project-card" onClick={() => onSelect && onSelect(item)} style={{ cursor: 'pointer' }}>
      <div className="card-img-placeholder">
        {coverImage && <img src={coverImage} alt={item.title} className="card-img" />}
      </div>
      <div className="card-content">
        <div className="card-tags">
          {item.tags.map(t => <span key={t} className="tag">{t}</span>)}
        </div>
        <h3 className="card-title">{item.title}</h3>
        <p className="card-desc" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{item.desc}</p>
        <div className="card-actions" onClick={e => e.stopPropagation()}>
          <a href="#" className="case-study-link">Case Study <ArrowRightIcon size={14} /></a>
          <a href="#" className="live-demo-btn">Live Demo</a>
        </div>
      </div>
    </div>
  );
}

function AchievementCard({ item, onSelect }) {
  const coverImage = item.images && item.images.length > 0 ? item.images[0] : item.image;
  return (
    <div className="project-card" onClick={() => onSelect && onSelect(item)} style={{ cursor: 'pointer' }}>
      <div className="card-img-placeholder">
        {coverImage && <img src={coverImage} alt={item.title} className="card-img" />}
      </div>
      <div className="card-content">
        <div className="card-tags">
          {item.tags.map(t => <span key={t} className="tag">{t}</span>)}
        </div>
        <h3 className="card-title">{item.title}</h3>
        <p className="card-desc">{item.desc}</p>
        <div className="card-actions">
          <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>{item.date}</span>
          <span className="case-study-link">Expand <ArrowRightIcon size={14} /></span>
        </div>
      </div>
    </div>
  );
}

function EventCard({ item, onSelect }) {
  const coverImage = item.images && item.images.length > 0 ? item.images[0] : item.image;
  return (
    <div className="project-card" onClick={() => onSelect && onSelect(item)} style={{ cursor: 'pointer' }}>
      <div className="card-img-placeholder">
        {coverImage && <img src={coverImage} alt={item.title} className="card-img" />}
      </div>
      <div className="card-content">
        <div className="card-tags">
          {item.tags && item.tags.map(t => <span key={t} className="tag">{t}</span>)}
        </div>
        <h3 className="card-title">{item.title}</h3>
        <p className="card-desc">{item.desc}</p>
        <div className="card-actions">
          <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>{item.date}</span>
          <span className="case-study-link">View Details <ArrowRightIcon size={14} /></span>
        </div>
      </div>
    </div>
  );
}

function CertificationCard({ item, onSelect }) {
  return (
    <div className="project-card certification-card" onClick={() => onSelect && onSelect(item)} style={{ cursor: 'pointer' }}>
      <div className="card-img-placeholder">
        {item.image && <img src={item.image} alt={item.title} className="card-img" />}
      </div>
      <div className="card-content">
        <h3 className="card-title" style={{ fontSize: '1.1rem' }}>{item.title}</h3>
        <p className="card-desc" style={{ fontSize: '0.9rem' }}>{item.issuer}</p>
        <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
          <span className="case-study-link" style={{ fontSize: '0.8rem' }}>View Full Certificate <ArrowRightIcon size={12} /></span>
        </div>
      </div>
    </div>
  );
}

function ProjectsSection({ setActivePage, onSelect }) {
  return (
    <main className="main-content projects-content">
      <div className="left-section">
        <div className="title-wrapper">
          <h1 className="title">
            Featured<br />Works.
          </h1>
          <div className="underline"></div>
        </div>
        <p className="subtitle">
          A curated collection of my most impactful projects.
        </p>
        
        <div className="social-links">
          <a href="https://github.com/AntoJeffrinG" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GithubIcon /></a>
          <a href="https://www.linkedin.com/in/anto-jeffrin-g-90b352287/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedinIcon /></a>
          <a href="https://leetcode.com/u/Anto_Jeffrin_G/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode"><LeetCodeIcon /></a>
          <a href="mailto:antojeffrin007@gmail.com" aria-label="Mail"><MailIcon /></a>
        </div>
      </div>

      <div className="center-section">
        <div className="projects-grid">
          {projectsData.filter(p => p.featured).map(p => (
            <ProjectCard key={p.id} item={p} onSelect={onSelect} />
          ))}
        </div>
      </div>

      <div className="right-section projects-right">
        <div className="intro-block">
          <span className="intro-label">- Details</span>
          <p className="intro-desc light-desc">
            I craft elegant, scalable solutions that merge high-level functionality with beautiful user experiences. Each piece is a testament to my commitment to quality and detail.
          </p>
          <a href="#" className="story-link" onClick={(e) => { e.preventDefault(); setActivePage('all-projects'); }}>
            View All Projects <ArrowRightIcon />
          </a>
          <button className="connect-btn" onClick={() => setActivePage('contact')}>Connect with me <ArrowRightIcon size={18} /></button>
        </div>
      </div>
    </main>
  );
}

function AllProjectsSection({ setActivePage, onSelect }) {
  return (
    <main className="main-content all-projects-content">
      <div className="full-width-section">
        <a href="#" className="back-link" onClick={(e) => { e.preventDefault(); setActivePage('projects'); }}>
          ← Back to Featured
        </a>
        <div className="title-wrapper" style={{ marginTop: '2rem', marginBottom: '3rem' }}>
          <h1 className="title">All Projects.</h1>
          <div className="underline"></div>
        </div>
        <div className="projects-grid all-projects-grid">
          {projectsData.map(p => (
            <ProjectCard key={p.id} item={p} onSelect={onSelect} />
          ))}
        </div>
      </div>
    </main>
  );
}

function ExperienceSection({ setActivePage, onSelect }) {
  return (
    <main className="main-content all-projects-content">
      <div className="full-width-section">
        <a href="#" className="back-link" onClick={(e) => { e.preventDefault(); setActivePage('highlights'); }} style={{ marginBottom: '2rem' }}>
          &larr; Back to Highlights
        </a>
        <div className="title-wrapper" style={{ marginTop: '2rem', marginBottom: '3rem' }}>
          <h1 className="title" style={{ fontSize: '3.5rem' }}>Experience.</h1>
          <div className="underline"></div>
        </div>
        <div className="experience-block" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '850px' }}>
          {experienceData.map(exp => (
            <div 
              key={exp.id} 
              className="exp-item" 
              onClick={() => onSelect && onSelect(exp)}
              style={{ 
                padding: '2.5rem', 
                background: 'rgba(255,255,255,0.9)', 
                border: '1px solid #ffffff', 
                borderRadius: '20px', 
                boxShadow: '0 10px 40px rgba(0,0,0,0.05)', 
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                <h3 style={{ fontSize: '1.4rem', color: '#1a202c', marginBottom: '0.5rem', fontWeight: 700 }}>{exp.title}</h3>
                <span style={{ fontSize: '0.95rem', color: 'var(--accent)', fontWeight: 700, background: 'rgba(17, 85, 212, 0.08)', padding: '0.4rem 1rem', borderRadius: '20px' }}>{exp.period}</span>
              </div>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--accent)', marginBottom: '1.2rem', fontWeight: 600 }}>{exp.company}</h4>
              <p style={{ fontSize: '1.05rem', color: '#4a5568', lineHeight: 1.7, opacity: 0.9 }}>
                {exp.desc}
              </p>
              <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'flex-end' }}>
                <span className="case-study-link" style={{ fontSize: '0.85rem' }}>View Details & Photos <ArrowRightIcon size={14} /></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

function CertificationsSection({ setActivePage, onSelect }) {
  return (
    <main className="main-content all-projects-content">
      <div className="full-width-section">
        <a href="#" className="back-link" onClick={(e) => { e.preventDefault(); setActivePage('highlights'); }} style={{ marginBottom: '2rem' }}>
          &larr; Back to Highlights
        </a>
        <div className="title-wrapper" style={{ marginTop: '2rem', marginBottom: '3rem' }}>
          <h1 className="title" style={{ fontSize: '3.5rem' }}>Certifications.</h1>
          <div className="underline"></div>
        </div>
        <div className="projects-grid all-projects-grid">
          {certificationsData.map(c => (
            <CertificationCard key={c.id} item={c} onSelect={onSelect} />
          ))}
        </div>
      </div>
    </main>
  );
}

function AchievementsSection({ onSelect, setActivePage }) {
  return (
    <main className="main-content all-projects-content">
      <div className="full-width-section">
        <a href="#" className="back-link" onClick={(e) => { e.preventDefault(); setActivePage('highlights'); }} style={{ marginBottom: '2rem' }}>
          &larr; Back to Highlights
        </a>
        <div className="title-wrapper" style={{ marginBottom: '3rem', marginTop: '2rem' }}>
          <h1 className="title" style={{ fontSize: '3.5rem' }}>Achievements.</h1>
          <div className="underline"></div>
        </div>
        <div className="projects-grid all-projects-grid">
          {achievementsData.map(a => (
            <AchievementCard key={a.id} item={a} onSelect={onSelect} />
          ))}
        </div>
      </div>
    </main>
  );
}

function EventsSection({ onSelect, setActivePage }) {
  return (
    <main className="main-content all-projects-content">
      <div className="full-width-section">
        <a href="#" className="back-link" onClick={(e) => { e.preventDefault(); setActivePage('highlights'); }} style={{ marginBottom: '2rem' }}>
          &larr; Back to Highlights
        </a>
        <div className="title-wrapper" style={{ marginBottom: '3rem', marginTop: '2rem' }}>
          <h1 className="title" style={{ fontSize: '3.5rem' }}>Events.</h1>
          <div className="underline"></div>
        </div>
        <div className="projects-grid all-projects-grid">
          {eventsData.map(e => (
            <EventCard key={e.id} item={e} onSelect={onSelect} />
          ))}
        </div>
      </div>
    </main>
  );
}

function HighlightsSection({ setActivePage }) {
  const highlights = [
    { title: 'Experience', icon: <BriefcaseIcon />, desc: 'Professional journey and internship contributions.', target: 'experience' },
    { title: 'Achievements', icon: <AwardIcon />, desc: 'Honors and rankings in coding competitions.', target: 'achievements' },
    { title: 'Certifications', icon: <CertificateIcon />, desc: 'Industry-standard verified certifications.', target: 'certifications' },
    { title: 'Events', icon: <CalendarIcon />, desc: 'Hackathons, expos, and collaborative tech events.', target: 'events' }
  ];

  return (
    <main className="main-content all-projects-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 'calc(100vh - 150px)' }}>
      <div className="full-width-section" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div className="title-wrapper" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 className="title" style={{ fontSize: '4rem' }}>Portfolio Highlights.</h1>
          <div className="underline" style={{ margin: '1rem auto' }}></div>
        </div>
        <div className="highlights-grid">
          {highlights.map((h, i) => (
            <div key={i} className="highlight-large-card" onClick={() => setActivePage(h.target)}>
              <div className="h-icon">{h.icon}</div>
              <h2 className="h-title">{h.title}</h2>
              <p className="h-desc">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

function ContactSection() {
  const handleMailTo = (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    window.location.href = `mailto:antojeffrin007@gmail.com?subject=Portfolio Contact from ${name}&body=${message}%0A%0AReply to: ${email}`;
  };

  return (
    <main className="main-content">
      <div className="left-section">
        <div className="title-wrapper">
          <h1 className="title">
            Let's work<br />together.
          </h1>
          <div className="underline"></div>
        </div>
        <p className="subtitle" style={{ marginTop: '1.5rem', fontSize: '1.15rem', maxWidth: '350px' }}>
          Feel free to reach out for collaborations, project inquiries, or just a friendly hello.
        </p>
        <div className="contact-info" style={{ marginTop: '2.5rem' }}>
          <a href="mailto:antojeffrin007@gmail.com" style={{ fontSize: '1.25rem', color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 600, borderBottom: '2px solid var(--accent)', paddingBottom: '4px' }}>antojeffrin007@gmail.com</a>
        </div>
        <div className="social-links" style={{ marginTop: '3rem' }}>
          <a href="https://github.com/AntoJeffrinG" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GithubIcon /></a>
          <a href="https://www.linkedin.com/in/anto-jeffrin-g-90b352287/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedinIcon /></a>
          <a href="https://leetcode.com/u/Anto_Jeffrin_G/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode"><LeetCodeIcon /></a>
          <a href="mailto:antojeffrin007@gmail.com" aria-label="Mail"><MailIcon /></a>
        </div>
      </div>

      <div className="right-section contact-right">
        <form className="contact-form" onSubmit={handleMailTo}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" placeholder="John Doe" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" placeholder="john@example.com" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="5" placeholder="Tell me about your project or idea..." required></textarea>
          </div>
          <button type="submit" className="connect-btn contact-submit">
            Send Message <ArrowRightIcon size={18} />
          </button>
        </form>
      </div>
    </main>
  );
}

function App() {
  const [activePage, setActivePage] = useState('about');
  const [selectedItem, setSelectedItem] = useState(null);
  const [fullScreenImage, setFullScreenImage] = useState(null);

  return (
    <div className="portfolio-container">
      <nav className="navbar">
        <div className="logo" style={{ fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-2px', lineHeight: 1 }}>
          AJ.
        </div>
        <ul className="nav-links">
          <li className={activePage === 'about' ? 'active' : ''} onClick={() => setActivePage('about')}>
            About{activePage === 'about' && <span className="dot"></span>}
          </li>
          <li className={activePage === 'projects' || activePage === 'all-projects' ? 'active' : ''} onClick={() => setActivePage('projects')}>
            Projects{(activePage === 'projects' || activePage === 'all-projects') && <span className="dot"></span>}
          </li>
          <li className={activePage === 'highlights' || activePage === 'experience' || activePage === 'achievements' || activePage === 'certifications' ? 'active' : ''} onClick={() => setActivePage('highlights')}>
            Highlights{(activePage === 'highlights' || activePage === 'experience' || activePage === 'achievements' || activePage === 'certifications') && <span className="dot"></span>}
          </li>
          <li className={activePage === 'contact' ? 'active' : ''} onClick={() => setActivePage('contact')}>
            Contact{activePage === 'contact' && <span className="dot"></span>}
          </li>
        </ul>
      </nav>

      {activePage === 'about' && <AboutSection setActivePage={setActivePage} />}
      {activePage === 'projects' && <ProjectsSection setActivePage={setActivePage} onSelect={item => setSelectedItem({item, type: 'project'})} />}
      {activePage === 'all-projects' && <AllProjectsSection setActivePage={setActivePage} onSelect={item => setSelectedItem({item, type: 'project'})} />}
      {activePage === 'highlights' && <HighlightsSection setActivePage={setActivePage} />}
      {activePage === 'experience' && <ExperienceSection setActivePage={setActivePage} onSelect={item => setSelectedItem({item, type: 'experience'})} />}
      {activePage === 'achievements' && <AchievementsSection onSelect={item => setSelectedItem({item, type: 'achievement'})} setActivePage={setActivePage} />}
      {activePage === 'events' && <EventsSection onSelect={item => setSelectedItem({item, type: 'event'})} setActivePage={setActivePage} />}
      {activePage === 'certifications' && <CertificationsSection onSelect={item => setFullScreenImage(item.image)} setActivePage={setActivePage} />}
      {activePage === 'contact' && <ContactSection />}

      {selectedItem && (
        <Modal 
          item={selectedItem.item} 
          type={selectedItem.type} 
          onClose={() => setSelectedItem(null)} 
        />
      )}

      {fullScreenImage && (
        <div className="fullscreen-overlay" onClick={() => setFullScreenImage(null)}>
          <button className="modal-close" onClick={() => setFullScreenImage(null)} style={{ zIndex: 3001 }}>&times;</button>
          <div className="fullscreen-content" onClick={e => e.stopPropagation()} style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
            <img src={fullScreenImage} alt="Fullscreen" className="fullscreen-img" />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
