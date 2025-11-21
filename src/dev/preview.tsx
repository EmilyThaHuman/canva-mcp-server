import React from 'react';
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
  return (
    <div className="min-h-screen bg-gray-100 p-8">
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








