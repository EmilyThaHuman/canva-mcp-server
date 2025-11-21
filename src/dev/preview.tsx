import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import '../styles/index.css';

// Import widgets
import CanvaSearchDesigns from '../components/canva-search-designs';
import CanvaDesignGenerator from '../components/canva-design-generator';

// Mock data for preview mode
const mockSearchDesigns = {
  query: 'business designs',
  designs: [
    {
      id: 'design_1',
      title: 'Modern Business Flyer',
      doctype_name: 'Flyer',
      updated_at: '2024-11-01T10:00:00Z',
      thumbnail: {
        url: 'https://marketplace.canva.com/EAFXjoNy14Q/1/0/1600w/canva-beige-modern-business-card-WEqsgFBVaqk.jpg',
      },
      urls: {
        edit_url: 'https://www.canva.com/design/abc123/edit',
        view_url: 'https://www.canva.com/design/abc123/view',
      },
    },
    {
      id: 'design_2',
      title: 'Corporate Presentation',
      doctype_name: 'Presentation',
      updated_at: '2024-10-28T15:30:00Z',
      thumbnail: {
        url: 'https://marketplace.canva.com/EAFayVXLt_Y/1/0/1600w/canva-blue-modern-business-presentation-pN3jSLmK7es.jpg',
      },
      urls: {
        edit_url: 'https://www.canva.com/design/def456/edit',
        view_url: 'https://www.canva.com/design/def456/view',
      },
    },
    {
      id: 'design_3',
      title: 'Social Media Post',
      doctype_name: 'Social Media',
      updated_at: '2024-10-25T09:15:00Z',
      thumbnail: {
        url: 'https://marketplace.canva.com/EAFPHUaBrFc/1/0/1600w/canva-pink-orange-modern-we-are-hiring-instagram-post-6lc9FfA7hXQ.jpg',
      },
      urls: {
        edit_url: 'https://www.canva.com/design/ghi789/edit',
        view_url: 'https://www.canva.com/design/ghi789/view',
      },
    },
    {
      id: 'design_4',
      title: 'Instagram Story',
      doctype_name: 'Instagram Story',
      updated_at: '2024-10-20T14:30:00Z',
      thumbnail: {
        url: 'https://marketplace.canva.com/EAFjuLoGPHg/1/0/1600w/canva-brown-minimalist-business-card-z7MDXBZEvNU.jpg',
      },
      urls: {
        edit_url: 'https://www.canva.com/design/jkl012/edit',
        view_url: 'https://www.canva.com/design/jkl012/view',
      },
    },
    {
      id: 'design_5',
      title: 'YouTube Thumbnail',
      doctype_name: 'YouTube',
      updated_at: '2024-10-15T11:45:00Z',
      thumbnail: {
        url: 'https://marketplace.canva.com/EAFXjoNy14Q/1/0/1600w/canva-beige-modern-business-card-WEqsgFBVaqk.jpg',
      },
      urls: {
        edit_url: 'https://www.canva.com/design/mno345/edit',
        view_url: 'https://www.canva.com/design/mno345/view',
      },
    },
    {
      id: 'design_6',
      title: 'Facebook Cover',
      doctype_name: 'Facebook',
      updated_at: '2024-10-10T16:20:00Z',
      thumbnail: {
        url: 'https://marketplace.canva.com/EAFayVXLt_Y/1/0/1600w/canva-blue-modern-business-presentation-pN3jSLmK7es.jpg',
      },
      urls: {
        edit_url: 'https://www.canva.com/design/pqr678/edit',
        view_url: 'https://www.canva.com/design/pqr678/view',
      },
    },
  ],
  continuation: 'next_page_token_xyz',
};

const mockDesignGenerator = {
  candidates: [
    {
      id: 'candidate_1',
      thumbnail_url: 'https://marketplace.canva.com/EAFXjoNy14Q/1/0/1600w/canva-beige-modern-business-card-WEqsgFBVaqk.jpg',
      preview_url: 'https://marketplace.canva.com/EAFXjoNy14Q/1/0/1600w/canva-beige-modern-business-card-WEqsgFBVaqk.jpg',
      url: 'https://www.canva.com/design/abc123/view',
    },
    {
      id: 'candidate_2',
      thumbnail_url: 'https://marketplace.canva.com/EAFayVXLt_Y/1/0/1600w/canva-blue-modern-business-presentation-pN3jSLmK7es.jpg',
      preview_url: 'https://marketplace.canva.com/EAFayVXLt_Y/1/0/1600w/canva-blue-modern-business-presentation-pN3jSLmK7es.jpg',
      url: 'https://www.canva.com/design/def456/view',
    },
    {
      id: 'candidate_3',
      thumbnail_url: 'https://marketplace.canva.com/EAFPHUaBrFc/1/0/1600w/canva-pink-orange-modern-we-are-hiring-instagram-post-6lc9FfA7hXQ.jpg',
      preview_url: 'https://marketplace.canva.com/EAFPHUaBrFc/1/0/1600w/canva-pink-orange-modern-we-are-hiring-instagram-post-6lc9FfA7hXQ.jpg',
      url: 'https://www.canva.com/design/ghi789/view',
    },
    {
      id: 'candidate_4',
      thumbnail_url: 'https://marketplace.canva.com/EAFjuLoGPHg/1/0/1600w/canva-brown-minimalist-business-card-z7MDXBZEvNU.jpg',
      preview_url: 'https://marketplace.canva.com/EAFjuLoGPHg/1/0/1600w/canva-brown-minimalist-business-card-z7MDXBZEvNU.jpg',
      url: 'https://www.canva.com/design/jkl012/view',
    },
  ],
  job_id: 'job_xyz789',
};

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check system preference on mount
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(prefersDark);
  }, []);

  useEffect(() => {
    // Update document class when theme changes
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200 p-8">
      {/* Theme Toggle Button */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={toggleTheme}
          className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 hover:scale-105 transition-all duration-200"
          aria-label="Toggle theme"
        >
          {isDark ? (
            // Sun icon for light mode
            <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
            </svg>
          ) : (
            // Moon icon for dark mode
            <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
            </svg>
          )}
        </button>
      </div>

      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          Canva Design Widgets
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Preview with theme toggle
        </p>
      </div>

      {/* Widgets Container */}
      <div className="max-w-4xl mx-auto space-y-8">
        <CanvaDesignGenerator />
        <CanvaSearchDesigns />
      </div>
    </div>
  );
}

const root = document.getElementById('root');
if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}








