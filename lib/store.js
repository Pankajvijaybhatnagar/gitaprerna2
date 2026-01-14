import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const defaultChapters = [
  {
    id: 1,
    titleHindi: "अर्जुन विषाद योग",
    titleEnglish: "The Yoga of Arjuna's Dejection",
    verses: 47,
    summaryHindi: "युद्ध के मैदान में अर्जुन का मोह और विषाद। जब अर्जुन अपने प्रियजनों, गुरुओं और परिजनों को युद्ध के लिए तैयार देखता है, तो वह शोक और भ्रम में डूब जाता है।",
    summaryEnglish: "Arjuna's moral dilemma and despair on the battlefield of Kurukshetra when faced with fighting his own relatives, teachers, and loved ones.",
    keyTeachingsHindi: [
      "अर्जुन का धर्म संकट और मानवीय दुविधा",
      "कर्तव्य और भावनाओं के बीच संघर्ष",
      "आत्मज्ञान की आवश्यकता की पहचान"
    ],
    keyTeachingsEnglish: [
      "Arjuna's moral crisis and human dilemma",
      "Conflict between duty and emotions",
      "Recognition of the need for spiritual knowledge"
    ],
    detailedExplanationHindi: "प्रथम अध्याय में अर्जुन कुरुक्षेत्र के युद्ध मैदान में अपने परिजनों, गुरुओं और मित्रों को युद्ध के लिए तैयार देखकर विषाद में डूब जाता है। वह युद्ध के परिणामों और हिंसा के बारे में सोचकर अपने धनुष को त्याग देता है। यह अध्याय मानव जीवन की सबसे बड़ी दुविधाओं में से एक को दर्शाता है - कर्तव्य और भावना के बीच संघर्ष।",
    detailedExplanationEnglish: "In the first chapter, Arjuna becomes overwhelmed with grief when he sees his relatives, teachers, and friends prepared for battle on the battlefield of Kurukshetra. Thinking about the consequences of war and violence, he abandons his bow. This chapter depicts one of the greatest dilemmas of human life - the conflict between duty and emotion."
  },
  {
    id: 2,
    titleHindi: "सांख्य योग",
    titleEnglish: "The Yoga of Knowledge",
    verses: 72,
    summaryHindi: "कृष्ण द्वारा आत्मा की अमरता, कर्म योग और ज्ञान योग की शिक्षा। इस अध्याय में कृष्ण अर्जुन को आत्मा की नित्यता और शरीर की नश्वरता के बारे में बताते हैं।",
    summaryEnglish: "Krishna teaches about the immortality of the soul, karma yoga, and the path of knowledge. This chapter explains the eternal nature of the soul and the temporary nature of the body.",
    keyTeachingsHindi: [
      "आत्मा अमर है और शरीर नश्वर",
      "कर्म करो फल की इच्छा के बिना",
      "समत्व बुद्धि ही योग है",
      "स्थितप्रज्ञ की विशेषताएं"
    ],
    keyTeachingsEnglish: [
      "The soul is immortal and the body is temporary",
      "Perform action without attachment to results",
      "Equanimity of mind is yoga",
      "Characteristics of a person of steady wisdom"
    ],
    detailedExplanationHindi: "द्वितीय अध्याय भगवद गीता का सबसे महत्वपूर्ण अध्याय माना जाता है। इसमें कृष्ण अर्जुन को समझाते हैं कि आत्मा अजर, अमर और अविनाशी है। शरीर केवल एक वस्त्र है जिसे आत्मा बदलती रहती है। कृष्ण कर्मयोग का उपदेश देते हैं और कहते हैं कि हमें अपने कर्म करने चाहिए बिना फल की चिंता किए। इस अध्याय में स्थितप्रज्ञ (स्थिर बुद्धि वाले व्यक्ति) की विशेषताओं का भी वर्णन है।",
    detailedExplanationEnglish: "The second chapter is considered the most important chapter of the Bhagavad Gita. Here, Krishna explains to Arjuna that the soul is unborn, immortal, and indestructible. The body is merely a garment that the soul changes. Krishna teaches karma yoga and says we should perform our duties without worrying about the results. This chapter also describes the characteristics of a sthitaprajna (a person of steady wisdom)."
  }
]

// Default admin credentials
const defaultAdmin = {
  username: 'admin',
  password: 'admin123' // In production, use proper password hashing
}

export const useChapterStore = create(
  persist(
    (set, get) => ({
      chapters: defaultChapters,
      
      // Get all chapters
      getChapters: () => get().chapters,
      
      // Get chapter by ID
      getChapterById: (id) => get().chapters.find(c => c.id === parseInt(id)),
      
      // Add new chapter
      addChapter: (chapter) => set((state) => ({
        chapters: [...state.chapters, { ...chapter, id: state.chapters.length + 1 }].sort((a, b) => a.id - b.id)
      })),
      
      // Update chapter
      updateChapter: (id, updatedChapter) => set((state) => ({
        chapters: state.chapters.map(c => 
          c.id === parseInt(id) ? { ...c, ...updatedChapter } : c
        )
      })),
      
      // Delete chapter
      deleteChapter: (id) => set((state) => ({
        chapters: state.chapters.filter(c => c.id !== parseInt(id))
      })),
      
      // Reset to default chapters
      resetChapters: () => set({ chapters: defaultChapters })
    }),
    {
      name: 'gita-chapters-storage',
    }
  )
)

// Authentication Store
export const useAuthStore = create(
  persist(
    (set, get) => ({
      isAuthenticated: false,
      adminCredentials: defaultAdmin,
      
      login: (username, password) => {
        const { adminCredentials } = get()
        if (username === adminCredentials.username && password === adminCredentials.password) {
          set({ isAuthenticated: true })
          return true
        }
        return false
      },
      
      logout: () => set({ isAuthenticated: false }),
      
      updateCredentials: (username, password) => set({
        adminCredentials: { username, password }
      })
    }),
    {
      name: 'gita-auth-storage',
    }
  )
)

// Gallery Store
export const useGalleryStore = create(
  persist(
    (set, get) => ({
      images: [],
      
      addImage: (image) => set((state) => ({
        images: [...state.images, { ...image, id: Date.now() }]
      })),
      
      deleteImage: (id) => set((state) => ({
        images: state.images.filter(img => img.id !== id)
      })),
      
      updateImage: (id, updatedImage) => set((state) => ({
        images: state.images.map(img => img.id === id ? { ...img, ...updatedImage } : img)
      })),
      
      getImages: () => get().images
    }),
    {
      name: 'gita-gallery-storage',
    }
  )
)

// YouTube Videos Store
export const useVideoStore = create(
  persist(
    (set, get) => ({
      videos: [],
      
      addVideo: (video) => set((state) => ({
        videos: [...state.videos, { ...video, id: Date.now() }]
      })),
      
      deleteVideo: (id) => set((state) => ({
        videos: state.videos.filter(vid => vid.id !== id)
      })),
      
      updateVideo: (id, updatedVideo) => set((state) => ({
        videos: state.videos.map(vid => vid.id === id ? { ...vid, ...updatedVideo } : vid)
      })),
      
      getVideos: () => get().videos
    }),
    {
      name: 'gita-videos-storage',
    }
  )
)

// Donations Store
export const useDonationStore = create(
  persist(
    (set, get) => ({
      donationInfo: {
        upiId: '',
        accountNumber: '',
        ifscCode: '',
        bankName: '',
        accountHolder: '',
        message: 'Support our mission to spread the wisdom of Bhagavad Gita'
      },
      donations: [],
      
      updateDonationInfo: (info) => set({
        donationInfo: { ...get().donationInfo, ...info }
      }),
      
      getDonationInfo: () => get().donationInfo,
      
      addDonation: (donation) => set((state) => ({
        donations: [...state.donations, { ...donation, id: Date.now(), date: new Date().toISOString() }]
      })),
      
      getDonations: () => get().donations
    }),
    {
      name: 'gita-donations-storage',
    }
  )
)
