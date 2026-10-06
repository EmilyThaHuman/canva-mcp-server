import React, { useEffect } from 'react';
import { useWidgetProps, useDisplayMode } from '../hooks';
import '../styles/index.css';

interface ContentItem {
  type?: string;
  text?: string;
  value?: string;
}

interface Page {
  thumbnail?: string;
  content?: ContentItem[];
}

interface Props extends Record<string, unknown> {
  transaction_id?: string | null;
  pages?: Page[];
  content?: ContentItem[];
}

const CanvaDesignEditor: React.FC<Partial<Props>> = (externalProps) => {
  const props = useWidgetProps<Props>({
    transaction_id: null,
    pages: [],
    content: []
  });

  // Merge external props (for preview mode) with widget props
  const finalProps = { ...props, ...externalProps };

  const { transaction_id } = finalProps;

  useEffect(() => {
    // Automatically start design session when component mounts
    if (transaction_id && window.parent && window.parent.postMessage) {
      window.parent.postMessage({
        type: 'canva-start-design-session',
        data: { 
          transactionId: transaction_id 
        }
      }, '*');
    }
  }, [transaction_id]);

  // This component should not have a UI, it just triggers the design session
  return null;
};

export default CanvaDesignEditor;








