import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from './button';

interface HeaderBarProps {
  title: string;
  onBack?: () => void;
  backLabel?: string;
}

const HeaderBar: React.FC<HeaderBarProps> = ({ title, onBack, backLabel = 'Back' }) => {
  return (
    <div className="flex items-center justify-between py-0">
      {/* Title on the left */}
      <h1 className="text-title-3 text-neutralFg-selected">{title}</h1>

      {/* Back button on the right */}
      {onBack && (
        <Button
          variant="secondary"
          size="md"
          icon={<ArrowBackIcon fontSize="small" />}
          onClick={onBack}
        >
          {backLabel}
        </Button>
      )}
    </div>
  );
};

export default HeaderBar;
