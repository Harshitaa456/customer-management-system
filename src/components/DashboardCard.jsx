import React from 'react';

const DashboardCard = ({ title, value, icon: Icon, trend, trendUp = true }) => {
  return (
     <div className="card bg-white/50 p-6 hover:bg-slate-400"> 
      {/* tp chnage cards clr or Transparency tamper with this(above) */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 text-sm font-medium">{title}</p>
          <p className="text-2xl font-bold text-[#0F172A] mt-1">{value}</p>
          {trend && (
            <p className={`text-sm mt-2 ${trendUp ? 'text-green-600' : 'text-red-600'}`}>
              {trendUp ? '↑' : '↓'} {trend}
            </p>
          )}
        </div>
        <div className="bg-primary/10 p-3 rounded-lg">
          <Icon className="w-6 h-6 text-primary" />
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
