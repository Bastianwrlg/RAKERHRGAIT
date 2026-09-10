import React, { useState } from 'react';
import { SopDocumentData } from '../types';
import {
  FileText,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  ArrowRight,
  GitBranch,
  Table,
  BookOpen,
  Calendar,
  Users,
  Building2,
  Sparkles,
  Layers,
  ChevronRight,
} from 'lucide-react';

interface SopSlideContentProps {
  sopData?: SopDocumentData;
}

export const SopSlideContent: React.FC<SopSlideContentProps> = ({ sopData }) => {
  const [activeTab, setActiveTab] = useState<'policy' | 'procedure' | 'forms'>('policy');

  if (!sopData) {
    return (
      <div className="p-8 text-center text-slate-500">
        Data SOP tidak ditemukan.
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto w-full h-full flex flex-col justify-between">
      {/* SOP Top Metadata Banner */}
      <div className="bg-emerald-50/90 border border-emerald-200 rounded-xl p-3 sm:p-3.5 mb-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 shadow-xs">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-emerald-600 text-white shrink-0 shadow-xs">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded border border-emerald-300">
                STANDAR OPERASIONAL PROSEDUR (SOP)
              </span>
              <span className="text-[10px] text-emerald-700 font-semibold hidden md:inline">
                No. Dokumen: SOP-HR-004-MPP
              </span>
            </div>
            <h2 className="text-sm sm:text-base font-extrabold text-slate-900 mt-0.5">
              {sopData.sopName}
            </h2>
          </div>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex items-center gap-1 bg-white/90 p-1 rounded-lg border border-emerald-200 text-xs w-full sm:w-auto justify-between sm:justify-start">
          <button
            onClick={() => setActiveTab('policy')}
            className={`px-3 py-1 rounded-md font-semibold transition-all flex items-center gap-1.5 ${
              activeTab === 'policy'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>1. Kebijakan & Rasio</span>
          </button>

          <button
            onClick={() => setActiveTab('procedure')}
            className={`px-3 py-1 rounded-md font-semibold transition-all flex items-center gap-1.5 ${
              activeTab === 'procedure'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <GitBranch className="w-3.5 h-3.5" />
            <span>2. Prosedur & Alur</span>
          </button>

          <button
            onClick={() => setActiveTab('forms')}
            className={`px-3 py-1 rounded-md font-semibold transition-all flex items-center gap-1.5 ${
              activeTab === 'forms'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Table className="w-3.5 h-3.5" />
            <span>3. Contoh Formulir</span>
          </button>
        </div>
      </div>

      {/* Main Tab Content */}
      <div className="flex-1 overflow-y-auto pr-1">
        {/* TAB 1: Panduan Kebijakan & Rasio Beban Kerja */}
        {activeTab === 'policy' && (
          <div className="space-y-3">
            {/* Purpose & Objective Box */}
            <div className="p-3.5 bg-white border border-slate-200 rounded-xl shadow-xs">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  Tujuan Prosedur:
                </span>
              </div>
              <p className="text-xs text-slate-800 leading-relaxed font-medium">
                {sopData.purpose}
              </p>
            </div>

            {/* Core Policy Principles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {sopData.policies.map((p, idx) => (
                <div
                  key={idx}
                  className="p-3.5 bg-white border border-slate-200 rounded-xl shadow-xs flex flex-col justify-between hover:border-emerald-300 transition-colors"
                >
                  <div>
                    <h3 className="text-xs font-bold text-slate-900 flex items-center gap-1.5 mb-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{p.title}</span>
                    </h3>
                    <p className="text-[11px] text-slate-600 leading-relaxed mb-2">
                      {p.description}
                    </p>
                  </div>

                  {p.ruleHighlight && (
                    <div className="p-2.5 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-[11px] font-medium flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>{p.ruleHighlight}</span>
                    </div>
                  )}

                  {p.ratioFormula && (
                    <div className="p-2.5 rounded-lg bg-blue-50 border border-blue-200 text-blue-900 text-[11px] font-mono">
                      <span className="font-bold block text-[10px] text-blue-700 uppercase tracking-wider mb-0.5">
                        Teknik Pengukuran Rasio Efisiensi:
                      </span>
                      {p.ratioFormula}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Golden Rule Highlight Card */}
            <div className="p-3 bg-gradient-to-r from-emerald-50 via-teal-50 to-blue-50 border border-emerald-200 rounded-xl shadow-xs flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-emerald-600 text-white shrink-0">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-emerald-950">
                    Aturan Emas Manpower Planning (Golden Rule)
                  </h4>
                  <p className="text-[11px] text-emerald-800">
                    Persentase pertumbuhan jumlah tenaga kerja <strong className="underline">tidak boleh melebihi</strong> persentase pertumbuhan omzet penjualan bisnis (Contoh: jika omzet tumbuh 20%, maka pertumbuhan headcount SDM maksimal di bawah 20%).
                  </p>
                </div>
              </div>
              <span className="hidden sm:inline text-xs font-mono font-bold bg-white px-2.5 py-1 rounded-lg border border-emerald-300 text-emerald-800 shadow-xs shrink-0">
                % ΔSDM &lt; % ΔOmzet
              </span>
            </div>
          </div>
        )}

        {/* TAB 2: Prosedur 7 Langkah & Flowchart */}
        {activeTab === 'procedure' && (
          <div className="space-y-3">
            {/* Visual Interactive Flowchart Steps */}
            <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  <GitBranch className="w-4 h-4 text-blue-600" />
                  <span>Alur Kerja (Flowchart) Penyusunan Manpower Planning</span>
                </h3>
                <span className="text-[10px] font-semibold text-slate-500 bg-white border border-slate-200 px-2 py-0.5 rounded">
                  7 Tahap Eksekusi
                </span>
              </div>

              {/* Sequential Flow Steps */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-2 text-center text-xs">
                <div className="p-2.5 bg-white border border-blue-200 rounded-lg shadow-xs flex flex-col justify-between">
                  <div className="text-[10px] font-mono font-bold text-blue-600 mb-1">TAHAP 1 (Minggu I Nov)</div>
                  <div className="font-bold text-slate-800 text-[11px] mb-1">Inisiasi Rencana SDM</div>
                  <div className="text-[10px] text-slate-500">Head HR memulai sinkronisasi rencana bisnis tahun depan</div>
                </div>

                <div className="p-2.5 bg-white border border-emerald-200 rounded-lg shadow-xs flex flex-col justify-between">
                  <div className="text-[10px] font-mono font-bold text-emerald-600 mb-1">TAHAP 2-3 (Head Unit)</div>
                  <div className="font-bold text-slate-800 text-[11px] mb-1">Pengisian Form Usulan</div>
                  <div className="text-[10px] text-slate-500">Berdasarkan rencana ekspansi & data tren turnover karyawan</div>
                </div>

                <div className="p-2.5 bg-white border border-amber-200 rounded-lg shadow-xs flex flex-col justify-between">
                  <div className="text-[10px] font-mono font-bold text-amber-600 mb-1">TAHAP 4-5 (Review Direksi)</div>
                  <div className="font-bold text-slate-800 text-[11px] mb-1">Rekap & Pengajuan</div>
                  <div className="text-[10px] text-slate-500">Head HRD menganalisis & ajukan dokumen ke Direksi Perusahaan</div>
                </div>

                <div className="p-2.5 bg-white border border-purple-200 rounded-lg shadow-xs flex flex-col justify-between">
                  <div className="text-[10px] font-mono font-bold text-purple-600 mb-1">TAHAP 6-7 (Eksekusi)</div>
                  <div className="font-bold text-slate-800 text-[11px] mb-1">Rencana Rekrutmen</div>
                  <div className="text-[10px] text-slate-500">Jika disetujui, masuk ke jadwal rekrutmen tahunan terencana</div>
                </div>
              </div>
            </div>

            {/* 7 Detailed Steps List */}
            <div className="space-y-1.5">
              {sopData.procedures.map((proc) => (
                <div
                  key={proc.step}
                  className="p-2.5 bg-white border border-slate-200 rounded-lg shadow-xs flex items-start justify-between gap-3 text-xs"
                >
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-slate-100 border border-slate-300 text-slate-800 font-mono font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                      {proc.step}
                    </span>
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="font-bold text-slate-900">{proc.title}</span>
                        <span className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.2 rounded border border-slate-200 font-semibold">
                          Pelaksana: {proc.actor}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-600 leading-relaxed">
                        {proc.description}
                      </p>
                    </div>
                  </div>

                  {proc.document && (
                    <span className="text-[10px] bg-blue-50 text-blue-700 font-medium px-2 py-0.5 rounded border border-blue-200 whitespace-nowrap shrink-0">
                      📄 {proc.document}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Required Forms Summary */}
            <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-xs">
              <span className="text-[11px] font-bold text-slate-700 block mb-2">
                Daftar Formulir Standar yang Digunakan:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {sopData.requiredForms.map((rf, i) => (
                  <div key={i} className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-xs">
                    <span className="font-bold text-slate-900 block text-[11px]">{rf.name}</span>
                    <span className="text-[10px] text-slate-500">{rf.description}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: Contoh Nyata Formulir Usulan & Rencana Rekrutmen */}
        {activeTab === 'forms' && (
          <div className="space-y-4">
            {/* Table 1: Form Usulan Perencanaan SDM Tahunan */}
            <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-xs">
              <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-emerald-600" />
                  <h3 className="text-xs font-bold text-slate-900">
                    {sopData.sampleProposalForm.title}
                  </h3>
                </div>
                <span className="text-[10px] font-semibold text-slate-500">
                  Dibuat oleh: {sopData.sampleProposalForm.creator}
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-50 text-slate-700 text-[10px] font-bold uppercase tracking-wider border-b border-slate-200">
                      <th className="p-2">Jml SDM</th>
                      <th className="p-2">Posisi / Jabatan</th>
                      <th className="p-2">Kualifikasi Minimal</th>
                      <th className="p-2">Target Tanggal Masuk</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-800 text-[11px]">
                    {sopData.sampleProposalForm.rows.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50">
                        <td className="p-2 font-mono font-bold text-blue-700">{row.neededCount} Orang</td>
                        <td className="p-2 font-semibold">{row.position}</td>
                        <td className="p-2 text-slate-600">{row.qualification}</td>
                        <td className="p-2 font-mono text-slate-700">{row.targetDate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table 2: Form Rencana Rekrutmen Karyawan Baru */}
            <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-xs">
              <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-blue-600" />
                  <h3 className="text-xs font-bold text-slate-900">
                    {sopData.sampleRecruitmentForm.title}
                  </h3>
                </div>
                <span className="text-[10px] font-semibold text-slate-500">
                  Dibuat oleh: {sopData.sampleRecruitmentForm.creator}
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-50 text-slate-700 text-[10px] font-bold uppercase tracking-wider border-b border-slate-200">
                      <th className="p-2">Jml</th>
                      <th className="p-2">Posisi</th>
                      <th className="p-2">Kualifikasi</th>
                      <th className="p-2">Target Masuk</th>
                      <th className="p-2">Departemen</th>
                      <th className="p-2">Mulai Rekrutmen</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-800 text-[11px]">
                    {sopData.sampleRecruitmentForm.rows.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50">
                        <td className="p-2 font-mono font-bold text-blue-700">{row.neededCount}</td>
                        <td className="p-2 font-semibold">{row.position}</td>
                        <td className="p-2 text-slate-600">{row.qualification}</td>
                        <td className="p-2 font-mono text-slate-700">{row.targetDate}</td>
                        <td className="p-2">
                          <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                            {row.department}
                          </span>
                        </td>
                        <td className="p-2 text-emerald-700 font-semibold">{row.recruitmentStart}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-[10px] text-slate-400 italic text-right">
              * Data isi form di atas merupakan ilustrasi resmi penataan formasi RAKER 2026.
            </p>
          </div>
        )}
      </div>

      {/* Footer Insight */}
      <div className="pt-2 mt-2 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
        <span className="flex items-center gap-1 font-semibold text-emerald-800">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          <span>Output Utama: Rekrutmen sistematis, terencana, dan akurat memenuhi target ekspansi bisnis.</span>
        </span>
        <span className="font-mono text-[10px]">Dokumen Acuan RAKER HR</span>
      </div>
    </div>
  );
};
