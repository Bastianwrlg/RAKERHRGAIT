import React, { useState } from 'react';
import { Slide, Department, SlideLayout, SlideMetric, SlideCard, TimelineItem } from '../types';
import { X, Check, Plus, Trash2, Edit2 } from 'lucide-react';

interface SlideEditorModalProps {
  slide: Slide;
  onSave: (updatedSlide: Slide) => void;
  onClose: () => void;
}

export const SlideEditorModal: React.FC<SlideEditorModalProps> = ({
  slide,
  onSave,
  onClose,
}) => {
  const [formData, setFormData] = useState<Slide>({ ...slide });
  const [activeTab, setActiveTab] = useState<'general' | 'metrics' | 'cards' | 'timeline' | 'notes'>('general');

  const handleTextChange = (field: keyof Slide, val: any) => {
    setFormData((prev) => ({ ...prev, [field]: val }));
  };

  // Metrics handlers
  const handleUpdateMetric = (index: number, field: keyof SlideMetric, val: any) => {
    const updated = [...(formData.metrics || [])];
    updated[index] = { ...updated[index], [field]: val };
    setFormData((prev) => ({ ...prev, metrics: updated }));
  };

  const handleAddMetric = () => {
    const newMetric: SlideMetric = {
      id: `m-${Date.now()}`,
      label: 'Indikator Baru',
      value: '95%',
      target: 'Target: 90%',
      trend: 'up',
      trendText: '+5% vs Target',
      status: 'achieved',
      progress: 95,
    };
    setFormData((prev) => ({ ...prev, metrics: [...(prev.metrics || []), newMetric] }));
  };

  const handleDeleteMetric = (index: number) => {
    const updated = [...(formData.metrics || [])];
    updated.splice(index, 1);
    setFormData((prev) => ({ ...prev, metrics: updated }));
  };

  // Cards handlers
  const handleUpdateCard = (index: number, field: keyof SlideCard, val: any) => {
    const updated = [...(formData.cards || [])];
    updated[index] = { ...updated[index], [field]: val };
    setFormData((prev) => ({ ...prev, cards: updated }));
  };

  const handleAddCard = () => {
    const newCard: SlideCard = {
      id: `c-${Date.now()}`,
      title: 'Judul Inisiatif Baru',
      description: 'Penjelasan program kerja baru untuk tahun 2025...',
      iconName: 'Target',
      badge: 'Inisiatif Baru',
    };
    setFormData((prev) => ({ ...prev, cards: [...(prev.cards || []), newCard] }));
  };

  const handleDeleteCard = (index: number) => {
    const updated = [...(formData.cards || [])];
    updated.splice(index, 1);
    setFormData((prev) => ({ ...prev, cards: updated }));
  };

  // Timeline handlers
  const handleUpdateTimeline = (index: number, field: keyof TimelineItem, val: any) => {
    const updated = [...(formData.timeline || [])];
    updated[index] = { ...updated[index], [field]: val };
    setFormData((prev) => ({ ...prev, timeline: updated }));
  };

  const handleAddTimeline = () => {
    const newItem: TimelineItem = {
      quarter: 'Q1',
      title: 'Milestone / Target Kuartalan Baru',
      department: formData.department || 'ALL',
      description: 'Rincian deliverable dan target implementasi...',
      status: 'Planned',
      deliverables: ['Deliverable 1', 'Deliverable 2'],
    };
    setFormData((prev) => ({ ...prev, timeline: [...(prev.timeline || []), newItem] }));
  };

  const handleDeleteTimeline = (index: number) => {
    const updated = [...(formData.timeline || [])];
    updated.splice(index, 1);
    setFormData((prev) => ({ ...prev, timeline: updated }));
  };

  // Bullet points handlers
  const handleBulletChange = (index: number, text: string) => {
    const updated = [...(formData.bulletPoints || [])];
    updated[index] = text;
    setFormData((prev) => ({ ...prev, bulletPoints: updated }));
  };

  const handleAddBullet = () => {
    setFormData((prev) => ({
      ...prev,
      bulletPoints: [...(prev.bulletPoints || []), 'Poin pencapaian atau arahan baru...'],
    }));
  };

  const handleDeleteBullet = (index: number) => {
    const updated = [...(formData.bulletPoints || [])];
    updated.splice(index, 1);
    setFormData((prev) => ({ ...prev, bulletPoints: updated }));
  };

  const handleSave = () => {
    onSave(formData);
  };

  return (
    <div className="no-print fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-150">
      <div className="bg-white border border-slate-200 rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150 text-slate-800">
        {/* Modal Header */}
        <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div>
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Edit2 className="w-4 h-4 text-blue-600" />
              <span>Kustomisasi Slide #{formData.slideNumber}</span>
              <span className="text-xs bg-blue-100 text-blue-800 border border-blue-200 px-2 py-0.5 rounded font-mono font-bold">
                {formData.department}
              </span>
            </h3>
            <p className="text-xs text-slate-500">Sesuaikan materi, metrik, dan poin sesuai kebutuhan RAKER Anda</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-slate-200 rounded-lg text-slate-400 hover:text-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-1 p-2 bg-slate-100 border-b border-slate-200 overflow-x-auto text-xs">
          <button
            onClick={() => setActiveTab('general')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-colors ${
              activeTab === 'general' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-200'
            }`}
          >
            Umum & Judul
          </button>
          <button
            onClick={() => setActiveTab('metrics')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-colors ${
              activeTab === 'metrics' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-200'
            }`}
          >
            Angka & Metrik KPI ({formData.metrics?.length || 0})
          </button>
          <button
            onClick={() => setActiveTab('cards')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-colors ${
              activeTab === 'cards' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-200'
            }`}
          >
            Kartu Konten & Inisiatif ({formData.cards?.length || 0})
          </button>
          <button
            onClick={() => setActiveTab('timeline')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-colors ${
              activeTab === 'timeline' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-200'
            }`}
          >
            Timeline & Roadmap
          </button>
          <button
            onClick={() => setActiveTab('notes')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-colors ${
              activeTab === 'notes' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-200'
            }`}
          >
            Catatan Pembicara
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {/* TAB 1: General */}
          {activeTab === 'general' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Departemen / Kategori</label>
                  <select
                    value={formData.department}
                    onChange={(e) => handleTextChange('department', e.target.value as Department)}
                    className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-500"
                  >
                    <option value="ALL">ALL (HRGA-IT Joint Deck)</option>
                    <option value="HR">HR (Human Resources)</option>
                    <option value="GA">GA (General Affairs)</option>
                    <option value="IT">IT (Information Technology)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Tata Letak (Layout)</label>
                  <select
                    value={formData.layout}
                    onChange={(e) => handleTextChange('layout', e.target.value as SlideLayout)}
                    className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-500"
                  >
                    <option value="title">Cover / Judul Utama</option>
                    <option value="executive-summary">Executive Summary & Highlight</option>
                    <option value="kpi-dashboard">KPI Dashboard (4 Metrik Besar)</option>
                    <option value="split-details">Split Kolom (Metrik + Narasi)</option>
                    <option value="timeline-roadmap">Timeline Roadmap (Q1 - Q4)</option>
                    <option value="budget-matrix">Budget & Realisasi Anggaran</option>
                    <option value="initiatives-grid">Grid Inisiatif Program</option>
                    <option value="sop-document">SOP Dokumen & Prosedur Manpower Planning</option>
                    <option value="closing">Penutup & Tanya Jawab</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Judul Slide</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => handleTextChange('title', e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-blue-500"
                  placeholder="Contoh: Evaluasi Kinerja HR & Headcount"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Sub-judul / Deskripsi Pendukung</label>
                <input
                  type="text"
                  value={formData.subtitle}
                  onChange={(e) => handleTextChange('subtitle', e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-500"
                  placeholder="Contoh: Indikator Utama Pertumbuhan dan Retensi Karyawan 2024"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Tagline / Slogan (Opsional)</label>
                <input
                  type="text"
                  value={formData.tagline || ''}
                  onChange={(e) => handleTextChange('tagline', e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-500"
                  placeholder="Contoh: 'Sinergi Kuat, Kinerja Melesat'"
                />
              </div>

              {/* Bullet Points Section */}
              <div className="pt-3 border-t border-slate-200">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-semibold text-slate-700">Poin Peluru / Catatan Ringkas</label>
                  <button
                    onClick={handleAddBullet}
                    className="text-xs text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-1"
                  >
                    <Plus className="w-3.5 h-3.5" /> Tambah Poin
                  </button>
                </div>
                <div className="space-y-2">
                  {formData.bulletPoints?.map((bp, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <input
                        type="text"
                        value={bp}
                        onChange={(e) => handleBulletChange(idx, e.target.value)}
                        className="flex-1 bg-white border border-slate-300 rounded-lg px-3 py-1.5 text-xs text-slate-800"
                      />
                      <button
                        onClick={() => handleDeleteBullet(idx)}
                        className="p-1.5 text-slate-400 hover:text-rose-600"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Metrics */}
          {activeTab === 'metrics' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-xs text-slate-500">Atur angka statistik, target capaian, dan tren indikator.</p>
                <button
                  onClick={handleAddMetric}
                  className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 shadow-xs"
                >
                  <Plus className="w-3.5 h-3.5" /> Tambah Indikator KPI
                </button>
              </div>

              <div className="space-y-3">
                {formData.metrics?.map((m, idx) => (
                  <div key={m.id || idx} className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-800">Indikator #{idx + 1}</span>
                      <button
                        onClick={() => handleDeleteMetric(idx)}
                        className="text-xs text-rose-600 hover:text-rose-700 flex items-center gap-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" /> Hapus
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <div>
                        <label className="block text-[10px] text-slate-500 mb-0.5">Label Metrik</label>
                        <input
                          type="text"
                          value={m.label}
                          onChange={(e) => handleUpdateMetric(idx, 'label', e.target.value)}
                          className="w-full bg-white border border-slate-300 rounded px-2.5 py-1 text-xs text-slate-900"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] text-slate-500 mb-0.5">Nilai / Angka</label>
                        <input
                          type="text"
                          value={m.value}
                          onChange={(e) => handleUpdateMetric(idx, 'value', e.target.value)}
                          className="w-full bg-white border border-slate-300 rounded px-2.5 py-1 text-xs text-slate-900 font-mono font-bold"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] text-slate-500 mb-0.5">Target Capaian</label>
                        <input
                          type="text"
                          value={m.target || ''}
                          onChange={(e) => handleUpdateMetric(idx, 'target', e.target.value)}
                          className="w-full bg-white border border-slate-300 rounded px-2.5 py-1 text-xs text-slate-900"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <div>
                        <label className="block text-[10px] text-slate-500 mb-0.5">Status</label>
                        <select
                          value={m.status || 'achieved'}
                          onChange={(e) => handleUpdateMetric(idx, 'status', e.target.value)}
                          className="w-full bg-white border border-slate-300 rounded px-2.5 py-1 text-xs text-slate-900"
                        >
                          <option value="achieved">Tercapai (Achieved)</option>
                          <option value="on-track">On Track</option>
                          <option value="warning">Perhatian (Warning)</option>
                          <option value="pending">Pending</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[10px] text-slate-500 mb-0.5">Keterangan Tren</label>
                        <input
                          type="text"
                          value={m.trendText || ''}
                          onChange={(e) => handleUpdateMetric(idx, 'trendText', e.target.value)}
                          className="w-full bg-white border border-slate-300 rounded px-2.5 py-1 text-xs text-slate-900"
                          placeholder="+5% YoY"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] text-slate-500 mb-0.5">Progress Bar (0-100%)</label>
                        <input
                          type="number"
                          min="0"
                          max="100"
                          value={m.progress ?? 90}
                          onChange={(e) => handleUpdateMetric(idx, 'progress', Number(e.target.value))}
                          className="w-full bg-white border border-slate-300 rounded px-2.5 py-1 text-xs text-slate-900 font-mono"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: Cards */}
          {activeTab === 'cards' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-xs text-slate-500">Kartu program, inisiatif, atau pilar kerja.</p>
                <button
                  onClick={handleAddCard}
                  className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 shadow-xs"
                >
                  <Plus className="w-3.5 h-3.5" /> Tambah Kartu
                </button>
              </div>

              <div className="space-y-3">
                {formData.cards?.map((card, idx) => (
                  <div key={card.id || idx} className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-800">Kartu #{idx + 1}</span>
                      <button
                        onClick={() => handleDeleteCard(idx)}
                        className="text-xs text-rose-600 hover:text-rose-700 flex items-center gap-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" /> Hapus
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <div>
                        <label className="block text-[10px] text-slate-500 mb-0.5">Judul Kartu</label>
                        <input
                          type="text"
                          value={card.title}
                          onChange={(e) => handleUpdateCard(idx, 'title', e.target.value)}
                          className="w-full bg-white border border-slate-300 rounded px-2.5 py-1 text-xs text-slate-900"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] text-slate-500 mb-0.5">Badge / Tag</label>
                        <input
                          type="text"
                          value={card.badge || ''}
                          onChange={(e) => handleUpdateCard(idx, 'badge', e.target.value)}
                          className="w-full bg-white border border-slate-300 rounded px-2.5 py-1 text-xs text-slate-900"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] text-slate-500 mb-0.5">Deskripsi Singkat</label>
                      <textarea
                        value={card.description}
                        onChange={(e) => handleUpdateCard(idx, 'description', e.target.value)}
                        rows={2}
                        className="w-full bg-white border border-slate-300 rounded px-2.5 py-1 text-xs text-slate-900 resize-none"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: Timeline */}
          {activeTab === 'timeline' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-xs text-slate-500">Target rencana eksekusi kuartalan (Q1 - Q4).</p>
                <button
                  onClick={handleAddTimeline}
                  className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 shadow-xs"
                >
                  <Plus className="w-3.5 h-3.5" /> Tambah Kuartal / Milestone
                </button>
              </div>

              <div className="space-y-3">
                {formData.timeline?.map((item, idx) => (
                  <div key={idx} className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-800">Kuartal / Milestone #{idx + 1}</span>
                      <button
                        onClick={() => handleDeleteTimeline(idx)}
                        className="text-xs text-rose-600 hover:text-rose-700 flex items-center gap-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" /> Hapus
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <div>
                        <label className="block text-[10px] text-slate-500 mb-0.5">Kuartal</label>
                        <select
                          value={item.quarter}
                          onChange={(e) => handleUpdateTimeline(idx, 'quarter', e.target.value)}
                          className="w-full bg-white border border-slate-300 rounded px-2.5 py-1 text-xs text-slate-900 font-mono font-bold"
                        >
                          <option value="Q1">Q1 (Jan - Mar)</option>
                          <option value="Q2">Q2 (Apr - Jun)</option>
                          <option value="Q3">Q3 (Jul - Sep)</option>
                          <option value="Q4">Q4 (Okt - Des)</option>
                        </select>
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-[10px] text-slate-500 mb-0.5">Judul Program</label>
                        <input
                          type="text"
                          value={item.title}
                          onChange={(e) => handleUpdateTimeline(idx, 'title', e.target.value)}
                          className="w-full bg-white border border-slate-300 rounded px-2.5 py-1 text-xs text-slate-900"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] text-slate-500 mb-0.5">Uraian Rencana</label>
                      <textarea
                        value={item.description}
                        onChange={(e) => handleUpdateTimeline(idx, 'description', e.target.value)}
                        rows={2}
                        className="w-full bg-white border border-slate-300 rounded px-2.5 py-1 text-xs text-slate-900 resize-none"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: Notes */}
          {activeTab === 'notes' && (
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Catatan Pembicara & Poin Presentasi RAKER
                </label>
                <textarea
                  value={formData.speakerNotes || ''}
                  onChange={(e) => handleTextChange('speakerNotes', e.target.value)}
                  rows={8}
                  className="w-full bg-white border border-slate-300 rounded-xl p-3 text-xs text-slate-800 focus:outline-none focus:border-blue-500 leading-relaxed font-sans"
                  placeholder="Ketik poin pembicaraan atau hal penting yang ingin disampaikan kepada jajaran pimpinan saat mempresentasikan slide ini..."
                />
              </div>

              <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-800">
                💡 <strong>Tips RAKER:</strong> Catatan ini hanya akan muncul di mode konsol presenter (Shortcut: N) dan tidak akan terlihat oleh audiens saat layar penuh (F).
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-200 flex items-center justify-between bg-slate-50">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900"
          >
            Batal
          </button>
          <button
            onClick={handleSave}
            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-xs transition-all hover:scale-105"
          >
            <Check className="w-4 h-4" />
            <span>Simpan Perubahan Slide</span>
          </button>
        </div>
      </div>
    </div>
  );
};
