import React, { useState } from 'react';
import clsx from 'clsx';
import ListItem from './listItem';
import Divider from './divider'; // make sure this import exists

interface ListType1Props {
  items: ListItemData[];
}

interface ListItemData {
  title: string;
  subtitle: string;
  timeline: string;
  area: string;
  imageSrc?: string;
  children?: ListItemData[]; // Allow nested items
}




const ListType1: React.FC<ListType1Props> = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <div className="divide-y divide-neutralStroke1">
      {items.map((item, index) => {
        const isExpanded = index === expandedIndex;

        return (
          <div key={index}>
            <ListItem
              {...item}
              showIcon
              isClickable
              expanded={isExpanded}
              onClick={() => toggleItem(index)}
            />
           {isExpanded && item.children && (
  <div className="bg-neutralBg-level3 px-4 pt-0 pb-0">
    {item.children.map((child, i) => (
      <div key={i}>
        <Divider padding="none" />
        <ListItem
          {...child}
          isClickable={i === 0}
          showIcon={false}
        />
      </div>
    ))}
  </div>
)}


          </div>
        );
      })}
    </div>
  );
};

export default ListType1;
