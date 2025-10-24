const today = new Date();
const endOfSupport = new Date('2025-10-14');
const timeDiff = endOfSupport.getTime() - today.getTime();
const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24)); 

// alert(`Windows 10のサポート終了まであと${daysLeft}日です。`);

// ESU追加
const endOfSupportESU = new Date('2026-10-13');
const timeDiffESU = endOfSupportESU.getTime() - today.getTime();
const daysLeftESU = Math.ceil(timeDiffESU / (1000 * 3600 * 24));
