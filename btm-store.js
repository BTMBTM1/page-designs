// BTM Designs - Shared Data Store
// This file is shared between the public website and admin dashboard

const BTM_STORE = {
  STORAGE_KEY: 'btm_designs_data',

  getDefault() {
    return {
      hero: {
        en: {
          title: 'BTM Designs',
          subtitle: 'Urban Luxury. Street Art. Pure Vision.',
          description: 'Handcrafted designs born from the streets, elevated to luxury. Each piece tells a story of culture, identity, and artistic mastery.',
          cta: 'Explore Collection',
        },
        ar: {
          title: 'BTM ديزاينز',
          subtitle: 'فخامة حضرية. فن الشوارع. رؤية خالصة.',
          description: 'تصاميم يدوية وُلدت من الشوارع وارتقت إلى مستوى الفخامة. كل قطعة تروي قصة ثقافة وهوية وإتقان فني.',
          cta: 'استكشف المجموعة',
        },
      },
      siteInfo: {
        logo: null,
        tagline_en: 'Urban Luxury Designs',
        tagline_ar: 'تصاميم فاخرة حضرية',
        email: 'btm@designs.com',
        instagram: '@btmdesigns',
      },
      about: {
        en: {
          title: 'About the Artist',
          text: 'BTM is a visionary streetwear artist merging urban culture with luxury aesthetics. With years of experience crafting bold, iconic designs, BTM has become a symbol of authentic street art elevated to wearable luxury.',
        },
        ar: {
          title: 'عن الفنان',
          text: 'BTM هو فنان ملابس الشوارع الرؤيوي الذي يدمج الثقافة الحضرية مع الجماليات الفاخرة. بسنوات من الخبرة في إبداع تصاميم جريئة وأيقونية، أصبح BTM رمزاً لفن الشوارع الأصيل المرتقي إلى مستوى الفخامة.',
        },
      },
      items: [
        {
          id: 'item_001',
          title_en: 'Golden Dragon Tee',
          title_ar: 'تيشيرت التنين الذهبي',
          description_en: 'Premium streetwear tee featuring hand-drawn dragon art with metallic gold print.',
          description_ar: 'تيشيرت فاخر يتميز بفن تنين مرسوم يدوياً مع طباعة ذهبية معدنية.',
          category: 'tshirts',
          featured: true,
          date: '2025-12-01',
          images: ['https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80'],
          videos: [],
        },
        {
          id: 'item_002',
          title_en: 'Urban Royalty Logo',
          title_ar: 'شعار الملكية الحضرية',
          description_en: 'Custom calligraphy logo design merging Arabic art with street typography.',
          description_ar: 'تصميم شعار خطي مخصص يجمع بين الفن العربي والطباعة الحضرية.',
          category: 'logos',
          featured: true,
          date: '2025-11-15',
          images: ['https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80'],
          videos: [],
        },
        {
          id: 'item_003',
          title_en: 'Street Symphony Drawing',
          title_ar: 'رسم السيمفونية الحضرية',
          description_en: 'Intricate pen-and-ink illustration capturing the energy of urban life.',
          description_ar: 'رسم توضيحي دقيق بالحبر يجسّد طاقة الحياة الحضرية.',
          category: 'drawings',
          featured: false,
          date: '2025-10-20',
          images: ['https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&q=80'],
          videos: [],
        },
        {
          id: 'item_004',
          title_en: 'Gold Rush Collection',
          title_ar: 'مجموعة حمى الذهب',
          description_en: 'Exclusive limited-edition tee with foil gold embroidery and urban motifs.',
          description_ar: 'تيشيرت حصري محدود الإصدار مع تطريز ذهبي بورق الذهب وزخارف حضرية.',
          category: 'tshirts',
          featured: true,
          date: '2025-09-10',
          images: ['https://images.unsplash.com/photo-1503341338985-95ad71d3ded5?w=800&q=80'],
          videos: [],
        },
        {
          id: 'item_005',
          title_en: 'Midnight Graffiti',
          title_ar: 'غرافيتي منتصف الليل',
          description_en: 'Bold large-format drawing inspired by classic New York graffiti culture.',
          description_ar: 'رسم جريء بتنسيق كبير مستوحى من ثقافة الغرافيتي الكلاسيكية في نيويورك.',
          category: 'drawings',
          featured: false,
          date: '2025-08-05',
          images: ['https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80'],
          videos: [],
        },
        {
          id: 'item_006',
          title_en: 'Crown & Code Brand Mark',
          title_ar: 'علامة تجارية تاج وكود',
          description_en: 'Iconic brand identity combining crown symbolism with modern street aesthetics.',
          description_ar: 'هوية تجارية أيقونية تجمع رمزية التاج مع جماليات الشوارع الحديثة.',
          category: 'logos',
          featured: false,
          date: '2025-07-22',
          images: ['https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80'],
          videos: [],
        },
      ],
    };
  },

  load() {
    try {
      const raw = localStorage.getItem(this.STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    return this.getDefault();
  },

  save(data) {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
      return true;
    } catch (e) {
      return false;
    }
  },

  reset() {
    localStorage.removeItem(this.STORAGE_KEY);
    return this.getDefault();
  }
};
