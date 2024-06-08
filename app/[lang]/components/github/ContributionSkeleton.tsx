'use client';
import React from 'react';
import { Skeleton } from "@/components/ui/skeleton";

const ContributionSkeleton = () => {

  return (
    <div className="space-y-4">
      {Array.from({ length: 3 }).map((_, index) => {
        return (
          <div key={index} className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full"/>
            <div className="w-full space-y-2">
              <Skeleton className="h-4 w-[200px]"/>
              <Skeleton className="h-4 w-full"/>
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default ContributionSkeleton;
