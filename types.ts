import React from 'react';

export interface StatItem {
  label: string;
  value: string;
  description: string;
  icon: React.ReactNode;
}

export interface RegionData {
  id: string;
  name: string;
  riskLevel: 'Low' | 'Medium' | 'High' | 'Critical';
  country: string;
  lastUpdated: string;
}