import React, { useState } from 'react';
import { BudgetItem, Department } from '../types';
import { DollarSign, TrendingUp, Filter, Calculator } from 'lucide-react';

interface InteractiveBudgetWidgetProps {
  items: BudgetItem[];
  isLight?: boolean;
}

export const InteractiveBudgetWidget: React.FC<InteractiveBudgetWidgetProps> = ({ items, isLight = true }) => {
  const [filterDept, setFilterDept] = useState<Department>('ALL');
  const [adjustmentPercent, setAdjustmentPercent] = useState<number>(5); // default 5% usulan kenaikan 2026

  const filteredItems = items.filter(
    (item) => filterDept === 'ALL' || item.department === filterDept
  );

  const totalBudget2024 = filteredItems.reduce((acc, curr) => acc + curr.budget, 0);
  const totalRealization2024 = filteredItems.reduce((acc, curr) => acc + curr.realization, 0);
  const totalAbsorptionRate = totalBudget2024 > 0 ? ((totalRealization2024 / totalBudget2024) * 100).toFixed(1) : '0';
  const totalEfficiencySavings = totalBudget2024 - totalRealization2024;
  
  // Proposed 2026 budget based on simulation slider
  const proposedBudget2025 = Math.round(totalBudget2024 * (1 + adjustmentPercent / 100));

  return (
    <div className={`rounded-xl p-4 shadow-md transition-colors ${
      isLight ? 'bg-white border border-slate-200 text-slate-800' : 'bg-slate-900/80 border border-slate-800 text-slate-200'
    }`}>
      {/* Top Filter & Summary Header */}
      <div className={`flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b ${
        isLight ? 'border-slate-200' : 'border-slate-800'
      }`}>
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200">
            <DollarSign className="w-4 h-4" />
          </div>
          <div>
            <h4 className={`text-sm font-bold ${isLight ? 'text-slate-900' : 'text-slate-100'}`}>
              Simulasi & Matriks Anggaran HRGA-IT
            </h4>
            <p className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>Satuan: Juta Rupiah (IDR)</p>
          </div>
        </div>

        {/* Filter buttons */}
        <div className={`flex items-center gap-1 p-1 rounded-lg border text-xs ${
          isLight ? 'bg-slate-100 border-slate-200' : 'bg-slate-950 border-slate-800'
        }`}>
          <span className={`px-2 flex items-center gap-1 font-medium ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
            <Filter className="w-3 h-3" /> Filter:
          </span>
          {(['ALL', 'HR', 'GA', 'IT'] as Department[]).map((dept) => (
            <button
              key={dept}
              onClick={() => setFilterDept(dept)}
              className={`px-2.5 py-1 rounded font-semibold transition-all ${
                filterDept === dept
                  ? 'bg-blue-600 text-white shadow-xs'
                  : isLight
                  ? 'text-slate-600 hover:text-slate-900 hover:bg-white'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>
      </div>

      {/* Summary Stat Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
        <div className={`p-3 rounded-lg border ${
          isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950/60 border-slate-800/80'
        }`}>
          <span className={`text-[11px] font-medium ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
            Plafon Budget 2024
          </span>
          <p className={`text-base md:text-lg font-bold mt-0.5 ${isLight ? 'text-slate-900' : 'text-slate-100'}`}>
            Rp {totalBudget2024.toLocaleString('id-ID')} Jt
          </p>
        </div>

        <div className={`p-3 rounded-lg border ${
          isLight ? 'bg-emerald-50/60 border-emerald-200' : 'bg-slate-950/60 border-slate-800/80'
        }`}>
          <span className={`text-[11px] font-medium ${isLight ? 'text-emerald-700' : 'text-slate-400'}`}>
            Realisasi Serapan
          </span>
          <p className={`text-base md:text-lg font-bold mt-0.5 ${isLight ? 'text-emerald-800' : 'text-emerald-400'}`}>
            Rp {totalRealization2024.toLocaleString('id-ID')} Jt
            <span className={`text-xs font-normal ml-1 ${isLight ? 'text-emerald-600' : 'text-emerald-500'}`}>
              ({totalAbsorptionRate}%)
            </span>
          </p>
        </div>

        <div className={`p-3 rounded-lg border ${
          isLight ? 'bg-cyan-50/60 border-cyan-200' : 'bg-slate-950/60 border-slate-800/80'
        }`}>
          <span className={`text-[11px] font-medium ${isLight ? 'text-cyan-700' : 'text-slate-400'}`}>
            Sisa Efisiensi / Hemat
          </span>
          <p className={`text-base md:text-lg font-bold mt-0.5 ${isLight ? 'text-cyan-800' : 'text-cyan-400'}`}>
            Rp {totalEfficiencySavings.toLocaleString('id-ID')} Jt
          </p>
        </div>

        <div className={`p-3 rounded-lg border ${
          isLight ? 'bg-blue-50/80 border-blue-200' : 'bg-blue-950/40 border-blue-800/40'
        }`}>
          <div className="flex items-center justify-between">
            <span className={`text-[11px] font-medium ${isLight ? 'text-blue-700' : 'text-blue-300'}`}>
              Usulan RAKER 2025
            </span>
            <span className={`text-[10px] px-1 rounded font-bold ${
              isLight ? 'text-blue-700 bg-blue-100' : 'text-blue-400 bg-blue-500/20'
            }`}>
              +{adjustmentPercent}%
            </span>
          </div>
          <p className={`text-base md:text-lg font-bold mt-0.5 ${isLight ? 'text-blue-800' : 'text-blue-200'}`}>
            Rp {proposedBudget2025.toLocaleString('id-ID')} Jt
          </p>
        </div>
      </div>

      {/* Interactive Table */}
      <div className="overflow-x-auto max-h-56 overflow-y-auto pr-1">
        <table className="w-full text-left text-xs">
          <thead className={`sticky top-0 border-b uppercase tracking-wider ${
            isLight ? 'bg-slate-100 text-slate-700 border-slate-200' : 'bg-slate-950 text-slate-400 border-slate-800'
          }`}>
            <tr>
              <th className="py-2.5 px-3 font-semibold">Kategori Program</th>
              <th className="py-2.5 px-2 text-center font-semibold">Divisi</th>
              <th className="py-2.5 px-2 text-right font-semibold">Budget</th>
              <th className="py-2.5 px-2 text-right font-semibold">Realisasi</th>
              <th className="py-2.5 px-3 text-center font-semibold">Serapan</th>
              <th className="py-2.5 px-3 font-semibold">Keterangan</th>
            </tr>
          </thead>
          <tbody className={`divide-y ${isLight ? 'divide-slate-200' : 'divide-slate-800/60'}`}>
            {filteredItems.map((item, idx) => {
              const deptColor =
                item.department === 'HR'
                  ? 'text-emerald-700 bg-emerald-50 border-emerald-300'
                  : item.department === 'GA'
                  ? 'text-amber-700 bg-amber-50 border-amber-300'
                  : 'text-sky-700 bg-sky-50 border-sky-300';

              return (
                <tr key={idx} className={`transition-colors ${
                  isLight ? 'hover:bg-slate-50' : 'hover:bg-slate-800/40'
                }`}>
                  <td className={`py-2 px-3 font-semibold ${isLight ? 'text-slate-800' : 'text-slate-200'}`}>
                    {item.category}
                  </td>
                  <td className="py-2 px-2 text-center">
                    <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold border ${deptColor}`}>
                      {item.department}
                    </span>
                  </td>
                  <td className={`py-2 px-2 text-right font-mono font-medium ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                    Rp {item.budget} Jt
                  </td>
                  <td className={`py-2 px-2 text-right font-mono font-bold ${isLight ? 'text-emerald-700' : 'text-emerald-400'}`}>
                    Rp {item.realization} Jt
                  </td>
                  <td className="py-2 px-3 text-center">
                    <div className="flex items-center justify-center gap-1.5">
                      <div className={`w-12 h-1.5 rounded-full overflow-hidden ${isLight ? 'bg-slate-200' : 'bg-slate-800'}`}>
                        <div
                          className="bg-emerald-500 h-full rounded-full"
                          style={{ width: `${Math.min(item.percentage, 100)}%` }}
                        />
                      </div>
                      <span className={`text-[11px] font-mono font-semibold ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                        {item.percentage}%
                      </span>
                    </div>
                  </td>
                  <td className={`py-2 px-3 text-[11px] max-w-xs truncate ${isLight ? 'text-slate-600' : 'text-slate-400'}`} title={item.notes}>
                    {item.notes}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Interactive Simulation Slider for RAKER discussion */}
      <div className={`mt-4 pt-3 border-t flex flex-col sm:flex-row items-center justify-between gap-3 text-xs p-2.5 rounded-lg ${
        isLight ? 'border-slate-200 bg-slate-50 text-slate-700' : 'border-slate-800 bg-slate-950/40 text-slate-400'
      }`}>
        <div className="flex items-center gap-2">
          <Calculator className="w-4 h-4 text-blue-600" />
          <span className="font-medium">Simulasi Penyesuaian Anggaran 2025:</span>
          <span className={`font-bold font-mono ${isLight ? 'text-blue-700' : 'text-white'}`}>
            {adjustmentPercent > 0 ? `+${adjustmentPercent}%` : `${adjustmentPercent}%`}
          </span>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-64">
          <span className="text-[10px] text-slate-500 font-medium">-10%</span>
          <input
            type="range"
            min="-10"
            max="25"
            step="1"
            value={adjustmentPercent}
            onChange={(e) => setAdjustmentPercent(Number(e.target.value))}
            className="w-full h-1.5 bg-slate-300 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
          <span className="text-[10px] text-slate-500 font-medium">+25%</span>
        </div>
      </div>
    </div>
  );
};
