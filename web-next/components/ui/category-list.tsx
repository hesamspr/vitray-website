'use client'

import React, { useState } from 'react';
import { cn } from '@/lib/utils';

export interface Category {
  id: string | number;
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  featured?: boolean;
}

export interface CategoryListProps {
  categories: Category[];
  className?: string;
}

export const CategoryList = ({
  categories,
  className,
}: CategoryListProps) => {
  const [hoveredItem, setHoveredItem] = useState<string | number | null>(null);

  return (
    <div className={cn("w-full", className)}>
      <div className="space-y-3">
        {categories.map((category) => (
          <div
            key={category.id}
            className="relative group"
            onMouseEnter={() => setHoveredItem(category.id)}
            onMouseLeave={() => setHoveredItem(null)}
            onClick={category.onClick}
          >
            <div
              className={cn(
                "relative overflow-hidden border transition-all duration-300 ease-in-out rounded-xl",
                hoveredItem === category.id
                  ? 'border-primary/60 shadow-lg shadow-primary/10 bg-primary/5'
                  : 'border-border/60 bg-card hover:border-primary/30'
              )}

            >
              {/* Corner brackets on hover */}
              {hoveredItem === category.id && (
                <>
                  <div className="absolute top-3 right-3 w-6 h-6">
                    <div className="absolute top-0 right-0 w-4 h-0.5 bg-primary" />
                    <div className="absolute top-0 right-0 w-0.5 h-4 bg-primary" />
                  </div>
                  <div className="absolute bottom-3 left-3 w-6 h-6">
                    <div className="absolute bottom-0 left-0 w-4 h-0.5 bg-primary" />
                    <div className="absolute bottom-0 left-0 w-0.5 h-4 bg-primary" />
                  </div>
                </>
              )}

              {/* Content — icon first so it sits on the right in RTL */}
              <div className={cn(
                "flex items-center px-8 md:px-10 gap-6 transition-all duration-300",
                hoveredItem === category.id ? 'py-8' : 'py-5'
              )}>
                {category.icon && (
                  <div
                    className={cn(
                      "shrink-0 transition-all duration-300",
                      hoveredItem === category.id
                        ? 'text-primary opacity-100'
                        : 'text-muted-foreground opacity-50'
                    )}
                  >
                    {category.icon}
                  </div>
                )}

                <div className="flex-1 text-right space-y-2">
                  <h3
                    className={cn(
                      "font-bold tracking-tighter transition-colors duration-300",
                      category.featured ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'
                    )}
                  >
                    {category.title}
                  </h3>
                  {category.subtitle && (
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {category.subtitle}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
