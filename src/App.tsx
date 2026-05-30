/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef, useEffect, ReactNode, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
const avatarImg = '/assets/jawad_avatar.png';
import { 
  Sparkles, 
  MessageCircle, 
  Send, 
  X, 
  Minus, 
  Instagram, 
  Twitter, 
  Facebook, 
  Bell, 
  Phone,
  Copy,
  Check
} from 'lucide-react';

const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={`${className} fill-current`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.004 2C6.48 2 2 6.48 2 12.004c0 1.764.46 3.42 1.264 4.876L2 22l5.304-1.24a9.96 9.96 0 004.7 1.22c5.52.024 10.024-4.46 10.024-9.984C22.028 6.48 17.524 2 12.004 2zm5.728 14.316c-.244.68-.976 1.252-1.616 1.412-.488.116-1.124.212-3.268-.616-2.736-1.064-4.508-3.796-4.644-3.984-.136-.184-1.1-1.428-1.1-2.724 0-1.296.68-1.932.92-2.196.244-.26.544-.328.724-.328.18 0 .36 0 .516.008.168.008.392-.064.612.444.224.524.776 1.884.844 2.024.068.14.112.304.02.484-.092.18-.184.348-.284.472-.1.124-.216.26-.308.348-.1.1-.212.212-.092.416.124.204.556.912 1.196 1.48.824.732 1.516.96 1.728 1.064.212.108.336.088.46-.056.128-.144.532-.616.672-.828.14-.212.284-.18.472-.112.188.068 1.196.564 1.4.664.204.104.34.156.388.244.048.088.048.512-.196 1.192z" />
  </svg>
);

const SnapchatIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={`${className} fill-current`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03c-.135 0-.313-.031-.538-.074-.36-.075-.765-.135-1.273-.135-.3 0-.599.015-.913.074-.6.104-1.123.464-1.723.884-.853.599-1.826 1.288-3.294 1.288-.06 0-.119-.015-.18-.015h-.149c-1.468 0-2.427-.675-3.279-1.288-.599-.42-1.107-.779-1.707-.884-.314-.045-.629-.074-.928-.074-.54 0-.958.089-1.272.149-.211.043-.391.074-.54.074-.374 0-.523-.224-.583-.42-.061-.192-.09-.389-.135-.567-.046-.181-.105-.494-.166-.57-1.918-.222-2.95-.642-3.189-1.226-.031-.063-.052-.15-.055-.225-.015-.243.165-.465.42-.509 3.264-.54 4.73-3.879 4.791-4.02l.016-.029c.18-.345.224-.645.119-.869-.195-.434-.884-.658-1.332-.809-.121-.029-.24-.074-.346-.119-1.107-.435-1.257-.93-1.197-1.273.09-.479.674-.793 1.168-.793.146 0 .27.029.383.074.42.194.789.3 1.104.3.234 0 .384-.06.465-.105l-.046-.569c-.098-1.626-.225-3.651.307-4.837C7.392 1.077 10.739.807 11.727.807l.419-.015h.06z" />
  </svg>
);

const InstagramIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={`${className} fill-current`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const TwitterIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={`${className} fill-current`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const FacebookIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={`${className} fill-current`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const TikTokIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={`${className} relative`} viewBox="-32 -32 512 576" xmlns="http://www.w3.org/2000/svg">
    <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.38v86a76.54,76.54,0,1,0,76.54,76.54V0h86.77a208.55,208.55,0,0,0,51.86,138.83A208.41,208.41,0,0,0,448,209.91Z" fill="#25F4EE" transform="translate(-16, -12)" />
    <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.38v86a76.54,76.54,0,1,0,76.54,76.54V0h86.77a208.55,208.55,0,0,0,51.86,138.83A208.41,208.41,0,0,0,448,209.91Z" fill="#FE2C55" transform="translate(12, 10)" />
    <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.38v86a76.54,76.54,0,1,0,76.54,76.54V0h86.77a208.55,208.55,0,0,0,51.86,138.83A208.41,208.41,0,0,0,448,209.91Z" fill="currentColor" />
  </svg>
);

interface Message {
  id: string;
  sender: 'user' | 'bot';
  content: ReactNode;
  time: string;
}

export default function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showCopySuccess, setShowCopySuccess] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'bot',
      content: (
        <div>
          <p className="leading-relaxed mb-1">أهلاً بك! أنا المساعد الرقمي الخاص بجواد 👋</p>
          <p className="leading-relaxed opacity-90">يسعدني جداً اهتمامك بالتواصل معه. لمعلومات سريعة، انقر على أي من الأزرار المناسبة في الأسفل لتصلك الروابط مباشرة:</p>
        </div>
      ),
      time: new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom when message history or typing status changes
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Handle Close & Open
  const toggleChat = () => setIsChatOpen(!isChatOpen);

  // Copy Single-File HTML to Clipboard helper
  const handleCopyHTML = async () => {
    try {
      const response = await fetch('/index.html');
      const htmlText = await response.text();
      await navigator.clipboard.writeText(htmlText);
      setShowCopySuccess(true);
      setTimeout(() => setShowCopySuccess(false), 2500);
    } catch (err) {
      console.error('Failed to copy index.html content', err);
    }
  };

  // Bot response matching logic
  const handleBotResponse = async (userText: string) => {
    setIsTyping(true);
    
    try {
      // Map existing messages to history format
      const historyToSend = messages.slice(-10).map(msg => ({
        role: msg.sender,
        content: typeof msg.content === 'string' ? msg.content : ''
      })).filter(h => h.content !== '');

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userText,
          history: historyToSend
        })
      });

      setIsTyping(false);

      if (response.ok) {
        const data = await response.json();
        setMessages(prev => [
          ...prev,
          {
            id: Math.random().toString(),
            sender: 'bot',
            content: data.response,
            time: new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' })
          }
        ]);
        return;
      }
      throw new Error('API server error response');
    } catch (err) {
      console.error('Error fetching bot response from server:', err);
      setIsTyping(false);
      
      // Fallback response matching
      let replyContent: ReactNode = '';
      const text = userText.toLowerCase();

      if (text.includes('سلام') || text.includes('مرحبا') || text.includes('أهلا') || text.includes('اهلاً') || text.includes('صباح') || text.includes('مساء')) {
        replyContent = (
          <p>أهلاً بك وسهلاً! ✨ أنا المساعد الإلكتروني لجواد. يسعدني جداً اهتمامك. يمكنك الضغط على أي من منصات التواصل الاجتماعي المسجلة في الشريط السريع للتواصل مع جواد مباشرة!</p>
        );
      } else if (text.includes('من هو') || text.includes('من انت') || text.includes('من جواد') || text.includes('عملك') || text.includes('تخصصك')) {
        replyContent = (
          <p>جواد هو صانع محتوى وباحث شغوف بالمجال الرقمي والابتكارات التكنولوجية. يهدف دائماً لبناء جسور إبداعية وحلول تقنية سلسة ومريحة للمستخدم! يمكنك الإطلاع على حساباته لمعرفة المزيد. 🎨🚀</p>
        );
      } else {
        replyContent = (
          <div>
            <p className="mb-1">سعدت جداً بسؤالك واهتمامك! ✨</p>
            <p>للتواصل المباشر والرد السريع من جواد، تفضل برؤية الروابط السريعة المتاحة أعلاه لمختلف وسائل التواصل الاجتماعي للتواصل معه مباشرة!</p>
          </div>
        );
      }

      setMessages(prev => [
        ...prev,
        {
          id: Math.random().toString(),
          sender: 'bot',
          content: replyContent,
          time: new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    }
  };

  // Custom Input Box Submit Form
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = inputValue.trim();
    if (!trimmed) return;

    // Append User Message
    const userMsgId = Math.random().toString();
    setMessages(prev => [
      ...prev,
      {
        id: userMsgId,
        sender: 'user',
        content: trimmed,
        time: new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' })
      }
    ]);
    setInputValue('');

    // Trigger Bot Sim
    handleBotResponse(trimmed);
  };

  // Social Chips Action
  const handleChipClick = (platformKey: 'ig' | 'snap' | 'tw' | 'fb' | 'wa' | 'tt', platformName: string) => {
    // Append User text representation
    const userMsgId = Math.random().toString();
    setMessages(prev => [
      ...prev,
      {
        id: userMsgId,
        sender: 'user',
        content: `الرجاء تزويدي برابط ${platformName}`,
        time: new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' })
      }
    ]);

    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      let botContent: ReactNode = null;

      if (platformKey === 'ig') {
        botContent = (
          <div>
            <p className="mb-2 font-medium">أهلاً بك! 📸 يمكنك متابعة حسابي الرسمي على انستغرام لمشاهدة مشاريعي ومذكراتي ومحتواي الرقمي:</p>
            <div className="mt-2 bg-white p-3 rounded-xl border border-sage-200/60 flex items-center justify-between gap-3 text-xs shadow-sm">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 flex items-center justify-center text-white shrink-0">
                  <InstagramIcon className="w-4 h-4" />
                </div>
                <div className="text-right">
                  <h4 className="font-bold text-slate-700">@jawad2a008</h4>
                  <p className="text-[9px] text-slate-400">انستقرام الرسمي</p>
                </div>
              </div>
              <a href="https://instagram.com/jawad2a008" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-sage-600 hover:bg-sage-700 text-white font-medium rounded-lg transition-all active:scale-95 shrink-0">زيارة الحساب</a>
            </div>
          </div>
        );
      } else if (platformKey === 'snap') {
        botContent = (
          <div>
            <p className="mb-2 font-medium">مرحباً بك! 👻 يسعدني إضافتك لي في سناب شات لمتابعة جولاتي ونشاطاتي اليومية مباشرة:</p>
            <div className="mt-2 bg-white p-3 rounded-xl border border-yellow-200 flex items-center justify-between gap-3 text-xs shadow-sm">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-black shrink-0">
                  <SnapchatIcon className="w-4 h-4" />
                </div>
                <div className="text-right">
                  <h4 className="font-bold text-slate-700">jawad-alqlawei</h4>
                  <p className="text-[9px] text-slate-400">حساب السناب شات</p>
                </div>
              </div>
              <a href="https://snapchat.com/add/jawad-alqlawei" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold rounded-lg transition-all active:scale-95 shrink-0">إضافة صديق</a>
            </div>
          </div>
        );
      } else if (platformKey === 'tw') {
        botContent = (
          <div>
            <p className="mb-2 font-medium">أهلاً بك! 𝕏 يسعدني متابعتك لي على منصة تويتر لمشاركة الأفكار والمنشورات التقنية:</p>
            <div className="mt-2 bg-white p-3 rounded-xl border border-slate-200/60 flex items-center justify-between gap-3 text-xs shadow-sm">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white shrink-0">
                  <TwitterIcon className="w-4 h-4" />
                </div>
                <div className="text-right">
                  <h4 className="font-bold text-slate-700">تويتر جواد</h4>
                  <p className="text-[9px] text-slate-400">تويتر / إكس</p>
                </div>
              </div>
              <a href="https://x.com/vaPeejsh36tSpRZ" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-slate-800 hover:bg-black text-white font-medium rounded-lg transition-all active:scale-95 shrink-0">متابعة</a>
            </div>
          </div>
        );
      } else if (platformKey === 'fb') {
        botContent = (
          <div>
            <p className="mb-2 font-medium">أهلاً بك! 👥 تفضل بزيارة حساب الفيسبوك الخاص بي والتواصل المباشر من هناك:</p>
            <div className="mt-2 bg-white p-3 rounded-xl border border-blue-200 flex items-center justify-between gap-3 text-xs shadow-sm">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#1877F2] flex items-center justify-center text-white shrink-0">
                  <FacebookIcon className="w-4 h-4" />
                </div>
                <div className="text-right">
                  <h4 className="font-bold text-slate-700">فيسبوك جواد</h4>
                  <p className="text-[9px] text-slate-400">حساب الفيسبوك</p>
                </div>
              </div>
              <a href="https://www.facebook.com/share/18WoYFRooR/" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-[#1877F2] hover:bg-blue-600 text-white font-medium rounded-lg transition-all active:scale-95 shrink-0">تصفح الصفحة</a>
            </div>
          </div>
        );
      } else if (platformKey === 'wa') {
        botContent = (
          <div>
            <p className="mb-2 font-medium">مرحباً بك! 💬 يمكنك مراسلتي مباشرة عبر الواتساب لأي استفسارات سريعة أو أعمال:</p>
            <div className="mt-2 bg-white p-3 rounded-xl border border-emerald-200 flex items-center justify-between gap-3 text-xs shadow-sm">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0">
                  <WhatsAppIcon className="w-4 h-4" />
                </div>
                <div className="text-right">
                  <h4 className="font-bold text-slate-700">+973 36088840</h4>
                  <p className="text-[9px] text-emerald-600">دردشة واتساب</p>
                </div>
              </div>
              <a href="https://wa.me/97336088840" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg transition-all active:scale-95 shrink-0">مراسلة الآن</a>
            </div>
          </div>
        );
      } else if (platformKey === 'tt') {
        botContent = (
          <div>
            <p className="mb-2 font-medium">أهلاً بك! 🎵 يسعدني متابعتك لي على تيك توك لمشاهدة المقاطع والتصاميم المميزة:</p>
            <div className="mt-2 bg-white p-3 rounded-xl border border-slate-200/60 flex items-center justify-between gap-3 text-xs shadow-sm">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white shrink-0">
                  <TikTokIcon className="w-4 h-4" />
                </div>
                <div className="text-right">
                  <h4 className="font-bold text-slate-700">@jxm313</h4>
                  <p className="text-[9px] text-slate-400">حساب تيك توك</p>
                </div>
              </div>
              <a href="https://www.tiktok.com/@jxm313?_r=1&_t=ZS-96VxpgRuUJI" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-slate-800 hover:bg-black text-white font-medium rounded-lg transition-all active:scale-95 shrink-0">متابعة</a>
            </div>
          </div>
        );
      }

      setMessages(prev => [
        ...prev,
        {
          id: Math.random().toString(),
          sender: 'bot',
          content: botContent,
          time: new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    }, 1200);
  };

  return (
    <div className="bg-gradient-to-tr from-cream-100 to-sage-50 min-h-screen flex flex-col justify-between overflow-x-hidden relative selection:bg-sage-200 selection:text-sage-800 font-sans" dir="rtl">
      
      {/* Ambient background glass elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] rounded-full bg-sage-100/50 blur-[80px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] max-w-[700px] rounded-full bg-cream-200/40 blur-[100px] pointer-events-none z-0"></div>

      {/* Code copier helper banner */}
      <div className="absolute top-4 right-4 z-20">
        <button 
          onClick={handleCopyHTML}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-sage-200/50 bg-white/70 hover:bg-white text-[11px] text-sage-700 hover:text-sage-900 shadow-sm transition-all duration-300 font-cairo cursor-pointer active:scale-95"
        >
          {showCopySuccess ? (
            <>
              <Check className="w-3 h-3 text-emerald-600" />
              تم نسخ الكود الموحد!
            </>
          ) : (
            <>
              <Copy className="w-3 h-3 text-sage-600" />
              نسخ كود الـ HTML الموحد
            </>
          )}
        </button>
      </div>

      <main className="max-w-xl w-full mx-auto px-6 py-12 md:py-24 flex-grow flex flex-col justify-center items-center text-center relative z-10">
        
        {/* Profile Logo representation */}
        <div id="avatar-container" className="mb-6 relative group cursor-pointer">
          <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white shadow-sm z-20 animate-pulse"></span>
          <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full p-1 bg-white border border-sage-200 shadow-md transform hover:rotate-6 hover:scale-105 transition-all duration-300 overflow-hidden">
            <img 
              src={avatarImg} 
              alt="جواد القلعاوي" 
              className="w-full h-full rounded-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Welcome Tag */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sage-100/60 text-sage-800 text-xs font-semibold mb-4 tracking-wide font-cairo shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-sage-600" />
          أهلاً بك في صفحتي
        </div>

        {/* Heading Name */}
        <h1 className="text-4xl md:text-5xl font-bold text-sage-800 font-cairo tracking-tight mb-4">
          جواد القلعاوي
        </h1>

        {/* Subtitle statement */}
        <p className="text-md md:text-lg text-sage-500 font-cairo font-light leading-relaxed max-w-sm mb-10">
          صانع محتوى وباحث في المجال الرقمي والتقنيات الحديثة. تفضل بالتحدث مع مساعدي الذكي في الأسفل، أو تواصل معي عبر قنواتي مباشرة.
        </p>

        {/* Direct Social Links row */}
        <div className="flex items-center justify-center gap-5 flex-wrap">
          <a 
            href="https://wa.me/97336088840" 
            target="_blank" 
            rel="noopener noreferrer" 
            title="واتساب" 
            className="w-16 h-16 md:w-18 md:h-18 rounded-2xl md:rounded-3xl border border-emerald-100 bg-white/90 hover:bg-[#25D366] hover:border-[#25D366] hover:text-white hover:shadow-[0_15px_30px_rgba(37,211,102,0.35)] hover:scale-112 hover:-translate-y-2 transition-all duration-300 flex items-center justify-center text-[#25D366] shadow-[0_4px_12px_rgba(0,0,0,0.03)] group"
          >
            <WhatsAppIcon className="w-7 h-7 md:w-8 md:h-8 transition-transform duration-300 group-hover:scale-112" />
          </a>
          <a 
            href="https://instagram.com/jawad2a008" 
            target="_blank" 
            rel="noopener noreferrer" 
            title="انستقرام" 
            className="w-16 h-16 md:w-18 md:h-18 rounded-2xl md:rounded-3xl border border-pink-100 bg-white/90 hover:bg-gradient-to-tr hover:from-yellow-500 hover:via-pink-500 hover:to-purple-600 hover:border-transparent hover:text-white hover:shadow-[0_15px_30px_rgba(236,72,153,0.35)] hover:scale-112 hover:-translate-y-2 transition-all duration-300 flex items-center justify-center text-pink-500 shadow-[0_4px_12px_rgba(0,0,0,0.03)] group"
          >
            <InstagramIcon className="w-7 h-7 md:w-8 md:h-8 transition-transform duration-300 group-hover:scale-112" />
          </a>
          <a 
            href="https://snapchat.com/add/jawad-alqlawei" 
            target="_blank" 
            rel="noopener noreferrer" 
            title="سناب شات" 
            className="w-16 h-16 md:w-18 md:h-18 rounded-2xl md:rounded-3xl border border-yellow-100 bg-white/90 hover:bg-[#fffc00] hover:border-[#fffc00] hover:text-black hover:shadow-[0_15px_30px_rgba(255,252,0,0.35)] hover:scale-112 hover:-translate-y-2 transition-all duration-300 flex items-center justify-center text-yellow-600 shadow-[0_4px_12px_rgba(0,0,0,0.03)] group"
          >
            <SnapchatIcon className="w-7 h-7 md:w-8 md:h-8 text-[#ffb900] group-hover:text-black transition-transform duration-300 group-hover:scale-112" />
          </a>
          <a 
            href="https://x.com/vaPeejsh36tSpRZ" 
            target="_blank" 
            rel="noopener noreferrer" 
            title="تويتر / إكس" 
            className="w-16 h-16 md:w-18 md:h-18 rounded-2xl md:rounded-3xl border border-slate-200 bg-white/90 hover:bg-black hover:border-black hover:text-white hover:shadow-[0_15px_30px_rgba(0,0,0,0.25)] hover:scale-112 hover:-translate-y-2 transition-all duration-300 flex items-center justify-center text-slate-800 shadow-[0_4px_12px_rgba(0,0,0,0.03)] group"
          >
            <TwitterIcon className="w-7 h-7 md:w-8 md:h-8 transition-transform duration-300 group-hover:scale-112" />
          </a>
          <a 
            href="https://www.facebook.com/share/18WoYFRooR/" 
            target="_blank" 
            rel="noopener noreferrer" 
            title="فيسبوك" 
            className="w-16 h-16 md:w-18 md:h-18 rounded-2xl md:rounded-3xl border border-blue-100 bg-white/90 hover:bg-[#1877F2] hover:border-[#1877F2] hover:text-white hover:shadow-[0_15px_30px_rgba(24,119,242,0.35)] hover:scale-112 hover:-translate-y-2 transition-all duration-300 flex items-center justify-center text-[#1877F2] shadow-[0_4px_12px_rgba(0,0,0,0.03)] group"
          >
            <FacebookIcon className="w-7 h-7 md:w-8 md:h-8 transition-transform duration-300 group-hover:scale-112" />
          </a>
          <a 
            href="https://www.tiktok.com/@jxm313?_r=1&_t=ZS-96VxpgRuUJI" 
            target="_blank" 
            rel="noopener noreferrer" 
            title="تيك توك" 
            className="w-16 h-16 md:w-18 md:h-18 rounded-2xl md:rounded-3xl border border-slate-200 bg-white/90 hover:bg-slate-900 hover:border-slate-900 hover:text-white hover:shadow-[0_15px_30px_rgba(15,23,42,0.25)] hover:scale-112 hover:-translate-y-2 transition-all duration-300 flex items-center justify-center text-slate-900 shadow-[0_4px_12px_rgba(0,0,0,0.03)] group"
          >
            <TikTokIcon className="w-7 h-7 md:w-8 md:h-8 transition-transform duration-300 group-hover:scale-112" />
          </a>
        </div>

      </main>

      <footer className="text-center py-6 text-xs text-sage-400 font-cairo select-none relative z-10">
        جميع الحقوق محفوظة © 2026 جواد
      </footer>

      {/* ============================================== */}
      {/*          AI CHAT WIDGET IMPLEMENTATION          */}
      {/* ============================================== */}

      {/* Floating trigger widget button */}
      <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50">
        <button 
          onClick={toggleChat}
          className="group relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-sage-600 text-white shadow-xl hover:bg-sage-700 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer animate-pulse-soft"
        >
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white shadow-sm z-10"></span>
          <div className="relative w-6 h-6 flex items-center justify-center">
            {isChatOpen ? (
              <X className="w-6 h-6 transform transition-all duration-300" />
            ) : (
              <MessageCircle className="w-6 h-6 transform transition-all duration-300" />
            )}
          </div>
        </button>
      </div>

      {/* Slide-up active interactive Chat Window */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed bottom-24 right-6 md:bottom-28 md:right-8 w-[calc(100vw-3rem)] sm:w-[400px] h-[580px] max-h-[82vh] bg-white/95 backdrop-blur-md rounded-2xl border border-sage-100/80 shadow-2xl flex flex-col z-50"
          >
            {/* Header banner */}
            <div className="bg-gradient-to-r from-sage-700 to-sage-600 p-4 rounded-t-2xl flex items-center justify-between text-white shadow-sm">
              <div className="flex items-center gap-3">
                <div className="relative w-9 h-9 rounded-full bg-white/10 overflow-hidden border border-white/20">
                  <img 
                    src={avatarImg} 
                    alt="جواد القلعاوي" 
                    className="w-full h-full object-cover rounded-full"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border border-sage-700 shadow-sm animate-pulse"></span>
                </div>
                <div>
                  <h3 className="font-cairo font-bold text-sm tracking-wide leading-tight">مساعد جواد الذكي</h3>
                  <p className="text-[10px] text-sage-100 font-cairo font-light opacity-85">متصل الآن ومستعد لإرشادك</p>
                </div>
              </div>
              <button 
                onClick={toggleChat}
                className="opacity-85 hover:opacity-100 text-white hover:bg-white/10 p-1.5 rounded-full transition-all cursor-pointer"
              >
                <Minus className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable chat body */}
            <div className="flex-grow overflow-y-auto p-4 space-y-4 text-sm font-cairo bg-gradient-to-b from-sage-50/20 to-cream-50/10 custom-scrollbar flex flex-col">
              {messages.map((msg) => {
                const isBot = msg.sender === 'bot';
                return (
                  <motion.div 
                    key={msg.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex flex-col max-w-[85%] ${isBot ? 'self-start' : 'self-end'}`}
                  >
                    <div 
                      className={`${
                        isBot 
                          ? 'bg-sage-100/90 text-sage-800 rounded-2xl rounded-tr-sm px-4 py-3 border border-sage-200/50 backdrop-blur-sm shadow-sm' 
                          : 'bg-sage-600 text-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-md'
                      }`}
                    >
                      {msg.content}
                    </div>
                    <span className="text-[9px] mt-1 text-slate-400 self-end px-1">
                      {msg.time}
                    </span>
                  </motion.div>
                );
              })}

              {/* Bot typing simulator rendering */}
              {isTyping && (
                <div className="flex items-center gap-1.5 self-start bg-sage-100/80 py-3 px-4 rounded-2xl rounded-tr-sm border border-sage-200/40 text-sage-600 animate-pulse">
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-sage-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></span>
                    <span className="w-1.5 h-1.5 bg-sage-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                    <span className="w-1.5 h-1.5 bg-sage-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Quick social chips */}
            <div className="px-3 py-2.5 border-t border-sage-100/70 bg-sage-50/60 flex gap-2 overflow-x-auto no-scrollbar scroll-smooth">
              <button 
                onClick={() => handleChipClick('ig', 'الانستقرام')} 
                className="flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-sage-100/60 border border-sage-200/70 text-sage-700 rounded-full text-xs font-semibold cursor-pointer transition-all shrink-0 active:scale-95 shadow-sm"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-pink-500" />
                الانستقرام
              </button>
              <button 
                onClick={() => handleChipClick('snap', 'السناب')} 
                className="flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-sage-100/60 border border-sage-200/70 text-sage-700 rounded-full text-xs font-semibold cursor-pointer transition-all shrink-0 active:scale-95 shadow-sm"
              >
                <SnapchatIcon className="w-3.5 h-3.5 text-yellow-500" />
                السناب
              </button>
              <button 
                onClick={() => handleChipClick('tw', 'التويتر')} 
                className="flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-sage-100/60 border border-sage-200/70 text-sage-700 rounded-full text-xs font-semibold cursor-pointer transition-all shrink-0 active:scale-95 shadow-sm"
              >
                <TwitterIcon className="w-3.5 h-3.5 text-slate-900" />
                التويتر
              </button>
              <button 
                onClick={() => handleChipClick('fb', 'الفيسبوك')} 
                className="flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-sage-100/60 border border-sage-200/70 text-sage-700 rounded-full text-xs font-semibold cursor-pointer transition-all shrink-0 active:scale-95 shadow-sm"
              >
                <FacebookIcon className="w-3.5 h-3.5 text-blue-600" />
                الفيسبوك
              </button>
              <button 
                onClick={() => handleChipClick('wa', 'الواتساب')} 
                className="flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-sage-100/60 border border-sage-200/70 text-sage-700 rounded-full text-xs font-semibold cursor-pointer transition-all shrink-0 active:scale-95 shadow-sm"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-500" />
                الواتساب
              </button>
              <button 
                onClick={() => handleChipClick('tt', 'التيك توك')} 
                className="flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-sage-100/60 border border-sage-200/70 text-sage-700 rounded-full text-xs font-semibold cursor-pointer transition-all shrink-0 active:scale-95 shadow-sm"
              >
                <TikTokIcon className="w-3.5 h-3.5 text-slate-900" />
                التيك توك
              </button>
            </div>

            {/* Active input form bar */}
            <form onSubmit={handleSubmit} className="p-3 border-t border-sage-100 bg-white flex items-center gap-2 rounded-b-2xl">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="اكتب رسالتك أو استفسارك هنا..." 
                className="flex-grow px-4 py-2 bg-sage-50/70 border border-sage-200/70 rounded-full focus:outline-none focus:border-sage-500 focus:bg-white text-xs font-cairo transition-all placeholder:text-slate-400" 
              />
              <button 
                type="submit" 
                className="w-8.5 h-8.5 flex items-center justify-center rounded-full bg-sage-600 hover:bg-sage-700 text-white shadow-md transition-all duration-200 cursor-pointer active:scale-95"
              >
                <Send className="w-4 h-4 transform scale-x-[-1]" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
